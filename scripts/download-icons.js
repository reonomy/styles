const https = require('https');
const fs = require("fs");

// env vars
const {
  FIGMA_PROJECT_ID,
  FIGMA_ROOT_COMPONENT,
  FIGMA_API_TOKEN

} = process.env;

let linearDarkIconsIds = [];


// Download the SVGs
const downloadSVGs = (urls) => {
  console.log(urls);
  return https.get(urls[0], (res) => {
    const file = fs.createWriteStream("file.svg");
    res.pipe(file);

    res.on('end', () => {
      fs.writeFileSync('cool.tsx', `
import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

export function TestIcon(props: SvgIconProps)  {
  return (
    <SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
      // put the svg path in here somehow? Maybe use dom-stream or another 3rd party lib
    </SvgIcon>
  );
}
      `);
    });

  }).on('error', (e) => {
    console.error(e);
  });
}

// Get all icon downloadable urls
const getIconSVGs = (components) => {
  const url = `/v1/images/${FIGMA_PROJECT_ID}/?ids=${components.map(node => node.id).join(",")}&format=svg`;
  console.log(url);

  return https.request({
    hostname: 'api.figma.com',
    path: url,
    method: 'GET',
    headers: {
      'X-Figma-Token': FIGMA_API_TOKEN
    }
  }, res => {
    console.log(`statusCode: ${res.statusCode}`);
    let data = '';

    res.on('data', d => {
      // process.stdout.write(d);
      data += d;
      console.log(data);
    })

    res.on('end', () => {
      const figmaSVGResponse = JSON.parse(data);
      const svgUrls = Object.values(figmaSVGResponse.images);
      downloadSVGs(svgUrls);
    });
  });
}

// Get all icons ids and names
const getIconIds = https.request({
  hostname: 'api.figma.com',
  path: `/v1/files/${FIGMA_PROJECT_ID}/?nodes?ids=${FIGMA_ROOT_COMPONENT}`,
  method: 'GET',
  headers: {
    'X-Figma-Token': FIGMA_API_TOKEN
  }
}, res => {
  console.log(`statusCode: ${res.statusCode}`)
  let data = '';

  res.on('data', d => {
    // process.stdout.write(d);
    data += d;
  })

  res.on('end', () => {
    const figmaData = JSON.parse(data);
    const globalComponents = figmaData.document.children.find(component => component.name === 'Global Components');
    const linearDarkIcons = globalComponents
      .children.find(component => component.name === 'Linear Icons / Dark')
      .children.find(component => component.name === 'Icons');

    linearDarkIconsIds = linearDarkIcons.children.map(component => ({
      id: component.id,
      name: component.name
    }));
    // chunk these calls to 10 ids max
    getIconSVGs(linearDarkIconsIds.slice(0, 3)).on('error', error => {
      console.errror(error);
    }).end();
  })
});

getIconIds.on('error', error => {
  console.error(error)
});

getIconIds.end()
