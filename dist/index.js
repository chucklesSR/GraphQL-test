"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _schema = _interopRequireDefault(require("./schema"));

var _database = require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _database.connect)();
app.get('/', function (req, res) {
  res.json({
    message: 'Visit de route /graphql'
  });
});
app.use('/graphql', (0, _expressGraphql["default"])({
  graphiql: true,
  schema: _schema["default"],
  context: {
    messageId: 'test'
  }
}));

var main = function main() {
  app.listen(3000);
  console.log('server on port 3000');
};

main();
//# sourceMappingURL=index.js.map