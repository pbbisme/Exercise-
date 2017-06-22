import React from 'react';
import { connect } from 'dva';
import styles from './ContContail.css';
import ContContailComp from '../components/ContContail.js';
import ContSearchComp from '../components/ContSearch.js';

function ContContail({ contInfo, seachInfo,loading, dispatch }) {
  return (
    <div className={styles.normal}>
      <ContSearchComp seachInfo={seachInfo} dispatch={dispatch}/>
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
