import * as faceapi from "face-api.js";

export type FaceDetectionWithLandmarks = faceapi.WithFaceLandmarks<
  { detection: faceapi.FaceDetection },
  faceapi.FaceLandmarks68
>;

export type FaceDetectionWithLandmarksAndDescriptor =
  faceapi.WithFaceDescriptor<FaceDetectionWithLandmarks>;

export type FaceDetectionResult =
  | FaceDetectionWithLandmarksAndDescriptor
  | undefined;

export interface FaceDetectionWithFileName {
  detection: FaceDetectionResult;
  fileName: string;
  blob: string;
}

export type FaceDetectionResultsArray = FaceDetectionWithFileName[] | undefined;

export interface BlobImg {
  fileName: string;
  blob: string;
}

export interface ResultType {
  distance: number;
  fileName: string;
  url: string;
}

export interface DescriptorType {
  detection: Float32Array;
  fileName: string;
  url: string;
}

export interface DistanceType {
  distance: number;
  fileName: string;
  url: string;
}
