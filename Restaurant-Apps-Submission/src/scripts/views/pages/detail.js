/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser.js';
import restaurantSource from '../../data/restaurants-source.js';

const DetailRestaurant = {
  async render() {
    return `
          <div id="detailRestaurant" class="detailRestaurant"></div>
          <div id="likeButtonContainer"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detailRestaurant');
    restaurantContainer.innerHTML = createrestaurantsDetailTemplate(restaurant);
  },
};

export default DetailRestaurant;
