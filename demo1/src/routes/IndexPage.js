import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
<<<<<<< HEAD
import LeftMenu from '../components/LefMenu.js';
=======
>>>>>>> 56ca02e976aa14dedadeece54542e6da921f1ca5

function IndexPage() {
  return (
    <div className={styles.normal}>
<<<<<<< HEAD
      <div className={styles.header}>头部</div>
      <LeftMenu />
      <div className={styles.footer}>底部1</div>
=======
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
>>>>>>> 56ca02e976aa14dedadeece54542e6da921f1ca5
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
