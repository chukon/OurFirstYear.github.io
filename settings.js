/*
 * Created Date: Friday, 5th February 2021, 1:06:30 am
 * Author: Kingsley Chimezie
 */


/* FIREBASE CONFIG
-------------------------------- */
// PASTE YOUR WEB APP FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyA9VA3LCGeg9j4nwtg2aibgGteq0AYJhEY",
  authDomain: "bemyvalentine-ca406.firebaseapp.com",
  projectId: "bemyvalentine-ca406",
  storageBucket: "bemyvalentine-ca406.appspot.com",
  messagingSenderId: "892280027079",
  appId: "1:892280027079:web:b9dece78e4037317f58be2"
};

/* CLOUD FIRESTORE CONFIG
-------------------------------- */
const firestore = {
    collectionName: 'valentines',
    docID: 'test'
};

var random = Math.floor(Math.random() * 3);
var yes1='';
switch (random) {
  case 1:
    yes1 = "https://media.giphy.com/media/xmXUarKqywPhS/giphy.gif";
    break;
  case 2:
    yes1 = 'https://media.giphy.com/media/lEGpiFvQDX4U8/giphy.gif';
    break;
  case 3:
    yes1 = 'https://media.giphy.com/media/lEGpiFvQDX4U8/giphy.gif';
    break;
  default:
    yes1 = 'https://media.giphy.com/media/13V2lGH2cUYgzC/giphy.gif';
}

/* UI DATA
-------------------------------- */
const uiData = {
    valentinesFirstName: 'Lori',
    valentinesLastName: 'Konkol',
    headerMessage: 'will you bee my Valentine? 🌹',
    resultHeaderYes: 'You said yes! 😍',
    resultHeaderNo: 'You said no 😢',
    yesImgLink: yes1,
    noImgLink: 'https://media.giphy.com/media/wIhfELB4LvDhe/giphy.gif',
    lastAnswerHeading: 'Last answered:',
};
