'use strict';

/* Built-in Modules */

/* 3rd-party Modules */
var async = require('async');

/* Project Modules */
var E       = require('../utils/serverError');
var CONFIG  = require('../utils/yamlResources').get('CONFIG');
var toolkit = require('../utils/toolkit');

var scriptSetExportHistoryMod = require('../models/scriptSetExportHistoryMod');

/* Init */

/* Handlers */
var crudHandler = exports.crudHandler = scriptSetExportHistoryMod.createCRUDHandler();

exports.list = crudHandler.createListHandler();
