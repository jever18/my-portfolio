// src/components/Contact.tsx

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container-custom">
        <h2 className="display-5 fw-bold text-center mb-5">
         Hubungi <span className="text-gradient">Saya</span>
        </h2>
        <div className="text-center">
          <p className="lead text-body-secondary mb-4">
            Tertarik untuk berkolaborasi atau sekadar bertanya? Jangan ragu untuk menghubungi saya!
          </p>
          <div className="d-flex justify-content-center">
            <a href="mailto:sonduly18@gmail.com.com" className="btn btn-primary mx-2">
              Kirim Email
            </a>
            <a href="https://wa.me/6282237182890" className="btn btn-success mx-2" target="_blank" rel="noopener noreferrer">
              Kirim WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
