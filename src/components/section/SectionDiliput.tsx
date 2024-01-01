import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SectionDiliput() {
  return (
    <section className="container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
      <div className="space-y-10">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">Diliput oleh</h2>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <Image
            src={"/images/Detikcom.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/Liputan6.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/TribunJogja.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/antara.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/RM.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/KoranBernas.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
        </div>
        <div className="text-center">
          <Link
            href={"#"}
            className="text-[#FF6D0B] hover:text-blue-500 duration-200 textsm font-semibold"
          >
            Lihat Semua Liputan
          </Link>
        </div>
      </div>
    </section>
  );
}
