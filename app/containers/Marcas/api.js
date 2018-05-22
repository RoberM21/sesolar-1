import superagent from 'superagent';
import config from '../../config';

export const getBrands = () =>
  superagent
    .get(`${config.api.url}/brands`)
    .then((data) => data.body);

export const deleteBrand = (id) =>
  superagent
    .delete(`${config.api.url}/brands/${id}`)
    .then((data) => data.body);
