import "./portfolio.css";

import IMG1 from "../../assets/2024 pop music desktop.PNG";
import IMG2 from "../../assets/doctors image.jfif";
import IMG3 from "../../assets/budget app.png";
import IMG4 from "../../assets/netmovies.png";
import IMG5 from "../../assets/bookapp.PNG";
import IMG6 from "../../assets/Health.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Music Concert lovers",
      img: IMG1,
      description:
        "It is the website for a Music events company,for music lover to buy tickets",
      technologies: "Javascript | CSS | SCSS | Styled Component",
      link: "https://kayjeee.github.io/2024-Pop-concert/",
      Sourcelink: "https://kayjeee.github.io/2024-Pop-concert",
    },
    {
      id: 2,
      title: "Doctors appoinments",
      img: IMG2,
      description:
        "Doctors appoinments is an upselling platform that helps consumers get better more for their money.",
      technologies: "React | Rails |",
      link: "https://bookitnow-app.onrender.com/",
      Sourcelink: "https://github.com/cosywasswa/BookItNow-front-end/",
    },
    {
      id: 3,
      title: "Budget app",
      img: IMG3,
      description:
        "Budget app streamlines your bank account helping you save and plan the operations in in daily life and is highly productive as a software solutions.",
      technologies: "Rails | React",
      link: "https://mybudgetapp-u04z.onrender.com/",
      Sourcelink: "https://github.com/cosywasswa/BookItNow-front-end/",
    },
    {
      id: 4,
      title: "Netmovies",
      img: IMG4,
      description:
        "Netmovies is a local un funded platform for watching the movies good as a startup equity business.",
      technologies: "Remix | React.js | Webflow | jQuery",
      link: "https://kayjeee.github.io/Group-capstone/dist/",
      Sourcelink: "https://github.com/kayjeee/Group-capstone/",
    },
    {
      id: 5,
      title: "Bookapp",
      img: IMG5,
      description:
        "Bookapp is a simple app for book lovers to keep track of the favourite books in a list.",
      technologies: "React |  CSS",
      link: "https://kayjeee.github.io/ES6bookswebsite-/",
      Sourcelink: "https://github.com/kayjeee/ES6bookswebsite-/",
    },
    {
      id: 6,
      title: "Leaderboard",
      img: IMG6,
      description:
        "A place wher gamers can beat and brag by placing their score on a board.",
      technologies: "Javascript | Html ",
      link: "https://kayjeee.github.io/webpack-todolist//",
      Sourcelink: "https://github.com/kayjeee/leaderboard-v2/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                href={pro.Sourcelink}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Source Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
