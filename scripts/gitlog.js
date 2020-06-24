var process = require('child_process');
var fs = require('fs')
var cmd = 'git log --no-merges --date=format:"%Y/%m/%d %H:%M:%S" --pretty=format:"%H %cd %s"';
process.exec(cmd, function(error, stdout) {
  fs.writeFile('gitlog.txt', stdout, ()=>{});
});