/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/me.jpeg';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Eae! Eu sou o Hitalo!";
  const aboutme = `Sou estudante de ciências da computação na universidade paulista de Tatuapé, e atualmente estou trabalhando na Evve Comunicação.
                  Estudo programação desde 2019 quando entrei na ETEC cursando desenvolvimento de sistemas, e desde então tenho me apaixonado mais e mais pela programação e estou sempre a procura de aprimorar cada vez mais os meus conhecimentos na área.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
