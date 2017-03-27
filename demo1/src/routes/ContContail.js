import React from 'react';
import { connect } from 'dva';
import styles from './ContContail.css';
import ContContailComp from '../components/ContContail.js';

function ContContail() {
  return (
    <div className={styles.normal}>
      <ContContailComp />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ContContail);
