exports.seed = function(knex) {
    return knex('resource').del()
      .then(function () {
        return knex('resource').insert([
        {
            id:1,
            ResourceName: 'Bedroom',
            ResourceDescription: 'This room is for sleep'
        },
        {
            id:2,
            ResourceName: 'Kitchen',
            ResourceDescription: 'This room is for sustenance'
        },
        {
            id:3,
            ResourceName: 'Office',
            ResourceDescription: 'This room is for productivity'
        }
        ]);
      });
  }; 