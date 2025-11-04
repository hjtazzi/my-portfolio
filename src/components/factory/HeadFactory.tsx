import { } from 'react';
import { Helmet } from 'react-helmet-async';


interface HeadFactory {
  title: string;
  children?: React.ReactNode;
}


const HeadFactory = ({ title, children }: HeadFactory) => {
  return (
    <Helmet key={title}>
      <title>{title} | Hojjat Azizi</title>
      {children}
    </Helmet>
  )
}

export default HeadFactory;
