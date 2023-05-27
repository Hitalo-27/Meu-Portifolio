import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: '3rem',
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography variant="h5" component="h2">
            <TextDecrypt text={`${FirstName} ${LastName}`} />
        </Typography>
        <Typography variant="h1" component="h1" className={classes.jobs}>
            <TextDecrypt text={`${Resume.basics.job1} + `} />
            <TextDecrypt text={`${Resume.basics.job2}`} />
        </Typography>
      </div>
    </Container>
  );
};
