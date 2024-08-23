import React from "react";

const characterColors = {
  woowakgood: "#1CBC74",
  ine: "#8A2BE2",
  jingburger: "#F0A957",
  lilpa: "#3330db",
  jururu: "#FF008C",
  gosegu: "#467EC6",
  viichan: "#95C100",
};

type CharacterName = keyof typeof characterColors;

export default function Title({ title }: { title: string }) {
  const color = characterColors[title.toLowerCase() as CharacterName] || "";

  return (
    <h1
      className={`p-3 pl-5 text-4xl font-bold uppercase border-b-2`}
      style={{ color }}
    >
      {title}
    </h1>
  );
}
