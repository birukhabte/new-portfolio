import { services } from "../lib/constant";

const About = () => {
  const handleDownloadResume = (e) => {
    e.preventDefault();
    fetch("/Biruk_Habte_Resume%20(3).pdf")
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "Biruk_Habte_Resume (3).pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <article className="about">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="h2 article-title">About me</h2>
        <button
          className="download-resume-btn"
          onClick={handleDownloadResume}
          style={{ marginTop: 0 }}
        >
          <ion-icon name="download-outline"></ion-icon>
          <span>Download Resume</span>
        </button>
      </header>
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li className="service-item" key={index}>
              <div className="service-icon-box">
                <img src={service.icon} alt={service.title} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
