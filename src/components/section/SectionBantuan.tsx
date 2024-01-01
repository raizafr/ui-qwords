import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
export default function SectionBantuan() {
  return (
    <section className="bg-[#FEECDD]">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url('/images/bantuan.png')` }}
      >
        <div className="container mx-auto px-2 md:px-5 py-5 md:py-8 lg:py-14 space-y-5">
          <div className="space-y-5 text-center">
            <h2 className="text-3xl lg:text-5xl font-semibold">
              Butuh <span className="text-[#FF6D0B]">Bantuan?</span>
            </h2>
            <p>Kami siap membantu anda 24 Jam</p>
          </div>
          <div className="flex gap-3 justify-center items-center flex-wrap">
            <div className="w-fit flex items-center gap-2 border text-[#EE4D30] border-[#EE4D30] px-5 py-1.5 rounded-3xl cursor-pointer hover:text-white hover:border-[#FF6D0B] duration-300 hover:bg-[#FF6D0B]">
              <span>
                <FaPhoneAlt className="scale-150" />
              </span>
              <span className="text-xl lg:text-2xl whitespace-nowrap">
                0804-1-808-888
              </span>
            </div>
            <div className="w-fit flex items-center gap-2 border text-[#EE4D30] border-[#EE4D30] px-5 py-1.5 rounded-3xl cursor-pointer hover:text-white hover:border-[#FF6D0B] duration-300 hover:bg-[#FF6D0B]">
              <span>
                <FaPhoneAlt className="scale-150" />
              </span>
              <span className="text-xl lg:text-2xl">02149708800</span>
            </div>
            <div className="w-fit flex items-center gap-2 border text-[#EE4D30] border-[#EE4D30] px-5 py-1.5 rounded-3xl cursor-pointer hover:text-white hover:border-[#FF6D0B] duration-300 hover:bg-[#FF6D0B]">
              <span>
                <RiWhatsappFill className="scale-150" />
              </span>
              <span className="text-xl lg:text-2xl whitespace-nowrap">
                +62817437111 (WhatsApp only)
              </span>
            </div>
            <div className="w-fit flex items-center gap-2 border text-[#EE4D30] border-[#EE4D30] px-5 py-1.5 rounded-3xl cursor-pointer hover:text-white hover:border-[#FF6D0B] duration-300 hover:bg-[#FF6D0B]">
              <span>
                <IoMdMail className="scale-150" />
              </span>
              <span className="text-xl lg:text-2xl">Info@qwords.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
