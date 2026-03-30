import { Link } from "react-router-dom";

const featuredProjects = [
  {
    image: "/pictures/indexs/bookbot.jpg",
    title: "BookBot",
    description: "A document QA website with AI chatbot support, created before GPT-4 release."
  },
  {
    image: "/pictures/indexs/sea.jpg",
    title: "Dream Puzzle",
    description: "A small puzzle-solving game inspired by dream-like world building."
  },
  {
    image: "/pictures/indexs/nuclear.jpg",
    title: "Nuclear Visualization",
    description: "A data visualization project focused on the history of nuclear testing."
  },
  {
    image: "/pictures/indexs/2dengien.jpg",
    title: "2D Engine",
    description: "A Mario-inspired 2D engine implementation built for game systems practice."
  }
];

function HomePage() {
  return (
    <>
      <section className="hero card">
        <div className="hero-text">
          <p className="eyebrow">Software Engineer</p>
          <h1>Hi, I am Lupin.</h1>
          <p>
            Applied Mathematics & Computer Science graduate from Emory University, focused on
            backend engineering, cloud deployment, and practical product development.
          </p>
          <div className="hero-cta">
            <Link to="/portfolio" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About Me
            </Link>
          </div>
        </div>
        <img src="/pictures/indexs/preview.jpg" alt="Lupin preview" className="hero-image" />
      </section>

      <section className="card section-block">
        <h2>Quick Intro</h2>
        <div className="grid-two">
          <p>
            I graduated in 2025 with honors in computer science and I enjoy working across web and
            app development environments.
          </p>
          <p>
            Outside of engineering, I enjoy gaming, cars, and visual creativity. I competed in a
            World of Warships tournament in 2023.
          </p>
        </div>
      </section>

      <section className="section-block">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;