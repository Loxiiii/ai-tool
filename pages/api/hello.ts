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

// 1 token is 0.75 words

// prompt: "Write a cover letter for the company Forward I am a junior software engineer passionate about technology and solving complex problems. I have worked on several projects which has exposed me to the full stack, including front end, backend, databases and system design. These projects have given me expertise in Javascript, CI/CD pipeline design,  Kubernetes, node, expressjs, tailwindcss, nextjs, react, and many more. Mention how aligned I am with their values. Make it long, risky, and express how their services would have been extremely useful for my past experience"
export default function handleTest(req, res) {
  // console.log(req.body.prompt);
  const temperature = Number(req.body.spice) / 10;
  openai.createCompletion({
    model: 'text-davinci-003',
    // prompt: req.body.prompt,
    // eslint-disable-next-line quotes
    prompt: `Write a cover letter for the company ${req.body.company}, specifically for the role ${req.body.role}. My name is ${req.body.fullName}. ${req.body.info}. Mention how aligned I am with their values. express how their services would have been extremely useful for my past experience`,
    max_tokens: 400,
    temperature,
  }).then((data) => {
    console.log(data.data.choices);
    res.send(data.data.choices);
  });
}
