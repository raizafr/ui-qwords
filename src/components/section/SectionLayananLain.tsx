import React from "react";
import CardLayananLain from "../card/CardLayananLain";

export default function SectionLayananLain() {
  return (
    <section className=" bg-[#FFF8F3]">
      <div className="container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">
          Lihat Juga Layanan Kami Yang Lain
        </h2>
        <p className="text-center">
          Optimalkan performa website bisnis Anda dengan berbagai layanan
          berkualitas dari Qwords
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
          <CardLayananLain
            name="SSL"
            description="Jadikan website Anda lebih terpercaya dan disukai oleh search engine dengan menggunakan SSL Certificate."
            iconImageUrl="/images/ssl.webp"
            price="Rp. 112.000"
            linkUrl="https://www.qwords.com/v2/services/secured-sockets-layer-certificate/?_gl=1*1p120sp*_gcl_au*MTkyNTU1NDUzMy4xNzAzMzEyNzY4&_ga=2.157747581.676230252.1703916928-796775023.1703312769"
          />
          <CardLayananLain
            name="Dedicated Server"
            description="Nikmati kelola Dedicated Server sendiri dengan akses remote dari seluruh dunia tanpa batas"
            iconImageUrl="/images/dbstack.webp"
            price="Rp. 499.000"
            linkUrl="https://www.qwords.com/v2/dedicated-server/dedicated-box/?_gl=1*1p120sp*_gcl_au*MTkyNTU1NDUzMy4xNzAzMzEyNzY4&_ga=2.157747581.676230252.1703916928-796775023.1703312769"
          />
          <CardLayananLain
            name="Colocation Server"
            description="Akses cepat dari seluruh dunia dengan fasilitas 24x7 full monitoring dengan cooling system terbaik serta fire extinguisher"
            iconImageUrl="/images/disk.webp"
            price="Rp. 500.000 "
            linkUrl="https://www.qwords.com/v2/dedicated-server/colocation-server/?_gl=1*nzwg2z*_gcl_au*MTkyNTU1NDUzMy4xNzAzMzEyNzY4&_ga=2.146736883.676230252.1703916928-796775023.1703312769"
          />
        </div>
      </div>
    </section>
  );
}
