import { useState } from "react";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleDownloadResume = (e) => {
    e.preventDefault();
    fetch("/BirukCv_main%20(8).pdf")
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "BirukCv_main(8).pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  };

  const skillCategories = [
    {
      category: "Frontend",
      icon: "code-slash-outline",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
      ],
    },
    {
      category: "Backend",
      icon: "server-outline",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
        { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", color: "#E0234E" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777BB4" },
        { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", color: "#FF2D20" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "#092E20" },
      ],
    },
    {
      category: "Database",
      icon: "file-tray-stacked-outline",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
        { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", color: "#2D3748" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", color: "#3ECF8E" },
      ],
    },
    {
      category: "Cloud & Hosting",
      icon: "cloud-outline",
      skills: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "#FF9900" },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", color: "#000000" },
        { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", color: "#00C7B7" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
      ],
    },
    {
      category: "Tools & Version Control",
      icon: "git-branch-outline",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
        { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", color: "#2D3748" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", color: "#3ECF8E" },
      ],
    },
  ];

  const filterButtons = [
    { name: "All", icon: "globe-outline" },
    { name: "Frontend", icon: "code-slash-outline" },
    { name: "Backend", icon: "server-outline" },
    { name: "Database", icon: "file-tray-stacked-outline" },
    { name: "Cloud & Hosting", icon: "cloud-outline" },
    { name: "Tools & Version Control", icon: "git-branch-outline" },
  ];

  const filteredSkills =
    activeFilter === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeFilter);

  return (
    <article className="skills">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="h2 article-title">Skills</h2>
        <button
          className="download-resume-btn"
          onClick={handleDownloadResume}
          style={{ marginTop: 0 }}
        >
          <ion-icon name="download-outline"></ion-icon>
          <span>Download Resume</span>
        </button>
      </header>

      <section className="skill-filters">
        <ul className="filter-list">
          {filterButtons.map((filter, index) => (
            <li className="filter-item" key={index}>
              <button
                className={`filter-btn ${
                  activeFilter === filter.name ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter.name)}
              >
                <ion-icon name={filter.icon}></ion-icon>
                <span>{filter.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="skills-grid-container">
        {filteredSkills.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {activeFilter === "All" && (
              <div className="skill-category-header">
                <div className="icon-box">
                  <ion-icon name={category.icon}></ion-icon>
                </div>
                <h3 className="h3">{category.category}</h3>
              </div>
            )}
            <ul className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <li className="skill-card" key={skillIndex}>
                  <div className="skill-icon">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                    />
                  </div>
                  <h5 className="skill-name" style={{ color: '#ffffff' }}>{skill.name}</h5>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Skills;
