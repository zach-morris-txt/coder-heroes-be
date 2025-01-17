exports.up = function (knex) {
  return knex.schema.createTable('instructors-course_types', (table) => {
    table.increments('instructors-course_types_id');
    table
      .integer('profile_id')
      .unsigned()
      .notNullable()
      .references('profile_id')
      .inTable('profiles')
      .onDelete('CASCADE');
    table
      .integer('course_type_id')
      .unsigned()
      .notNullable()
      .references('course_type_id')
      .inTable('course_types')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('instructors-course_types');
};
