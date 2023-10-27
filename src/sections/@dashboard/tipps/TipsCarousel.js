import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Paper, Typography, Container, Card, Grid, Box, Divider, CardHeader} from '@mui/material';
import {styled} from "@mui/material/styles";
import PropTypes from "prop-types";


const StyledDescription = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: 23,
    marginLeft: 23,
    marginBottom: 20,
    marginTop: 10,
}));

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
};

TipsCarousel.propTypes = {
    hints: PropTypes.array.isRequired,
};
function TipsCarousel({ hints }) {
    return (
            <Slider {...settings} >
                {hints.map((hint) => (
                <Paper key={hint.id} >
                    <CardHeader title={hint.title} />
                        <StyledDescription>
                            <Box>
                                <Typography>{hint.description}</Typography>
                            </Box>
                        </StyledDescription>
                    </Paper>
                ))}
            </Slider>

    );
}

export default TipsCarousel;