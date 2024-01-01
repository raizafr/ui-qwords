import React from "react";

export default function SectionHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-10 px-2 md:px-5 lg:px-20">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
        <div>
          Cloud Hosting <br /> untuk
        </div>
        <div className="text-[#FF6D0B]">Kesuksesan Websitemu!</div>
      </h1>
      <div className="flex justify-center items-center text-center">
        <p className="lg:w-1/2 md:text-lg text-base">
          Qwords menawarkan layanan Cloud Hosting yang Cepat, Aman, dan Dukungan
          24 jam untuk memenuhi kebutuhan hosting Anda. Tersertifikasi ISO 27001
          dengan Data Center Tier 3.
        </p>
      </div>
      <div className="text-[#FF6D0B] font-bold text-2xl lg:text-3xl text-center">
        #QwordsYourSuccess
      </div>
      <div className="flex justify-center">
        <button className="w-fit px-10 text-white bg-[#FF6D0B] hover:bg-[#ff7945] hover:scale-105 duration-300 text-xl lg:text-2xl py-4 rounded-full font-bold">
          Pesan Sekarang
        </button>
      </div>
    </section>
  );
}
