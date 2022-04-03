<script>
    export let products;
	export let removeItem;
	export let i;
</script>



<div class="card cardstyle" style="width: 18rem;">
			<img src="./images/book.jpeg" class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">{products[i].name}</h5>
				<h4>price: {products[i].value} DKK</h4>
				<p class="card-text">{products[i].description}</p>
				<button on:click={()=>removeItem(products[i]._id)}>Buy now</button>
			</div>
		</div>