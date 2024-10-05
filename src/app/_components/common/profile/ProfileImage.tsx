import React from "react";

export default function ProfileImage({
  thumbnail,
}: {
  thumbnail: string | undefined;
}) {
  return (
    <div className="w-10 rounded-full overflow-hidden">
      <img src={thumbnail} alt="thumbnail" />
    </div>
  );
}
