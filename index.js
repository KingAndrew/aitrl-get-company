////////////// GetCompany ///////////////////////
'use strict';

// Added to handle injection
const vandium = require( 'vandium' );

const mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : process.env.rds_host,
  user            : process.env.rds_user,
  password        : process.env.rds_password,
  database        : process.env.rds_database,
  port            : process.env.rds_port
});

exports.handler = vandium.generic()
    .handler( (event, context, callback) => {

  let sql = "SELECT id, name, racing_name, points FROM company WHERE id = " + connection.escape(event.company_id);

  console.log('GetCompany SQL: ${sql}');

  pool.query(sql, function (error, results, fields) {
      console.log('GetCompany Results: ${results}');
      callback( null, results );
  });
})
