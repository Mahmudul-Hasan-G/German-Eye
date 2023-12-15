import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover"><Link to="/about-us" >About us</Link></a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Reviews</a>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by German Eye</p>
      </aside>
    </footer>
  );
};

export default Footer;