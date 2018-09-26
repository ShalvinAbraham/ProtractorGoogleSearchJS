var fs = require("fs");
var path = require("path");

var utils = function() {

	//Delete a folder, sub folders and files recursively
    this.rmdir = (dir) =>  {
        if (fs.existsSync(dir)) {
            var list = fs.readdirSync(dir);
            for(var i = 0; i < list.length; i++) {
                var filename = path.join(dir, list[i]);
                var stat = fs.statSync(filename);

                if(filename == "." || filename == "..") {
                    // pass these files
                } else if(stat.isDirectory()) {
                    // rmdir recursively
                    this.rmdir(filename);
                } else {
                    // rm fiilename
                    fs.unlinkSync(filename);
                }
            }
            fs.rmdirSync(dir);
        }
    };
};

module.exports = new utils();