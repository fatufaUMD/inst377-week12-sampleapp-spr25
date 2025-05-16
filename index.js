const express = require('express');
const supabaseClient = require('@supabase/supabase-js');
const bodyParser = require('body-parser');
const dotenve = require('dotenv');
dotenve.config();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname +'/public'));
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);
app.get('/customers', async (req, res) => {
    console.log('Attempting to GET all customers');

    const { data, error } = await supabase.from('employ').select();

    // if (error){
    //     console.log(`Error: ${error}`);
    //     res.statusCode = 400;
    //     res.send(error);
    // }
    res.send(data);

});

// app.post('/employ', async(req, res)=> {
//     console.log('Adding Customer');

//     console.log(req.body);
//     res.send();
// })
app.listen(port, () => {
    console.log('APP IS ALIVEEEEEE on port ', port);
});