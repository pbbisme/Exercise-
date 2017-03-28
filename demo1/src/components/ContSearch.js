import React from 'react';
import styles from './ContSearch.css';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

function ContSearch({ seachInfo, dispatch, form: {
    getFieldDecorator,
  validateFieldsAndScroll,
  } }) {
  let seach = () => {
    validateFieldsAndScroll((errors, values) => {
      dispatch({
        type: 'contContail/list',
        payload:values
      })
    })
  }
  return (
    <div className={styles.normal}>
      <Form className={"ant-advanced-search-form"} layout={"inline"}>
        <Row gutter={40}>
          <Col span={6} key={0}>
            <FormItem label={'合同编号'}>
              {
                getFieldDecorator('searchKey')(<Input name='searchKey' placeholder="合同编号" />)
              }
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" onClick={seach}>查询</Button>
            <Button style={{ marginLeft: 8 }}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Form.create()(ContSearch);
