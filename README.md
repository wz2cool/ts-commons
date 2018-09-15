# ts-commons

[![License](http://img.shields.io/:license-MIT-brightgreen.svg)](https://github.com/wz2cool/ts-commons/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/wz2cool/ts-commons.svg?branch=master)](https://travis-ci.org/wz2cool/ts-commons)
[![Coverage Status](https://coveralls.io/repos/github/wz2cool/ts-commons/badge.svg?branch=master)](https://coveralls.io/github/wz2cool/ts-commons?branch=master)
[![npm version](https://badge.fury.io/js/ts-commons.svg)](https://badge.fury.io/js/ts-commons)  
common methods for typescript/javascript

# Install

```js
$ npm install ts-commons --save
```

# DOC
[中文简介](https://wz2cool.github.io/2018/09/11/ts-commons/?from=timeline)

# How to use
typescript
```js
import { DateUtils } from "ts-commons";

DateUtils.toString(new Date(), "yyyy-MM-dd HH:mm:ss.SSS");
```

javascript
```js
var tsCommons = require("ts-commons");

tsCommons.DateUtils.toString(new Date(), "yyyy-MM-dd HH:mm:ss.SSS");
```

you can run test on [RunKit](https://runkit.com/wz2cool/5b952e2dbdc3c3001270457b)