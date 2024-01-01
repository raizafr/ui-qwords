import Image from "next/image";
import React from "react";

export default function SectionBikinWebsite() {
  return (
    <section className="container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
      <div className="bg-[#FEECDD] p-10 md:flex justify-center items-center gap-10 rounded-[50px]">
        <div className="flex-none">
          <Image
            src={"/images/bw.webp"}
            width={500}
            height={500}
            alt="bw"
            className="w-80"
          />
        </div>
        <div className="space-y-5 flex-1">
          <h2 className="text-3xl lg:text-5xl font-semibold">
            <span className="text-[#FF6D0B]">Bikin website impian</span>
            <span> dengan mudah disini hanya 1jutaan</span>
          </h2>
          <p>
            Bikin website impian include paket hosting Indonesia terbaik hanya 1
            jutaan Jasa pembuatan website profesional untuk Perusahaan, Bisnis &
            UKM. Bikin Website Impian dengan mudah di sini, desain website
            elegan dan mudah dikelola
          </p>
          <div>
            <button className="w-fit rounded-full text-white font-bold py-1.5 bg-[#FF6D0B] px-5 hover:bg-[#ff7945] hover:scale-105 duration-300">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
