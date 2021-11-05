exports.up = (knex) => {
  return knex.schema
    .createTable('admins', function (table) {
      table.increments('id');

      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('key')
        .inTable('profiles')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })

    .createTable('parents', function (table) {
      table.increments('id');

      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('key')
        .inTable('profiles')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })

    .createTable('children', function (table) {
      table.increments('id');
      table.string('username').notNullable();
      table.integer('age').notNullable();

      table
        .integer('parent_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('parents')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')

      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('key')
        .inTable('profiles')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })

    .createTable('instructors', function (table) {
      table.increments('id');
      table.string('rating').notNullable();
      table.string('bio').notNullable();

      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('key')
        .inTable('profiles')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    })
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('instructors')
    .dropTableIfExists('children')
    .dropTableIfExists('parents')
    .dropTableIfExists('admins');
};
