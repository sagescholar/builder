import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <hr />
      <div>
        <Link to="/">Home</Link> | <Link to="/new-page">New Page</Link>
      </div>
    </div>
  );
}

export default Footer;
