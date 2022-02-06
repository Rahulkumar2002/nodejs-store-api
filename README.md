# nodejs-store-api

## To run this project in your system : 
<ul>
<li>
   First fork it using the fork button on top right side of this page .
</li>
<li>
   Copy SSH link and open your Gitbash or your Codeeditor and run this git command "git clone <ssh link>"
   above command will copy your forked repo into the desired location of your system.
</li>
<li>
   Then run "npm install" to install all dependencies .
</li>
<li>
   After this you have to connect you MongoDB Atlas database with the server via a .env file . Name that variable MONGO_URI for ease .
</li>
<li>
   You can create your own data or if you want some dummy data then run this command "node populate.js" it will provide some dummy data in your database.   
</li>
</ul>

## In this API you can perform CRUD operations by hitting different end points . 
### Note: To test this API you can use software like Postman or a VSCode extension which is Thunder Client (It is similar to Postman , just you don't have to leave VSCode). 

### To create a product : 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/products/" with a post request.</li>
<li>You have to provide these information in the requests body : </li>
<ol>
<li>{</li>
    <li>"name":"String",</li>
    <li>"price": Number</li>
    <li>"company":"String", (['ikea', 'liddy', 'caressa', 'marcos'] You can provide name from any of these given companies)</li>
    <li>"featured": Boolean,</li>
    <li>"rating": Number from 0 - 5 </li>
<li>}</li>
</ol>
<li>After this send the request and check your DB , Your product will be created.</li>
</ul>

### To delete a product : 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/products/:id" with a delete request.</li>
<li>You have to provide id of the product which you want to delete in params: </li>
<li>After this send the request and check your DB , Your product will be deleted.</li>
<li>A success message will pop up if your product is deleted successfully or error message will be shown.</li>
</ul>

### To get a product : 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/products/:id" with a get request.</li>
<li>You have to provide id of the product which you want to search in params: </li>
<li>After this send the request and response will come with your product or an error.</li>
</ul>

### To update a product : 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/products/:id" with a patch request.</li>
<li>You have to provide id of the product which you want to update in params. </li>
<li>You have to provide just the data which you want to update in the product in requests body.</li>
<li>After this send the request and updated response of product will come or an error.</li>
</ul>

### To get a product & which queries you can perform: 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>You can search with the query of x = [featured,name,company]</li>
<li>By default products will be sorted in the created order</li>
<li>"localhost:8080/api/v1/products?x={value}" with a get request.</li>
<li>If you want to sort the products using any key : "localhost:8080/api/v1/products?sort={key}"</li>
<li>If you want to change the page and to set limit to no. of products which can be shown on a singel page : "localhost:8080/api/v1/products?page={value}" & "localhost:8080/api/v1/products?limit={value}"</li>
<li>To filter the product using price and ratings use : "?numericFilters=price>80" or "?numericFilters=rating>4"</li>
</ul>




