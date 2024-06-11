import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Card = ({cardImage}) => {
  return (
    <Box>
        <CardMedia
            component="img"
            height="100%"
            image={cardImage}
            title="imgs"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              align="center"
              component="div"
              color={"tomato"}
            >
              PERFUMES
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              align="center"
              component="div"
            >
              Wearing this will make everyone love you
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              align="center"
              component="div"
            >
              It's womens loves
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
    </Box>
  )
}

export default Card