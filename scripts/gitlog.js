var process = require('child_process');

var cmd = 'git log --no-merges --date=format:"%Y/%m/%d-%H:%M:%S" --pretty=format:"%H %cd %s"';
process.exec(cmd, function(error, stdout, stderr) {
  console.log(stdout);
});