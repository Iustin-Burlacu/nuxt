<script>
    /*const { data: products } = await useFetch('/api/products', {
        transform: (_products) => _products.data
    }); */
    const { data: products, pending } = await useLazyFetch('/api/products', {
        transform: (_products) => _products.data
    });
    console.log(toRaw(products.value));
</script>
<template>
    <div>
        Fetch
        <p class="text-black">{{ products }}</p>
    </div>
</template>