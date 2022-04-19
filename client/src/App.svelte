<script>
	import Router from "svelte-spa-router"
	import Home from "./components/pages/Home.svelte"
	import Dashboard from "./components/pages/Dashboard.svelte"
	import Register from "./components/pages/Register.svelte"
	import Login from "./components/pages/Login.svelte"
	import Forgetpassword from "./components/pages/forgetpassword.svelte"
	import Checkout from "./components/pages/Checkout.svelte"


	
	let dBoard;
	if (localStorage.currentuser === null){
		dBoard = Login
	}else{
		dBoard = Dashboard
	}


	const routes = {
	"/": Home,
	"/dashboard": dBoard,
	"/register": Register,
	"/login":Login,
	"/forgetpassword":Forgetpassword,
	"/checkout":Checkout


}
</script>

<Router {routes}/>