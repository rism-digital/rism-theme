var lunr = require('lunr'),
    stdin = process.stdin,
    stdout = process.stdout,
    buffer = []

require( "lunr-languages/lunr.stemmer.support" )( lunr )
require( "lunr-languages/lunr.multi" )( lunr )
require( "lunr-languages/lunr.de" )( lunr )
require( "lunr-languages/lunr.fr" )( lunr )
require( "lunr-languages/lunr.it" )( lunr )

stdin.resume()
stdin.setEncoding('utf8')

stdin.on('data', function (data) {
  buffer.push(data)
})

stdin.on('end', function () {
  var documents = JSON.parse(buffer.join())

  var idx = lunr( function ()
  {
    this.use(lunr.multiLanguage('en', 'de', 'fr', 'it'))
    this.ref('id')
    this.field( 'title' )
    this.field( 'body' )
    this.field( 'lang' )

    documents.forEach(function (doc) {
      this.add(doc)
    }, this)
  })

  stdout.write(JSON.stringify(idx))
})