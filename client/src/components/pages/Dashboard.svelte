<script>
	import Product_card_component from "./Product_card_component.svelte";
	import Navbar from "./Navbar.svelte"
	import { onMount } from "svelte";
	//import { products } from '../../stores.js'
	import Login from "./Login.svelte"
	//import { user } from '../../stores.js'


	let products = [];
	let totalAmount = 0;

	onMount(async () => {
		const response = await fetch("http://localhost:3000/api/transactions");
		const data = await response.json();
		//console.log();
		products = data;
	});
	 function removeItem() {
		toastr.info(`One item  is added to basket.`)
		/*
		const response = await fetch(
			"http://localhost:3000/api/transactions/" + id,
			{
				method: "DELETE",
			}
		);
		console.log(response);
		if (response._id == id) {
			products1 = products.filter((pro) => pro.data.id != id);
			products = products1;
		}
		*/
		
		
	}
</script>

<Navbar {totalAmount} />

<br>

<hr />
<main>

{#each products as product, i}
		<Product_card_component {products} {i} />
	{/each}

	
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
