import * as  contListservice from "../services/contListservice.js";
import { parse } from 'qs';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;

export default {
  namespace: 'contContail',
  state: {
    contData: {},
    seachInfo: {
      searchKey:'',//查询关键字
      pageNum: 1,
      pageSize: 10
    }
  },
  reducers: {
    seachList(seachInfo) {

    },
    querySuccess(state, { payload }) {
      return { ...state, ...payload } //修改state
    },
  },
  effects: {
    *list({ payload }, { call, put, select }) {
      let seachInfo = yield select(state => state.contContail.seachInfo);//先获取默认查询条件
      seachInfo={...seachInfo,...payload}  //合并传入的查询条件
      const data = yield call(contListservice.list0, parse(seachInfo)); //执行查询
      yield put({
        type: 'querySuccess',
        payload: {contData:data.data.object,seachInfo:seachInfo}
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/contlist2') {
          dispatch({
            type: 'list'
          })
        }
      });
    }
  },
};
