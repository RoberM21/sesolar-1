import superagent from 'superagent';
import config from '../../config';
const filter = JSON.stringify({ include: 'brand' });
export const getProducts = () =>
  superagent
    .get(`${config.api.url}/products`)
    .query(`filter=${filter}`)
    .then((data) => data.body);

export const deleteProduct = (id) =>
  superagent
    .delete(`${config.api.url}/products/${id}`)
    .then((data) => data.body);

