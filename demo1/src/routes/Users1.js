import React from 'react';
import { connect } from 'dva';
import styles from './Users1.css';

function Users1() {
  return (
    <div className={styles.normal}>
      Route Component: Users1
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Users1);
