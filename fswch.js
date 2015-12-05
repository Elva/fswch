#!/usr/bin/env node

/*
    fswch
    Tiny command line wrapper for fs.watch

    Usage:
    fswch filepath(s) 'command'
    fswch path/to/scripts/*.js 'uglify path/to/scripts/*.js > scripts.min.js'
    fswch path/to/styles/style.less 'lessc path/to/styles/style.less > path/to/styles/style.css'

    Lasha Tavartkiladze
    2015-07-21
*/ 



//
// Node modules.
//
var node = {
    fs: require('fs'),
    cp: require("child_process")
};



//
// List of files and a command to execute.
//
var argv = process.argv.slice(2);
var command = argv.pop();



//
// Run.
//
argv.forEach(function (filePath) {
    node.fs.exists(filePath, function (exists) {
        if (exists && node.fs.statSync(filePath).isFile()) {
            node.fs[process.platform === 'win32' ? 'watch' : 'watchFile'](filePath, onChange);
        }
    });
});



//
// Execute the command after file has changed/renamed.
//
function onChange(event, filename) {
    node.cp.exec(command, function (err, stdout, stderr) {
        if (err) {
            process.stderr.write(stderr);
        } else if (typeof stdout === 'string') {
            process.stdout.write(stdout);
        }
    });
}