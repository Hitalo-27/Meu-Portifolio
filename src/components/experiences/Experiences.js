/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Experiences.css';

import Evve from '../../assets/evve-logo.png';

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

  return (
    <section id="experiences">
      <Container component="main" className={classes.main} maxWidth="md">

          <div className="project_experiences">
            <div className="__content_wrapper_experiences">
              <div className="divFlex">
                <div className="__img_wrapper_experiences">
                  <img src={ Evve } alt="unip"/>
                </div>
                <div className="divDescription">
                  <h3 className="title_experiences">
                    <TextDecrypt text={ "Evve Comunicação" } />
                  </h3>
                  <p className="description_experiences">
                    { "Atualmente estou trabalhando na evve comunicação desde setembro de 2022" }
                  </p>
                </div>
              </div>
            </div>
          </div>

      </Container>
    </section>
  );
};
