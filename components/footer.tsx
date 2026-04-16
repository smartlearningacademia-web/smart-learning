"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* LOGO + INFO */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/Logo_img.png" 
                alt="Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-xl font-bold text-slate-900">
                Smart Learning
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600 max-w-sm">
              Soluciones educativas enfocadas en certificación de inglés y procesos académicos ágiles, diseñados para ayudarte a avanzar sin perder tiempo.
              Atención 100% online en toda Colombia y el Exterior.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#c6d647]" />
                <span>+57 321 242 6083</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#c6d647]" />
                <span>smartlearningacademia@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#c6d647]" />
                <span>Atención 100% online en toda Colombia</span>
              </div>
            </div>
          </div>

          {/* ENLACES */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Enlaces rápidos
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>
                <Link href="#inicio" className="hover:text-slate-900 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-slate-900 transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="hover:text-slate-900 transition">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-slate-900 transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* BLOQUE REEMPLAZO (ANTES MAPA) */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Atención inmediata
            </h3>

            <div className="mt-5 rounded-3xl rounded-bl-none border border-slate-200 p-6 shadow-sm bg-slate-50">
              
              <p className="text-sm text-slate-600 leading-relaxed">
                Nuestro equipo responde rápido para ayudarte a iniciar tu proceso sin perder tiempo.
              </p>

              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  Atención personalizada
                </li>
                <li className="flex items-center gap-2">
                  Respuesta en minutos
                </li>
                <li className="flex items-center gap-2">
                  Proceso guiado paso a paso
                </li>
              </ul>

              <a
                href="https://wa.me/573212426083?text=Quiero%20obtener%20más%20info%20sobre%20sus%20servicios%20y%20certificaciones"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full justify-center items-center gap-2 rounded-full rounded-bl-none bg-[#c6d647] px-5 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:shadow-lg hover:-translate-y-0.5"
              >
                <FaWhatsapp />
                Iniciar por WhatsApp
              </a>
            </div>

            <p className="mt-3 text-sm text-slate-500">
              Servicio disponible en todo el país.
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Smart Learning. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}