// import path from 'path';
// import { imageToBase64, base64ToImage } from '../index';

const path = require("path");
const { base64ToImage, imageToBase64 } = require("../index");

const url = 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' // random image from google
imageToBase64(url).then(function(base64String) {
  // console.log(base64String); // data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASA...
});

async function main() {
  // const url = path.resolve(__dirname, '..', 'tests', 'assets', 'sample.png');
  // const base64String = await imageToBase64(url);

  const base64String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuUlEQVQoz1VSy3KbQBDkd1KxJfHUgmBZIViQkZXIsl15VXLIIYec8v+HTs8AcvkwxQyz29vdM8Hx51/4b39w+v0P7vILYdYiNB2q7hnl4QJT9IhY55XHtjoiYb3ZHhBuW2yyw7v8Pq4R7M/fcfj0A8Xwgmz/iFXisE4bBYmM54UOMUFC0+tDElHOR3JPoE7PyT8BVkBTjWj8FR9WOe7CimB7xLsBYd4hI6PCnZCVA5Jdj5x5yp4wldhkDT7yzl1UKZgC5u4Ru+bMn1bBItMitSMW5u74iqp/hhu/oj1PtfOzHfUJtuXXnmZFHQEtWdQj0Z3KVV/4cukvsMMVcUmp6tMU0tOY67jobrn8D0z9oJKE7uLfmg07CKtXJNWAlP2tfUBUeM0j2iF5vPO0YhpMTlJiR5DyoOuvKldAFZB5wosZH1vzsPg0eWU15NySL/XNw5CU2/EL18FPDMlOphoxklLMpwL6bLgBho/LMIRhXs/DKrwylLsSwX1Uo2w+o6HEcG6InPr4gpKGx1wPkSsTlr6wn7yelCz1G0MupW2fOLknXVCZlPokuzXLXyX7G3td4tuQ3nL5yob8B6uuVZDNTB3QAAAAAElFTkSuQmCC"
  const option = {
    filePath: path.resolve(__dirname, '..', 'tmp'),
    fileName: 'sampleImage',
    randomizeFileName: false
  };

  const message = await base64ToImage(base64String, option);
  console.log(message); // success
}

main().catch(console.error);
