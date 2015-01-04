'use strict';
const user_action = process.argv[2] || "",
      user_action_args = process.argv.slice(3) || [],
      egn = require('./../lib/egn')(),
      op = require('./../lib/op.js')(egn.egnyte_js_sdk),
      action = op.actions[user_action];

if (!action) {
    throw "Action is required, e.g. $ node --harmony geeknyte.js ls /Shared";
}

egn.authenticated()
    .then(action.apply(this, user_action_args))
    .done();
