import superagent from 'superagent';
import config from '../../config';

export const updateProspecting = (body) =>
  superagent
    .patch(`${config.api.url}/prospecting`)
    .send(body)
    .then((data) => data.body);
