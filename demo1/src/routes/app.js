import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import styles from './IndexPage.css';
import LeftMenu from '../components/LefMenu.js';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

function App({ children, location, dispatch}) {
  return (<Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item>
          <span>后台管理</span>
        </Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />合同管理</span>}>
            <Menu.Item key="2" className={location.pathname==="/login"?'ant-menu-item-selected':''}>
              <Link to="/login" >登录
                </Link>
            </Menu.Item>
            <Menu.Item key="1" className={location.pathname==="/contlist"?'ant-menu-item-selected':''}>
              <Link to="/contlist" >合同列表分页方式1
                </Link>
            </Menu.Item>
            <Menu.Item key="/contlist2">
              <Link to="/contlist2">合同列表分页方式2
                </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
         {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>)
}


export default connect()(App)
