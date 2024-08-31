import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function DetailProduct() {
  return (
    <>
      <section>
        <div className="w-full">
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2">
              <h1 className="font-normal text-xs text-black">
                Terjual <span className="font-normal text-gray-700">10rb+</span>
              </h1>
              <h1 className="font-normal text-xs text-black">
                <span></span>5{" "}
                <span className="font-normal text-gray-700">
                  (17,5rb rating)
                </span>
              </h1>
              <h1 className="font-normal text-xs text-black">
                Diskusi <span className="font-normal text-gray-700">(200)</span>
              </h1>
            </div>

            <div className="">
              <h1 className="text-3xl font-bold text-black">Rp. 10.000</h1>
            </div>

            {/* Tabs */}
            <div className="mt-4">
              <Tabs colorScheme="green">
                <TabList>
                  <Tab className="font-normal text-gray-700 text-xs ">
                    Detail
                  </Tab>
                  <Tab className="font-normal text-gray-700 text-xs ">
                    Spesifikasi
                  </Tab>
                  <Tab className="font-normal text-gray-700 text-xs ">
                    Info Penting
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <div className="flex-col h-52 overflow-hidden">
                      <div className="flex-col mb-4">
                        <p className="text-gray-600 text-base">
                          Kondisi :{" "}
                          <span className="font-normal text-md text-black">
                            Baru
                          </span>
                        </p>
                        <p className="text-gray-600 text-base">
                          Min. Pemesanan :{" "}
                          <span className="font-normal text-md text-black">
                            1 Buah
                          </span>
                        </p>
                        <p className="text-gray-600 text-base">
                          Lokasi :{" "}
                          <span className="font-bold text-md text-green-600 ">
                            Yogyakarta
                          </span>
                        </p>
                      </div>

                      <div className="w-full">
                        <p>
                          Nikmati akses pembelajaran yang lengkap tanpa
                          memerlukan koneksi internet dengan Internet Offline
                          Sinari Desa. Produk ini dirancang khusus untuk
                          mendukung pendidikan di daerah terpencil atau area
                          dengan akses internet yang terbatas. Dengan
                          memanfaatkan perangkat USB berkapasitas besar,
                          Internet Offline Sinari Desa menyediakan berbagai
                          materi pembelajaran yang dapat diakses kapan saja dan
                          di mana saja.
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>
                      Flashdisk medium adalah perangkat penyimpanan portabel
                      yang biasanya memiliki kapasitas antara 16 GB hingga 64
                      GB, cocok untuk menyimpan dan mentransfer data seperti
                      dokumen, foto, video, dan file multimedia lainnya.
                      Flashdisk ini umumnya menggunakan koneksi USB 3.0 atau 2.0
                      yang kompatibel dengan berbagai perangkat seperti
                      komputer, laptop, dan beberapa smartphone.
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                      Flashdisk adalah perangkat penyimpanan portabel berbasis
                      memori flash dengan kapasitas mulai dari 4 GB hingga 1 TB.
                      Menggunakan konektor USB, flashdisk memungkinkan transfer
                      data dengan mudah dan cepat. Meskipun ringkas dan tahan
                      lama, flashdisk rentan kehilangan data jika tidak dicabut
                      dengan benar dan mudah hilang karena ukurannya yang kecil.
                    </p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
