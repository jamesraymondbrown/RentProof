require('dotenv').config();
const fs = require('fs');

const cors = require("cors");
const helmet = require("helmet");
const bodyparser = require("body-parser");

const express = require('express');
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express()
const PORT = process.env.PORT || 8001;

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(cors());
app.use(helmet());
app.use(bodyparser.json());

const usersRouter = require('./routes/users')
const propertiesRouter = require('./routes/properties')
const pricesRouter = require('./routes/prices') 

app.use('/users', usersRouter);
app.use('/properties', propertiesRouter);
app.use('/prices', pricesRouter);

app.use(express.static('server'))

app.post('/upload/photos',
    fileUpload({ createParentPath: true }),
    (req, res) => {
        const files = req.files
        console.log(files)

        Object.keys(files).forEach(key => {
            const filepath = path.join(__dirname, 'files/photos', files[key].name)
            files[key].mv(filepath, (err) => {
                if (err) return res.status(500).json({ status: "error", message: err })
            })
        })
        return res.json({ status: 'success', message: files })
    }
)

app.delete("/upload/photos", (req, res) => {
  const file = req.query
  const filepath = path.join(__dirname, 'files/photos', file.name)
  fs.unlink(filepath, (err) => {
  if (err) throw err;
  console.log('File Deleted');
});
  return res.status(200).json({ result: true, msg: `${file.name} Deleted` });
});

app.post('/upload/documents',
    fileUpload({ createParentPath: true }),
    (req, res) => {
        const files = req.files
        console.log(files)

        Object.keys(files).forEach(key => {
            const filepath = path.join(__dirname, 'files/documents', files[key].name)
            files[key].mv(filepath, (err) => {
                if (err) return res.status(500).json({ status: "error", message: err })
            })
        })
        return res.json({ status: 'success', message: files })
    }
)

app.delete("/upload/documents", (req, res) => {
  const file = req.query
  const filepath = path.join(__dirname, 'files/documents', file.name)
  fs.unlink(filepath, (err) => {
  if (err) throw err;
  console.log('File Deleted');
});
  return res.status(200).json({ result: true, msg: `${file.name} Deleted` });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
