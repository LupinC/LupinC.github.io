const repairGallery = [
  {
    image: "/pictures/aboutme/brake1.jpg",
    caption: "The rear brake hose was broken, so I removed it and replaced it."
  },
  {
    image: "/pictures/aboutme/brake2.jpg",
    caption: "The broken hose after removal."
  },
  {
    image: "/pictures/aboutme/idlearm.jpg",
    caption: "The left idle arm fell off. I put it back on with a jack and two stands."
  },
  {
    image: "/pictures/aboutme/muff1.jpg",
    caption: "The muffler fell off and I mounted it back on."
  },
  {
    image: "/pictures/aboutme/shock1.jpg",
    caption: "Rear-left shock issue caused by retainer failure."
  },
  {
    image: "/pictures/aboutme/shock2.jpg",
    caption: "Fixed with a jack, stands, a wrench, spring compressors, and straps."
  }
];

function AboutPage() {
  return (
    <>
      <section className="card section-block">
        <h1>About Me</h1>
        <p>
          Hi, my preferred name is Lupin, and my legal name is Yuan Cai. I attended high school in
          Austin, TX, ran a marathon at 17, and also played soccer.
        </p>
        <img src="/pictures/aboutme/marathon.jpg" alt="Lupin marathon" className="inline-image narrow" />
      </section>

      <section className="card section-block">
        <h2>Education & Skills</h2>
        <p>
          I studied Applied Mathematics and Computer Science at Emory University. I use Python,
          Java, and SQL fluently and work regularly with AWS EC2, Git, Flask, Gradle, FastAPI,
          Linux, and Nginx. I also speak both Chinese and English.
        </p>
      </section>

      <section className="card section-block">
        <h2>Work Experience</h2>
        <ul className="timeline-list">
          <li>
            <strong>Triangle Accounting (Summer 2023):</strong> Designed and set up a database for
            operations across China and the U.S.
          </li>
          <li>
            <strong>J.P. Morgan Chase (Summer 2024):</strong> AWS Cloud Enablement intern.
          </li>
          <li>
            <strong>Remotask (Spring 2024):</strong> Trained a coding-focused large language model.
          </li>
        </ul>
        <div className="link-row">
          <a href="https://github.com/LupinC" target="_blank" rel="noreferrer" className="btn btn-secondary">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yuan-cai-504230255/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn
          </a>
          <a href="https://www.pixiv.net/en/users/60557889" target="_blank" rel="noreferrer" className="btn btn-secondary">
            Pixiv
          </a>
        </div>
      </section>

      <section className="card section-block">
        <h2>Outside School</h2>
        <p>
          Besides running, I enjoy bank fishing and cars. I used to own a 1970 Chevy Impala and
          handled repairs myself when no shop could take it quickly.
        </p>
        <img src="/pictures/aboutme/me.jpg" alt="Lupin with Impala" className="inline-image" />
        <p>
          Even though the car was troublesome, I still miss it and cherish the time I had with the
          Impala.
        </p>
        <div className="project-grid">
          {repairGallery.map((item) => (
            <article className="project-card" key={item.image}>
              <img src={item.image} alt={item.caption} />
              <p>{item.caption}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage;