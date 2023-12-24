"use client";

import React, { useState, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  namaAkun: string;
  nomorOrderan: string;
  email: string;
  catatan: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    namaAkun: "",
    nomorOrderan: "",
    email: "",
    catatan: "",
  });

  const nomorTeleponAdmin = "+6289618714018";
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleWhatsApp = () => {
    // Tampilkan popup
    setPopupVisible(true);

    // Tunggu 3 detik sebelum diarahkan ke WhatsApp
    setTimeout(() => {
      const { namaAkun, nomorOrderan, email, catatan } = formData;

      const message = ` %0D%0ANAMA : ${namaAkun}%0D%0ANOMOR TELEPON: ${nomorOrderan}%0D%0AEMAIL: ${email} %0D%0ACATATAN/PERIHAL: ${catatan}`;

      // Mengirim pesan WhatsApp
      window.open(
        `https://api.whatsapp.com/send?phone=${nomorTeleponAdmin}&text=${message}`
      );

      // Mengosongkan input setelah mengirim
      setFormData({
        namaAkun: "",
        nomorOrderan: "",
        email: "",
        catatan: "",
      });
    }, 2000);
    toast.success("send message success");
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full max-w-md">
          <h1
            className="text-2xl font-bold mb-4 mt-10 text-white "
            id="contact"
          >
            Contact Me
          </h1>
          <div className="space-y-4 z-30">
            <div>
              <label className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md "
                name="namaAkun"
                onChange={handleChange}
                value={formData.namaAkun}
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Number Telp.
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md"
                name="nomorOrderan"
                onChange={handleChange}
                value={formData.nomorOrderan}
                placeholder="+62812345678"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Email.
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="email@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Context
              </label>
              <div>
                <textarea
                  className="w-full px-4 py-2 border rounded-md"
                  name="catatan"
                  placeholder="Opsional"
                  onChange={handleChange}
                  value={formData.catatan}
                  rows={4}
                ></textarea>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-blue-600 cursor-pointer"
                  id="tombol"
                  onClick={handleWhatsApp}
                >
                  <span>SEND</span>
                </button>
              </div>
            </div>
            <ToastContainer position="top-right" autoClose={2000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
