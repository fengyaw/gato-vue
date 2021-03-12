let importAll = require.context('./modules', false, /\.js$/);

let restApi = {};

importAll.keys().forEach(path => {
  let apiItem = importAll(path).default || importAll(path);
  restApi = Object.assign(apiItem, restApi);
});

export default {
  ...restApi
};
