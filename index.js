const express = require('express');
const app = express();

app.get('/' , function(req, res){
    res.send('Better pagina');
});

app.listen(3000, () => console.log('servidor corriendo'));