
<script>
  import axios from 'axios'
  import {user} from '../../stores'
  import {push} from 'svelte-spa-router'
  let username;
  let password;
  let errMessage;
  $:if(username){
    errMessage = null
  }
  async function signin(){
    try{
      const {data} = await axios.post("http://localhost:3000/api/auth/login",{username,password})
      //console.log(data);
      $user = data.user;
      push('/dashboard')
    }catch(error){
      if(error.response.data.message == 'UserExistsError'){
        username = ''
        password = ''
        errMessage = "This username is already used by someone else please choose a different username."
      }
      
    }

  }

</script>







<section class="vh-100" style="background-color: #508bfc;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
  
              <h3 class="mb-5">Login</h3>
  
              <form class="mx-1 mx-md-4" on:submit|preventDefault={signin}>
  
                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                    <input type="text" bind:value={username} id="username" class="form-control" required />
                    {#if errMessage }
                    <p class="text-danger">{errMessage}</p>
                    {/if}
                    <label class="form-label" for="username">User name</label>
                  </div>
                </div>
                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                    <input type="password" bind:value={password} id="password" class="form-control" required />
                    <label class="form-label" for="password">Password</label>
                  </div>
                </div>

                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                </div>

              </form>
  
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>