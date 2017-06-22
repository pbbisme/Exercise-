import React from 'react';
import { connect } from 'dva';
import styles from './ContDetail.css';

function ContDetail({params}) {
  return (
    <div className={styles.normal}>
     {JSON.stringify(params)}
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ContDetail);
