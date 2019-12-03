const functions = require('firebase-functions');
const admin = require('firebase-admin');
var panneObject = require ('./codesPanneUGC.json');
let serviceAccount = require('./pannedata-firebase-adminsdk-ibtnm-0641528236.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let docRef = db.collection('Z2M-103');


exports.helloooPubSub = functions.pubsub.topic('gateway_telemetry').onPublish((message) => {
  let  Code , Voiture , equi, date, Details = null, state, MyCode;

  
  try {
    
    Code = message.json.Code;
    Voiture = message.json.Voiture;
    equi = message.json.equi;
    date = message.json.date;
    state = message.json.State;



    for (var i in panneObject){
        var code = panneObject[i].code;
        var details = panneObject[i].details;
        if (code === Code){
              Details = details;
		} else {
		    Details = "Unrecognized Code";	
		}
	}
   
 
         let setAda = docRef.add({
         Code: Code,
         Voiture : Voiture,
         Equipement : equi ,
         Date : date,
         Details : Details,
         State : state, 
    
         });
 }

  catch (e) {

    console.error('une erreur', e);

  }
  
 
  
});
