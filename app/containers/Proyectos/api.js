import superagent from 'superagent';
import config from '../../config';
const filter = JSON.stringify({ include: 'client' });

export const getProjects = () =>
  superagent
    .get(`${config.api.url}/projects`)
    .query(`filter=${filter}`)
    .then((data) => data.body);

export const deleteProject = (id) =>
  superagent
    .delete(`${config.api.url}/projects/${id}`)
    .then((data) => data.body);

