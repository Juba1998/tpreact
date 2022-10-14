import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            Cours React
          </Navbar.Brand>
      </Navbar>
  );
}

export default Header;