import { useState } from "react";
import { projects } from "../lib/constant";

const Portfolio = () => {
  const categories = ["All", "Web Design", "Applications", "Web Development"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState({});

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const toggleDescription = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <article className="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          {categories.map((cat) => (
            <li className="filter-item" key={cat}>
              <button
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li key={index} className="">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                {project.description && (
                  <div>
                    <p className={`project-description ${expandedProjects[index] ? 'expanded' : ''}`}>
                      {project.description}
                    </p>
                    <button 
                      className="see-more-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDescription(index);
                      }}
                    >
                      {expandedProjects[index] ? 'Show Less' : 'See More'}
                    </button>
                  </div>
                )}
                {project.techStack && (
                  <div className="project-tech-stack">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
