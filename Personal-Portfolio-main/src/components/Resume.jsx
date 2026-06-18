const Resume = () => {
  const handleDownloadResume = (e) => {
    e.preventDefault();
    const a = document.createElement('a');
    a.href = "/Biruk_Habte_Senior_Resume%20(2).pdf";
    a.download = "Biruk_Habte_Senior_Resume (2).pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <article className="resume">
      <header className="section-header">
        <h2 className="h2 article-title">Resume</h2>
        <button
          className="download-resume-btn"
          onClick={handleDownloadResume}
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
            <h4 className="h4 timeline-item-title">Software Developer</h4>
            <h5 className="h5 timeline-company">Kuraz Technologies PLC</h5>
            <span>02/2023 – 08/2023 | Addis Ababa</span>
            <p className="timeline-text">
              Developed and maintained full-stack web applications using <strong>React.js, Next.js, Node.js, and PostgreSQL</strong> within a microservices architecture.
              Designed secure <strong>RESTful APIs</strong> with <strong>JWT</strong> authentication and <strong>RBAC</strong>, following OWASP security guidelines and secure coding best practices.
              Optimized application performance via <strong>Redis</strong> caching and PostgreSQL query tuning, achieving measurable reductions in server load.
              Supported <strong>Docker</strong>-based deployment pipelines and <strong>PM2</strong> process management within CI/CD workflows.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Backend Developer</h4>
            <h5 className="h5 timeline-company">Qemer Software Technology PLC</h5>
            <span>10/2023 – 06/2024 | Addis Ababa</span>
            <p className="timeline-text">
              Built scalable <strong>MERN-stack RESTful APIs</strong> handling high-concurrency workloads, with <strong>Redis</strong> caching improving average API response time.
              Designed <strong>MongoDB</strong> schemas with optimized indexing and aggregation pipelines for efficient data retrieval across large datasets.
              Developed <strong>JWT</strong>-based authentication and integrated multiple third-party APIs including payment gateways and notification services.
              Partnered with frontend <strong>React</strong> developers to deliver seamless full-stack features with minimal integration friction.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Full-Stack Developer</h4>
            <h5 className="h5 timeline-company">Gasha Digital Technologies</h5>
            <span>07/2024 – 02/2025 | Addis Ababa</span>
            <p className="timeline-text">
              Designed and implemented relational database schemas using <strong>Prisma ORM and MySQL</strong>, applying indexing strategies that reduced critical query latency by over 60%.
              Built and maintained <strong>RESTful APIs</strong> with <strong>Next.js and Node.js</strong>, serving SSR-powered pages that improved Lighthouse performance.
              Implemented <strong>RBAC</strong> and secure authentication flows protecting sensitive application data across multiple user roles.
              Introduced a caching layer reducing redundant database queries by 45%, directly improving API throughput under peak load.
              Maintained <strong>Git</strong>-based CI/CD workflows in an agile team, consistently delivering on 2-week sprint cycles.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Senior Full-Stack Developer</h4>
            <h5 className="h5 timeline-company">Farka Digital Technologies</h5>
            <span>02/2025 – 03/2026 | Addis Ababa</span>
            <p className="timeline-text">
              Architected and delivered enterprise web applications using <strong>NestJS, React, and TypeScript</strong>, reducing system response latency by 35% through async processing and query optimization.
              Led adoption of <strong>Redux Toolkit</strong> for centralized state management, cutting the frontend bug rate across complex multi-user workflows.
              Designed and enforced <strong>Zod</strong>-based schema validation across all API boundaries, eliminating a class of runtime type errors and improving data reliability.
              Built a reusable, accessible UI component library used across 4 product modules, cutting new feature UI development time.
              Championed containerization with <strong>Docker</strong>, standardizing dev/staging/production parity and reducing environment-related deployment issues to near zero.
              Collaborated directly with designers and product owners to translate business requirements into scalable technical solutions.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Senior Freelance Full-Stack Developer</h4>
            <h5 className="h5 timeline-company">Self-Employed (Remote)</h5>
            <span>2023 – Present | Remote</span>
            <p className="timeline-text">
              Delivered custom web applications for private clients using <strong>Laravel, React, Node.js, and TypeScript</strong>, consistently meeting deadlines and exceeding client expectations.
              Designed backend systems with secure authentication, role-based access, and third-party API integrations including payment and notification services.
              Managed the full project lifecycle from requirements gathering and architecture design through deployment and post-launch support.
              Built responsive, accessible UIs using <strong>React / Next.js</strong> tailored to specific business requirements.
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
            <span>2024</span>
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
