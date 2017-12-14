// This section includes a fix from here:
// https://stackoverflow.com/questions/17415528/nodejs-hbase-thrift-weirdness/21141862#21141862
var thrift = require('thrift'),
  HBase = require('./gen-nodejs/HBase.js'),
  HBaseTypes = require('./gen-nodejs/HBase_types.js'),
  connection = thrift.createConnection('192.168.10.210', 7788, {
    transport: thrift.TBufferedTransport
  });

connection.on('connect', function() {
  var client = thrift.createClient(HBase,connection);

  // get a row based on the full rowkey.
  client.getRow('table_kafka_test','baseDate:20171115;baseTime:1500;category:LGT',null,function(err, data) {
	  console.log('------------------------------------------------------------');

    if (err) {
      console.log(' error: ', err);
    } else {
      console.log('테이블데이터json: %j', data);

	  //console.log("got it");
    }
     console.log('------------------------------------------------------------');
    connection.end();
  });
});

connection.on('error', function(err){
  console.log('on error:', err);
});
