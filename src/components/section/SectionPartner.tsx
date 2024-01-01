import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SectionPartner() {
  return (
    <section className="container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
      <div className="space-y-5">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">
          Telah Dipercaya oleh 45.000+ Pelanggan Aktif
        </h2>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <Image
            src={"/images/Cimory.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/Forisa.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/Elsheskin.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/Icon.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/Horison.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/MD.webp"}
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
            Dan Masih Banyak Lainnya
          </Link>
        </div>
      </div>
      <div className="space-y-5">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">Partner Kami</h2>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <Image
            src={"/images/Google.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/Cpanel.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/Idea.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/Archi.webp"}
            width={180}
            height={180}
            alt="cimory"
          />
          <Image
            src={"/images/dotid.webp"}
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
            Dan Masih Banyak Lainnya
          </Link>
        </div>
      </div>
    </section>
  );
}
