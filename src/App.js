import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memory from './images/images.jpeg';
const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memory</Typography>
        <img src={memory} alt="memory" height="60" width="80" />
      </AppBar>
      <Grow in> 
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Post />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
};

export default App;
