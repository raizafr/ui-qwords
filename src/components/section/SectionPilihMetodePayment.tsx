import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SectionPilihMetodePayment() {
  return (
    <section className="container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
      <div className="space-y-10">
        <h3 className="text-3xl font-semibold text-center">
          Pilih metode e-payment otomatis. Layanan Domain, Hosting, <br className="hidden lg:block" /> VPS
          langsung aktif tanpa perlu konfirmasi bayar.
        </h3>
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/images/all-payment.webp"}
            width={1280}
            height={0}
            alt="cimory"
          />
        </div>
        <div className="text-center">
          <Link
            href={"#"}
            className="text-[#FF6D0B] hover:text-blue-500 duration-200 textsm font-semibold"
          >
            Lihat Panduan Pembayaran
          </Link>
        </div>
      </div>
    </section>
  );
}
