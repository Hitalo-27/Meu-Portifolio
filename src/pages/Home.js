import React from 'react';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { SideNavbar } from '../components/nav/SideNavbar';
import { Works } from '../components/works/Works';
import { About } from '../components/about/About';
import { Exeperiences } from '../components/experiences/Experiences';
import { Contact } from '../components/contact/Contact';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="home">
        <DisplacementSphere />
        <Content />
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
      </div>
      <SideNavbar />
      <Exeperiences/>
      <Works />
      <About />
      <Contact/>
    </>
  );
};
