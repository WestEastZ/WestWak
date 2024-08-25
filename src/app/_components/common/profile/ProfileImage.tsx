import React from "react";

export default function ProfileImage({ thumbnail }: { thumbnail: string }) {
  return (
    <div className="w-12 rounded-full overflow-hidden">
      <img src={thumbnail} alt="thumbnail" />
    </div>
  );
}
