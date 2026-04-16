"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { MdPublic } from "react-icons/md";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-12 lg:py-16" id="nosotros">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative order-2 w-full overflow-hidden rounded-3xl lg:order-1"
        >
          <div className="relative h-100 w-full sm:h-110 lg:h-140">
            <Image
              src="/about.webp"
              alt="Certificación de inglés"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-4 rounded-xl bg-[#c6d647] px-4 py-2 shadow-md">
            <span className="text-sm font-semibold text-black">
              Certificación rápida y válida
            </span>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="order-1 text-center lg:order-2 lg:text-left"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#c6d647]">
            Nuestra solución
          </p>

          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Certificación de inglés{" "}
            <span className="text-[#c6d647]">rápida y válida</span> sin procesos complicados
          </h2>

          <p className="mt-4 text-gray-600">
            En Smart Learning te ayudamos a obtener tu certificación de inglés de forma ágil,
            con acompañamiento y sin perder tiempo en procesos innecesarios.
          </p>

          {/* NUEVO TEXTO DE AUTORIDAD */}
          <p className="mt-4 text-gray-600">
            Desde 2016 ayudando a estudiantes como tú a certificarse a tiempo. 
            Hoy, cientos de clientes satisfechos respaldan nuestro proceso.
          </p>

          {/* FEATURES + TESTIMONIO */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-5 text-left">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#c6d647] p-3 text-lg text-black">
                  <GiGraduateCap />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Proceso simplificado</h4>
                  <p className="text-sm text-gray-600">
                    Sin trámites largos ni pasos innecesarios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#c6d647] p-3 text-lg text-black">
                  <MdPublic />
                </div>
                <div>
                  <h4 className="font-semibold text-black">100% enfocado en tu objetivo</h4>
                  <p className="text-sm text-gray-600">
                    Obtén tu certificado para grado o trabajo sin perder tiempo.
                  </p>
                </div>
              </div>
            </div>

            {/* TESTIMONIO */}
            <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-3 text-2xl font-bold text-[#b7c772]">“”</div>

              <p className="text-sm leading-relaxed italic text-gray-600">
                “Gracias a Smart Learning logré obtener mi certificación de inglés a tiempo
                para graduarme. Todo fue rápido y sencillo.”
              </p>

              <div className="mt-5 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b7c772]/20 text-sm font-bold text-[#b7c772]">
                  SL
                </div>
                <div className="text-xs text-gray-500">Estudiante verificado</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            
            {/* BOTÓN WHATSAPP */}
            <Link
              href="https://wa.me/573212426083?text=Quiero%20obtener%20más%20información%20sobre%20sus%20servicios%20y%20certificaciones"
              target="_blank"
              className="rounded-full rounded-bl-none bg-[#c6d647] px-6 py-3 font-semibold text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              Obtener mi certificación
            </Link>

            <div className="flex items-center gap-2 text-black">
              <FaPhoneAlt />
              <span className="font-semibold">+57 321 242 6083</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}