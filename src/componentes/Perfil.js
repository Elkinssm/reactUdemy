import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";

function Perfil(props) {
  const [personajes, setPersonajes] = useState([]);
  const [status, setStatus] = useState(false);

  // useEffect(() => {
  //   axios.get("https://rickandmortyapi.com/api/character").then((resultado) => {
  //     setPersonajes(resultado.data.results);
  //   });
  // }, []);

  useEffect(() => {
    const getPersonajes = async () => {
      const resultado = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setPersonajes(resultado.data.results);
    };
    getPersonajes();
  }, []);

  // useEffect(() => {
  //   const getPersonajes =
  //   var p= await axios.get("https://rickandmortyapi.com/api/character");
  //   debugger;
  // }, []);

  return (
    <Container fixed>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {personajes.map((personaje, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={personaje.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {personaje.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <h4>Especie: {personaje.species}</h4>
                    <h4>Estado: {personaje.status}</h4>
                    <h4>Gebero: {personaje.gender}</h4>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Perfil;
