import React from 'react';
import styles from './ContList.css';
import { Table, Icon,Pagination } from 'antd';

function ContList({contListData}) {
  const dataSource =contListData;

  let onShowSizeChange=(current, pageSize)=>{
    console.log(current, pageSize);
  };

  const columns = [{
    title: '合同ID',
    dataIndex: 'conid',
    key: 'conid',
  },{
    title: '跟进人',
    dataIndex: 'followUserName',
    key: 'followUserName',
  },{
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
      <Table dataSource={dataSource} columns={columns} rowKey={record => record.conid} />
      <Pagination onShowSizeChange={onShowSizeChange} defaultCurrent={1} total={500} />
    </div>
  );
}

export default ContList;
