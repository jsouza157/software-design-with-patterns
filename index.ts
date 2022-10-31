import express from 'express';
import route from './src/routes/progress-route';

class Server {
    app: any;

    constructor() {
        this.app = express();
        this.app.use(express.json())
        this.app.use(route)
        this.start();
    }

    private async start() : Promise<void> {
        this.app.listen(3333, () => {
            console.log('Server running in http://localhost:3333');
        });
    }
}

new Server();