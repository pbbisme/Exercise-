import dva from 'dva';
import './index.css';

import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';

// 1. Initialize
const app = dva({
  // history: browserHistory,

  history: useRouterHistory(createHashHistory)({ queryKey: false }),
  onError: function (msg) {
    alert(msg.sagaStack || msg.message || "程序异常");
  }
});


app.model(require("./models/contDetail"));


// app.model({});
// app.model(require("./models/login"));


// app.model(require("./models/contContail"));


// app.model(require("./models/users1"));


// app.model(require("./models/ContList"));


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
