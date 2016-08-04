var mysql = require('mysql');
 
function Connection() {
  this.pool = null;
 
  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'aa48jcj8o44ss4.c6uleb0iwped.us-west-2.rds.amazonaws.com',
      user: 'hochefdb',
      password: 'Hochef1234',
      database: 'M_TestDB'
    });
  };
 
  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}
 
module.exports = new Connection();