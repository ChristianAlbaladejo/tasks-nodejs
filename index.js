const express = require('express');
const app = express();
const cron = require('node-cron');
const https = require('https')

const options = {
   hostname: 'calbaladejo.pythonanywhere.com',
   port: 443,
   path: '/sincro',
   method: 'GET'
}


cron.schedule('0 5 16 * * 1-5', () => {
   console.log("Task is running " + new Date())
   const req = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`)

      res.on('data', d => {
         process.stdout.write(d)
      })
   })

   req.on('error', error => {
      console.error(error)
   })

   req.end()
});

cron.schedule('0 30 12 * * 1-5', () => {
   console.log("Task is running " + new Date())
   const req = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`)

      res.on('data', d => {
         process.stdout.write(d)
      })
   })

   req.on('error', error => {
      console.error(error)
   })

   req.end()
});

cron.schedule('5 * * * * *', () => {
   console.log("Task is running " + new Date())
   const req = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`)

      res.on('data', d => {
         process.stdout.write(d)
      })
   })

   req.on('error', error => {
      console.error(error)
   })

   req.end()
});




app.listen(2400, () => { console.log("Server started at port 2400") });
