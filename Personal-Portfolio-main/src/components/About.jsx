import { services } from "../lib/constant";

const About = () => {
  return (
    <article className="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
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
