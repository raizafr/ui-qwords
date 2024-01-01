import React from "react";

export default function SectionCariNamaDomain() {
  return (
    <section className="bg-[#FF6D0B]">
      <div className="container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
        <div className="space-y-5">
          <h2 className="text-3xl lg:text-5xl text-white font-semibold text-center">
            Cari Nama Domainmu
          </h2>
          <div className="text-center flex justify-center text-white">
            <p className="lg:w-1/2">
              Nama Domain digunakan untuk mempermudah pengunjung menuju ke situs
              Anda. Pilih nama domain yang paling mencerminkan bisnis, produk,
              atau layanan Anda.
            </p>
          </div>
        </div>
        <div className="lg:flex w-full justify-between gap-2 space-y-2 items-center lg:space-y-0">
          <div className="w-full flex gap-2 h-fit">
            <input
              type="text"
              placeholder="Cari nama domain Anda"
              className="px-4 py-4 text-lg w-full rounded-2xl focus:outline-none"
            />
            <select name="" id="" className="text-lg w-fit rounded-2xl px-5">
              <option value="id">.id</option>
            </select>
          </div>
          <button className="w-full lg:w-fit text-white hover:bg-[#303030] hover:scale-105 duration-300 bg-black rounded-full font-semibold px-14 py-4 text-lg">
            Cari
          </button>
        </div>
        <div className="text-white flex justify-center gap-4 flex-wrap">
          <div className="flex flex-col items-center font-semibold">
            <div>.com</div>
            <div className="text-2xl lg:text-3xl">Rp 165.000</div>
          </div>
          <div className="border-l hidden md:block" />
          <div className="flex flex-col items-center font-semibold">
            <div>.id</div>
            <div className="text-2xl lg:text-3xl">Rp 225.000</div>
          </div>
          <div className="border-l hidden md:block" />
          <div className="flex flex-col items-center font-semibold">
            <div>.info</div>
            <div className="text-2xl lg:text-3xl">Rp 77.000</div>
          </div>
        </div>
      </div>
    </section>
  );
}
