import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import styles from './IndexPage.css';
import LeftMenu from '../components/LefMenu.js';
import ContList from '../components/ContList.js';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

function IndexPage({ contData, dispatch, location}) {
  return (
    <ContList contState={contData} dispatch={dispatch} location={location} />
  );
}

function mapStateToProps(state) {
  return { contData: state.ContList };
}

export default connect(mapStateToProps)(IndexPage);
