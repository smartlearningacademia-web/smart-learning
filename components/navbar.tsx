"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaChevronRight,
  FaHome,
  FaBriefcase,
  FaUsers,
  FaEnvelopeOpenText,
  FaQuestionCircle,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/smartlearningacademia", label: "Instagram" },
];

const navLinks = [
  { href: "#inicio", label: "Inicio", icon: FaHome },
  { href: "#nosotros", label: "Nosotros", icon: FaUsers },
  { href: "#servicios", label: "Servicios", icon: FaBriefcase },
  { href: "#contacto", label: "Contacto", icon: FaEnvelopeOpenText },
  { href: "#faq", label: "Preguntas Frecuentes", icon: FaQuestionCircle },
];

export default function NavbarTopBar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="border-b border-black/10 bg-[#b7c772] text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">

          {/* Redes */}
          <div className="flex items-center justify-center gap-3 sm:justify-start group">
            <span className="text-xs font-semibold opacity-0 transition group-hover:opacity-100">
              Síguenos →
            </span>

            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/40 transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-md"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          {/* Contacto + ubicación */}
          <div className="flex flex-col items-center gap-1 text-xs sm:flex-row sm:flex-wrap sm:justify-end sm:gap-x-4 sm:gap-y-1 sm:text-sm">

            {/* Ubicación (solo desktop) */}
            <span className="hidden items-center gap-2 opacity-80 transition hover:opacity-100 md:flex">
              <FaMapMarkerAlt /> Bucaramanga, Colombia
            </span>

            {/* Email */}
            <a
              href="mailto:smartlearningacademia@gmail.com"
              className="flex items-center gap-2 transition hover:opacity-70"
            >
              <FaEnvelope className="shrink-0" />
              <span className="truncate">
                <span className="hidden sm:inline">
                  smartlearningacademia@gmail.com
                </span>
                <span className="sm:hidden">Correo</span>
              </span>
            </a>

            {/* Teléfono */}
            <a
              href="tel:+573212426083"
              className="flex items-center gap-2 transition hover:opacity-70"
            >
              <FaPhoneAlt className="shrink-0" />
              <span>
                <span className="hidden sm:inline">+57 321 242 6083</span>
                <span className="sm:hidden">Llamar</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav className="relative border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
          {/* LOGO */}
          <Link href="/" className="relative z-10 flex shrink-0 items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:h-20 sm:w-20 md:h-24 md:w-24 lg:absolute lg:-top-10 lg:left-0 lg:h-37.5 lg:w-37.5">
              <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-35 lg:w-35">
                <Image
                  src="/Logo_img.png"
                  alt="Logo"
                  fill
                  sizes="(max-width: 1024px) 80px, 140px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="group relative flex items-center gap-2 px-3 py-2 text-sm font-medium text-black transition-all duration-300"
                >
                  <Icon className="text-[14px] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#7f8f2f]" />

                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#7f8f2f]">
                    {item.label}
                  </span>

                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#7f8f2f] transition-all duration-300 group-hover:w-full"></span>

                  <span className="absolute inset-0 rounded-md bg-[#c6d647]/0 transition-all duration-300 group-hover:bg-[#c6d647]/20"></span>
                </Link>
              );
            })}

            <Link
              href="#contacto"
              onClick={(e) => handleScroll(e, "#contacto")}
              className="rounded-full rounded-bl-none bg-[#c6d647] px-5 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-black"
            >
              Cotizar ahora <FaChevronRight className="ml-1 inline" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="lg:hidden transition hover:scale-110 text-black"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="border-t border-black/10 bg-white px-4 pb-4 pt-2 shadow-md lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      handleScroll(e, item.href);
                      closeMenu();
                    }}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-[#c6d647]/15 hover:text-[#7f8f2f] text-black"
                  >
                    <Icon className="text-base" />
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="#contacto"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#c6d647] px-5 py-3 font-semibold transition hover:shadow-lg"
              >
                Cotizar ahora <FaChevronRight className="ml-1 inline" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}