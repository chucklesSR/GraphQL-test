"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTools = require("graphql-tools");

var _resolvers = require("./resolvers");

var typeDefs = "\n\n    type User {\n        _id: ID\n        firstname: String!\n        lastname: String!\n        age: Int\n    }\n\n    type Query {\n        allUsers: [User]\n        userById( _id: ID ): User\n    }\n\n    type Mutation {\n        createUser( input: UserInput ): User\n        deleteUser( _id: ID ): User\n        updateUser(_id: ID, input: UserInput): User\n    }\n\n    input UserInput {\n        firstname: String!\n        lastname: String!\n        age: Int\n    }\n\n";

var _default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers.resolvers
});

exports["default"] = _default;
//# sourceMappingURL=schema.js.map