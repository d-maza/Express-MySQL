import express from 'express';
import routes from './routes/pacients.routes.js'
import { config } from '../config.js';
const app = express()

app.use(express.json())

app.use('/api',routes)

// 404 not found
app.use((req, res, next) => {
  res.status(404).json({message: 'endpoind not fount'})
})  
  
// Start server

app.listen(config.port, () => {
    console.log(`🌐 Servidor escuchando en http://localhost:` + config.port);
});
  