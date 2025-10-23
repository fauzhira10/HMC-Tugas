import React from "react";
import { useParams } from "react-router";
import Blogs from "./Blogs";

const articles = [
  {
    id: 1,
    title: "Belajar React Router",
    excerpt:
      "Panduan singkat mempelajari routing di React menggunakan React Router.",
    content:
      "React Router memungkinkan pembuatan navigasi SPA yang deklaratif. Pelajari cara membuat Route, Link, useParams, dan nested routing untuk membangun aplikasi terstruktur.",
    author: "John Doe",
    date: "2025-01-15",
    image: "https://placehold.co/800x400?text=React+Router",
  },
  {
    id: 2,
    title: "Belajar Matematika",
    excerpt: "Konsep dasar aljabar dan tips menyelesaikan soal cepat.",
    content:
      "Artikel ini membahas aljabar dasar, persamaan linear, dan strategi menyelesaikan masalah langkah demi langkah. Cocok untuk pemula yang ingin memperkuat dasar matematika.",
    author: "Siti Aminah",
    date: "2025-02-03",
    image: "https://placehold.co/800x400?text=Matematika",
  },
  {
    id: 3,
    title: "Belajar IPA",
    excerpt: "Ringkasan konsep IPA dasar: biologi, fisika, dan kimia.",
    content:
      "Mengenalkan konsep dasar biologi (sel & organisme), fisika (gaya & gerak), dan kimia (materi & reaksi) dengan contoh sederhana untuk penerapan sehari-hari.",
    author: "Budi Santoso",
    date: "2025-03-10",
    image: "https://placehold.co/800x400?text=IPA",
  },
  {
    id: 4,
    title: "Belajar IPS",
    excerpt: "Dasar-dasar ilmu sosial: sejarah, geografi, dan ekonomi.",
    content:
      "Pembahasan singkat mengenai peristiwa sejarah penting, konsep geografi dasar, serta prinsip ekonomi mikro yang mudah dipahami siswa sekolah menengah.",
    author: "Dewi Lestari",
    date: "2025-03-20",
    image: "https://placehold.co/800x400?text=IPS",
  },
];
export default function BlogDetail() {
  const { id } = useParams();
  const blog = articles.find((p) => p.id === Number(id));

  if (!blog) {
    return (
      <div>
        <h1>Produk tidak ditemukan</h1>
        <Link to="/blog">Kembali ke Blog</Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <img src={blog.image} alt="gambar" />
      </div>
      <h1>{blog.title}</h1>
      <h1>{blog.excerpt}</h1>
      <h1>{blog.content}</h1>
      <p>
        <i>{Blogs.data}</i>
      </p>
    </div>
  );
}
