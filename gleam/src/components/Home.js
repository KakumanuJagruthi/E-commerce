import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography, IconButton, Box, Grid, Paper } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  const sliderRef = React.useRef(null);

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const latestProducts = [
    {
      name: 'Product 1',
      image: 'https://i.pinimg.com/originals/b5/90/a1/b590a1d4a665aed60696ecec713be49e.jpg',
      description: 'Description of product 1'
    },
    {
      name: 'Product 2',
      image: 'https://i.pinimg.com/originals/72/c1/75/72c1751bbf6fdf46a5ab4be18cfc1853.jpg',
      description: 'Description of product 2'
    },
    {
      name: 'Product 3',
      image: 'https://th.bing.com/th/id/R.f467bfc4ea3f50db724ff7c8f07686ed?rik=xl78rTNvxgAWVA&riu=http%3a%2f%2fwww.craftysandals.com%2fwp-content%2fuploads%2f2016%2f12%2fSilver-Sandals-Low-Heel-300x300.jpg&ehk=Idkguy%2bJ56mnIi2KCdnGqzeTMmDG%2bPcP%2bVusXR4UoB4%3d&risl=&pid=ImgRaw&r=0',
      description: 'Description of product 3'
    }
  ];

  return (
    <Container>
      <Box mt={4} mb={4}>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '2rem' }}>
          Welcome to <span style={{ color: '#ffd700' }}>Gleam</span>!
        </Typography>
        <Slider {...settings} ref={sliderRef}>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/2666/5894/files/TeesCollectionsPageBanner_99bd353f-3623-4251-8f6e-cd87a6d68bdf_2800x1200.jpg?v=1702453337" alt="carousel item 1" className="carousel-image" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0425/2709/6991/files/080122-jzs-web-banners_1024x1024.jpg?v=1659540861" alt="carousel item 2" className="carousel-image" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3333,w_5000,x_0,y_0/c_limit,dpr_1.25,f_auto,fl_lossy,q_80,w_1488/SeptemberShop-courtesy_gb1yug.jpg" alt="carousel item 3" className="carousel-image" />
          </div>
        </Slider>
      </Box>
      <IconButton onClick={goToPrevSlide} sx={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }}>
        <ArrowBackIos />
      </IconButton>
      <IconButton onClick={goToNextSlide} sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }}>
        <ArrowForwardIos />
      </IconButton>
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1">
                Learn more about our company and what we offer.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h2" gutterBottom>
                Latest Products
              </Typography>
              <Slider {...settings}>
                {latestProducts.map((product, index) => (
                  <div key={index}>
                    <img src={product.image} alt={`product ${index + 1}`} />
                    <Typography variant="h5">{product.name}</Typography>
                    <Typography variant="body2">{product.description}</Typography>
                  </div>
                ))}
              </Slider>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
