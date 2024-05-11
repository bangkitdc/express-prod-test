require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 1234;

// app.use(cors({
//   origin: "*"
// }));
// app.use(bodyParser.json());

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

// export default app;

import { App } from './app';

const PORT = process.env.PORT || 3100;
const app = new App(PORT);

app.listen();

export default app;