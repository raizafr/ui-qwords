import Image from "next/image";
import React from "react";

interface CardSolusiPaketType {
  title: string;
  description: string;
  image: string;
}

export default function CardSolusiPaket({
  title,
  description,
  image,
}: CardSolusiPaketType) {
  return (
    <div className="w-full bg-[#FF6D0B] text-white rounded-3xl space-y-2 ">
      <div
        style={{
          backgroundImage: `url("/images/${image}")`,
        }}
        className="bg-cover bg-right p-4 h-64 rounded-3xl"
      >
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
