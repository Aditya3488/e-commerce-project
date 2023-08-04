Login: Used for user authentication. It accepts a POST request to the URL http://3.15.164.228:8082/login with an email and password in the request body.

Register: Used for user registration. It accepts a POST request to the URL http://3.15.164.228:8082/signup with an email and password in the request body.

Add Product: Used for adding a new product. It accepts a POST request to the URL http://3.15.164.228:8082/add-product with product details (name, description, price, status, and image) in the request body.

All Products: Used to get a list of all products. It accepts a GET request to the URL http://3.15.164.228:8082/products.

Add to Cart: Used for adding a product to the user's cart. It accepts a POST request to the URL http://3.15.164.228:8082/add-to-cart with the product ID in the request body.

All Cart Items: Used to get a list of all items in the user's cart. It accepts a GET request to the URL http://3.15.164.228:8082/cart-items.

Delete Product: Used for deleting a product. It accepts a DELETE request to the URL http://localhost:3000/delete-product with the product ID in the request body. (Note: The base URL seems to be localhost:3000, which might be the frontend server)

Update Product: Used for updating a product's information. It accepts a PUT request to the URL http://3.15.164.228:8082/update-product with the product ID and updated product details in the request body.