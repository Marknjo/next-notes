/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gh68seg32p61fd7")

  collection.name = "note"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gh68seg32p61fd7")

  collection.name = "notes"

  return dao.saveCollection(collection)
})
