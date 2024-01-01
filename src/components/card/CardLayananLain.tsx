import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardLayananLainType {
  name: string;
  description: string;
  iconImageUrl: string;
  price: string;
  linkUrl:string;
}

export default function CardLayananLain({
  name,
  description,
  iconImageUrl,
  price,
  linkUrl
}: CardLayananLainType) {
  return (
    <div className="bg-white p-3 rounded-3xl shadow-xl space-y-5">
      <div className="flex items-center gap-2">
        <Image src={iconImageUrl} width={35} height={35} alt="disk" />
        <h4 className="text-xl font-bold">{name}</h4>
      </div>
      <div>{description}</div>
      <p>Mulai Dari</p>
      <div>
        <span className="text-[#FF6D0B] text-3xl font-semibold">{price}</span>
        <span>/ tahun</span>
      </div>
      <div>
        <Link href={linkUrl}>
          <div className="w-full rounded-full text-white font-bold py-1.5 bg-[#FF6D0B] hover:bg-[#ff7945] hover:scale-105 duration-300">
            Pesan Sekarang
          </div>
        </Link>
      </div>
    </div>
  );
}
