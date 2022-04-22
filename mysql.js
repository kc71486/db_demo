#!/usr/bin/env node

const config = require('./config')
const mysql = require('mysql')

const connection = mysql.createConnection(config.mysql)

connection.connect(err => {
  if (err) {
    console.log('fail to connect:', err)
    process.exit()
  }
})

// Step 2 code goes here
connection.query('CREATE TABLE IF NOT EXISTS student (id VARCHAR(10), name VARCHAR(30), cid VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS course (id VARCHAR(10), name VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS score (id VARCHAR(10), score VARCHAR(10))')

connection.query('show TABLES', function (error, results, fields) {
  if (error) throw error
  console.log('There are tables: ', results)
})
// Step 3 code goes here

// Step 4 code goes here

// Step 5 code goes here

connection.end()
