const app = require('./app'); // Import the application object from the 'app' module
const port = process.env.PORT || 5000; 

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
    // log a message to the console indication that the server is running
    console.log(`Server is running on port ${PORT}`);
});


 



 