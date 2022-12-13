import React from 'react';
import { useTransform } from 'framer-motion';

import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <div>
          <Logo />
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Model S</a>
            </li>
            <li>
              <a href="#">Model 3</a>
            </li>
            <li>
              <a href="#">Model X</a>
            </li>
            <li>
              <a href="#">Model Y</a>
            </li>
            <li>
              <a href="#">Solar Roof</a>
            </li>
            <li>
              <a href="#">Solar Panels</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
          </ul>
        </div>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Tesla © 2022</a>
          </li>
          <li>
            <a href="#">Privacy & Legal</a>
          </li>
          <li>
            <a href="#">Vehicle Recalls</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Engage</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
