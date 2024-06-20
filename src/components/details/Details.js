import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import detailsImage from "../../static/image5.jpg";
import postImage from "../../static/image3.jpg";
import Rightbar from "../rightbar/Rightbar";

const Details = () => {
  return (
    <Container
      sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Box
        sx={{
          background: `url(${detailsImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          color={"black"}
          variant="h2"
          sx={{ fontWeight: 900, padding: 10 }}
        >
          Clicked Poste Title
        </Typography>
        <Container>
          <hr />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 8 }}
            mt={8}
          >
            <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
              <Typography
                m={4}
                align="center"
                color={"gray"}
                variant="body1"
                sx={{ fontWeight: 900 }}
              >
                lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10
                lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10
                lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10
                lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10
                lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10
              </Typography>
              <CardMedia
                component="img"
                height="300px"
                image={postImage}
                alt="green iguana"
              />
              <Typography align="center" variant="h4" mt={2}>
                wait for it wait
              </Typography>
              <Typography
                m={4}
                color={"gray"}
                variant="body1"
                sx={{ fontWeight: 900 }}
              >
                La tienda en línea se distingue por su amplio catálogo de
                estilos, colores y tamaños, asegurando que haya algo perfecto
                para cada cliente. Ya sea que busques una polera para ti, para
                un regalo especial, o para un evento de grupo, nuestras opciones
                de personalización son infinitas. Puedes agregar tus propios
                textos, gráficos, y fotos, o elegir entre nuestra variedad de
                diseños artísticos preexistentes. En Poleras Únicas, nos
                enorgullecemos de la calidad de nuestros productos. Utilizamos
                técnicas de impresión de última generación y materiales de alta
                calidad para garantizar que tu diseño se vea increíble y dure
                mucho tiempo. Además, nuestro equipo de atención al cliente está
                siempre disponible para ayudarte con cualquier consulta o
                necesidad especial.
              </Typography>
            </Box>
            <Box flex={1}>
              <Rightbar />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
};

export default Details;
