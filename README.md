Geeknyte
========

Geeknyte is a command line [Egnyte](http://www.egnyte.com/) client for linux.

Project goals
-------------

- Provide a basic CLI client for unix based systems, especially for
  linux, where there is no official Egnyte client.
- Implement basic set of operations - list, put, get, delete, etc.
- Play with Egnyte's js sdk and with node js

Maturity
--------
This is a very early version. Its more a POC than a working
implementation.

Documentation
-------------

### Install it

```
# Install it globally
$ sudo npm install -g geeknyte

# Configure it filling in the details
$ setup-geeknyte
:username: username
:password:   # this is not echoed, but is saved in plaintext to the config file
:domain: https://yourdomain.egnyte.com
:api_key: api-key-goes-here  # You should request the api key at https://developers.egnyte.com
File /home/igor/.egnyte-auth.json updated with your config. You can start geeknyting!
```

Now you can use it.

### List folder contents

```
$ geeknyte ls /Shared/Temp
> Listing /Shared/Temp
- 3.jpg
```

### Download file

```
$ geeknyte get /Shared/Temp/3.jpg pic.jpg
$ ls pic.jpg 
pic.jpg   # The file is there
```

### Upload file

[Issue #3](https://github.com/puszczyk/geeknyte/issues/3)

```
$ geeknyte put pic.jpg /Shared/Temp/4.jpg

# This is now defunct due to the following. I need to debug it
/usr/lib/node_modules/geeknyte/node_modules/egnyte-js-sdk/node_modules/q/q.js:126
                    throw e;
                          ^
Error: Only files with non zero sizes can be uploaded
    at Request._callback (/usr/lib/node_modules/geeknyte/node_modules/egnyte-js-sdk/src/lib/api_elements/reqengine.js:97:21)
    at Request.self.callback (/usr/lib/node_modules/geeknyte/node_modules/egnyte-js-sdk/node_modules/request/request.js:123:22)
    at Request.emit (events.js:98:17)
    at Request.<anonymous> (/usr/lib/node_modules/geeknyte/node_modules/egnyte-js-sdk/node_modules/request/request.js:1047:14)
    at Request.emit (events.js:117:20)
    at IncomingMessage.<anonymous> (/usr/lib/node_modules/geeknyte/node_modules/egnyte-js-sdk/node_modules/request/request.js:998:12)
    at IncomingMessage.emit (events.js:117:20)
    at _stream_readable.js:943:16
    at process._tickCallback (node.js:419:13)
```

Contributing
------------

Please fill in the issues, post suggestion, code review my java script
and of course fork and post pull requests.

License
-------

(c) Copyright 2015 by Igor Kupczyński

Licensed under [Apache 2.0 License](LICENSE.txt).

_Disclaimer_ I work for Egnyte, but this project is my own effort. I
developed it in my personal time with my own resources and using only
publicly available documentation. I hope it may be useful or
entertaining for you, but I can't guarantee it. Use at your own risk.
