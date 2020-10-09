1. After cloning this repo you have to create a mongo db database on your system and then create a document named stackoverflow which should hold the user data in user collection.
2. You need to create .env files for front end and backend that holds the API link to connect database. 
3. FrontEnd .env should contain REACT_APP_BACKEND=http://localhost:9000/api/
4. BackEnd .env should contain 
DATABASE=mongodb://localhost:27017/stackoverflow
SECRET=stackoverflowvicara
5. For signup and signin use default user credentials.
email: admin@gmail.com
password: admin123
