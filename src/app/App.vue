<template lang="html">
	<div>
		<h1>vue.js funcionando</h1>
		<router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">
              Create
            </router-link>
		<div class="container">
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	export default {}
</script>