import superagent from 'superagent';
import config from '../../config';
const filter = JSON.stringify({ include: 'client' });

export const getClients = () =>
  superagent
    .get(`${config.api.url}/clients`)
    .then((data) => data.body);

export const getProspectings = () =>
  superagent
  .get(`${config.api.url}/prospecting`)
  .query(`filter=${filter}`)
  .then((data) => data.body);
