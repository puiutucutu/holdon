const { exec } = require("child_process");
const chokidar = require("chokidar");

const watcher = chokidar.watch("test");
watcher.on("change", function(path) {
  exec("npm run test", function(error, stdout, stderr) {
    if (error) {
      throw error;
    }

    process.stdout.write(stdout);
  });
});
