import "./navbar.css";
import { FaHome } from "react-icons/fa";

import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <FaHome />
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <li>Todas</li>
        <li>Venta</li>
        <li>Alquiler</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
