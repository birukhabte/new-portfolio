import { useState, useEffect } from "react";
import { projects } from "../lib/constant";

const Portfolio = () => {
  const categories = ["All", "Web Design", "Applications", "Web Development"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState({});

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

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndex = { ...prev };
        filteredProjects.forEach((project, index) => {
          if (project.images && project.images.length > 1) {
            const current = newIndex[index] || 0;
            newIndex[index] = (current + 1) % project.images.length;
          }
        });
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [filteredProjects]);

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
          {filteredProjects.map((project, index) => {
            const displayImage = project.images 
              ? project.images[currentImageIndex[index] || 0]
              : project.img;
            
            return (
              <li key={index} className="">
                <div className="project-card">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src={displayImage} alt={project.title} loading="lazy" />
                    {project.images && project.images.length > 1 && (
                      <div className="image-indicators">
                        {project.images.map((_, imgIndex) => (
                          <span 
                            key={imgIndex} 
                            className={`indicator ${(currentImageIndex[index] || 0) === imgIndex ? 'active' : ''}`}
                          ></span>
                        ))}
                      </div>
                    )}
                    <div className="project-hover-links">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link-icon"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ion-icon name="logo-github"></ion-icon>
                        </a>
                      )}
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link-icon"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ion-icon name="link-outline"></ion-icon>
                        </a>
                      )}
                    </div>
                  </figure>
                  <div className="project-content">
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
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
