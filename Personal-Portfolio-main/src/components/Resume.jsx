const Resume = () => {
  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
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
              Develop full-stack web applications using Laravel, React, Node.js, and TypeScript. 
              Design and implement RESTful APIs for scalable systems. 
              Build custom solutions based on client requirements. 
              Create responsive user interfaces with React / Next.js. 
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
              Developed responsive web applications using TypeScript and PHP. 
              Built and integrated APIs for front-end and back-end communication. 
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
              Built scalable RESTful APIs using Node.js and Express.js (MERN stack). 
              Designed and managed MongoDB databases with optimized data models. 
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
              Built backend logic and database schemas using Next.js, Node.js, and Prisma ORM. 
              Implemented secure authentication and role-based access control. 
              Developed and integrated REST APIs with server-side rendering (SSR). 
              Improved application performance, scalability, and code maintainability. 
              Collaborated using Git in an agile development environment.
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
            <span>2022 – 2025</span>
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
