import { Formik, Form, Field } from 'formik';
import {
  TextField,
  Button,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Login to Chirp
      </Typography>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Field
                name="email"
                label="Email Address"
                fullWidth
                variant="outlined"
                as={TextField}
              ></Field>
            </Grid>

            <Grid item xs={12}>
              <Field
                name="password"
                label="Password"
                fullWidth
                variant="outlined"
                as={TextField}
              ></Field>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
