const del = require('express').Router();
const fs = require('fs');

del.delete('/:id', (req, res) => {

    const { id } = req.params;

    fs.readFile('db/db.json', (err, data) => {
    const parseData = JSON.parse(data);

    parseData.forEach(noteobject => {
        if(id === noteobject.id) {
            const idIndex = parseData.indexOf(noteobject);
            parseData.splice(idIndex, 1);

            fs.writeFile('db/db.json', JSON.stringify(parseData, null, 4), (err) => 
                err ? console.error(err) : console.log('Successfully deleted') )
                res.json(parseData);
        }
    })
})
})

module.exports = del;