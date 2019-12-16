////////////// GetCompany ///////////////////////
'use strict';

// Added to handle injection
const vandium = require( 'vandium' );

const mysql = require('mysql');

exports.handler = vandium.generic()
    .handler( (event, context, callback) => {

  let connection = mysql.createConnection({
    host     : '[rds_host]',
    user     : '[rds_user]',
    password : '[rds_password]',
    database : '[rds_database]'
  });

  let sql = "SELECT id, name, racing_name, points FROM company WHERE id = " + connection.escape(event.company_id);

  console.log('GetCompany SQL: ${sql}');

  connection.query(sql, function (error, results, fields) {
      console.log('GetCompany Results: ${results}');
      callback( null, results );
  });
})