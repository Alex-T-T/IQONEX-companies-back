import 'dotenv/config';
import app from './app/app';

const PORT = process.env.SERVER_PORT || 3008;

const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
};

startServer();
