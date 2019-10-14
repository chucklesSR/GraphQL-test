"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var UserSchema = new _mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: String,
  age: Number
});

var _default = (0, _mongoose.model)('User', UserSchema);

exports["default"] = _default;
//# sourceMappingURL=User.js.map