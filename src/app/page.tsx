/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Header from "./components/Home/Header";
import VisiMisi from "./components/Home/VisiMisi";
import Value from "./components/Home/Value";
import Definition from "./components/Home/Definition";
import Support from "./components/Home/Support";
import Traction from "./components/Home/Traction";
import Superiority from "./components/Home/Superiority";
import Footer from "./Footer";
import BestProgram from "./components/Home/BestProgram";
import Testimonial from "./components/Home/Testimonial";
import Country3T from "./components/Home/Country3T";
import InternetOffline from "./components/Home/InternetOffline";
import SmartAI from "./components/Home/SmartAI";
import TabelAi from "./components/Home/TabelAi";
import Blockchain from "./components/Home/Blockchain";
import LearningBook from "./components/Home/LearningBook";
import Mentor from "./components/Home/Mentor";
import LayAi from "./components/LayAi/LayAi";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <>
      <title>Sinaridesa</title>
      <main>
        {/* Navbar */}
        <Navbar />

        {/* LayAi */}
        <LayAi />

        <div className="bg-white">
          {/* Header */}
          <Header />

          {/* Value */}
          <Value />

          {/* Definisi Sinari Desa */}
          <Definition />

          {/* Visi dan Misi */}
          <div data-aos="fade-up">
            <VisiMisi />
          </div>

          {/* Support */}
          <div data-aos="fade-up">
            <Support />
          </div>

          {/* Superiority */}
          <div data-aos="fade-up">
            <Superiority />
          </div>

          {/* PowerIoT */}
          <Country3T />

          {/* InternetOffline */}
          <div data-aos="fade-up">
            <InternetOffline />
          </div>

          {/* Belajar Cerdas */}
          <SmartAI />

          {/* TabelAi */}
          <div data-aos="fade-up">
            <TabelAi />
          </div>

          {/* Blockchain */}
          <div data-aos="fade-up">
            <Blockchain />
          </div>

          {/* LearningBook */}
          <div data-aos="fade-up">
            <LearningBook />
          </div>

          {/* Traction */}
          <Traction />

          {/* Best Program */}
          <div data-aos="fade-up">
            <BestProgram />
          </div>

          {/* Testimonial */}
          <Testimonial />

          {/* Mentor */}
          <div data-aos="fade-up">
            <Mentor />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
