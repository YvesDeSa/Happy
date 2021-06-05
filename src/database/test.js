const Database = require('./db');

Database.then(async db => {
     // inserting data
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_on_hours,
            open_on_weekends
        ) VALUES (
            ""
        );
    `);

    const selectedOphanage = await db.all("SELECT * FROM orphanages");
});