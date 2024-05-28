import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memory from "./images/images.jpeg";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts.js";
import theme from './theme.js';
import { ThemeProvider } from "@mui/material/styles";
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memory
        </Typography>
        <img
          className={classes.image}
          src={memory}
          alt="memory"
          height="60"
          width="80"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </ThemeProvider>
  );
};

export default App;
