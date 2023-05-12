/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
import UrlParser from '../routes/url-parser';
// eslint-disable-next-line import/extensions
import routes from '../routes/routes';

class App {
  constructor(options) {
    this._content = options.content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
