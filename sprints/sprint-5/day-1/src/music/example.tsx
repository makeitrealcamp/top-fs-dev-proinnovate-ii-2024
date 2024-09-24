import  { useEffect, useRef } from 'react';

export const Example = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      console.log('executed');
    },2000);
    return () => clearInterval(ref.current);
  }, []);

  return <div>EXAMPLE</div>;
};
