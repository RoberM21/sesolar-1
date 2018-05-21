import superagent from 'superagent';
import config from '../../config';

export const getBrands = () =>
  superagent
    .get(`${config.api.url}/brands`)
    .then((data) => data.body);
