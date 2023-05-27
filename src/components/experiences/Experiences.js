/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Resume from '../../settings/resume.json';


import './Experiences.css';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
    display: 'flex',
  },
}));

export const Exeperiences = () => {
  const classes = useStyles();

  var experiences = Resume.basics.experiences.map((experience, index) => (
    <div key={index} className="__content_wrapper_experiences">
      <div className="divFlex">
        <div className="__img_wrapper_experiences">
          <img src={`images/${experience.image}`} alt="evve" />
        </div>
        <div className="divDescription">
          <h3 className="title_experiences">
            <TextDecrypt text={experience.title} />
          </h3>
          <p className="description_experiences">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="experiences">
      <Container component="main" maxWidth="md">
          {experiences}
      </Container>
    </section>
  );
};
