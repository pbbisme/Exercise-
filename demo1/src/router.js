import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Login from "./routes/Login.js";

import Users1 from "./routes/Users1.js";
import ContContailR from "./routes/ContContail.js";
import ContContail from "./routes/ContContail.js";

import App from './routes/app';
const cached = {}
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}
const RouterConfig = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/login'))
          cb(null, { component: require('./routes/Login') })
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
          }, 'contlist')
        },
      }]
    }, {
      path: '/bbpu',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/login'))
          cb(null, { component: require('./routes/Login') })
        }, 'login')
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
//       <Route path="/" component={IndexPage} />
//       <Route path="/login" component={Login} />
//       <Route path="/contlist" component={IndexPage} />
//       <Route path="/contlist2" component={ContContailR} />
//       <Route path="*" component={Nopage} />
//     </Router>
//   );
// }

export default RouterConfig;
