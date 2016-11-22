var fs = require('fs')

var readFileText = function(name,callback){
	process.nextTick(function(){
		var content = fs.readFileSync(name)
		callback(content.toString())
	})
}

readFileText('./package.json', function(content){
	console.log(content)
})
console.log('hola mundo')