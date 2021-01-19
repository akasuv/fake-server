"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

var _default = function _default() {
  return {
    comments: {
      ss: true,
      dt: {
        bookCommentCount: 233,
        enterpriseBookCommentItemVos: [{
          id: (0, _uuid.v4)(),
          content: "Wow such contentXXXXXXXXXXXXXXXXXx!",
          username: "zero_cool@"
        }]
      }
    }
  };
};

exports["default"] = _default;