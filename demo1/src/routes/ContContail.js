import React from 'react';
import { connect } from 'dva';
import styles from './ContContail.css';
import ContContailComp from '../components/ContContail.js';

function ContContail({ contInfo, seachInfo, dispatch }) {
  return (
    <div className={styles.normal}>
      <ContContailComp contInfo={contInfo} dispatch={dispatch} />
    </div>
  );
}


function mapStateToProps(state) {
  return {
    contInfo: state.contContail.contData,
    seachInfo: state.contContail.seachInfo
  };
}

export default connect(mapStateToProps)(ContContail);
// export default connect()(ContContail);
