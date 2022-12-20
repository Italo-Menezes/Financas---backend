const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000

/* routes */
const routes = require('./router/routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

/* rotas */
app.use(routes);

/* serve */
app.listen(3000, () => {
    console.log('Servidor rodando na porta '+ port);
});
