import React from "react";
import CardCloudHosting from "../card/CardCloudHosting";

export default function SectionCloudHosting() {
  return (
    <section className="container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
      <h2 className="text-3xl lg:text-5xl text-white font-semibold text-center">
        <span className="text-black">Cloud Hosting Indonesia </span>
        <span className="text-[#FF6D0B]">
          Diskon <br className="hidden md:block" /> Hingga 50%
        </span>
      </h2>
      <p className="text-center">
        Layanan cloud hosting indonesia terbaik dengan teknologi andal untuk
        website anda
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardCloudHosting
          name="VCH1"
          description="Value Cloud Hosting"
          price="Rp 24.500"
          diskon="Rp 14.500"
          diskValue="3 GB"
          bandwithValue="Unlimited"
          coreCpuValue="0.5 Core"
          addonValue="No"
          linkUrl="https://portal.qwords.com/order/?pid=528&billingcycle=annually&_gl=1*1ldph0r*_gcl_au*MTkyNTU1NDUzMy4xNzAzMzEyNzY4&_ga=2.155051775.676230252.1703916928-796775023.1703312769"
        />
        <CardCloudHosting
          name="Signature"
          description="Unlimited Hosting"
          price="Rp 109.000"
          diskon="Rp 89.900"
          diskValue="Unlimited"
          bandwithValue="Unlimited"
          coreCpuValue="1 Core"
          addonValue="5 / 5"
          linkUrl="https://portal.qwords.com/order/?promocode=FRSTTMESGN&pid=392&_gl=1*1ldph0r*_gcl_au*MTkyNTU1NDUzMy4xNzAzMzEyNzY4&_ga=2.155051775.676230252.1703916928-796775023.1703312769"
        />
        <CardCloudHosting
          name="HPCH Bisnis 1"
          description="High Performance"
          price="Rp 90.000"
          diskon="Rp 79.000"
          diskValue="3 GB"
          bandwithValue="Unlimited"
          coreCpuValue="1 Core"
          addonValue="-"
          linkUrl="https://portal.qwords.com/order/?pid=596&billingcycle=annually&_gl=1*inxz0p*_gcl_au*MTkyNTU1NDUzMy4xNzAzMzEyNzY4&_ga=2.184568302.676230252.1703916928-796775023.1703312769"
        />
        <CardCloudHosting
          name="VPS SC1"
          description="Cloud VPS KVM SSD"
          price="Rp 135.000"
          diskon="Rp 75.000"
          diskValue="25 GB"
          bandwithValue="Unlimited"
          coreCpuValue="1 Core"
          addonValue="Unlimited"
          linkUrl="https://portal.qwords.com/order/?pid=634&billingcycle=annually&_gl=1*inxz0p*_gcl_au*MTkyNTU1NDUzMy4xNzAzMzEyNzY4&_ga=2.184568302.676230252.1703916928-796775023.1703312769"
        />
      </div>
    </section>
  );
}
