const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion, Collection } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('node js running')
})




// dbuser2
// gl3TRWLm6CwymyfE

const uri = "mongodb+srv://dbuser2:gl3TRWLm6CwymyfE@cluster0.6l0by.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        const menudb = client.db('Coffee-shop').collection('menus')

        app.get('/menus', async (req, res) => {
            const query = {}
            const result = await menudb.find(query).toArray()
            res.send(result)
        })

        app.get('/users', async (req, res) => {
            const cursor = database.find({})
            const users = await cursor.toArray()
            res.send(users)
        })

        app.post('/users', async (req, res) => {
            const user = req.body
            const result = await database.insertOne(user)
            console.log(result)
            user._id = result.insertedId;
            res.send(user)
        })


    }
    finally {

    }
}

run().catch(console.dir)


// app.get('/users', (req, res) => {
//     if (req.query.name) {
//         const search = req.query.name;
//         const filtered = users.filter(usr => usr.name.toLowerCase().indexOf(search))
//         res.send(filtered)
//     }
//     else {
//         res.send(users)
//     }
// })




// app.post('/users', (req, res) => {
//     console.log('post api called')
//     const user = req.body
//     user.id = users.length + 1;
//     users.push(user)
//     console.log(req.body)
//     res.send(user)
// })



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


