import superagent from 'superagent';
import config from '../../config';

export const newBrand = (body) =>
  superagent
    .post(`${config.api.url}/brands`)
    .send(body)
    .then((data) => data.body);

export const deleteBrand = (clientId) =>
  superagent
    .delete(`${config.api.url}/brands/${clientId}`)
    .then((data) => data.body);

export const updateBrand = (body) =>
  superagent
    .patch(`${config.api.url}/brands`)
    .send(body)
    .then((data) => data.body);
