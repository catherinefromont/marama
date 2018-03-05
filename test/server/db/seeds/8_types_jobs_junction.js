exports.seed = function (knex, Promise) {
  return knex('types_jobs_junction').del()
    .then(function () {
      return knex('types_jobs_junction').insert([
        {id: 1, jobs_id: 1, types_id: 1},
        {id: 2, jobs_id: 1, types_id: 2},
        {id: 3, jobs_id: 1, types_id: 3},
        {id: 4, jobs_id: 2, types_id: 1},
        {id: 5, jobs_id: 2, types_id: 2},
        {id: 6, jobs_id: 3, types_id: 1},
        {id: 7, jobs_id: 3, types_id: 2},
        {id: 8, jobs_id: 4, types_id: 1},
        {id: 9, jobs_id: 4, types_id: 2},
        {id: 10, jobs_id: 4, types_id: 3},
        {id: 11, jobs_id: 5, types_id: 1},
        {id: 12, jobs_id: 5, types_id: 2},
        {id: 13, jobs_id: 5, types_id: 3},
        {id: 14, jobs_id: 6, types_id: 1},
        {id: 15, jobs_id: 6, types_id: 2},
        {id: 16, jobs_id: 6, types_id: 3},
        {id: 17, jobs_id: 7, types_id: 1},
        {id: 18, jobs_id: 7, types_id: 2},
        {id: 19, jobs_id: 7, types_id: 3},
        {id: 20, jobs_id: 8, types_id: 1},
        {id: 21, jobs_id: 8, types_id: 2},
        {id: 22, jobs_id: 8, types_id: 3},
        {id: 23, jobs_id: 9, types_id: 1},
        {id: 24, jobs_id: 9, types_id: 2},
        {id: 25, jobs_id: 9, types_id: 3},
        {id: 26, jobs_id: 10, types_id: 1},
        {id: 27, jobs_id: 10, types_id: 2},
        {id: 28, jobs_id: 10, types_id: 3},
        {id: 29, jobs_id: 11, types_id: 1},
        {id: 30, jobs_id: 11, types_id: 2},
        {id: 31, jobs_id: 11, types_id: 3}
      ])
    })
}
