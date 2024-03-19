// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-contianer">
    <img
      className="website-logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul className="header-nav-elements">
      <li className="nav-element">Home</li>
      <li className="nav-element">Products</li>
      <li className="nav-element">Cart</li>
      <button className="header-btn" type="submit">
        Logout
      </button>
    </ul>
  </div>
)
export default Header
