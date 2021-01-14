import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Container } from '../Container/Container';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }: PropsWithChildren<LayoutProps>) => (
  <>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    <ErrorBoundary>
      <main role="main">
        <Container>{children}</Container>
      </main>
    </ErrorBoundary>
    <ErrorBoundary>
      <Footer />
    </ErrorBoundary>
  </>
);
