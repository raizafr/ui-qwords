import Image from "next/image";
import React from "react";

interface CardKomitmenQwordsType{
  imageUrl:string;
  title:string;
  description:string;
}

export default function CardKomitmenQwords({imageUrl,title,description}:CardKomitmenQwordsType) {
  return (
    <div className="bg-[#FFF8F3] p-5 rounded-3xl">
      <div>
        <Image src={imageUrl} width={100} height={100} alt="call" />
      </div>
      <div>
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p>{description}</p>
      </div>
      CardKomitmenQwords
    </div>
  );
}
