const express = require('express')
const cors = require('cors')
const { MongoClient, ObjectId } = require('mongodb')
const jwt = require('jsonwebtoken');
const { expressjwt: exjwt } = require('express-jwt')
const jwt_decode = require('jwt-decode')
const app = express()

app.use(express.json())
app.use(cors())

const secretkey = "abcd"
const algorithm = "HS256"

const jwtmw = exjwt({
    secret: secretkey,
    algorithms: [algorithm]
})

const client = new MongoClient('mongodb+srv://Admin:Admin@cluster0.hzkrxcu.mongodb.net/?retryWrites=true&w=majority')

client.connect()
    .then(() => {
        const db = client.db('Gleam')
        const col = db.collection('register')

        app.post('/register', (req, res) => {
            col.insertOne(req.body)
            console.log(req.body)
            res.send('Inserted successfully')
        });

        app.get('/retrieve', jwtmw, async (req, res) => {
            try {
                const token = req.headers.authorization.split(' ')[1];
                const decoded = jwt_decode(token);
                console.log(decoded);
                
                const result = await col.find().toArray()
                console.log(result)
                res.send(result)
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Server Error' });
            }
        })

        app.put('/users/:id', async (req, res) => {
            const { id } = req.params
            const { name, role, email, password } = req.body
            const result = await col.updateOne({ _id: new ObjectId(id) }, { $set: { name, role, email, password } })
            res.send('updated')
        })

        app.delete('/users/:id', async (req, res) => {
            const { id } = req.params
            const result = await col.deleteOne({ _id: new ObjectId(id) })
            res.json({ message: 'deleted successfully' })
        });

        app.post('/signin', async (req, res) => {
            const { email, password } = req.body;
        
            try {
                const user = await col.findOne({ email });
        
                if (!user || password !== user.password) {
                    return res.status(401).json({ message: 'Invalid email or password' });
                }
        
                const token = jwt.sign(user, secretkey, { algorithm: algorithm, expiresIn: '1d' });
        
                res.json({ username: user.name, token: token });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Server Error' });
            }
        });
        
        

        app.get('/', (req, res) => {
            res.send('<h1>Hello World</h1>')
        })
        app.get('/about', (req, res) => {
            res.send('<h1>This is about page</h1>')
        })

        app.listen('8080', () => {
            console.log('Server is running')
        })
    })
    .catch(err => console.error(err));
