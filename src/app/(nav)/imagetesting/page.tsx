import { readFileSync } from 'fs';
import { compile } from 'ejs';
import { NextPage } from 'next';

const EjsTemplate: NextPage = () => {
  // Read the EJS template file and compile it
  const ejsTemplate = readFileSync('./views/testing.ejs', 'utf-8');
  const compiledTemplate = compile(ejsTemplate);

  // Data to pass to the template
  const data = {
    title: 'My EJS Template',
    message: 'Hello from EJS!',
  };

  // Render the compiled EJS template
  const renderedHtml = compiledTemplate(data);

  return (
    <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
  );
};

export default EjsTemplate;