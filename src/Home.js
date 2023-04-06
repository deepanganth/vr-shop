import { Link } from "react-router-dom";
import "./Home.css";
import HomeModel from "./HomeModel";
import logo from './assets/logo.png'
function Home() {
  return (
    <div className="home-section">
      <div className="navbar">
        <img src={logo} alt="" />
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/product"}>
          <p>Products</p>
        </Link>
        <Link to={"https://deepanganth.github.io/portfolio"}>
          <p>Contact</p>
        </Link>
      </div>
      <div className="main-section">
        <div className="main-left">
          <h1>Experience</h1>
          <h1>Products</h1>
          <h1>in a new way</h1>
          <p>
            with VPRO you get an interactive 3D experience of the product and
            free shipping.
          </p>
          <p>STARTING FROM</p>
          <div className="product-btn">
            <h1>$49</h1>
            <Link to={"/product"}>
              <button>PRODUCTS</button>
            </Link>
          </div>
        </div>
        <div className="main-right">
          <HomeModel />
        </div>
      </div>
    </div>
  );
}
export default Home;
