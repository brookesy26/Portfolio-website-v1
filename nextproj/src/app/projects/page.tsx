import jsonData from "./projects.json"

export default function Projects() {
  return (
    jsonData.map((project, i) => (
      <section key={project.title}>
        <p key={project.title}>{project.title}</p>
        <p key={i}>{project.text}</p>
        <ul key={project.title}>
          <p>Features:</p>
          {project.features.map((feature, ii) => (
            <li key={ii}>{feature}</li>
          ))}
        </ul>
        <p>Test it out <a href={project.URL}>here</a></p>
      </section>
    )))
}
