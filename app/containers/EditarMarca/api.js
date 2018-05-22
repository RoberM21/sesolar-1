import superagent from 'superagent';
import config from '../../config';

export const editBrand = (body) =>
  superagent
    .patch(`${config.api.url}/brands`)
    .send(body)
    .then((data) => data.body);
