import { useState } from "react";

const experiences = [
  {
    title: "Software Developer",
    company: "Kuraz Technologies PLC",
    period: "02/2023 – 08/2023 | Addis Ababa",
    points: [
      <>Developed and maintained full-stack web applications using <strong>React.js, Next.js, Node.js, and PostgreSQL</strong> within a microservices architecture.</>,
      <>Led end-to-end database design: gathered data requirements, built the conceptual → logical → physical data models.</>,
      <>Applied normalization (up to 3NF), and implemented indexing to balance integrity with query performance.</>,
      <>Designed secure <strong>RESTful APIs</strong> with JWT authentication and RBAC, following OWASP security guidelines and secure coding best practices.</>,
      <>Optimized application performance via <strong>Redis</strong> caching and PostgreSQL query tuning, achieving measurable reductions in server load.</>,
      <>Supported Docker-based deployment pipelines and PM2 process management within CI/CD workflows.</>,
    ],
  },
  {
    title: "Backend Developer",
    company: "Qemer Software Technology PLC",
    period: "10/2023 – 06/2024 | Addis Ababa",
    points: [
      <>Built scalable <strong>MERN-stack RESTful APIs</strong> handling high-concurrency workloads, with Redis caching improving average API response time by 35%.</>,
      <>Designed <strong>MongoDB</strong> schemas with optimized indexing and aggregation pipelines for efficient data retrieval across large datasets.</>,
      <>Developed JWT-based authentication and integrated multiple third-party APIs including Chapa and Telebirr and notification services.</>,
      <>Partnered with frontend React developers to deliver seamless full-stack features with minimal integration friction.</>,
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Gasha Digital Technologies",
    period: "07/2024 – 02/2025 | Addis Ababa",
    points: [
      <>Built and maintained full-stack web applications end-to-end with <strong>Next.js and Node.js</strong>, delivering SSR-powered pages for faster load times and improved SEO.</>,
      <>Designed and implemented relational database schemas using <strong>Prisma ORM and MySQL</strong>, applying indexing strategies that reduced critical query latency.</>,
      <>Optimized data delivery with Next.js caching, cutting redundant database queries and improving API throughput under peak load.</>,
      <>Improved large-dataset performance through query optimization, pagination, and lazy loading, reducing initial page load and over-fetching.</>,
      <>Developed and consumed <strong>RESTful APIs</strong>, integrating Next.js components with backend services for seamless data flow.</>,
      <>Implemented RBAC and secure authentication flows, protecting sensitive application data across multiple user roles.</>,
      <>Built responsive, accessible UIs with <strong>React and Tailwind CSS</strong>, translating design mockups into production-ready components.</>,
      <>Maintained Git-based CI/CD workflows and collaborated in an agile team to ship features on schedule.</>,
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Farka Digital Technologies",
    period: "02/2025 – 03/2026 | Addis Ababa",
    points: [
      <>Architected and delivered enterprise web applications with <strong>NestJS, React, and TypeScript</strong>, through async processing and query optimization.</>,
      <>Designed and enforced <strong>Zod</strong> schema validation across all API boundaries, eliminating a class of runtime type errors and improving data reliability.</>,
      <>Defined API standards and architecture conventions adopted across the engineering team, improving consistency and maintainability.</>,
      <>Mentored 2–3 junior developers through code reviews and pair programming, raising code quality and delivery speed.</>,
      <>Led adoption of <strong>Redux Toolkit</strong> for centralized state management, reducing state-related bugs across complex multi-user workflows.</>,
      <>Built a reusable, accessible UI component library adopted across 4 product modules, accelerating new-feature development and ensuring design consistency.</>,
      <>Championed <strong>Docker</strong> containerization, standardizing dev/staging/production parity and reducing environment-related deployment issues to near zero.</>,
      <>Collaborated directly with designers and product owners to translate business requirements into scalable technical solutions.</>,
    ],
  },
  {
    title: "Senior Freelance Full-Stack Developer",
    company: "Self-Employed (Remote)",
    period: "",
    points: [
      <>Delivered custom web applications for private clients using <strong>Laravel, React, Node.js, and TypeScript</strong>, consistently meeting deadlines and exceeding client expectations.</>,
      <>Designed backend systems with secure authentication, role-based access, and third-party API integrations including payment and notification services.</>,
      <>Managed full project lifecycle from requirements gathering and architecture design through deployment and post-launch support.</>,
      <>Built responsive, accessible UIs using <strong>React/Next.js</strong> tailored to specific business requirements.</>,
    ],
  },
];

const VISIBLE_POINTS = 2;

const Resume = () => {
  const [expanded, setExpanded] = useState({});

  const toggle = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

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
          {experiences.map((exp, index) => {
            const isExpanded = expanded[index];
            const visiblePoints = isExpanded
              ? exp.points
              : exp.points.slice(0, VISIBLE_POINTS);
            const hasMore = exp.points.length > VISIBLE_POINTS;

            return (
              <li className="timeline-item" key={index}>
                <h4 className="h4 timeline-item-title">{exp.title}</h4>
                <h5 className="h5 timeline-company">{exp.company}</h5>
                {exp.period && <span>{exp.period}</span>}
                <ul className="timeline-text">
                  {visiblePoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {hasMore && (
                  <button
                    className="see-more-btn"
                    onClick={() => toggle(index)}
                  >
                    {isExpanded ? "See less" : "See more"}
                  </button>
                )}
              </li>
            );
          })}
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
