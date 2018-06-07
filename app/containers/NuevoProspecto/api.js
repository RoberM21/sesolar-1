import superagent from 'superagent';
import config from '../../config';

export const getClients = () =>
  superagent
    .get(`${config.api.url}/clients`)
    .then((data) => data.body);

export const saveProspect = (body) =>
  superagent
    .post(`${config.api.url}/prospecting`)
    .send(body)
    .then((data) => data.body);
