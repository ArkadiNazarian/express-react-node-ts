import cors from 'cors';
import express, { request, response } from 'express';
const app = express();
let cors_options = {
    methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD",
    allowedHeaders: [
        "Origin",
        "Accept",
        "Content-Type",
        "Authorization"
    ],
    origin: "*",
    credentials: true,
    preflightContinue: true,
    optionsSuccessStatus: 200
}
let cors_middleware = cors(cors_options);
app.use(cors_middleware);
app.options("*", cors_middleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/health', (request, response) => {
    const date = new Date();
    let api_resault = {
        conntected: true,
        last_check: date
    }
    response.send(api_resault)
})


app.post('/login', (request, response) => {
    const api_request= request.body
    const expected_request = {
        email_address: "first.last@company.xyz",
        password: "123"
    }
    if (api_request.email_address === expected_request.email_address &&api_request.password === expected_request.password) {
        const api_response = {is_authenticated : true }
        response.status(200).send(api_response)
        
    } else {
        const api_response = {is_authenticated : false }
        response.status(401).send(api_response)
        
    }
})

// app.get("/echo",(request,response)=>{
//     response.status(200).send("hello")
// })

app.listen(8080, () => {
    console.log("server is up")
})