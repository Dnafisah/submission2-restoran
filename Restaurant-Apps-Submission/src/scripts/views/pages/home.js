/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
import restaurantsSource from '../../data/restaurants-source';
import { createrestaurantsItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
          <h1>Explore Restaurant</h1>
          <div class="list" id="tes"></div>
        </div>
      </section>
        `;
  },

  async afterRender() {
    // eslint-disable-next-line no-undef
    const restaurant = await restaurantsSource.listRestaurans();
    const restaurantContainer = document.querySelector('#tes');
    restaurant.forEach((restaurants) => {
      // eslint-disable-next-line no-undef
      restaurantContainer.innerHTML += createrestaurantsItemTemplate(restaurants);
    });
  },
};

export default Home;
