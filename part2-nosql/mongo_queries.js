//OP1:
db.Products.insertMany([
    {
  "_id": 1,
  "name": 'iPhone 14',
  "category": 'Electronics',
  "price": 80000,
  "specs": {
    "warranty": '1 year',
    "voltage": '220V'
  }
},
{"_id":2,"name": "T-Shirt",
  "category": "Clothing",
  "price": 999,

  "specs": {
    "size": "M",
    "material": "Cotton",
    "brand": "Nike"
  }},
{"_id":3,"name": "Milk",
  "category": "Groceries",
  "price": 60,

  "specs": {
    "expiry_date": "2026-04-01",
    "nutrition": "Calcium rich"
}}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': 2,
//     '1': 3
//   }
// }



//OP2:
db.Products.find({category:"Electronics",price:{$gt:20000}})
// {
//   _id: 1,
//   name: 'iPhone 14',
//   category: 'Electronics',
//   price: 80000,
//   specs: {
//     warranty: '1 year',
//     voltage: '220V'
//   }
// }


//OP3:
db.Products.find({category:"Groceries",expiry_date:{$lt:"2025-01-01"}})
// {
//   _id: 3,
//   name: 'Milk',
//   category: 'Groceries',
//   price: 60,
//   specs: {
//     expiry_date: '2026-04-01',
//     nutrition: 'Calcium rich'
//   },
//   expiry_date: '2024-12-12'
// }


//OP4:
db.Products.updateOne({ _id: 1 },{ $set: {discount_percent:"5%"} })

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }

//OP5: Indexes are used in MongoDB to improve query performance by enabling faster data retrieval, efficient sorting, and optimized filtering operations.
db.Products.createIndex({category:1})
// category_1