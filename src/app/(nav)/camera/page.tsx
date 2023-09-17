import { readFileSync } from 'fs';
import { compile } from 'ejs';
import { NextPage } from 'next';

const EjsTemplate: NextPage = () => {
  // Read the EJS template file and compile it
  const ejsTemplate = readFileSync('./views/camera.ejs', 'utf-8');
  const compiledTemplate = compile(ejsTemplate);

  // Render the compiled EJS template
  const renderedHtml = compiledTemplate();

  return (
    <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
  );
};

export default EjsTemplate;
