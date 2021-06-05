const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
     // inserting data
     
    await saveOrphanage();

    const selectedOrphanage = await db.all("SELECT * FROM orphanages");

    const orphanage = await db.all('SELECT * FROM orphanages id = "1" ');
});