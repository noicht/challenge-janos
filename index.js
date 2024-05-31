import http from "http";
import { app } from "./src/index.js";
import { PORT } from "./src/config/constants.js";
import { DB_CONNECT } from "./src/config/db.js";


const main = async () => {
    await DB_CONNECT();

    const httpServer = http.createServer(app);
    httpServer.listen(PORT, () => {
        console.log(`Running API on port: ${PORT}.`);
    })
};

main()
    .then(() => {
        console.log("Server initalized");
    })
    .catch((error) => {
        console.log(error);
    })