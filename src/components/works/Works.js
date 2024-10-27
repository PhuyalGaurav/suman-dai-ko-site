/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
import Portfolio from "../../assets/recentprojects/react-portfolio.png";
import Veritru from "../../assets/recentprojects/veritru.png";
import Lofo from "../../assets/recentprojects/lofo.png";
import Startup from "../../assets/recentprojects/startup.png";
import Lacalle from "../../assets/recentprojects/lacalle.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const projectRefs = useRef([]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Youtube",
      description: `I run a YouTube channel where I share vlogs and engaging conversations with influential figures in the industry, bringing valuable insights to my audience.`,
      alter: "Youtube",
      image: `${Portfolio}`,
    },
    {
      id: 2,
      title: "Local Program",
      description: `I actively host and support local programs that focus on uplifting and addressing specific needs within my community.`,
      alter: "Local Program",
      image: `${Veritru}`,
    },
    {
      id: 3,
      title: "Engineer",
      description: `With a background in civil engineering, I’ve contributed to projects like Differential Settlements and the modernization of Panauti Hydropower, aiming to drive sustainable and innovative infrastructure solutions.`,
      alter: "Engineer",
      image: `${Lofo}`,
    },
    {
      id: 4,
      title: "Paracycling",
      description: `As the Treasurer of the Para Cycling Association Nepal since 2080, I’m dedicated to supporting inclusive cycling initiatives and empowering para-athletes across the nation.`,
      alter: "Startup Project",
      image: `${Startup}`,
    },
    {
      id: 5,
      title: "Skateboarding",
      description: `As Vice-President of the Bagmati Skating & Skateboarding Association since 2080, I’ve been committed to advancing the local skating community, supporting skaters of all levels, and promoting skate culture in the Bagmati region."`,
      alter: "Startup Project",
      image: `${Lacalle}`,
    },
  ]);

  useEffect(() => {
    const handleResize = () => {
      projectRefs.current.forEach((projectRef) => {
        if (window.innerWidth <= 768) {
          // Move description outside of __content_wrapper on mobile view
          const description = projectRef.querySelector(".description");
          projectRef.appendChild(description);
        } else {
          // Move description back inside __content_wrapper on larger screens
          const description = projectRef.querySelector(".description");
          const contentWrapper = projectRef.querySelector(".__content_wrapper");
          contentWrapper.appendChild(description);
        }
      });
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project, index) => (
          <div
            className="project"
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.title} />
              </h3>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
