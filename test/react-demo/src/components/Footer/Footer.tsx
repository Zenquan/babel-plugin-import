import React, { FC } from 'react';
import { APP_NAME } from '../../common/constants';
import { Container } from '../Container/Container';

export const Footer: FC = () => (
  <footer role="contentinfo">
    <Container>
      <p>Copyright &#xA9; {`${new Date().getFullYear()} ${APP_NAME}`}</p>
    </Container>
  </footer>
);
