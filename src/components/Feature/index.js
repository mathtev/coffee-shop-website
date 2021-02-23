import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Coffee of the Day</h1>
      <p>Irish coffee, hot coffee, Irish whiskey, and sugar, stirred, and topped with cream. </p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
