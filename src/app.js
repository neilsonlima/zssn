const app = require("./server");
const router = require("./routes");

app.use(router);

const db = require("./config/database");

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch( err => console.log('Unable to connect to the database:', err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
