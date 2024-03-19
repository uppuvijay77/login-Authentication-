// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home-container-content">
          <div className="content">
            <h1 className="home-container-heading">
              Clothes That Get YOU Noticed
            </h1>
            <p className="home-container-description">
              Fashion is part of the daily air.Modern Clothing: In urban areas
              and among the younger generation, modern Western-style clothing is
              also common. Men often wear suits, shirts, and trousers, while
              women wear a variety of clothing styles, including dresses,
              skirts, and jeans. However, modesty is still an important
              consideration, and clothing should generally cover the body
              appropriately. Cultural Considerations: In Saudi Arabia, clothing
              reflects both religious beliefs and cultural norms. Modesty is
              highly valued, and both men and women are expected to dress
              conservatively, especially in public places and during religious
              events. While there are no strict dress codes for foreigners,
              visitors are expected to respect local customs and traditions by
              dressing modestly.
            </p>
            <button type="button" className="home-container-btn">
              Shop Now
            </button>
          </div>
          <img
            className="home-container-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
        </div>
      </div>
    )
  }
}
export default Home
