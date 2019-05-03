exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        {id: 1, assessment_id: 1, title: 'taxonomic-routing', link: 'https://github.com/dev-academy-challenges/taxonomic-routing'},
        {id: 2, assessment_id: 2, title: 'knex-relationship-stories', link: 'https://github.com/dev-academy-challenges/knex-relationships-stories'},
        {id: 3, assessment_id: 3, title: 'jwt-auth', link: 'https://github.com/dev-academy-challenges/jwt-auth'},
        {id: 4, assessment_id: 4, title: 'knex-relationship-stories', link: 'https://github.com/dev-academy-challenges/knex-relationships-stories'},
        {id: 5, assessment_id: 5, title: 'pupparazzi', link: 'https://github.com/dev-academy-challenges/pupparazzi'},
        {id: 6, assessment_id: 6, title: 'ascii-art-reader', link: 'https://github.com/dev-academy-challenges/ascii-art-reader'},
        {id: 7, assessment_id: 7, title: 'sweet-as-beers', link: 'https://github.com/dev-academy-challenges/sweet-as-beers'},
        {id: 8, assessment_id: 8, title: 'react-to-web-api', link: 'https://github.com/dev-academy-challenges/react-to-web-api'},
        {id: 9, assessment_id: 9, title: 'external api', link: ''},
        {id: 10, assessment_id: 10, title: 'whole cohort project', link: ''},
        {id: 11, assessment_id: 11, title: 'whole cohort project', link: ''},
        {id: 12, assessment_id: 12, title: 'async-redux-stories', link: 'https://github.com/dev-academy-challenges/async-redux-stories'},
        {id: 13, assessment_id: 13, title: 'jwt-auth', link: 'https://github.com/dev-academy-challenges/jwt-auth'},
        {id: 14, assessment_id: 14, title: 'group projects', link: ''},
        {id: 15, assessment_id: 15, title: 'group projects', link: ''},
        {id: 16, assessment_id: 16, title: 'final project presentations', link: ''},
        {id: 17, assessment_id: 17, title: 'lightning-talks', link: 'https://github.com/dev-academy-challenges/lightning-talks'},
        {id: 18, assessment_id: 18, title: 'final projects', link: 'final projects'},
        {id: 19, assessment_id: 19, title: 'lightning-talks', link: 'https://github.com/dev-academy-challenges/lightning-talks'},
        {id: 20, assessment_id: 20, title: 'observation', link: ''},
        {id: 21, assessment_id: 21, title: 'observation', link: ''},
        {id: 22, assessment_id: 22, title: 'observation', link: ''},
        {id: 23, assessment_id: 23, title: 'deep dive with human skills facilitator', link: ''},
        {id: 24, assessment_id: 24, title: 'observation', link: ''}
      ])
    })
}
