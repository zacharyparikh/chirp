import React from 'react';

import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';

import { LockOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { Field, Form, Formik } from 'formik';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

async function postData(url: string, data: any) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export const SignUp: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          onSubmit={({ firstName, lastName, email, password }) =>
            postData('/signup', {
              firstName,
              lastName,
              email,
              password,
            }).then((data) => console.log(data))
          }
        >
          {({ values }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name="firstName"
                    autoComplete="fname"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name="lastName"
                    autoComplete="lname"
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="email"
                    autoComplete="email"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="password"
                    autoComplete="current-password"
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};
