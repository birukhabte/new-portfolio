import { useState, useEffect } from "react";
import MobileContacts from "./MobileContacts";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);
  const [isOpen, setIsOpen] = useState(!isMobile); // Open only if not mobile

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 1250;
      setIsMobile(mobileView);
      setIsOpen(!mobileView); // Keep open on large screens, toggle on mobile
      console.log(("size:", window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/logo.png" alt="avatar" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name">Biruk Habte</h1>
          <p className="title">FullStack Developer</p>
        </div>
        {/* Button to toggle sidebar */}
        <button
          className="info-more-btn"
          data-sidebar-btn
          onClick={toggleSidebar}
        >
          <span>{isOpen ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon name={isOpen ? "chevron-up" : "chevron-down"}></ion-icon>
        </button>
      </div>

      {isMobile && isOpen && <MobileContacts />}

      {/* Contacts Section */}
      <div className={isMobile ? "hidden" : "visible"}>
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

        <div className="separator"></div>

        <a href="/resume.pdf" download className="download-resume-btn">
          <ion-icon name="download-outline"></ion-icon>
          <span>Download Resume</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
