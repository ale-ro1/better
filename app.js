const express = require('express');
const app = express();

app.get('/' , function(req, res){
    res.send('Better pagina');
});

app.use(express.static('public'));
app.listen(3000, () => console.log('servidor corriendo'));


