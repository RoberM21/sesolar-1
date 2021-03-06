import superagent from 'superagent';
import config from '../../config';

export const getBrands = () =>
  superagent
    .get(`${config.api.url}/brands`)
    .then((data) => data.body);

export const editProduct = (body) =>
  superagent
    .patch(`${config.api.url}/products`)
    .send(body)
    .then((data) => data.body);
