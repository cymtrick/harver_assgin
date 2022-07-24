let { writeFile } = require('fs');
let { join } = require('path');
let request = require('request');
let blend = require('@mapbox/blend');
let argv = require('minimist')(process.argv.slice(2));
const request_url = 'https://cataas.com/cat/says/';

let {
  greeting = 'Hello',
  who = 'There',
  width = 400,
  height = 500,
  color = 'Pink',
  size = 100,
} = argv;

let buffers = [];

const saveFile = (data, filename, enc) => {
  const fileOut = join(process.cwd(), filename);

  writeFile(fileOut, data, enc, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('The file was saved!');
  });
};

const blendImages = () => {
  let bufferArray = buffers.map((buffer, index) => {
    return { buffer: new Buffer(buffer, 'binary'), x: width * index, y: 0 };
  });
  blend(
    bufferArray,
    { width: width * buffers.length, height: height, format: 'jpeg' },
    (err, data) => {
      console.log(data);
      saveFile(data, './cat-card.jpg', 'binary');
    }
  );
};

const call_images = (messages) => {
  messages.map((message, index) => {
    let req = {
      url:
        request_url +
        message.message +
        '?width=' +
        width +
        '&height=' +
        height +
        '&color' +
        color +
        '&s=' +
        size,
      encoding: 'binary',
    };

    request.get(req, async (err, res, Body) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log('Received response with status:' + res.statusCode);
        await buffers.splice(index, 0, Body);
        if (buffers.length === messages.length) blendImages();
        return Body;
      }
    });
  });
};

images = call_images([
  { message: greeting },
  { message: who },
  { message: 'I love cats' },
]);