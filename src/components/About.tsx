import { useEffect, useRef } from "react";
import catIllustration from "../assets/cats1.png";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const catAnim = document.querySelector(".cat-animation");
            if (catAnim) {
              catAnim.classList.add("is-visible");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);
  
  return (
    <section id="about" className="py-5" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="display-5 fw-bold text-center mb-4">
          Tentang <span className="text-gradient">Saya</span>
        </h2>
        <p
          className="lead text-center text-body-secondary mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Halo! Nama saya <strong>Jever Duly</strong>, seorang{" "}
          <em>Developer Pemula</em> yang sedang belajar membangun website
          interaktif dan modern.
        </p>
        <img
          src={catIllustration}
          alt="Ilustrasi Kucing"
          className="cat-animation"
        />
      </div>
    </section>
  );
}

export default About;
