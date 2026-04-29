const MobileContacts = () => {
  return (
    <div className="mobile">
      <div className="separator"></div>

      <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a href="mailto:raro@example.com" className="contact-link">
              habtebiruk13@gmail.com
            </a>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Phone</p>
            <a href="tel:+12133522795" className="contact-link">
              0995871152
            </a>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <address>Addis Ababa, Ethiopia</address>
          </div>
        </li>
      </ul>

      <div className="separator"></div>

      <ul className="social-list">
        <li className="social-item">
          <a href="https://github.com/birukhabte" className="social-link" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li className="social-item">
          <a href="https://t.me/Web_developer13" className="social-link" target="_blank" rel="noopener noreferrer">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileContacts;
