import projects from '@/constants/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <article id='projects'>
      <h2 className='text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-500 to-blue-200 text-center'>
        Mis Proyectos y Experiencia
      </h2>
      <div className='flex gap-5 flex-wrap justify-center'>
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            gitHubUrl={project.gitHubUrl}
            projectUrl={project.projectUrl}
            stack={project.stack}
            role={project.role}
          />
        ))}
      </div>
    </article>
  );
};

export default ProjectsSection;
