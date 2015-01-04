'use strict';
const fs = require('fs'),
      prompt = require('prompt'),
      schema = {
          properties: {
              username: {
                  required: true
              },
              password: {
                  required: true,
                  hidden: true
              },
              "domain": {
                  required: true
              },
              "api_key": {
                  required: true
              }
          }
      };
prompt.message = '';
prompt.delimiter = ':';
prompt.start();
prompt.get(schema, function (err, result) {
    if (err) {
        throw err;
    }
    let path = process.env.HOME + '/.egnyte-auth.json';
    fs.writeFileSync(path, JSON.stringify(result));
    console.log("File " + path + " updated with your config. You can start geeknyting!");
});
