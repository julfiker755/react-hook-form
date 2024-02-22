import React from 'react';
import Login from './components/From/Login';
import Container from './shared/Container';
import Register from './components/From/Register';

const App = () => {
  return (
   <Container>
      <Login></Login>
      {/* <Register></Register> */}
   </Container>
  );
};

export default App;