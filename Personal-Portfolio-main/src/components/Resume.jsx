const Resume = () => {
  const handleDownloadResume = (e) => {
    e.preventDefault();
    fetch("/BIruk_Habte_CV_Fr.pdf")
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "BIruk_Habte_CV_Fr.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <article className="resume">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="h2 article-title">Resume</h2>
        <button
          className="download-resume-btn"
          onClick={handleDownloadResume}
          style={{ marginTop: 0 }}
        >
          <ion-icon name="download-outline"></ion-icon>
          <span>Download Resume</span>
        </button>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Full Stack Developer (Remote & Freelance / Private Clients)</h4>
            <h5 className="h5 timeline-company">Self-Employed</h5>
            <span>05/2024 – Present</span>
            <p className="timeline-text">
              Develop full-stack web applications using <strong>Laravel, React, Node.js, and TypeScript</strong>. 
              Design and implement <strong>RESTful APIs</strong> for scalable systems. 
              Build custom solutions based on client requirements. 
              Create responsive user interfaces with <strong>React / Next.js</strong>. 
              Implement secure back-end systems, including authentication and database design. 
              Integrate third-party services such as payment gateways and external APIs. 
              Optimize performance, debug issues, and maintain application reliability. 
              Manage client communication, project delivery, and ongoing support.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Junior Full Stack Developer (Internship)</h4>
            <h5 className="h5 timeline-company">SWENETIX TECH</h5>
            <span>01/2024 – 03/2024 | Addis Ababa</span>
            <p className="timeline-text">
              Developed responsive web applications using <strong>TypeScript and PHP</strong>. 
              Built and integrated <strong>APIs</strong> for front-end and back-end communication. 
              Contributed to both UI development and server-side logic. 
              Collaborated with a team on real-world projects. 
              Gained hands-on experience in full-stack development and best practices.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Backend Developer</h4>
            <h5 className="h5 timeline-company">Qemer Software Technology PLC</h5>
            <span>09/2024 – 01/2025 | Addis Ababa</span>
            <p className="timeline-text">
              Built scalable <strong>RESTful APIs using Node.js and Express.js</strong> (MERN stack). 
              Designed and managed <strong>MongoDB</strong> databases with optimized data models. 
              Implemented authentication and integrated third-party APIs. 
              Collaborated with frontend developers to deliver seamless applications. 
              Debugged and optimized performance while maintaining clean, maintainable code.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Full Stack Developer</h4>
            <h5 className="h5 timeline-company">Gasha Digital Technologies</h5>
            <span>06/2025 – 11/2025 | Addis Ababa</span>
            <p className="timeline-text">
              Built backend logic and database schemas using <strong>Next.js, Node.js, and Prisma ORM</strong>. 
              Implemented secure authentication and role-based access control. 
              Developed and integrated <strong>REST APIs</strong> with server-side rendering (SSR). 
              Improved application performance, scalability, and code maintainability. 
              Collaborated using <strong>Git</strong> in an agile development environment.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Full Stack Developer</h4>
            <h5 className="h5 timeline-company">Farka Digital Technologies</h5>
            <span>12/2025 – 03/2026 | Addis Ababa</span>
            <p className="timeline-text">
              Created and improved enterprise web applications leveraging <strong>NestJS, React, and TypeScript</strong>.
              Implemented centralized state management with <strong>Redux Toolkit</strong> for better app performance and complex frontend logic.
              Used <strong>Zod</strong> for schema validation and type-safety to minimize runtime errors and make forms more reliable.
              Designed reusable UI components and responsive interfaces ensuring consistent user experience on all devices.
              Implemented containerization using <strong>Docker</strong> for easier development, testing, and deployment.
              Connected backend services, third-party APIs, and external systems to facilitate company operations.
              Worked with designers, product owners, and fellow developers to create features per business needs.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Bachelor of Science in Information Systems
            </h4>
            <h5 className="h5 timeline-company">Addis Ababa University</h5>
            <span>2023 – 2026</span>
            <p className="timeline-text">
              Completed a comprehensive program covering software development, database management, 
              system analysis and design, web technologies, and information security. 
              Gained strong foundation in programming, data structures, algorithms, and modern development practices.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
