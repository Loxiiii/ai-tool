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
  const length = Math.floor(Number(req.body.length) / 1.333);
  if (req.body.language === 'English') {
    openai.createCompletion({
      model: 'text-davinci-003',
      // prompt: req.body.prompt,
      // eslint-disable-next-line quotes
      prompt: `Write a cover letter for the company ${req.body.company}, specifically for the role ${req.body.role}. My name is ${req.body.fullName}. Please, rephrase the following information and make it look interesting: ${req.body.info}. Mention how aligned I am with their values. Evaluate what this company does and express how valuable it is are and how much I appreciate it, trying to link it to my past experience. If there is no relationship, just show how useful they are and make it in ${req.body.language}`,
      max_tokens: length,
      temperature,
    }).then((data) => {
      console.log(data.data.choices);
      res.send(data.data.choices);
    });
  }

  // if (req.body.language === 'Spanish') {
  //   openai.createCompletion({
  //     model: 'text-davinci-003',
  //     // prompt: req.body.prompt,
  //     // eslint-disable-next-line quotes
  //     prompt: `Escribe una carta de presentación para la empresa ${req.body.company}, concretamente para el puesto ${req.body.role}. Mi nombre es ${req.body.fullName}. Por favor, reformula la siguiente información y haz que parezca interesante: ${req.body.info}. Menciona lo alineado que estoy con sus valores. Evalúa lo que hace esta empresa y expresa lo valiosa que es y lo mucho que la aprecio, intentando relacionarlo con mi experiencia pasada. Si no hay relación, basta con mostrar lo útiles que son.`,
  //     max_tokens: length,
  //     temperature,
  //   }).then((data) => {
  //     console.log(data.data.choices);
  //     res.send(data.data.choices);
  //   });
  // }
}
