const inventoryManager = {
  add: function(item, id) {
    return 'You have successfully added ' + item + ' with ID: ' + id
  },

  remove: function(item, id) {
    return 'You have successfully removed ' + item + ' with ID: ' + id
  },

  check: function(item, id) {
    return 'You have selected ' + item + ' with ID: ' + id
  },
}

inventoryManager.execute = function(name) {
  return (
    inventoryManager[name] &&
    inventoryManager[name].apply(inventoryManager, [].slice.call(arguments, 1))
  )
}

console.log(inventoryManager.execute('add', 'Kleo', '31234'))
console.log(inventoryManager.execute('check', 'Harry Potter', '33214'))
console.log(inventoryManager.execute('remove', 'Harry Potter', '33214'))
