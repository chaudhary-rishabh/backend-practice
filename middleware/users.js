import jwt from "jsonwebtoken";
import zod from "zod";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// dotenv.config();
dotenv.config({ path: __dirname + './../.env' })

const key = process.env.SECRET;
console.log(key);

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }
    
    let signature;
    
    try {
        signature = jwt.sign({
            username
        }, key);
    } catch (error) { 
        console.log(error.message);
    }
    
    return signature;
}

const user = signJwt("rishabh@gmail.com", "HelloWorld%444");
console.log(user);
