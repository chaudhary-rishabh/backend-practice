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
console.log("token returned: "+user);


// decode
const decodeJwt = (token) => {
    const decode = jwt.decode(token);
    console.log(decode);
}

const decoded = decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpc2hhYmhAZ21haWwuY29tIiwiaWF0IjoxNzEzMzc2NjcyfQ.nPGIqS8x_fRRRDpnSsNGVSaWaIfWii-lyGIqBBeXQv0");


// verify
function verifyJwt(token) {
    let ans = true;
    try {
        const verify = jwt.verify(token, jwtPassword);
        console.log("verify "+verify)
    } catch(e) {
        ans = false;
    }
    return ans;
}
const ans = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpc2hhYmhAZ21haWwuY29tIiwiaWF0IjoxNzEzMzc2NjcyfQ.KEZHbJxyxXvTzdwVUfoPk7peg_qSAr_epSN0M11aKcg", key);
console.log(ans)