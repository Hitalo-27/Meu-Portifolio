/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

import Unip from '../../assets/unip-logo.png';
import Etec from '../../assets/logo-etec.png';
import Senai from '../../assets/senai-logo.png';
import MadCode from '../../assets/madcode-logo.png';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
    display: 'flex',
  },
}));

export const Works = () => {
  const classes = useStyles();

  return (
    <section id="works">

    <Container component="main" className={classes.main} maxWidth="md">

      <div className="project">
            
            <div className="__content_wrapper primeiro">
              <div className="__img_wrapper">
                <img src={ Unip } alt="unip"/>
              </div>
              <h3 className="title">
                <TextDecrypt text={ "Ciencia da Computação" } />
              </h3>
              <p className="description">
              { "Eu atualmente faço ciencia da computação na universidade paulista, onde eu estou aprendendo muito sobre programação e desenvolvimento de software." }
              </p>
            </div>

            <div className="__content_wrapper">
              <div className="__img_wrapper">
                <img src={ Etec } alt="unip"/>
              </div>
              <h3 className="title">
                <TextDecrypt text={ "DS" } />
              </h3>
              <p className="description">
              { "Eu fiz 3 anos de curso tecnico de desenvolvimento de sistemas na etec de guaianazes, onde eu tive o meu contato com a programação onde acabei me apaixonado pela área." }
              </p>
            </div>

          </div>

      </Container>

      <Container component="main" className={classes.main} maxWidth="md">

      <div className="project">
            
            <div className="__content_wrapper primeiro">
              <div className="__img_wrapper">
                <img src={ Senai } alt="unip"/>
              </div>
              <h3 className="title">
                <TextDecrypt text={ "Curso Java" } />
              </h3>
              <p className="description">
                { "Eu fiz um curso de 6 meses de programação java na escola SENAI Frederico Jacob" }
              </p>
            </div>

            <div className="__content_wrapper">
              <div className="__img_wrapper">
                <img src={ MadCode } alt="unip"/>
              </div>
              <h3 className="title">
                <TextDecrypt text={ "Curso Kotlin" } />
              </h3>
              <p className="description">
                { "Eu fiz um curso de 3 meses de programação em kotlin na MadCode." }
              </p>
            </div>

          </div>

      </Container>
    </section>
  );
};
