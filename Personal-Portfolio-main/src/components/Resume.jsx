const Resume = () => {
  const handleDownloadResume = (e) => {
    e.preventDefault();
    fetch("/FBiruk_Habte.pdf")
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "FBiruk_Habte.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <article className="resume">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="h2 article-title">Experience</h2>
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
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Work Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Backend Developer (Internship)</h4>
            <h5 className="h5 timeline-company">Qemer Software Technology PLC</h5>
            <span>Jul 2025 – Aug 2025</span>
            <p className="timeline-text">
              Developed and maintained backend services for an e-commerce platform using Node.js, Express.js, and MongoDB.
              Built secure RESTful APIs for authentication, products, orders, carts, and user management.
              Implemented JWT authentication, role-based access control, and optimized database performance.
              Collaborated with frontend developers to integrate APIs and deliver scalable, high-performance applications.
            </p>
            <div className="timeline-tech-stack">
              {["Node.js", "Express.js", "MongoDB", "Mongoose", "React", "JWT", "REST APIs", "Git", "Postman"].map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Full-Stack Developer Intern</h4>
            <h5 className="h5 timeline-company">Efuye Gela</h5>
            <span>Sep 2024 – Jan 2025</span>
            <p className="timeline-text">
              Developed and maintained full-stack web applications using Next.js, Express.js, and Supabase.
              Built and integrated secure RESTful APIs, authentication, and database operations with Supabase PostgreSQL.
              Implemented pagination, database indexing, and caching strategies to improve query efficiency and application performance.
              Optimized backend services by reducing response times and improving scalability through efficient database queries and API performance tuning.
              Collaborated with senior developers on feature development, bug fixes, code reviews, testing, and version control using Git.
            </p>
            <div className="timeline-tech-stack">
              {["Next.js", "React", "Node.js", "Express.js", "Supabase", "PostgreSQL", "TypeScript", "Git"].map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="code-slash-outline"></ion-icon>
          </div>
          <h3 className="h3">Projects</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">School Management System</h4>
            <h5 className="h5 timeline-company">Private Client</h5>
            <p className="timeline-text">
              Developed a full-stack School Management System for Ethiopian schools with dedicated Admin, Teacher, Student, and Parent web portals.
              Built secure RESTful APIs with JWT authentication, role-based access control (RBAC), real-time communication, and file upload capabilities.
              Developed modules for student registration, attendance, examinations, grade management, fee collection, payroll, communication, and reporting.
              Integrated the Chapa payment gateway, PDF report generation, real-time notifications, Redis caching, and Docker-based deployment.
            </p>
            <div className="timeline-tech-stack">
              {["Node.js", "Express.js", "TypeScript", "Prisma ORM", "MySQL", "Next.js", "React", "Tailwind CSS", "Socket.IO", "Redis", "JWT", "Docker", "Swagger", "Chapa API"].map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">PharmaCare – Pharmacy Management System</h4>
            <h5 className="h5 timeline-company">Personal Project</h5>
            <p className="timeline-text">
              Designed and developed a full-stack Pharmacy Management System to streamline medicine inventory, sales, purchases, prescriptions, customer management, and supplier management.
              Built secure RESTful APIs and implemented role-based access control (RBAC) for Head Pharmacist, Counter Staff, and Inventory Manager.
              Implemented inventory management with batch tracking, expiry alerts, purchase order processing, and audit logging.
              Developed an interactive dashboard with real-time sales analytics, top-selling medicines, key performance indicators (KPIs), and notifications.
            </p>
            <div className="timeline-tech-stack">
              {["Next.js 14", "React 19", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Vercel", "Render"].map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">PowerLink Ethiopia – Electrical Utility Management System</h4>
            <h5 className="h5 timeline-company">Personal Project</h5>
            <p className="timeline-text">
              Engineered a scalable full-stack platform using Node.js, Express.js, PostgreSQL, React, and React Native to modernize electrical utility service management.
              Implemented Role-Based Access Control (RBAC) for five user roles: Admin, Customer, Business, Supervisor, and Technician.
              Developed modules for service requests, new electricity connections, outage management, customer profiles, announcements, and administrative dashboards.
              Integrated Socket.io for real-time chat and notifications, JWT authentication with bcryptjs, secure file uploads with Multer, email notifications with Nodemailer, and online payments through the Chapa Payment Gateway.
              Designed a scalable backend architecture with PostgreSQL, Docker-ready deployment, and Supabase migration support for maintainability and performance.
            </p>
            <div className="timeline-tech-stack">
              {["Node.js", "Express.js", "PostgreSQL", "React", "React Native", "Socket.io", "JWT", "Docker", "Supabase"].map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Car Rental Management System</h4>
            <h5 className="h5 timeline-company">Academic Project</h5>
            <p className="timeline-text">
              Designed and developed a full-stack Car Rental Management System using PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap.
              Designed the database through conceptual, logical, and physical modeling, applying normalization up to Third Normal Form (3NF) to ensure data integrity and reduce redundancy.
              Developed modules for vehicle management, customer registration, booking, rental processing, and payment records.
              Built secure CRUD operations, user authentication, and responsive user interfaces.
              Collaborated with team members across the full software development lifecycle, from requirements analysis to testing and deployment.
            </p>
            <div className="timeline-tech-stack">
              {["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"].map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="school-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Bachelor of Science in Information Systems
            </h4>
            <h5 className="h5 timeline-company">Addis Ababa University</h5>
            <span>2026</span>
            <p className="timeline-text">
              Completed a comprehensive program covering software development, database management,
              system analysis and design, web technologies, and information security.
              Gained a strong foundation in programming, data structures, algorithms, and modern development practices.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
