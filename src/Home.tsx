import * as React from 'react';
import { useUser } from './RegHook';

function Home() {
  const { name, setName } = useUser();

  return <p style={{ color: 'red' }}>{name}</p>;
}

export default Home;
