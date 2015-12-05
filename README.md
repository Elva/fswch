# fswch
Tiny command line wrapper for fs.watch

## Usage:
```
npm install -g fswch
```
```
fswch filepath(s) 'command'
fswch path/to/scripts/*.js 'uglify path/to/scripts/*.js > scripts.min.js'
fswch path/to/styles/style.less 'lessc path/to/styles/style.less > path/to/styles/style.css'
```