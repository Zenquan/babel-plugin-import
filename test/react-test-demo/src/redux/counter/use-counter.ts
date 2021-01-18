import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counter';

export interface UseCounter {
  counter: number;
  handleDecrementClick: () => void;
  handleIncrementClick: () => void;
}

export const useCounter = (): UseCounter => {
  const counter = useSelector((state: { counter: number }) => state.counter);
  const dispatch = useDispatch();

  const handleDecrementClick = (): void => {
    dispatch(decrement());
  };

  const handleIncrementClick = (): void => {
    dispatch(increment());
  };

  return { counter, handleDecrementClick, handleIncrementClick };
};
