import * as  contListservice from "../services/contListservice.js";
import { parse } from 'qs';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import key from 'keymaster';
import pathToRegexp from 'path-to-regexp';
const FormItem = Form.Item;

/**
 *  合同列表，容器，单词写错，我去
 */
export default {
  namespace: 'contContail',
  state: {
    contData: {},
    seachInfo: {
      searchKey: '',//查询关键字
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
      alert(1)
      let seachInfo = yield select(state => state.contContail.seachInfo);//先获取默认查询条件
      seachInfo = { ...seachInfo, ...payload }  //合并传入的查询条件
      const data = yield call(contListservice.list0, parse(seachInfo)); //执行查询
      yield put({
        type: 'querySuccess',
        payload: { contData: data.data.object, seachInfo: seachInfo }
      });
    }
  },
  subscriptions: {
    subSetup({ dispatch, history }) { //事件监听
      history.listen(location => { //路由监听
        // const match =
        if (location.pathname === '/contlist2') {
          dispatch({
            type: 'list'
          })
        }
        else if (pathToRegexp('/condetail/:id').exec(location.pathname)) {
          alert("跳转到了合同详情")
        }
      });
    },
    subKey({ dispatch }) {
      key('f1', (e) => {
        alert("我按了F1")
        return false;//神器阻止冒泡和默认事件
      })
    }
  },
};
