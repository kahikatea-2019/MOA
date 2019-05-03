exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, assessment_id: 1, titie: 'taxonomic-routing', link: 'https://github.com/dev-academy-challenges/taxonomic-routing'},
        {id: 2, assessment_id: 2, titie: 'knex-relationship-stories', link: 'https://github.com/dev-academy-challenges/knex-relationships-stories'},
        {id: 3, assessment_id: 3, titie: 'jwt-auth', link: 'https://github.com/dev-academy-challenges/jwt-auth'},
        {id: 4, assessment_id: 4, titie: 'knex-relationship-stories', link: 'https://github.com/dev-academy-challenges/knex-relationships-stories'},
        {id: 5, assessment_id: 5, titie: 'pupparazzi', link: 'https://github.com/dev-academy-challenges/pupparazzi'},
        {id: 6, assessment_id: 6, titie: 'ascii-art-reader', link: 'https://github.com/dev-academy-challenges/ascii-art-reader'},
        {id: 7, assessment_id: 7, titie: 'sweet-as-beers', link: 'https://github.com/dev-academy-challenges/sweet-as-beers'},
        {id: 8, assessment_id: 8, titie: 'react-to-web-api', link: 'https://github.com/dev-academy-challenges/react-to-web-api'},
        {id: 9, assessment_id: 9, titie: 'external api', link: ''},
        {id: 10, assessment_id: 10, titie: 'whole cohort project', link: ''},
        {id: 11, assessment_id: 11, titie: 'whole cohort project', link: ''},
        {id: 12, assessment_id: 12, titie: 'async-redux-stories', link: 'https://github.com/dev-academy-challenges/async-redux-stories'},
        {id: 13, assessment_id: 13, titie: 'jwt-auth', link: 'https://github.com/dev-academy-challenges/jwt-auth'},
        {id: 14, assessment_id: 14, titie: 'group projects', link: ''},
        {id: 15, assessment_id: 15, titie: 'group projects', link: ''},
        {id: 16, assessment_id: 16, titie: 'final project presentations', link: ''},
        {id: 17, assessment_id: 17, titie: 'lightning-talks', link: 'https://github.com/dev-academy-challenges/lightning-talks'},
        {id: 18, assessment_id: 18, titie: 'final projects', link: 'final projects'},
        {id: 19, assessment_id: 19, titie: 'lightning-talks', link: 'https://github.com/dev-academy-challenges/lightning-talks'},
        {id: 20, assessment_id: 20, titie: 'observation', link: ''},
        {id: 21, assessment_id: 21, titie: 'observation', link: ''},
        {id: 22, assessment_id: 22, titie: 'observation', link: ''},
        {id: 23, assessment_id: 23, titie: 'deep dive with human skills facilitator', link: ''},
        {id: 24, assessment_id: 24, titie: 'observation', link: ''}
      ])
    })
}
