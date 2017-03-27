import React from 'react';
import styles from './ContList.css';
import { routerRedux } from 'dva/router'
import { Table, Icon, Pagination } from 'antd';

function ContList({ contState, dispatch }) {
  let pageChange = (current, size) => {
    const { query, pathname } = location
    dispatch(routerRedux.push({//根据路由分页
      pathname,
      query: {
        pageNum: current,
        pageSize: size,
      },
    }))
  }
  const dataSource = contState.contData.list;
  const pageinfo = {
    total: contState.contData.total,	//数据总数	number	0
    onChange: pageChange,	//页码改变的回调，参数是改变后的页码及每页条数	Function(page, pageSize)	noop
    showSizeChanger: true,	//是否可以改变 pageSize	boolean	false
    pageSizeOptions: ['10', '20', '30', '40'],	//指定每页可以显示多少条	string[]	['10', '20', '30', '40']
    onShowSizeChange: pageChange,	//pageSize 变化的回调	Function(current, size)	noop
    showQuickJumper: true,//是否可以快速跳转至某页	boolean	false
};

const columns = [{
  title: '合同ID',
  dataIndex: 'conid',
  key: 'conid',
}, {
  title: '跟进人',
  dataIndex: 'followUserName',
  key: 'followUserName',
}, {
  title: '合同状态',
  dataIndex: 'constatename',
  key: 'constatename',
}, {
  title: '业务类型',
  dataIndex: 'categoryname',
  key: 'categoryname',
}, {
  title: '住址',
  dataIndex: 'addr',
  key: 'addr',
}];

return (
  <div className={styles.normal}>
    <Table pagination={pageinfo} dataSource={dataSource} columns={columns} rowKey={record => record.conid} />
  </div>
);
}

export default ContList;
