<template lang="html">
	<div>
		
		<form v-on:submit.prevent="updateItem" class="card">
			<div class="card-title">
				<h1>actualizando un item</h1>
			</div>
			<div class="card-body">
				<div class="form-group">
					<input type="text" name="name" v-model="item.name" class="form-control">
				</div>
				<div class="form-group">
					<input type="number" name="price" v-model="item.price" class="form-control">
				</div>
				<button type="submit" class="btn btn-primary">
					Actualizar
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
		created(){
			this.getItem();
		},
		methods:{
			getItem(){
				var id = this.$route.params.ItemId;
				var url = '/items/'+ id;
				this.axios.get(url).then(res=>{
					this.item = res.data;
					//this.item.price = res.data.price;
				})
				.catch(err=>{
					console.log(err);
				});
			},
			updateItem(){
				var id = this.$route.params.ItemId;
				var url = '/items/update/'+id;
				this.axios.post(url,this.item)
				.then((res)=>{
					this.$router.replace({name:'DisplayItem'});
				})
				.catch(err=>console.log(err));
			}
		}
	}
</script>