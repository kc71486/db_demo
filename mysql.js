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

connection.query('SHOW TABLES', function (error, results, fields) {
  if (error) throw error
  console.log('There are tables: ', results)
})
// Step 3 code goes here
/*
connection.query('INSERT INTO student (id, name, cid) VALUES ("E24086234", "kc71486", "W0001"), ("A12345679", "StudentB", "M0001")', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO course (id, name) VALUES ("W0001", "Web Programming"), ("M0001", "Machine Learning"), ("E2000", "empty")', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO score (id, score) VALUES ("E24086234", 80), ("A123456789", 90)', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
*/
// Step 4 code goes here
connection.query('SELECT id FROM student WHERE name LIKE E24086234', function (error, results, fields) {
  if (error) throw error
  console.log('My id is: ', results)
})
// Step 5 code goes here
const sql = `
  SELECT student.id, student.name FROM student
  JOIN course ON course.id = student.cid
  WHERE course.name LIKE 'Web Programming'`
connection.query(sql, (err, rows, fields) => {
  if (err) console.log('fail to que	ry: ', err)
  else console.log(rows)
})
connection.end()
