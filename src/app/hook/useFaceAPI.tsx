"use client";

import { useEffect, useMemo, useState } from "react";
import * as faceapi from "face-api.js";
import { DescriptorType, DistanceType } from "../_types/faceAPI.type";

export default function useFaceAPI(data: string[]) {
  const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false);

  const [cachedDescriptors, setCachedDescriptors] =
    useState<DescriptorType[]>();

  const [resultArr, setResultArr] = useState<DistanceType[] | undefined>();
  const [isResultOpen, setIsResultOpen] = useState<boolean>(false);

  // face-api.js 모델 로드
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      try {
        await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
        await faceapi.loadFaceRecognitionModel(MODEL_URL);
        setIsModelLoaded(true);
      } catch (error) {
        console.error("Error loading face-api models:", error);
      }
    };

    loadModels();
  }, []);

  // Fetch Images (비교 대상 이미지들)
  useEffect(() => {
    if (!isModelLoaded) return;

    const fetchDescriptors = async () => {
      if (cachedDescriptors) return cachedDescriptors;

      try {
        const result = await descriptorImages();
        setCachedDescriptors(result);
      } catch (error) {
        return [];
      }
    };

    fetchDescriptors();
  }, [data, cachedDescriptors, isModelLoaded]);

  // Compare Img
  const compare = async (img1: any) => {
    if (!isModelLoaded) {
      console.error("Face-api models are not loaded yet");
      return;
    }

    try {
      setIsResultOpen(true);

      const image1 = await faceapi.fetchImage(img1);
      const descriptor = await faceapi.computeFaceDescriptor(image1);

      if (descriptor instanceof Float32Array) {
        const distance = await distanceImage(descriptor, cachedDescriptors);

        if (distance) {
          const sortDistacne = distance.sort((a, b) => {
            return b.distance - a.distance;
          });

          const topThree = sortDistacne.slice(0, 3);
          setResultArr(topThree);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Promise Fetch Img
  const descriptorImages = async (): Promise<DescriptorType[]> => {
    try {
      const promise = data.map(async (image) => {
        const fetchImage = await faceapi.fetchImage(image);
        const descriptor = await faceapi.computeFaceDescriptor(fetchImage);

        const fileNameMatch = image.match(/gomem\/(.+)\.webp/);
        const fileName = fileNameMatch ? fileNameMatch[1] : "";

        return {
          detection: descriptor as Float32Array,
          fileName,
          url: image,
        };
      });

      const result = await Promise.all(promise);

      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // Distance Image
  const distanceImage = async (
    descriptor: Float32Array,
    descriptors: DescriptorType[] | undefined,
  ) => {
    if (!descriptor || !descriptors) {
      return null;
    }

    try {
      const results = descriptors.map((image) => {
        const distance = faceapi.euclideanDistance(descriptor, image.detection);

        const percent = (1 - distance) * 100;

        return {
          distance: percent,
          fileName: image.fileName,
          url: image.url,
        };
      });

      return results.filter(
        (result): result is DistanceType => result !== null,
      );
    } catch (error) {}
  };

  return {
    compare,
    resultArr,
    setResultArr,
    isResultOpen,
    setIsResultOpen,
  };
}
