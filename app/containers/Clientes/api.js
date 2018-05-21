import superagent from 'superagent';
import config from '../../config';

export const getUsers = () =>
  superagent
    .get(`${config.api.url}/clients`)
    .then((data) => data.body);

export const deleteClient = (id) =>
  superagent
    .delete(`${config.api.url}/clients/${id}`)
    .then((data) => data.body);
