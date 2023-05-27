/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Resume from '../../settings/resume.json';

import './Schools.css';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
    display: 'flex',
  },
}));

export const Schools = () => {
  const classes = useStyles();

  var schools = Resume.basics.schools.map((school, index) => (
    <div key={index} className="__content_wrapper primeiro">
      <div className="__img_wrapper">
        <img src={`images/${school.image}`} alt="unip" />
      </div>
      <div className="divDescriptionSchool">
        <h3 className="title">
          <TextDecrypt text={school.title} />
        </h3>
        <p className="description">
          {school.description}
        </p>
      </div>
    </div>
  ));

  return (
    <section id="schools">
      <Container component="main" maxWidth="md">
          {schools}
      </Container>
    </section>
  );
};
