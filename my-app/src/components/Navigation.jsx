import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/works">Works</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navigation;
