exports.up = async function (knex) {
  await knex.schema.createTable('cars', tbl => {
    tbl.increments('car_id')
    tbl.text('vin', 128).unique().notNullable()
    tbl.text('make', 128).notNullable()
    tbl.text('model', 128).notNullable()
    tbl.integer('mileage').notNullable()
    tbl.text('title', 128)
    tbl.text('transmission', 128)
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
}
