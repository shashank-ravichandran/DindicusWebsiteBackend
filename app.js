const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Directory paths
const imageDir = path.join(__dirname, 'images');
const pdbDir = path.join(__dirname, 'pdb_files');

app.use(cors());
// Route to serve images
app.get('/images/:id', (req, res) => {
    const id = req.params.id;
    const imagePath = path.join(imageDir, `${id}.jpeg`); // Assuming images are in .jpg format

    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(404).send('Image not found');
        }
    });
});

// Route to serve PDB filesclear
app.get('/pdb/:id', (req, res) => {
    const id = req.params.id;
    const pdbPath = path.join(pdbDir, `${id}`);

    res.sendFile(pdbPath, (err) => {
        // if (err) {
        //     res.status(404).send('PDB file not found');
        // }
    });
});

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});