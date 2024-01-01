import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SectionKataMereka() {
  return (
    <section className="container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
      <div className="space-y-3">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">Apa Kata Mereka?</h2>
        <p className="text-center">
          Apa kata mereka yang sudah menggunakan layanan web hosting <br className="hidden md:block" />{" "}
          Indonesia dari Qwords? Simak pengalaman mereka yang telah <br className="hidden md:block" />{" "}
          membuktikan sendiri fitur dari layanan kami.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex w-full gap-2">
          <div className="w-fit">
            <Image src={"/images/cite.png"} width={30} height={0} alt="cite" />
          </div>
          <div className="space-y-2 w-full">
            <h4 className="text-lg font-semibold">
              Semoga Qwords dapat terus bertahan, sehingga kami dan masyarakat
              Indonesia bisa mendapatkan layanan yang terbaik dari Qwords.
            </h4>
            <div className="flex">
              <div className="w-2 bg-[#FF6D0B]" />
              <p className="text-[#A0A0A0] italic">
                Kami, ID Cert, merupakan sebuah perusahaan yang bergerak dalam
                bidang penyedia jasa informasi keamanan di Indonesia. Oleh
                karena itu, kami membutuhkan Qwords untuk mendukung kebutuhan
                kami terhadap server dan hosting yang selalu up selama 24 jam.
              </p>
            </div>
            <div className="space-x-4">
              <span className="font-semibold">Budi Raharjo</span>
              <span className="text-[#A0A0A0]">Founder ID Cert</span>
            </div>
            <div>
              <Link
                href={"#"}
                className="text-[#FF6D0B] hover:text-blue-500 duration-200 textsm font-semibold"
              >
                Lihat Panduan Pembayaran
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={"/images/testi1.webp"}
            width={700}
            height={0}
            alt="testi1"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between lg:flex-row-reverse">
        <div className="flex w-full gap-2">
          <div className="w-fit">
            <Image src={"/images/cite.png"} width={30} height={0} alt="cite" />
          </div>
          <div className="space-y-2 w-full">
            <h4 className="text-lg font-semibold">
              Pelayanan Qwords sangat cepat dan responsif, sehingga tidak butuh
              waktu lama untuk membantu website kami kembali normal. Terbaik
              pokoknya, mah!
            </h4>
            <div className="flex">
              <div className="w-2 bg-[#FF6D0B]" />
              <p className="text-[#A0A0A0] italic">
                Sebagai media penyedia kabar seputar kota Bandung, Info BDG
                menggunakan website sebagai rumah informasi. Website kami yang
                sempat down kini menunjukkan traffic yang tinggi setelah
                menggunakan dukungan dari Qwords.
              </p>
            </div>
            <div className="space-x-4">
              <span className="font-semibold">Kuns Kurniawan</span>
              <span className="text-[#A0A0A0]">PR Event Info BDG</span>
            </div>
            <div>
              <Link
                href={"#"}
                className="text-[#FF6D0B] hover:text-blue-500 duration-200 textsm font-semibold"
              >
                Lihat Panduan Pembayaran
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={"/images/testi2.webp"}
            width={700}
            height={0}
            alt="testi1"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex w-full gap-2">
          <div className="w-fit">
            <Image src={"/images/cite.png"} width={30} height={0} alt="cite" />
          </div>
          <div className="space-y-2 w-full">
            <h4 className="text-lg font-semibold">
              Hingga saat ini pula, kami tidak pernah menemukan masalah yang
              berarti dari layanan yang diberikan Qwords. Layanan Customer
              Service yang sangat baik, membuat kami tidak ingin berpindah dari
              Qwords
            </h4>
            <div className="flex">
              <div className="w-2 bg-[#FF6D0B]" />
              <p className="text-[#A0A0A0] italic">
                Penjualan Rumah Kopi Temanggung 90% dilakukan secara online,
                salah satunya menggunakan website. Semenjak tahun 2015 hingga
                saat ini, kami menggunakan hosting dan domain dari Qwords.
              </p>
            </div>
            <div className="space-x-4">
              <span className="font-semibold">Denden Sofiudin</span>
              <span className="text-[#A0A0A0]">
                Owner Rumah Kopi temanggung
              </span>
            </div>
            <div>
              <Link
                href={"#"}
                className="text-[#FF6D0B] hover:text-blue-500 duration-200 textsm font-semibold"
              >
                Lihat Panduan Pembayaran
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={"/images/testi3.webp"}
            width={700}
            height={0}
            alt="testi1"
          />
        </div>
      </div>
    </section>
  );
}
