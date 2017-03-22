import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import LeftMenu from '../components/LefMenu.js';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <div className={styles.header}>头部</div>
      <LeftMenu />
      <div className={styles.footer}>底部1</div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
