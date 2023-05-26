import * as React from 'react';
import { useUser } from './RegHook';
import Home from './Home';
import Register from './Register';
import { Routes, Route, Link } from 'react-router-dom';

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
      </Routes>

      <Link to="/Home">Go Home</Link>
      <br />
      <Link to="/Register">Go register</Link>
    </div>
  );
}

export default Router;
