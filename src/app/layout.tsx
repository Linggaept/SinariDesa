import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// Mengimpor font Poppins dengan opsi tertentu
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Menambahkan bobot font jika diperlukan
  style: ["normal", "italic"], // Menambahkan gaya font jika diperlukan
  display: "swap", // Memastikan font ditampilkan dengan baik saat memuat
});

// Metadata yang digunakan oleh Next.js untuk pengaturan SEO dan lainnya
export const metadata: Metadata = {
  title: "SinariDesa - The Center Of Village Inovation",
  description:
    "Sinari Desa adalah sebuah platform TIK inovatif yang berfokus pada peningkatan keterampilan dan pengembangan diri anak-anak muda di desa",
  keywords: [
    "desa",
    "teknologi",
    "pendidikan",
    "blockchain",
    "internet offline",
    "smart ai",
    "desa modern",
    "desa digital",
    "modern",
  ],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
