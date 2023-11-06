import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { indexController } from './controllers/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const PORT = process.env.PORT || 3001;
const STAGE = process.env.STAGE || 'development';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => indexController(req, res));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App is in stage: ${STAGE} and listening on port ${PORT}`);
});
