// import json server
const JSONServer = require('json-server')

// create server for running json file

const  blogServer  = JSONServer.create()

// import db.json  

const router = JSONServer.router("db.json")

// create middleware
 const middleware = JSONServer.defaults()

// define port to run ther app

const PORT = 3000 || process.env.PORT

// use middleware json server
 blogServer.use(middleware)

//  define routes for client request 

blogServer.use(router)

// run server for client request

blogServer.listen(PORT,()=>{
    console.log(`rbuilder server started at port : ${PORT} and waiting for client request !!!`);
    
})