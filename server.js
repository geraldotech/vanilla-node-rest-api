const http = require("http");
const fs = require("fs");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/productController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
    //cors
    //allow allow @dev First, read about security */
    // res.setHeader("Access-Control-Allow-Origin", "*");
    //res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getProduct(req, res, id);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    updateProduct(req, res, id);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === "DELETE") {
    const id = req.url.split("/")[3];
    deleteProduct(req, res, id);
  } else if (req.url == "/fetch") {
    fs.readFile("./views/fetch_Test.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url == "/poster") {
    fs.readFile("./views/post.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url == "/deleter") {
    fs.readFile("./views/delete.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Route Not Found: Please use the api/products endpoint",
      })
    );
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
