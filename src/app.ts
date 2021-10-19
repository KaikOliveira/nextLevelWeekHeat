import 'dotenv/config';
import express from 'express'
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.get("/github", (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
});

app.get('/signin/callback', (request, response) => {
  const { code } = request.query;

  console.log(code);
  

  return response.json(code);
});

const port = 4000;

app.listen(port, () => console.log(`🚩 Server started on port ${port}!`))