exports.seed = function(knex) {
    return knex('projects').del()
      .then(function () {
        return knex('projects').insert([
        {
            id:1,
            name: 'Bedroom',
            description:'Take a nap',
            completed:false
        },
        {
            id:2,
            name:'Kitchen',
            description:'Make dinner',
            completed:false
        },
        {
            id:3,
            name:'Office',
            description:'Build that website',
            completed:false
        }
        ]);
      });
  };