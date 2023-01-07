/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <Typography>
          Home
        </Typography>
      </a>

      <a href="#experiences"
        onClick={() => setActiveNav('#experiences')}
        className={activeNav === '#experiences' ? 'active' : ''}
      >
        <Typography>
          Experiencia
        </Typography>
      </a>

      <a href="#schools"
        onClick={() => setActiveNav('#schools')}
        className={activeNav === '#schools' ? 'active' : ''}
      >
        <Typography>
          Cursos
        </Typography>
      </a>
      <a href="#about" 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <Typography>
          Sobre Mim
        </Typography>
      </a>

      <a href="#contact" 
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <Typography>
          Contato
        </Typography>
      </a>
    </nav>
  );
};