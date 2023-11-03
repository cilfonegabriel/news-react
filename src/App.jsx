

import { Container, Grid, Typography } from "@mui/material"
import Form from "./components/Form"

function App() {

  return (
    <Container>
      <header>
        <Typography align="center" marginY={5} component="h1" variant="h3">
          News Search Engine
        </Typography>
      </header>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6} lg={4}>
          <Form />
        </Grid>
      </Grid>
    </Container>     
  )
}

export default App
