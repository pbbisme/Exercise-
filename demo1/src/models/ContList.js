import * as  contListservice from "../services/contListservice.js";
// import { list } from "../services/contListservice.js";
export default {
  namespace: 'ContList',
  state: {
    contListData: [],
    pageSize: 10,
    pageNum: 1
  },
  reducers: {
    querySuccess(state, { payload }) {
      console.log(payload)
      return { ...state, contListData: payload }
    }
  },
  effects: {
    *getContList({ payload }, { call, put, select }) {
      const page = yield select(state =>({ ...state.ContList.pageSize,...state.ContList.pageNum}));
      debugger;
      const data = yield call(contListservice.list0, { ...page })
      debugger;
      yield put({
        type: 'querySuccess',
        payload: data.data.object.list
      });
      console.log(data)
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'getContList' })
        }
      });
    }
  },
};
