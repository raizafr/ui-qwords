import CardSolusiPaket from "../card/CardSolusiPaket";

export default function SectionSolusiPaket() {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-2 md:px-5 lg:px-20 py-5 md:py-8 lg:py-14 space-y-5">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">
          Solusi Paket Hosting Terbaik dari <br className="hidden lg:block" />{" "}
          Kami
        </h2>
        <div>
          <p className="text-center">
            Kami menawarkan solusi paket hosting terbaik untuk segala kebutuhan
            <br />
            website dan sistem Anda. Mulai dari blog hingga website bisnis dan
            <br />
            perusahaan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <CardSolusiPaket
            title="Perusahaan"
            description="Wujudkan website perusahaan profesional dan berkelas dengan dukungan web hosting terbaik dan fitur keamanan ekstra"
            image="company.webp"
          />
          <CardSolusiPaket
            title="UMKM dan Toko Online"
            description="Memberikan hosting terbaik untuk mendukung kebutuhan website pemasaran barang/jasa secara online."
            image="umkm.webp"
          />
          <CardSolusiPaket
            title="Organisasi dan Komunitas"
            description="Bikin website organisasi atau komunitas Anda dengan paket hosting unggulan yang ramah kantong."
            image="orgs.webp"
          />
          <CardSolusiPaket
            title="Sekolah"
            description="Infrastruktur web hosting terbaik untuk menunjang kegiatan e-learning. Didukung platform MOODLE khusus pembelajaran daring"
            image="school.webp"
          />
          <CardSolusiPaket
            title="Developer"
            description="Tersedia paket hosting Indonesia dengan spesifikasi khusus yang dev-friendly. Ekstra NodeJS dan Git Version Control"
            image="dev.webp"
          />
          <CardSolusiPaket
            title="Blogger dan Personal"
            description="Memfasilitasi blogger dengan infrastruktur hosting Indonesia terbaik serta template website premium untuk tampil lebih profesional"
            image="blog.webp"
          />
        </div>
      </div>
    </section>
  );
}
