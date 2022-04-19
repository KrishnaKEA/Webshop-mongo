<script>
	let currentuser;
	let totalAmount;

	currentuser = localStorage.getItem("currentUser");

	//document.querySelector('#cuser').innerHTML = currentuser
	console.log("-----------------------");
	console.log(currentuser);
	console.log("-----------------------");
	function logout() {
		localStorage.setItem("currentUser", null);
	}
	function checkout() {
		toastr.info("Because of time limitaion i could not implement the check out functionality.")
	}
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarText"
			aria-controls="navbarText"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
			{#if localStorage.currentuser === null}
				<ul>
					<li class="nav-item">
						<a class="nav-link" href="/#/login">Signin</a>
					</li>
				</ul>
			{:else}
				<ul>
					<li class="nav-item">
						<a class="nav-link" href="/#/">Current User {currentuser}</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/#/login"
							><button on:click={logout}>Signout</button></a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/#/dashboard"
							><button on:click={checkout}>Proceed to Checkout</button></a
						>
					</li>
				</ul>
			{/if}
		</div>
	</div>
</nav>


