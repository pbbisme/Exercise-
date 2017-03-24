import $ from 'jquery';
import apiConfig from './apiConfig.js';

// function parseJSON(response) {
//   debugger;
//   return response.json();
// }

function checkResult(data,stateText,response) {
  if (response.status >= 200 && response.status < 300) {
    return data;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
const httpServer = ({ url, body = null, method = 'get' }) => {
  let fetchUrl = apiConfig.host + url;
  $.ajax({
    type: method,
    url: fetchUrl,
    data: body
  }).then(checkResult)
    .then(err => ({ err }));
}

export default httpServer
