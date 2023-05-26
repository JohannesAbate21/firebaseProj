import * as React from 'react';
import { useUser } from './RegHook';

function Register() {
  const { name, setName } = useUser();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
      </form>
    </div>
  );
}

export default Register;
