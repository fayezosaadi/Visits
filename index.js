const express = require('express')
const redis = require('redis')
const app = express()
const port = 8081

// Redis is a key value pair in memory storage server
// use service name as a host as specified in docker-compose file
const client = redis.createClient({ host: 'redis-server' })

client.set('visits', 0)

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send(`Number of visits is ${visits}`)
    client.set('visits', parseInt(visits) + 1)
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

