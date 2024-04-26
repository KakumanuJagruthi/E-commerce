// ShippingInfo.js

import React from 'react';
import { Typography, Container } from '@mui/material';

function ShippingInfo() {
  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Shipping Information
      </Typography>
      <Typography variant="body1">
        We offer free shipping on all orders over ₹500. Orders under ₹500 are subject to a flat shipping fee of ₹50. Shipping typically takes 3-5 business days. For international orders, shipping fees and delivery times may vary.
      </Typography>
    </Container>
  );
}

export default ShippingInfo;
