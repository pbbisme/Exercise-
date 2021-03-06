
//分页默认配置
export default {
  current: 1,	//当前页数	number	-
  defaultCurrent: 1,//	默认的当前页数	number	1
  total: 100,	//数据总数	number	0
  defaultPageSize: 10,//	默认的每页条数	number	10
  pageSize: 10,	//每页条数	number	-
  onChange: function (current, size) {
    console.log(current, size);
  },	//页码改变的回调，参数是改变后的页码及每页条数	Function(page, pageSize)	noop
  showSizeChanger: true,	//是否可以改变 pageSize	boolean	false
  pageSizeOptions: ['10', '20', '30', '40'],	//指定每页可以显示多少条	string[]	['10', '20', '30', '40']
  onShowSizeChange: function (current, size) {
    console.log(current, size);
  },	//pageSize 变化的回调	Function(current, size)	noop
  showQuickJumper: true,//是否可以快速跳转至某页	boolean	false
}
