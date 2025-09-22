import catIllustration from '../assets/cats.png';

function HeroSection() {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Hello, you found me.</h1>
          <h2 className="display-4 fw-bold">
            <span className="text-dark">I'm</span> <span className="text-gradient">[Jever18]</span>. Welcome to my <span className="text-gradient">digital</span> home.
          </h2>
          <p className="lead text-body-secondary">
            This isn't a blog. It's a portfolio. It's a place to share my thoughts on web development. It's also a small corner about how I manage and understand myself.
          </p>
          <div className="d-flex justify-content-center">
            <a href="#" className="btn btn-primary my-2">Get to know me</a>
            <a href="#" className="btn btn-secondary my-2 ms-2">See my projects</a>
          </div>
        </div>
      </div>
      <img src={catIllustration} alt="Cat Illustration" className="img-fluid" />
    </section>
  );
}

export default HeroSection;
