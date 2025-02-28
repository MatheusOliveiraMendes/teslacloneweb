import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'New Model Y',
            'Model Y',
            'Model 3',
            'Model S',
            'Model X',
            'Experience Tesla',
            'Solar and Powerwall',
            'Accessories',
            'We Are Tesla',
          ].map(modelName => (
            <ModelSection 
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent 
                label={modelName}
                description="Schedule a Test Drive"
              />
            }
          />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
