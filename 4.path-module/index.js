const path = require('path')

console.log("dir name of current file ",path.dirname(__filename))//gives absolute path

console.log("file name",path.basename(__filename))//return the file name only


console.log('file extension',path.extname(__filename))


const joinPath = path.join('/user','documenet','node','project')
console.log('joined path ',joinPath)
//return /user/documenet/node/project  


const resolvePath = path.resolve('user','documenr','node','projects')

console.log('resolved path',resolvePath)


const normalizePath = path.normalize('/user/.document/../node/project')
console.log('normalised path',normalizePath)