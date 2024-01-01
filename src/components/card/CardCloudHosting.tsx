import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardCloudHostingType {
  name: string;
  description: string;
  price: string;
  diskon: string;
  diskValue: string;
  bandwithValue: string;
  coreCpuValue: string;
  addonValue: string;
  linkUrl:string;
}

export default function CardCloudHosting({
  name,
  description,
  price,
  diskon,
  diskValue,
  bandwithValue,
  coreCpuValue,
  addonValue,
  linkUrl
}: CardCloudHostingType) {
  return (
    <div className="shadow-2xl p-4 rounded-3xl w-full space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg">{description}</h3>
        <h4 className="text-2xl font-semibold">{name}</h4>
      </div>
      <div className="space-y-1">
        <div className="text-[#6C757D]">{price}</div>
        <div className="text-[#FF6D0B] text-3xl font-semibold">{diskon}</div>
      </div>
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <Image src={"/images/disk.webp"} width={35} height={35} alt="disk" />
          <div className="flex flex-col">
            <span className="text-lg">Disk</span>
            <span className="font-semibold">{diskValue}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src={"/images/bandwidth.webp"}
            width={35}
            height={35}
            alt="disk"
          />
          <div className="flex flex-col">
            <span className="text-lg">Bandwith</span>
            <span className="font-semibold">{bandwithValue}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image src={"/images/cpu.webp"} width={35} height={35} alt="disk" />
          <div className="flex flex-col">
            <span className="text-lg">Core CPU</span>
            <span className="font-semibold">{coreCpuValue}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image src={"/images/addon.webp"} width={35} height={35} alt="disk" />
          <div className="flex flex-col">
            <span className="text-lg">Addon / parked domain</span>
            <span className="font-semibold">{addonValue}</span>
          </div>
        </div>
      </div>
      <div>
        <Link href={linkUrl}>
          <div className="w-full rounded-full text-white font-bold py-1.5 bg-[#FF6D0B] hover:bg-[#ff7945] hover:scale-105 duration-300 text-center">
            Pesan Sekarang
          </div>
        </Link>
      </div>
    </div>
  );
}
