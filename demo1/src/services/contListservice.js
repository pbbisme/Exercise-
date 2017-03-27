import request from '../utils/request';
import httpServer from '../utils/jqajax';
import request1 from '../utils/request1';
import * as axiosAjax  from '../utils/axiosAjax';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};

export function list0(params) {

  return axiosAjax.get('crmContMain/list',params);
}

export function list({ ...body }) {
  return request('crmContMain/list', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: "firstName=Nikhil&favColor=blue&password=easytoguess"
    // body: {
    //   pageSize: 10,
    //   pageNum: 1
    // }
  });
}


export  function list1() {
  return request1('crmContMain/list',{
    data: {
      name: 'Hubot',
      login: 'hubot'
    }
  });
}
