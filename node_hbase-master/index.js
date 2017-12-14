var thrift = require('thrift');

var HBase = require('./gen-nodejs/Hbase');
var HBaseTypes = require('./gen-nodejs/Hbase_types');

var connection = thrift.createConnection('192.168.10.210', 7788, {
  transport: thrift.TBufferedTransport
});
var client = thrift.createClient(HBase, connection);

 //app.listen(4000);
connection.on('connect', function () {
console.log('Connected');
client.getTableNames(function (err, data) {
console.log('Tables:', data);

connection.end();
});
});
