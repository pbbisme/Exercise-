import * as  contListservice from "../services/contListservice.js";
import { parse } from 'qs';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;

export default {
  namespace: 'contContail',
  state: {
    contData: {},
    // seachInfo: null,
    seachInfo: {
      pageNum: 1,
      pageSize: 10
    }
  },
  reducers: {
    seachList(seachInfo) {

    },
    querySuccess(state, { payload }) {
      return { ...state, contData: payload }
    },
  },
  effects: {
    *list({ payload }, { call, put, select }) {
      let seachInfo = yield select(state => state.contContail.seachInfo);//先获取默认查询条件
      seachInfo={seachInfo,...payload}  //合并传入的插件条件
      const data = yield call(contListservice.list0, parse(seachInfo)); //执行查询
      yield put({
        type: 'querySuccess',
        payload: data.data.object
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
