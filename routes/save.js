const save = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


save.post('/', (req, res) => {

    const {title, text} = req.body;
  
      const newNote = {
          title,
          text,
          id: uuidv4()
      };
  
      fs.readFile('./db/db.json', (err, data) => {
          if(err) {
              console.error(err)
          } else {
              const parseData = JSON.parse(data);
              parseData.push(newNote);

              fs.writeFile('./db/db.json', JSON.stringify(parseData, null, 4), (err) => 
              err ? console.error(err) : console.log('Successfully saved') )
          }
      })

       res.json(newNote);
})

module.exports = save;