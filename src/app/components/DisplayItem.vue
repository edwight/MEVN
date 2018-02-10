<template lang="html">
	<div>
		<h2>displayItems</h2>
		<div class="form-group">
			<input type="text" name="busqueda" v-model="busqueda" class="form-control">
		</div>
		<table class="table table-hovered table-border">
			<thead>
				<tr>
					<th>ID</th>
					<th>NOMBRE</th>
					<th>PRECIO</th>
					<th>OPSERVASIONES</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in items">
					<th>{{item._id}}</th>
					<th>{{item.name}}</th>
					<th>{{item.price}}</th>
					<th>
						<a href="#" class="btn btn-danger" v-on:click="eliminarItem(item._id)">eliminar</a>
						<a href="#" class="btn btn-dark" v-on:click="editarItem(item._id)">actualizar</a>
						<a href="#" class="btn btn-primary" v-on:click="mostrarItem(item._id)">Mostar</a>
					</th>
				</tr>
			</tbody>
		</table>
	</div>

</template>

<script>
	export default{
		data(){
			return {
				items:[]
			}		
		},
		created(){
			this.fetchItems()
		},
		methods:{
			fetchItems(){
				const url = 'http://localhost:4000/items';
				this.axios.get(url).then((res)=>{
					//console.log(res.data);
					this.items = res.data;
				});
			},
			eliminarItem(id){
				const response = confirm('esta seguro que lo quieres eliminar ?');
				if(response){
					var url = 'items/delete/'+id;
					alert(url);
					this.axios.get(url)
					.then(res=>{
						this.items.splice(id, 1);
					})
					.catch(err=>console.log(err));
				}
				
			},
			editarItem(id){
				this.$router.push({ name: 'EditItem', params: { ItemId: id }})
				//this.$router.replace({name:'EditItem'})
			},
			mostrarItem(id){
				this.$router.push({name:'ShowItem', params:{ItemId:id }})
			}
		}
	}
</script>
