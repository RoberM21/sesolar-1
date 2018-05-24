import superagent from 'superagent';
import config from '../../config';

export const getProducts = () =>
  superagent
    .get(`${config.api.url}/products`)
    .then((data) => data.body);

export const deleteProduct = (id) =>
  superagent
    .delete(`${config.api.url}/products/${id}`)
    .then((data) => data.body);

