// -*- javascript -*-

// ----------------------------------------------------------------------
// DEPENDENCIES
// ----------------------------------------------------------------------
let express = require('express');

// ----------------------------------------------------------------------
// GLOBALS
// ----------------------------------------------------------------------
let globals = {};

globals.DB_SERVER_PATH = "localhost";
globals.DB_NAME = "02_Github_Battle";

// globals.{{DATA}}_TYPES: Array<string> = [ ... ];

globals.WEB_SERVER_PORT = 8000;

globals.app = express();

// ----------------------------------------------------------------------
// MVC:MODELS
// ----------------------------------------------------------------------
require( "./server/config/models.js" )( globals );

// ----------------------------------------------------------------------
// MVC:VIEWS
// ----------------------------------------------------------------------
require( "./server/config/views.js" )( globals );

// ----------------------------------------------------------------------
// MVC:CONTROLLERS
// ----------------------------------------------------------------------
require( "./server/config/routes.js" )( globals );

// ----------------------------------------------------------------------
// WEB SERVER
// ----------------------------------------------------------------------
globals.app.listen( globals.WEB_SERVER_PORT, function() {
    console.log( "Server listening on port", globals.WEB_SERVER_PORT ); // INFO
});

