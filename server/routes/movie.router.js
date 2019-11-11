const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// router.get('/', (req, res) => {
//     const queryText = 'SELECT * FROM "movies"';
//     pool.query(queryText)
//       .then((result) => { res.send(result.rows); })
//       .catch((err) => {
//         console.log('Error completing SELECT movie query', err);
//         res.sendStatus(500);
//       });
//   });
router.get('/', (req, res) => {
  const queryText =` SELECT * FROM "movies_genre"
  JOIN "genres" ON "genres"."id"="movies_genre"."genre_id"
  JOIN "movies" ON "movies"."id"="movies_genre"."movie_id"
  GROUP BY "genres"."name", "movies_genre"."movie_id", "movies_genre"."genre_id", "genres"."id", "movies"."id"
  ORDER BY "movies"."title" ASC` ;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT movie query', err);
      res.sendStatus(500);
    });
});

  // router.get('/:id', (req, res) => {
  //   const queryText = `SELECT "movies"."title","genres"."name" FROM "movies_genre"  
  //   JOIN "genres" ON "genres"."id"="movies_genre"."genre_id"
  //   JOIN "movies" ON "movies"."id"="movies_genre"."movie_id"
  //   GROUP BY "genres"."name", "movies_genre"."movie_id", "movies_genre"."genre_id", "genres"."id", "movies"."id"
  //   ORDER BY "movies"."title" ASC`;
  //   pool.query(queryText)
  //     .then((result) => { res.send(result.rows); })
  //     .catch((err) => {
  //       console.log('Error completing SELECT movie genre query', err);
  //       res.sendStatus(500);
  //     });
  // });


  module.exports = router;
