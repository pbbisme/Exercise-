import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import LoginComp from '../components/Login.js';
function Login({login,dispatch}) {
  return (
    <div className={styles.normal}>
      <LoginComp dispatch={dispatch} {...login} />
    </div>
  );
}

function mapStateToProps(state) {
  return {login:state.login};
}




export default connect(mapStateToProps)(Login);
