<script>
	import Product_card_component from "./components/Product_card_component.svelte"
	import { onMount } from "svelte";
	
	let products = [];
	onMount(async () => {
		const response = await fetch("http://localhost:3000/api/transactions");
		const data = await response.json();
		console.log(data);
		products = data;
	});
	async function removeItem(id){
		const response = await fetch('http://localhost:3000/api/transactions/'+id,{
			method: 'DELETE',
		})
		console.log(response);
		if (response._id ==id){
			products1 = products.filter(pro => pro.data.id != id);
			products = products1	
		}
		location.reload();
		
	}
</script>
<style>
	main {
		display : flex;
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


<main>
	{#each products as product, i}
		<Product_card_component { products } { removeItem } { i } />
	{/each}
</main>

