"use client";

import Button from "@/app/_components/common/button/Button";
import Input from "@/app/_components/common/input/Input";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Upload from "../../../../../public/icon/upload.svg";
import { rejects } from "assert";

interface IFormInput {
  image: FileList;
}

export default function UploadImg({
  imgSrc,
  setImgSrc,
  handleCompare,
}: {
  imgSrc: string | null | undefined;
  setImgSrc: (value: string | null | undefined) => void;
  handleCompare: () => Promise<void>;
}) {
  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const [previewImg, setPreviewImg] = useState("");
  const watchImg = watch("image");

  useEffect(() => {
    if (watchImg && watchImg.length > 0) {
      const file = watchImg[0];
      setPreviewImg(URL.createObjectURL(file));
    }

    console.log(watchImg);
  }, [watchImg]);

  const onSubmitImg = async (data: IFormInput) => {
    // const formData = new FormData();
    // const upLoadImg = data.image[0];
    // formData.append("image", upLoadImg);
    // const url = `${process.env.NEXT_PUBLIC_LOCAL_URL}/awss3/upload`;
    // const response = await fetch(url, {
    //   method: "POST",
    //   body: formData,
    // });
    // const text = await response.text();
    // return text;
    try {
      const upLoadImg = data.image[0];

      if (upLoadImg) {
        const base64Img = await convertBase64(upLoadImg);
        setImgSrc(base64Img);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setError("image", {
          message: "업로드에 실패했습니다.",
        });
      }
    }
  };

  const convertBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        if (typeof fileReader.result === "string") {
          resolve(fileReader.result);
        } else {
          reject(new Error("Failed to convert file to base64 string"));
        }
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitImg)}
        className="flex flex-col gap-4 items-center justify-center"
      >
        <label htmlFor="image" className="w-full cursor-pointer">
          <div className="box-style flex w-full h-[340px] items-center justify-center">
            {previewImg ? (
              <img
                src={previewImg}
                alt="Preview"
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <Upload width={100} height={100} />
            )}
          </div>
        </label>
        <input
          id="image"
          type="file"
          className="hidden"
          placeholder="file"
          {...register("image", {
            required: "파일을 업로드 해주세요.",
          })}
        />

        {imgSrc ? (
          <Button
            text="비교하기"
            type="button"
            size="large"
            onClick={handleCompare}
          />
        ) : (
          <Button text="등록하기" type="submit" size="large" />
        )}

        {/* <span className="text-red-500 text-base">{errors.image?.message}</span> */}
      </form>
    </div>
  );
}
