import Ajax from 'robe-ajax'
import apiConfig from './apiConfig.js';

export default function request (url, options) {
  debugger;
   let fetchUrl = apiConfig.host + url;
  if (options.cross) {
    return Ajax.getJSON('http://query.yahooapis.com/v1/public/yql', {
      q: `select * from json where url='${url}?${Ajax.param(options.data)}'`,
      format: 'json',
    })
  }
  const { method = 'get' } = options
  return Ajax.ajax({
    fetchUrl, 
    method,
    data: options.data || {},
    processData: method === 'get',
    dataType: 'JSON',
  }).done((data) => {
    return data
  })
}
