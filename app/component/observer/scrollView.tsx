import * as React from 'react';
import { CSSProperties } from 'react';

type Props = {
  children: React.ReactNode;
  inView: boolean;
  style?: CSSProperties;
};

const ScrollWrapper = ({ children, style, inView, ...props }: Props) => {
  return <div {...props}>{children}</div>;
};

export default ScrollWrapper;
