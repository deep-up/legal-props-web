import dotenv from 'dotenv';
import log from 'console-log-timestamp';
import {connect} from "./database.js";
import app from "./app.js";

dotenv.config();
connect();
log('America/Bogota');
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`******************************************`);
    console.log(`Legalprops Server V1.0 by Deep-up`);
    console.log(`Server started in ${process.env.NODE_ENV} mode`);
    
    if (process.env.NODE_ENV === "production"){
        console.log(`to configure the url in production mode`);
    }else{
        console.log(`listen at http://localhost:${PORT}`);
    }
    console.log(`******************************************`);
});







