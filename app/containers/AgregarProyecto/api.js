import superagent from 'superagent';
import config from '../../config';

export const saveProject = (body) =>
  superagent
    .post(`${config.api.url}/projects`)
    .send(body)
    .then((data) => data.body);
