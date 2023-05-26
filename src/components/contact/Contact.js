/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from 'sweetalert2';

import emailjs from '@emailjs/browser';

import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));



export const Contact = () => {
  const classes = useStyles();
  const greetings = "Envie uma mensagem!";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dn69exr', 'template_pu5m0js', form.current, 'hAE7GebnLmNNFRKDv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Seu Email foi enviado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
  };



  return (
    <section id="contact">
      <Container component="main" maxWidth="md">
        <div className="_form_wrapper">
          <form ref={form} onSubmit={sendEmail} className={classes.form}>
            <TextField
              id="outlined-name-input"
              label="Nome"
              type="text"
              size="small"
              variant="filled"
              name="name"
              className={classes.formfield}
            />
            <TextField
              id="outlined-password-input"
              label="Email"
              type="email"
              size="small"
              variant="filled"
              name="email"
              className={classes.formfield}
            />
            <TextField
              id="outlined-password-input"
              label="Mensagem"
              type="textarea"
              size="small"
              multiline
              minRows={5}
              variant="filled"
              name="message"
              className={classes.formfield}
            />
            <button type="submit" value="Send" className="submit-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'>Enviar Mensagem</Typography>
            </button>
          </form>
        </div>
        <h1 className="contact_msg">
          <TextDecrypt text={greetings} />
        </h1>
      </Container>
    </section>
  );
};
