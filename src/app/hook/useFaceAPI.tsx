"use client";

import { useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { changeBlobImg } from "../lip/s3";
import {
  BlobImg,
  FaceDetectionResult,
  FaceDetectionResultsArray,
  ResultType,
} from "../_types/faceAPI.type";

export default function useFaceAPI(data: string[]) {
  const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false);
  const [blobs, setBlobs] = useState<BlobImg[]>([]);

  const [result, setResult] = useState<ResultType | undefined>(undefined);
  const [isResultOpen, setIsResultOpen] = useState<boolean>(false);

  // face-api.js 모델 로드
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      try {
        await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
        setIsModelLoaded(true);
      } catch (error) {
        console.error("Error loading face-api models:", error);
      }
    };

    loadModels();
  }, []);

  // Convert Blob Img
  useEffect(() => {
    async function fetchBlobs() {
      const blobResult = await changeBlobImg(data);
      setBlobs(blobResult);
    }

    fetchBlobs();
  }, [data]);

  // Compare Img
  const compare = async (img1: any) => {
    if (!isModelLoaded) {
      console.error("Face-api models are not loaded yet");
      return;
    }

    try {
      setIsResultOpen(true);
      const image1 = await faceapi.fetchImage(img1);

      const detectionImage1: FaceDetectionResult = await faceapi
        .detectSingleFace(image1)
        .withFaceLandmarks()
        .withFaceDescriptor();
      const detectionImages: FaceDetectionResultsArray =
        await promiseFaceApiFetchImage(blobs);

      const distance = await promiseFaceApiDistance(
        detectionImage1,
        detectionImages
      );

      console.log(distance);

      if (distance) {
        const closestMatch = distance.reduce((prev, current) =>
          prev.distance > current.distance ? prev : current
        );

        setResult(closestMatch);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Promise Fetch Img
  const promiseFaceApiFetchImage = async (blobs: BlobImg[]) => {
    try {
      const promise = blobs.map(async (image) => {
        const fetchImage = await faceapi.fetchImage(image.blob);
        const detectionImage = await faceapi
          .detectSingleFace(fetchImage)
          .withFaceLandmarks()
          .withFaceDescriptor();
        return {
          detection: detectionImage,
          fileName: image.fileName,
          blob: image.blob,
        };
      });

      const result = await Promise.all(promise);

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  // Promise Distance Img
  const promiseFaceApiDistance = async (
    detectionImage1: FaceDetectionResult,
    detectionImages: FaceDetectionResultsArray
  ): Promise<ResultType[] | null> => {
    if (!detectionImages || !detectionImage1) {
      return null;
    }

    try {
      const results = detectionImages.map((file) => {
        if (!file.detection) {
          return null;
        }
        const distance = faceapi.euclideanDistance(
          detectionImage1.descriptor,
          file.detection.descriptor
        );

        return {
          distance: 1 - distance,
          fileName: file.fileName,
          blob: file.blob,
        };
      });

      return results.filter((result): result is ResultType => result !== null);
    } catch (error) {
      console.error("Error calculating face distances:", error);
      return null;
    }
  };

  return { compare, result, isResultOpen, setIsResultOpen };
}
