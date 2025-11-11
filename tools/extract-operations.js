const fs = require('fs');

const data = JSON.parse(fs.readFileSync('Public Swagger/public-v2.json', 'utf8'));
const paths = data.paths || {};
const ops = [];

Object.keys(paths).forEach(path => {
  Object.keys(paths[path]).forEach(method => {
    const op = paths[path][method];
    if (op.operationId) {
      ops.push({
        operationId: op.operationId,
        method: method.toUpperCase(),
        path: path,
        description: (op.summary || op.description || '').substring(0, 200)
      });
    }
  });
});

console.log(JSON.stringify(ops, null, 2));
