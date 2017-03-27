import * as  contListservice from "../services/contListservice.js";
// import { list } from "../services/contListservice.js";
import { parse } from 'qs'
export default {
  namespace: 'ContList',
  state: {
    contData:{},
    pageSize: 8,
    pageNum: 1
  },
  reducers: {
    querySuccess(state, { payload }) {
      return { ...state, contData: payload }
    },
    pageSizeChange(state, { payload }) {
      alert('改变');
      console.log(payload);
    }
  },
  effects: {
    *getContList({ payload }, { call, put, select }) {
      const data = yield call(contListservice.list0, parse(payload))
      // debugger;
      yield put({
        type: 'querySuccess',
        payload: data.data.object
      });
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/contlist') {
          dispatch({
            type: 'getContList',
            payload: location.query
          })
        }
      });
    }

    //   setup ({ dispatch, history }) {
    //   history.listen(location => {
    //     if (location.pathname === '/users') {
    //       dispatch({
    //         type: 'query',
    //         payload: location.query,
    //       })
    //     }
    //   })
    // }
  },
};
