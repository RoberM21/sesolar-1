import superagent from 'superagent';
import config from '../../config';

export const newClient = (body) =>
  superagent
    .post(`${config.api.url}/clients`)
    .send(body)
    .then((data) => data.body);
