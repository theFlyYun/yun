var debug = require('debug')('MqttLogger');
var _ = require('lodash');
var events = require('events');
var inherits = require('util').inherits;
var Promise = require('bluebird');
var moment = require('moment');

var MqClient = require('../lib/kafka');

const mqClient = new MqClient(this.options.msgQueue);