import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link className="hover:btn btn-accent" to="/about-us" >About us</Link>
        <Link className="hover:btn btn-accent" to="" >Contact</Link>
        <Link className="hover:btn btn-accent" to="" >Reviews</Link>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by German Eye</p>
      </aside>
    </footer>
  );
};

export default Footer;