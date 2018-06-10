import superagent from 'superagent';
import config from '../../config';

export const getFile = (name, container) =>
  superagent
    .get(`${config.api.url}/images/${container}/download/${name}`)
    .then((data) => data.body);
