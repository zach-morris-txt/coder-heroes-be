exports.seed = function (knex) {
  return knex('admins').insert([{ profile_id: 2 }, { profile_id: 7 }]);
};
