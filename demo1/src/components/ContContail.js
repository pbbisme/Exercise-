import React from 'react';
import styles from './ContContail.css';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { Table, Icon, Pagination } from 'antd';

function ContContail({ contInfo, seachInfo, dispatch }) {
  const dataSource = contInfo && contInfo.list || [];
  const pageChange = (current, size) => {
    console.log(current, size);
    dispatch({
      type: 'contContail/list',
      payload: { pageNum: current, pageSize: size }
    })

  }
  const pagination = {
    total: contInfo.total,	//数据总数	number	0
    onChange: pageChange,	//页码改变的回调，参数是改变后的页码及每页条数	Function(page, pageSize)	noop
    showSizeChanger: true,	//是否可以改变 pageSize	boolean	false
    pageSizeOptions: ['10', '20', '30', '40'],	//指定每页可以显示多少条	string[]	['10', '20', '30', '40']
    onShowSizeChange: pageChange,	//pageSize 变化的回调	Function(current, size)	noop
    showQuickJumper: true,//是否可以快速跳转至某页	boolean	false
  };

  const columns = [{
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    render: (text, record, index) => {
      return index + 1
    }
  }, {
    title: '合同ID',
    dataIndex: 'conid',
    key: 'conid',
  }, {
    title: '合同编号',
    dataIndex: 'conno',
    key: 'conno',
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
  }, {
    title: '操作',
    dataIndex: '',
    key: 'option',
    render: (text, record, index) => {
      var id=record.conid;
      return <Link to={`/condetail/${id}`} >合同详情</Link>
    }
  }];

  return (
    <div className={styles.normal}>
      <span>共计记录:{contInfo && contInfo.total}</span>
      <Table loading={false} dataSource={dataSource} pagination={pagination} columns={columns} rowKey={record => record.conid} />
    </div>
  );
}
export default ContContail;

