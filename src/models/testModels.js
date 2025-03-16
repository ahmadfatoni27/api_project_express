const model = require('../helpers/model')

module.exports = {
  create: (data = {}) => {
    const query = 'INSERT INTO users SET ?'
    return model(query, data)
  },
  get: (id) => {
    const query = `SELECT * FROM users WHERE id = ${id}`
    return model(query)
  },
  update: (id, data = {}) => {
    const query = `UPDATE users SET ? WHERE id = ${id}`
    return model(query, data)
  }
}