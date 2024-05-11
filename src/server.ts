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

const app = new App();

app.listen();

export default app;