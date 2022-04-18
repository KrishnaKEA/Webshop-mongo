
<script>
    import axios from 'axios'
    import {user} from '../../stores.js'
    import {push} from 'svelte-spa-router'
    let currentuser;
    
    user.subscribe((value)=> {
        currentuser = value
    })

    
    //document.querySelector('#username').innerHTML = user.username
    console.log("-----------------------")
    console.log(currentuser)
    console.log("-----------------------")

</script>



<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/login">Sign Out</a>
          </li>
          <li class="nav-item">
            <a id="username" class="nav-link" href="/">Username</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>