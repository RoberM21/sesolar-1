import superagent from 'superagent';
import config from '../../config';

export const editClient = (body) =>
  superagent
    .patch(`${config.api.url}/clients`)
    .send(body)
    .then((data) => data.body);
