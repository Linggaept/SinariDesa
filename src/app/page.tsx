/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
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
import "aos/dist/aos.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SinariDesa - Dari Desa Untuk Dunia!</title>
        <meta
          name="description"
          content="SinariDesa adalah platform TIK inovatif yang membantu anak-anak muda di desa mengembangkan keterampilan mereka melalui teknologi seperti blockchain, AI, dan Internet offline."
        />
        <meta
          name="keywords"
          content="sinari desa, sinaridesa, sinardesa, teknologi pendidikan, sinar desa, teknologi, pendidikan, blockchain, internet offline, smart ai, desa modern, desa digital"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content="SinariDesa - Dari Desa Untuk Dunia!"
        />
        <meta
          property="og:description"
          content="SinariDesa adalah platform TIK inovatif yang membantu anak-anak muda di desa mengembangkan keterampilan mereka melalui teknologi seperti blockchain, AI, dan Internet offline."
        />
        <meta property="og:url" content="https://sinaridesa.com" />
        <meta property="og:image" content="/img/Logo_PNB_Sinaridesa.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SinariDesa" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://sinaridesa.com" />

        {/* Additional SEO optimizations */}
        <meta name="author" content="SinariDesa Team" />
        
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </Head>
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
          <VisiMisi />

          {/* Support */}
          <Support />

          {/* Superiority */}
          <Superiority />

          {/* PowerIoT */}
          <Country3T />

          {/* InternetOffline */}
          <InternetOffline />
          {/* Belajar Cerdas */}
          <SmartAI />

          {/* TabelAi */}
          <TabelAi />

          {/* Blockchain */}
          <Blockchain />

          {/* LearningBook */}
          <LearningBook />

          {/* Traction */}
          <Traction />

          {/* Best Program */}
          <BestProgram />

          {/* Testimonial */}
          <Testimonial />

          {/* Mentor */}
          <Mentor />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
