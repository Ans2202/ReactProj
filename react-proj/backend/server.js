const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const mysql = require('mysql2');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
});
  
db.connect(err => {
    if (err) {
      console.error('MySQL connection error:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });

app.get('/', (req, res) => {
    res.send('Hello, this is a simple server using Express!');
});

app.post('/signup', (req, res) => {
    const name = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            res.status(500).send('Internal Server Error');
        } else {
            const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
            db.query(sql, [name, email, hash], (err, result) => {
                if (err) {
                    console.error('Error inserting data into database:', err);
                    res.status(500).send('Internal Server Error');
                } else {
                    console.log('Data inserted successfully');
                    res.send('Data inserted successfully');
                }
            });
        }
    });
});

app.post('/login', (req, res) => {
    console.log('Received login request:', req.body);
    const { email, password } = req.body;

    const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkUserQuery, [email], (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            res.status(500).send('Internal Server Error');
        } else {
            if (results.length > 0) {
                const storedPassword = results[0].password;

                // Use bcrypt.compare to compare the plain-text password with the hashed password
                bcrypt.compare(password, storedPassword, (compareErr, isMatch) => {
                    if (compareErr) {
                        console.error('Error comparing passwords:', compareErr);
                        res.status(500).send('Internal Server Error');
                    } else {
                        if (isMatch) {
                            res.send('Login successful');
                        } else {
                            res.status(401).send('Invalid email or password');
                        }
                    }
                });
                
            } else {
                res.status(401).send('Invalid email or password');
            }
        }
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});