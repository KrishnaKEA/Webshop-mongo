<script>
	import Router from "svelte-spa-router"
	import Home from "./components/pages/Home.svelte"
	import Dashboard from "./components/pages/Dashboard.svelte"
	import Register from "./components/pages/Register.svelte"
	import Login from "./components/pages/Login.svelte"
	const routes = {
	"/": Home,
	"/dashboard": Dashboard,
	"/register": Register,
	"/login":Login

}
</script>

<Router {routes}/>