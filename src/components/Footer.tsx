import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="bg-[#13151B] text-white">
      <footer className="container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
        <div className="grid grid-cols-2 justify-items-center gap-5 lg:grid-cols-4">
          <div className="w-full space-y-5">
            <div className="space-y-3">
              <Image
                src={"/images/logo-dark.webp"}
                width={200}
                height={200}
                alt="logo-dark"
              />
              <h3 className="font-semibold text-xl">
                PT Qwords Company International
              </h3>
              <p>
                Cloud Web Hosting Indonesia. Domain & hosting terbaik dengan
                akses cepat yang didukung layanan support 24/7
              </p>
              <Image
                src={"/images/bsi.webp"}
                width={200}
                height={200}
                alt="logo-dark"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Customer Care</h3>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Pembayaran
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Faktur Pajak
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Bantuan 24 jam
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Qwords Rewards
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Knowladge Base
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Blog
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                FAQ
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Kontak
              </Link>
            </div>
          </div>
          <div className="w-full space-y-5">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Mengenai Kami</h3>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Corporate Website
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Qwords History
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Qwords Differences
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Media Publication
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Network & Infrastructure
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Partner
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Career & Employment
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">MSA/SLA/AUP</h3>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Master Service Agreement
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Refund Policy
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Product Life Cycle Policy
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Penggunaan Merek dan Logo
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Migrasi Ke Qwords
              </Link>
            </div>
          </div>
          <div className="w-full space-y-5">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Layanan Lainnya</h3>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Extended Support
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Manage The Box Server
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Flexi Main Domain
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                FTP Backup
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Offline Backup
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Hosting Insurance
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Software License
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Digital Signature
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Layanan Reseller</h3>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Afiliasi
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Qwords VIP Partner
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Private Label Hosting Reseller
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Private Label Domain Reseller
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Free Tools</h3>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Qwords Link-Q
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                WhatsApp Link Generator
              </Link>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Network Tools
              </Link>
            </div>
          </div>
          <div className="w-full space-y-5">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Kantor Surabaya</h3>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Gedung Bursa Efek Indonesia Lt.10, Jl. Taman AIS Nasution No.21,
                Surabaya 60271 - Indonesia 031 30008800
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Kantor Yogyakarta</h3>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Jl. Blotan no. 18 Kayen Wedomartani, Ngemplak, Sleman,
                Yogyakarta 55584 - Indonesia 0274 6058800
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Kantor Jakarta</h3>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Gedung Cyber 1 Lantai 3, Jl.Kuningan Barat no.8, Jakarta 12710 -
                Indonesia 021 39708800
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Kantor Bandung</h3>
              <Link
                href={"#"}
                className="hover:text-[#FF6D0B] duration-300 hover:underline"
              >
                Jl. Terusan Setra Indah I No.19, Sukagalih, Sukajadi, Bandung
                40163 - Indonesia 022 30508800
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl">
            Terdaftar di PSE, ICANN dan Partner Lainnya
          </h3>
        </div>
        <div className="flex gap-5 flex-wrap">
          <Image src={"/images/code.webp"} width={80} height={80} alt="code" />
          <Image
            src={"/images/icann-logo.webp"}
            width={80}
            height={80}
            alt="code"
          />
          <Image
            src={"/images/badge_litespeed.svg"}
            width={80}
            height={80}
            alt="code"
          />
          <Image
            src={"/images/badge_whmadmin.svg"}
            width={80}
            height={80}
            alt="code"
          />
          <Image
            src={"/images/acronis-cloud-tech.webp"}
            width={80}
            height={80}
            alt="code"
          />
          <Image
            src={"/images/acronis-cloud-sales.webp"}
            width={80}
            height={80}
            alt="code"
          />
        </div>
        <div className="flex justify-center gap-5 ">
          <FaFacebook className="scale-150" />
          <AiFillInstagram className="scale-150" />
          <FaTwitter className="scale-150" />
          <FaYoutube className="scale-150" />
        </div>
        <div className="text-center ">
          Copyright © PT. Qwords Company International
        </div>
      </footer>
    </div>
  );
}
