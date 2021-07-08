#!/usr/bin/env node

'use strict';

const deploy = require('../deploy');

const main = async () => await deploy('firefox');

main();
console.log("here")
