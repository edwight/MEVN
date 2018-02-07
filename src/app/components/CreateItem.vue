<template lang="html">
	<div>
		<form v-on:submit.prevent="addItem" class="card">
			<div class="card-title">
				<h1>agrega un item</h1>
			</div>
			<div class="card-body">
				<div class="form-group">
					<input type="text" name="name" v-model="item.name" placeholder="agrega un nombre" class="form-control">
				</div>
				<div class="form-group">
					<input type="text" name="precio" v-model="item.price" placeholder="agrega un precio" class="form-control">
				</div>
				<button type="submit" class="btn btn-primary">
					agregar items
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				item:{}
			}
		},
		methods:{
			addItem(){
				const url='http://localhost:4000/items/add';
				this.axios.post(url, this.item)
				.then((res)=>{
					this.$router.replace({name:'DisplayItem'})
				})
				.catch((err)=>{console.log(err)});
			}
		}
	}
</script>