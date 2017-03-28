import {routerRedux} from 'dva/router';
export default {
  namespace: 'login',
  state: {
    userName: "",
    isLogin: false
  },
  reducers: {
    loginSuccess(state, action) {
      alert("登录成功")
      return { ...state, ...action.payload, isLogin: true }
    }
  },
  effects: {
    *login({ payload }, { call, put }){
       yield put({
          type: 'loginSuccess',
          payload:payload,
        });
      yield put(routerRedux.push('/contlist'));
    }
  },
  subscriptions: {},
};
