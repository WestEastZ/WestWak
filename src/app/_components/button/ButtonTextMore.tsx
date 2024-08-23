"use client";

import React, { useState } from "react";

export default function ButtonTextMore({
  text,
  isExpanded,
  setIsExpanded,
}: {
  text: string;
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}) {
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div>
      {text.length > 100 && (
        <button
          onClick={toggleExpand}
          className="text-gray-400 hover:underline mt-1 text-sm"
        >
          {isExpanded ? "접기" : "더보기"}
        </button>
      )}
    </div>
  );
}
