<script>
	import { slide } from "svelte/transition"
	import {push} from 'svelte-spa-router'

    export let products;
	//export let removeItem;
	export let i;
	
</script>



<div class="card cardstyle" style="width: 18rem;" transition:slide>
			<img src="./images/book.jpeg" class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">{products[i].name}</h5>
				<h4>price: {products[i].value} DKK</h4>
				<p class="card-text">{products[i].description}</p>
				<button on:click={()=> toastr.info(`${products[i].name} is added to shopping card.`) }>Buy now</button>
			</div>
		</div>