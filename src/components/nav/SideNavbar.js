import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const sections = document.querySelectorAll("section"); 

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (sections) {
        sections.forEach((section) => observer.unobserve(section));
      }
    };
  }, []);

  return (
    <nav>
      <a href="#home" 
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <Typography>Home</Typography>
      </a>

      <a href="#experiences"
        onClick={() => setActiveNav('#experiences')}
        className={activeNav === '#experiences' ? 'active' : ''}
      >
        <Typography>Experiencia</Typography>
      </a>

      <a href="#schools"
        onClick={() => setActiveNav('#schools')}
        className={activeNav === '#schools' ? 'active' : ''}
      >
        <Typography>Cursos</Typography>
      </a>

      <a href="#about" 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <Typography>Sobre Mim</Typography>
      </a>

      <a href="#contact" 
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <Typography>Contato</Typography>
      </a>
    </nav>
  );
};