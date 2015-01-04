'use strict';
const fs = require('fs'),
      egnyte_js_sdk = require('egnyte-js-sdk');

module.exports = function(cfg_path) {
    if (!cfg_path) {
        cfg_path = process.env.HOME + '/.egnyte-auth.json';
    }

    let cfg = JSON.parse(fs.readFileSync(cfg_path)),
        egn = egnyte_js_sdk.init(cfg.domain, { key: cfg.api_key });

    return {
        egnyte_js_sdk: egn,
        authenticated: function() {
            return egn.API.auth.requestTokenByPassword(cfg.username, cfg.password);
        }
    };
};
