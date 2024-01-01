import React from "react";
import CardKomitmenQwords from "../card/CardKomitmenQwords";

export default function SectionKomitmenQwords() {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">
          Komitmen Qwords
        </h2>
        <p className="text-center">
          Berbagai alasan mengapa pelanggan memilih sewa hosting di Qwords
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center place-content-center">
          <CardKomitmenQwords
            imageUrl="/images/call.webp"
            title="Layanan 24/7"
            description="Tim Technical Support dan Customer Service Qwords siap membantu Anda selama 24 jam, 7 hari. Anda dapat menghubungi melalui Live chat, Call Center, dan Support Ticket."
          />
          <CardKomitmenQwords
            imageUrl="/images/book.webp"
            title="Panduan Manual Lengkap"
            description="Qwords dilengkapi dengan halaman knowledge base berisi tutorial dan tips seputar pengelolaan website dan hosting. Dapat diakses dengan mudah dan solutif"
          />
          <CardKomitmenQwords
            imageUrl="/images/router.webp"
            title="Up time 99.99%"
            description="Uptime Network & Server di atas 99. 99% dengan konfigurasi server yang tepat. Didukung manajemen jaringan dan multiple upstream tier 1 provider network serta multiple peering."
          />
          <CardKomitmenQwords
            imageUrl="/images/guard.webp"
            title="Jaminan keamanan"
            description="Keamanan menjadi fokus utama kami di Qwords. Tindakan pemantauan dan pencegahan yang berstandar & berkelanjutan telah menjadi perhatian utama kami."
          />
          <CardKomitmenQwords
            imageUrl="/images/networkAlt.webp"
            title="Clustered DNS"
            description="DNS Server Cloud Hosting Qwords terhubung satu dengan yang lainnya. Hal ini membuat DNS Server akan selalu dapat di akses karena saling membackup antar server."
          />
          <CardKomitmenQwords
            imageUrl="/images/diamond.webp"
            title="High Enterprise Server"
            description="Standar server Qwords adalah server kelas enterprise Dual Xeon Octa Core yang merupakan hardware kelas terbaik. Hardware ini biasa digunakan oleh perusahaan terkemuka."
          />
          <CardKomitmenQwords
            imageUrl="/images/router.webp"
            title="Tier 1 Network"
            description="Tier 1 Network merupakan jaringan dunia tanpa transit network, yang membuat jaringan lebih cepat serta jalur routing yang lebih pendek dan ketersediaan backup network."
          />
          <CardKomitmenQwords
            imageUrl="/images/network.webp"
            title="Peering Network"
            description="Jaringan di Qwords terhubung langsung ke public peering seperti OpenIXP dan CDIX yang membuat latency atau waktu tunggu pengiriman data semakin kecil."
          />
        </div>
      </div>
    </section>
  );
}
