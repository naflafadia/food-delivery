# Food Delivery API Documentation

## How to Use Authorization

1. Open Postman.
2. Click on the 'Authorization' tab.
3. Choose 'Bearer Token' on the left.
4. Insert the Token on the right.

## A. User Authentication

### 1. Register User

- **URL:** `http://localhost:4000/api/user/register`
- **Method:** POST
- **JSON Body Example:**

  ```json
  {
    "name": "renattamoeloek",
    "email": "renattamoeloek@gmail.com",
    "password": "12345678"
  }
  
### 2. Login User

- **URL:** `http://localhost:4000/api/user/login`
- **Method:** POST
- **JSON Body Example:**

  ```json
  {
  "email": "renattamoeloek@gmail.com",
  "password": "12345678"
  }
Note: You will receive a token which is used for authorization.

## B. Buyer Page

### 1. Add to Cart (Authorization Required)

- **URL:** `http://localhost:4000/api/cart/add`
- **Method:** POST
- **Request Headers**
  Authorization: token <your_jwt_token>
- **JSON Body Example:**

  ```json
  {
  "itemId": "6643f85841cb5d75135f7e19"
  }

### 2. Remove from Cart (Authorization Required)

- **URL:** `http://localhost:4000/api/cart/remove`
- **Method:** POST
- **Request Headers**
  Authorization: token <your_jwt_token>
- **JSON Body Example:**

  ```json
  {
  "itemId": "6643f85841cb5d75135f7e19"
  }

### 3. Get Cart (Authorization Required)

- **URL:** `http://localhost:4000/api/cart/get`
- **Method:** POST
- **Request Headers**
  Authorization: token <your_jwt_token>

## C. Admin Panel

### 1. Add Food

- **URL:** `http://localhost:4000/api/food/add`
- **Method:** POST
- **JSON Body Example:**

  ```json
  {
  "name": "Chocolate Brownie",
  "description": "it's delicious!",
  "price": "20",
  "category": "brownie",
  "image": "chocobrownie.jpg"
  }

### 2. List Food

- **URL:** `http://localhost:4000/api/food/list`
- **Method:** GET

### 3. Remove Food

- **URL:** `http://localhost:4000/api/food/remove`
- **Method:** POST
- **JSON Body Example:**

  ```json
  {
  "id": "6642399470c89db1b26e7529"
  }
  



