import Image from "next/image";
import React from "react";

export default function SectionGaransi() {
  return (
    <section className="bg-[#FFF8F3]">
      <div className="md:flex md:items-center container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
        <div className="w-full">
          <Image
            src={"/images/guarantee.webp"}
            width={500}
            height={500}
            alt="bw"
            className=""
          />
        </div>
        <div className="w-full md:text-left space-y-5 text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">
            <span>Garansi 30 Hari </span>
            <span className="text-[#FF6D0B]">Uang Kembali</span>
          </h2>
          <p>
            Untuk menjaga kepuasan pelanggan, kami memberikan garansi uang
            kembali yang berlaku hingga 30 hari setelah hosting aktif.
          </p>
        </div>
      </div>
    </section>
  );
}
