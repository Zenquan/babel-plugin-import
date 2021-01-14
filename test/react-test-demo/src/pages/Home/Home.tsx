import React, { FC, useEffect } from 'react';
import { Button } from 'antd';
import { useCounter, UseCounter } from '../../redux/counter/use-counter';

const Home: FC = () => {
  const { counter, handleDecrementClick, handleIncrementClick }: UseCounter = useCounter();

  useEffect(() => {
    console.log('1111>>>');
  }, []);

  return (
    <>
      <p>Counter: {counter}</p>
      <Button onClick={handleDecrementClick} type="primary">
        -
      </Button>
      <Button onClick={handleIncrementClick} type="primary">
        +
      </Button>
    </>
  );
};

export default Home;
