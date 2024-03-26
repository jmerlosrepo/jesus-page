import portfolioData from "../../../data.json";
import ProjectContainer from "../../ProjectContainer/ProjectContainer";

const Portfolio = () => {
  const { portfolioIntro, projects } = portfolioData.portfolio;

  return (
    <div>
      <header>
        {portfolioIntro.map((introParagraph, index) => (
          <p key={index}>{introParagraph}</p>
        ))}
      </header>
      <section>
        {projects.map((project, index) => (
          <ProjectContainer
            key={index}
            title={project.title}
            technologiesUsed={project.technologies}
            description={project.description}
            images={project.images}
            gitUrl={project.gitUrl}
          />
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
