// import contListservice from "../services/contListservice.js";
import { list } from "../services/contListservice.js";
export default {
  namespace: 'ContList',
  state: {
    contListData: []
  },
  reducers: {
    querySuccess(state, {payload}) {
      console.log(payload)
      return {...state,contListData:payload}
    }
  },
  effects: {
    *getContList({ payload }, { call, put }) {
      const data = yield call(list, payload);
      yield put({
        type: 'querySuccess',
        payload: data.data.object.list
      });
      console.log(data)
      alert("查询合同列表信息成功")
    }
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'getContList' })
    }
  },
};
