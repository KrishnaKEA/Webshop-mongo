
<script>
  import axios from 'axios'
  import {user} from '../../stores'
  import {push} from 'svelte-spa-router'
  let username;
  let password;
  let sec_question;
  let sec_answer;
  let email;
  let errMessage;
  $:if(username){
    errMessage = null
  }
  async function register(){
    try{
      const {data} = await axios.post("http://localhost:3000/api/auth/sign-up",{username,password,sec_question,sec_answer,email})
      //console.log(data);
      $user = data.user;
      push('/login')
    }catch(error){
      if(error.response.data.message == 'UserExistsError'){
        username = ''
        password = ''
        errMessage = "This username is already used by someone else please choose a different username."
      }
      
    }

  }

</script>













<section class="vh-100" style="background-color: #eee;">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>
  
                  <form class="mx-1 mx-md-4" on:submit|preventDefault={register}>
  
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
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" bind:value={sec_question} id="sec_question" class="form-control" required />
                        {#if errMessage }
                        <p class="text-danger">{errMessage}</p>
                        {/if}
                        <label class="form-label" for="username">Security question</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" bind:value={sec_answer} id="sec_answer" class="form-control" required />
                        {#if errMessage }
                        <p class="text-danger">{errMessage}</p>
                        {/if}
                        <label class="form-label" for="username">Security answer</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="email" bind:value={email} id="email" class="form-control" required />
                        {#if errMessage }
                        <p class="text-danger">{errMessage}</p>
                        {/if}
                        <label class="form-label" for="username">Email</label>
                      </div>
                    </div>
  
  
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                    </div>
  
                  </form>
  
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>