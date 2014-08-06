var express = require('express');
var app = express();
var cors = require('express-simple-cors');

/**
 * Set the spacing to 0 for shorter output
 */
app.set('json spaces', 0);

/**
 * Cross-origin resource sharing
 */
app.use(cors());

require('apis-endpoints-middleware')(app);

app.listen(3100,function(){
	console.log('Server started on port 3100')
});