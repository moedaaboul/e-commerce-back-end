// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
ProductTag.belongsTo(Product, {
  foreignKey: 'productId',
});

// Tags belongToMany Products (through ProductTag)
ProductTag.belongsTo(Tag, {
  foreignKey: 'tagId',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
