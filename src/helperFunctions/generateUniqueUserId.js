const uuid = require('uuid')


const getUniqueUserId = () => {
  let id = uuid.v1()
  console.log(id)
  return id
}

getUniqueUserId()

module.exports = getUniqueUserId;
