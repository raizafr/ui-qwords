"use client";

import CardCloudHosting from "@/components/card/CardCloudHosting";
import SectionBantuan from "@/components/section/SectionBantuan";
import SectionBikinWebsite from "@/components/section/SectionBikinWebsite";
import SectionCariNamaDomain from "@/components/section/SectionCariNamaDomain";
import SectionCloudHosting from "@/components/section/SectionCloudHosting";
import SectionDiliput from "@/components/section/SectionDiliput";
import SectionFaq from "@/components/section/SectionFaq";
import SectionGaransi from "@/components/section/SectionGaransi";
import SectionHero from "@/components/section/SectionHero";
import SectionKataMereka from "@/components/section/SectionKataMereka";
import SectionKomitmenQwords from "@/components/section/SectionKomitmenQwords";
import SectionLayananLain from "@/components/section/SectionLayananLain";
import SectionPartner from "@/components/section/SectionPartner";
import SectionPilihMetodePayment from "@/components/section/SectionPilihMetodePayment";
import SectionSolusiPaket from "@/components/section/SectionSolusiPaket";
import React from "react";

const Home = () => {
  return (
    <main>
      <SectionHero />
      <SectionCariNamaDomain />
      <SectionCloudHosting />
      <SectionLayananLain />
      <SectionSolusiPaket />
      <SectionKomitmenQwords/>
      <SectionBikinWebsite/>
      <SectionPartner/>
      <SectionGaransi/>
      <SectionKataMereka/>
      <SectionDiliput/>
      <SectionPilihMetodePayment/>
      <SectionFaq/>
      <SectionBantuan/>
    </main>
  );
};

export default Home;
