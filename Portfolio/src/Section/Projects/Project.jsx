import React from "react";
import "./Projects.css";

import img1 from "../../assest/project1.png";
import img2 from "../../assest/project2.png";
import img3 from "../../assest/project3.png";
import Tech_stack from "./../Tech_Stack/Tech_stack";

const data = [
  {
    id: 1,
    image: img1,
    title: "Diva",
    github: "https://github.com/alih6051/Diva",
    demo: "https://diva-ecom.netlify.app/",
    description:
      " Diva is a clone of Nykaa.com. It sells beauty wellness and fashion products. The brand specialises in facilitating an extensive collection of cosmetics, skincare, haircare, fragrances, bath and body, luxury as well as wellness products for both women and men.",
    Tech_stack: "JavaScript , HTML , CSS , Bootstrap, JSON Server",
  },

  {
    id: 2,
    image: img2,
    title: "Superficial",
    github: "https://github.com/rohit715131/devout-sock-1399",
    demo: "https://devout-sock-1399.vercel.app/",
    description:
      "Superficial is a clone of sugercosmetic.com. It sells beauty wellness and fashion products. The brand specialises in facilitating an extensive collection of cosmetics, skincare, haircare, fragrances, bath and body, luxury as well as wellness products for both women and men. ",
    Tech_stack: "JavaScript , HTML , CSS, ReactJs, Chakra UI, JSON Server",
  },
  {
    id: 3,
    image: img3,
    title: "Sendinblue Clone",
    github: "https://github.com/rohit715131/decorous-coach-433",
    demo: "https://magenta-sawine-9e74dc.netlify.app/index.html",
    description:
      "Sendinblue is the smartest and most intuitive platform for growing businesses. Thrive digitally as we guide your business with the right marketing & sales tools.",
    Tech_stack: "JavaScript , HTML , CSS , Bootstrap",
  },
];
const Project = () => {
  return (
    <section id="Project">
      <h2 className="main_head">My Recent Projects</h2>

      <div className="container Project__container">
        {data.map(
          ({ id, image, title, description, Tech_stack, github, demo }) => {
            return (
              <article key={id} className="Project__item">
                <div className="Project__item-image">
                  <img src={image} alt={title} width="300px" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>TechStack:- {Tech_stack}</p>
                <div className="Project__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Project;
