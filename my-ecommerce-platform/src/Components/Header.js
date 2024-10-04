import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <h1>My E-Commerce Platform</h1>
      <nav>
        {/* <Link to="/">Home</Link> */}
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
