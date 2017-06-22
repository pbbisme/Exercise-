## 项目脚手架简介 ##

>
>使用 dva.js 脚手架 [https://github.com/dvajs/dva](https://github.com/dvajs/dva)
>

## 前端框架使用 antd ##

>[https://ant.design/docs/react/introduce-cn](https://ant.design/docs/react/introduce-cn)
>
##AJAX采用axios##

> 具体用法查看
> [https://github.com/mzabriskie/axios](https://github.com/mzabriskie/axios)
> 
> 扩展其他ajax方案（类库）汇总：[http://andrewhfarmer.com/ajax-libraries/](http://andrewhfarmer.com/ajax-libraries/)
> 

##快捷添加项目代码##

dva g model  模块名称
> 如：```dva g mode user```

dva g component 组件名称
> 如：```dva g component user```
    
dva g route 路由名称
> 如：```dva g route user```

##项目运行##

>`npm install`   或  `cnpm install`

>`npm start`  




const pxtorem = require('postcss-pxtorem');
module.exports = function (webpackConfig, env) {
  // 对roadhog默认配置进行操作，比如：
  // if (env === 'development') {
  //   webpackConfig.plugins.push('...')
  // }
  webpackConfig.postcss=[];
  // 引入高清方案
  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }));

  return webpackConfig;
}
