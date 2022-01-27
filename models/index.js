// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categoryId',
});

// Products belongToMany Tags (through ProductTag)
ProductTag.belongsTo(Product, {
  foreignKey: 'productId',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
ProductTag.belongsTo(Tag, {
  foreignKey: 'tagId',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
