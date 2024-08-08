import { Wrap } from './style';
import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <Wrap>{children}</Wrap>;
};

export default Container;
