const projects = [
  {
    title: "Project BookBot",
    image: "/pictures/portfolioS/bookbot2.png",
    description:
      "Upload textbooks as PDFs and ask questions with an AI assistant. Built with React frontend, Python + FastAPI backend, and deployed for practical use.",
    links: [{ label: "Project Demo", url: "https://www.youtube.com/watch?v=kVrxWpfoB80" }]
  },
  {
    title: "2D Game Engine",
    image: "/pictures/portfolioS/2dengine.jpg",
    description:
      "A Java-based 2D engine with IMGUI integration, including custom sprite work and gameplay systems prototyping.",
    links: [{ label: "Project Demo", url: "https://youtu.be/3vYuEPzx0LM" }]
  },
  {
    title: "Dream Renderer",
    image: "/pictures/portfolioS/sea2.jpg",
    description:
      "Built in Unreal Engine 5 to create surreal and vivid interactive scenes for visual immersion.",
    links: [
      {
        label: "Medium Post",
        url: "https://medium.com/@rheara4/imagination-is-gold-employ-vr-to-provide-an-immersive-visual-experience-for-people-with-aphantasia-b47c48b5c260"
      },
      { label: "Demo 1", url: "https://youtu.be/fee-ZcGDKyw" },
      { label: "Demo 2", url: "https://youtu.be/vcDVhXcle1k" }
    ]
  },
  {
    title: "Nuclear Explosion Data Visualization",
    image: "/pictures/portfolioS/nukepixel.jpg",
    description:
      "Visual storytelling project based on global nuclear testing data to help audiences understand scale and historical impact.",
    links: [
      {
        label: "Medium Post",
        url: "https://medium.com/@cole.smith/design-for-understanding-nuclear-testing-3e766a4447be"
      },
      {
        label: "Demo 1",
        url: "https://www.loom.com/share/ff045c33650a4b7d9b0c548f26250bdd?sid=e79fb080-16d0-45be-8e92-242012048816"
      },
      {
        label: "Demo 2",
        url: "https://www.loom.com/share/b4ea518e236346d08922888bef8772da?sid=26d6e3aa-1342-4dfd-8d30-3763551da637"
      }
    ]
  },
  {
    title: "Nuke Mobil",
    image: "/pictures/portfolioS/obj1.jpg",
    description:
      "A continuation of the nuclear visualization work, comparing blast scales from Little Boy to Tsar Bomba.",
    links: [
      { label: "Medium Post", url: "https://medium.com/@cole.smith/i-have-become-data-b56f1edeb13f" },
      { label: "Demo 1", url: "https://youtu.be/FtsK28ho7xI" },
      { label: "Demo 2", url: "https://youtu.be/_BoH1koe-Fg" }
    ]
  },
  {
    title: "Website Redesign",
    image: "/pictures/portfolioS/redesign.jpg",
    description:
      "A UI/UX redesign project in Figma for TV, laptop, and phone layouts with accessibility and navigation improvements.",
    links: [
      {
        label: "Medium Post",
        url: "https://medium.com/@lupin.cai/redesigning-website-queermed-for-more-target-audiences-8cef35059089"
      },
      {
        label: "Phone Layout",
        url: "https://www.figma.com/file/PNWbhqU9KoxsUg4FwXmdYD/HCI_QMedonPhone?type=design&node-id=0%3A1&mode=design&t=kOMV1Y0QtVt5hIYZ-1/"
      },
      {
        label: "Laptop Layout",
        url: "https://www.figma.com/file/sqGMSpbaHvtoxpjXTyDTE4/CS485-HW4-Laptop-Size?type=design&node-id=0%3A1&mode=design&t=QpCNseWJGMhx1woe-1"
      },
      {
        label: "TV Layout",
        url: "https://www.figma.com/file/MIoIrgzgMpKvr5dBsa2DKT/Large-Screen?type=design&node-id=0%3A1&mode=design&t=z0XGtfZDJWAphRCb-1"
      }
    ]
  }
];

function PortfolioPage() {
  return (
    <section className="section-block">
      <h1>Projects</h1>
      <p className="section-subtitle">Selected projects from software engineering, data, game systems, and UX.</p>

      <div className="portfolio-list">
        {projects.map((project) => (
          <article className="portfolio-row card" key={project.title}>
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="link-row">
                {project.links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;