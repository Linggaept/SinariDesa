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
import Courses from "./components/Home/Courses";
import Collab from "./components/Home/Collab";
import Deck from "./components/Home/Deck";
import BestProgram from "./components/Home/BestProgram";
import Testimonial from "./components/Home/Testimonial";

export default function Home() {
  return (
    <>
      <title>Sinaridesa</title>
      <main>
        {/* Navbar */}
        <Navbar />

        <div className="bg-white">
          {/* Header */}
          <Header />

          {/* Value */}
          <Value />

          {/* Definisi Sinari Desa */}
          <Definition />

          {/* Visi dan Misi */}
          <VisiMisi />

          {/* Support */}
          <Support />

          {/* Traction */}
          <Traction />

          {/* Superiority */}
          <Superiority />

          {/* Courses */}
          <Courses />

          {/* Collab */}
          <Collab />

          {/* Deck */}
          <Deck />

          {/* Best Program */}
          <BestProgram />

          {/* Testimonial */}
          <Testimonial />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
