# Smart-Mobile-Workshop-1.0--GoogleCloudFunction-UGC
codesPanneUGC.json : Ici sont répértoriés tous les codes pannes de l'UGC qui sont répértoriés sur le manuel de maintenance de l'UGC, au format JSON.
index.js : Il s'agit de la fonction Google Cloud qui compare les codes de pannes envoyés au Cloud avec les codes sur codesPannesUGC.json afin de leurs y ajouter la description de chaque code. Ce code gère aussi la supression des pannes de la base de données lorsqu'elles sont en état OFF.
