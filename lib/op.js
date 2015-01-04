'use strict';
const fs = require('fs');

var print_items = function(items) {
    if (items) {
        for (let i = 0; i < items.length; i++) {
            let type = items[i].is_folder ? "d" : "-",
                name = items[i].name;
            console.log(type + " " + name);
        }
    }
};

var ls_printer = function(result) {
    console.log("> Listing " + result.path);
    print_items(result.folders);
    print_items(result.files);
};

var filemeta_printer = function(filemeta) {
    console.log(filemeta);
};



module.exports = function(egn) {
    return {
        actions: {
            ls: function(what) {
                return function() {
                    return egn.API.storage.get(what)
                        .then(ls_printer);
                };
            },
            put: function(what, where) {
                if (!what || !where) {
                    throw "Input file and destination are required, e.g. `put NewAccount.txt /Shared/Marketing`";
                }
                let fileStream = fs.createReadStream(what);
                return function() {
                    return egn.API.storage.storeFile(where, fileStream)
                        .then(filemeta_printer);
                };
            },
            get: function(what, where) {
                if (!what || !where) {
                    throw "Source file and destination are required, e.g. `get /Shared/Accounts/PoloCockta.txt PoloCockta.txt`";
                }
                return function() {
                    let outstream = fs.createWriteStream(where);
                    return egn.API.storage.getFileStream(what)
                        .then(function(pausedResponse){
                            pausedResponse.pipe(outstream);
                            pausedResponse.resume();
                        });
                };
            }
        }
    };
};
