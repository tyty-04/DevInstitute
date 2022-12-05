const addProducts = (req, res) => {
  console.log("req body: ", req.body);
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.json(products);
};

module.exports = { addProducts };
