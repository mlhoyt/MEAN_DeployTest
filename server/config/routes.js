// -*- javascript -*-

let bodyParser = require( 'body-parser' );
let path = require( 'path' );

module.exports = function( globals ) {
  // globals.app.use( bodyParser.urlencoded( { extended: true } ) );
  globals.app.use( bodyParser.json() );

  let Player_ctrlr = require( '../controllers/Player.js' );

  // globals.app.{{HTTP_TYPE}}( '{{URL}}/:{{PARAM}}', ( req, res ) => {
  //   {{TABLE_NAME}}_ctrlr.{{CTRLR_METHOD}}( req, res )
  // });

  globals.app.post   ( '/players',     ( req, res ) => Player_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/players',     ( req, res ) => Player_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/players/:pk', ( req, res ) => Player_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/players/:pk', ( req, res ) => Player_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/players/:pk', ( req, res ) => Player_ctrlr.delete   ( req, res ) );
  // Default (delegate to front-end router)
  globals.app.all( "*", ( req, res ) => res.sendfile( path.resolve( "./client/dist/index.html" ) ) );
}
