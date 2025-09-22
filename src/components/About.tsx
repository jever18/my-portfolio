import React, { useEffect, useRef } from 'react';
import catIllustration from '../assets/cats1.png'; // Pastikan sudah diimport

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector('.cat-animation').classList.add('is-visible');
          }
        });
      },
      { threshold: 0.5 } // Aktifkan saat 50% elemen terlihat
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-5" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="display-5 fw-bold text-center mb-4">Tentang <span className="text-gradient"> Saya</span></h2>
        <p className="lead text-center text-body-secondary mx-auto" style={{ maxWidth: '700px' }}>
	Halo! Nama saya [Jever Duly], seorang [Deplover pemula,Pengembang Web, Desainer UI/UX, dan sekaran masih freelancer]. Saya memiliki ketertarikan yang besar pada [Teknologi, dan menulis kode yang bersih,dan lagi membuat sebuah web sederhana dengan Termux].Saat ini, saya sedang mendalami [React.js dan Node.js,PHP, dan Laravel] dan membangun portofolio ini sebagai tempat untuk memamerkan proyek-proyek saya. Saya selalu terbuka untuk kolaborasi dan ide-ide baru.
        </p>
        <img src={catIllustration} alt="Ilustrasi Kucing" className="cat-animation" />
      </div>
    </section>
  );
}

export default About;

