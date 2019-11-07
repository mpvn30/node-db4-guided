
exports.up = function(knex) {
  return knex.schema
    .createTable('species', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
    })
    .createTable('animals', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        //define our Foreign Key
        tbl.integer('species_id').unsigned().references('id').inTable('species')
        .onDelete('RESTRICT') //About deleting the value of the primary key.
        .onUpdate('CASCADE') //About changing the value of the primary key.
    })
    .createTable('zoos', tbl => {
        tbl.increments();
        tbl.string('zoo_name', 255).notNullable();
        tbl.string('address', 255)
    })
    .createTable('zoo-animals', tbl => {
        tbl.increments();
        tbl.integer('zoo_id').unsigned().references('id').inTable('zoo-animals')
        tbl.integer('animal_id').unsigned().references('id').inTable('zoo-animals')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  
};
