import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import classes from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }: PropsWithChildren<ContainerProps>) => (
  <div className={classes.container}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);
