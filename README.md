<div>This is a Fullstack project using svelte as a frontend framework and Nodejs,expressjs in the backend where MongoDB is used as a database. I have implemented some other libraries such as passport.js to authenticate and authorize the backend, toastr.js libratry to notify the user in frontend,nodemailer is used to send the confirmation email with security questions and answers when they signup.
</div>
<br />
<hr>
<p> 
 Api documentation 
<br>
http://localhost:3000/api/auth/user - method GET - retrives the logged in user.
<br>
http://localhost:3000/api/auth/user - method POST - creates  a user
<br>
http://localhost:3000/api/auth/login - method POST - Handles the login functionality
<br>
http://localhost:3000/api/transactions - method GET - retrives all the products from database.
<br>
http://localhost:3000/api/transactions - Method POST - creates the product with a authorized user.
<br>
http://localhost:3000/api/transactions/{id} - Method DELETE - deletes the product with a authorized user.