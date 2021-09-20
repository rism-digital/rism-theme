const fs = require( 'fs' );
const lunr = require( 'lunr' );

require( "lunr-languages/lunr.stemmer.support" )( lunr )
require( "lunr-languages/lunr.multi" )( lunr )
require( "lunr-languages/lunr.de" )( lunr )
require( "lunr-languages/lunr.fr" )( lunr )
require( "lunr-languages/lunr.it" )( lunr )

// Expects two arguments: input and output files
var scriptArgs = process.argv.slice( 2 );
var inputFile = scriptArgs[0];
var outputFile = scriptArgs[1];

var documents;
// Read the input file
fs.readFile( inputFile, 'utf8', ( err, data ) =>
{
    if (err) {
        console.error(err)
        return
    }
    documents = JSON.parse( data );
    
    // Build the index
    var idx = lunr( function ()
    {
        this.use( lunr.multiLanguage( 'en', 'de', 'fr', 'it' ) )
        this.ref( 'id' )
        this.field( 'title' )
        this.field( 'body' )
        this.field( 'lang' )
        this.field( 'post' )
        this.field( 'category' )
        this.field( 'date' )

        documents.forEach( function ( doc )
        {
            this.add( doc )
        }, this )
    } );

    // Write the index file
    fs.writeFile( outputFile, JSON.stringify( idx ), err =>
    {
        if ( err )
        {
            console.error( err )
            return;
        }
    })
})
