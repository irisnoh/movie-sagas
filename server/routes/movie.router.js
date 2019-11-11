const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "movies_genre"
    JOIN "genres" ON "genres"."id"="movies_genre"."genre_id"
    JOIN "movies" ON "movies"."id"="movies_genre"."movie_id"
    GROUP BY "genres"."name", "movies_genre"."movie_id", "movies_genre"."genre_id", "genres"."id", "movies"."id"
    ORDER BY "movies"."title" ASC`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
      });
  });

  router.get('/:id', (req, res) => {
    console.log('hit movie details route');
    const queryText = `SELECT * FROM movies WHERE id=$1`
    pool.query(queryText, [req.params.id])
        .then( (result) => {
            console.log(result);
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(error);
          
            res.sendStatus(500);
        })
})
router.get('/genre/:id', (req, res) => {
  const queryText =` SELECT genres.name FROM "movies_genre"
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

  router.put('/:id',(req,res) => {
    console.log(req.body);
    console.log(req.params.id);
    const queryText = `
    UPDATE movies
    SET title=$1,
    description=$2
    WHERE id=$3;`;
    pool.query(queryText,[req.body.title,req.body.description,req.params.id])
        .then(result => {
            res.send(200);
        })
        .catch(error => {
            console.log('Error in put',error);
            res.sendStatus(500);
        })
})

  module.exports = router;
