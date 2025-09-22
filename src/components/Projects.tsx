// Import gambar untuk proyek pertama
import image1A from '../assets/1A.jpg';
import image1B from '../assets/1B.jpg';
// Import gambar untuk proyek kedua
import image2A from '../assets/2A.jpg';
import image2B from '../assets/2B.jpg';

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="content-box">
          <h2 className="display-5 fw-bold text-center mb-5">
            <span className="text-gradient">Proyek</span> Saya
          </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            
            {/* Proyek Pertama: Absensi-App */}
            <div className="col">
              <div className="project-card h-100">
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <img src={image1A} className="img-fluid rounded" alt="Gambar Kode Absensi-App" />
                  </div>
                  <div className="col-6">
                    <img src={image1B} className="img-fluid rounded" alt="Gambar Aplikasi Absensi-App" />
                  </div>
                </div>
                <h3 className="fw-bold">
                  Absensi-App
                </h3>
                <p className="text-body-secondary">
                 Ini adalah proyek Absensi sederhana dimana proyek ini menggunakan Laravel. Proyek ini dikerjakan untuk memenuhi kebutuhan sebuah instansi untuk mengetahui kehadiran Karyawan.
                </p>
                <a href="https://github.com/username-kamu/absensi-app" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
                  Lihat di GitHub
                </a>
              </div>
            </div>

            {/* Proyek Kedua */}
            <div className="col">
              <div className="project-card h-100">
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <img src={image2A} className="img-fluid rounded" alt="Gambar Kode Proyek Kedua" />
                  </div>
                  <div className="col-6">
                    <img src={image2B} className="img-fluid rounded" alt="Gambar Aplikasi Proyek Kedua" />
                  </div>
                </div>
                <h3 className="fw-bold">
		 Undangan Digital
                </h3>
                <p className="text-body-secondary">
                 Ini adalah sebuah aplikasi menggunakan bahasa pemrograman HTML dan CSS.dimana Undangan digital dibuat untuk memenuhi tuntutan akan penyedian Undangan.
                </p>
                <a href="https://github.com/username-kamu/proyek-kedua" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
                  Lihat di GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;



