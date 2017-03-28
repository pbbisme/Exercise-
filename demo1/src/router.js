import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Login from "./routes/Login.js";

import Users1 from "./routes/Users1.js";
import ContContailR from "./routes/ContContail.js";
import ContContail from "./routes/ContContail.js";
import ContDetailR from './routes/ContDetail.js';
import Nopage from './routes/Nopage.js'
import App from './routes/app';

import ContDetail from "./routes/ContDetail.js";

const cached = {}
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

const RouterConfig = ({ history, app }) => {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], function (require) {
          registerModel(app, require('./models/login'));
          cb(null, { component: require('./routes/Login') });
        }, 'login')
      },
      childRoutes: [{
        path: 'login',
        name: 'login',
        getComponent(nextState, cb) {
          require.ensure([], require => {
            registerModel(app, require('./models/login'))
            cb(null, require('./routes/Login'))
          }, 'contlist')
        },
      }, {
        path: 'contlist',
        name: 'contlist',
        getComponent(nextState, cb) {
          require.ensure([], require => {
            registerModel(app, require('./models/ContList'))
            cb(null, require('./routes/IndexPage'))
          }, 'contlist')
        },
      }, {
        path: 'contlist2',
        name: 'contlist2',
        getComponent(nextState, cb) {
          require.ensure([], require => {
            registerModel(app, require('./models/contContail'))
            cb(null, require('./routes/ContContail'))
          }, 'contlist2')
        },
      }]
    }, {
      path: '/bbpu',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          cb(null, { component: require('./routes/Login') })
        }, 'login')
      },
    },  {
      path: '/condetail/:id',
      name: 'condetail',
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require('./routes/ContDetail'))
        }, 'condetail')
      },
    }, {
      path: '*',
      name: 'notpage',
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require('./routes/Nopage'))
        }, 'Nopage')
      },
    }
  ]

  return <Router history={history} routes={routes} />
}

// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Route path="/" component={App} >
//         <Route path="/login" component={Login} />
//         <Route path="/contlist" component={IndexPage} />
//         <Route path="/contlist2" component={ContContailR} />
//       </Route>

//       <Route path="*" component={Nopage} />
//     </Router>
//   );
// }

export default RouterConfig;
