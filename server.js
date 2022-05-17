const express = require('express');
const app = express();
const port = 3000;

const getTimestamp = date => ({
    unix: date.getTime(),
    utc: date.toUTCString()
})

// Middleware to serve the CSS stylesheet
app.use("/styles", express.static(__dirname.concat('/styles')));

app.get('/', (req, res) => {
    // Main page
    let path = __dirname.concat('/views/index.html');
    res.sendFile(path, error => {
        if (error) next(error);
        console.log("Served: index.html");
    });
});

app.get('/api/:date', (req, res) => {
    const requestDate = req.params.date;

    // Check if URL request parameter is a number
    const date = !isNaN(requestDate)
        ? new Date(parseInt(requestDate))
        : new Date(requestDate);

    // If the getTime() function returns a number, respond with the timestamp object
    if (!isNaN(date.getTime())) return res.status(200).send(getTimestamp(date));

    // If the getTime() function returns NaN, respond with an error message
    return res.status(400).send({ error: "Invalid Date" });
})

app.get('/api', (req, res) => {
    // If no parameter is given, return the current date
    res.json(getTimestamp(new Date()));
})


// Redirect user to 404 error page if the requested URL is not found
app.use(function (req, res) {
    let path = __dirname.concat('/views/404.html');
    res.sendFile(path, error => {
        if (error) next(error);
        console.log("404 page not found");
    });
})

app.listen(port, error => {
    if (error) return console.log(error);
    console.log(`Server running on PORT ${port}`);
});

// Export the Express API
module.export = app;