function ProjectCard({ title, description, stack, repo, demo }) {
    return (
    <article>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Tecnologias:</strong> {stack}</p>
        <a href={repo} target="_blank" rel="noopener noreferrer">
        Repositório
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
        Deploy
        </a>
    </article>
    )
}

export default ProjectCard