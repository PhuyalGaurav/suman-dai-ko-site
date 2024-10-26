/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import "./About.css";

import profile from "../../assets/profile.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello 👋";
  const aboutme = `I'm Suman Kattel, an engineering graduate, currently working as a Marketing Manager at WL Foods and full-time at Kattel Construction. Experienced in projects like Panauti Hydropower rehabilitation, I also enjoy creating food content, following politics, and playing sports with friends.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"></div>
          <div className="_content_wrapper">
            <div className="greetings">
              <Typography component="h2" variant="h2">
                <TextDecrypt text={greetings} />
              </Typography>
            </div>
            <p className="aboutme">{aboutme}</p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component="span"> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
