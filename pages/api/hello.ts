// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const configuration = new Configuration({
  organization: 'org-WdNnqXnrMVHyFaj1GxKYOiQL',
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>,
// ) {
//   // console.log('You hit the /hello route');
//   res.status(200).json({ name: 'John Doe' });
// }

export default function handleTest(req, res) {
  console.log(req.body.prompt);
  openai.createCompletion({
    model: 'text-davinci-003',
    // prompt: req.body.prompt,
    prompt: 'please type a short cover letter for Google',
    max_tokens: 400,
    temperature: 0,
  }).then((data) => {
    console.log(data.data.choices);
  });
  res.end();
}
