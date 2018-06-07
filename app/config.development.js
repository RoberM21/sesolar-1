
const API_PATH = 'http://198.199.78.226:3000';
// const API_PATH = 'http://localhost:8080';
const stage = process.env.NODE_ENV;
const config = {
  api: {
    url: `${API_PATH}/api`,
    path: API_PATH,
  },
  stage,
  emailDomain: '@gmail.com',
};

export default config;
