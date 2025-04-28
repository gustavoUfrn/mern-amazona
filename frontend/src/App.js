import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
//import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar } from 'react-bootstrap';
import Homepage from './screens/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <NavLink to="/">
                <Navbar.Brand>amazona</Navbar.Brand>
              </NavLink>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
