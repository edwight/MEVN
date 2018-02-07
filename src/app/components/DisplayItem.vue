<template lang="html">
	<div>
		<h2>displayItems</h2>
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
						<a href="#" class="btn btn-danger">eliminar</a>
						<a href="#" class="btn btn-dark">actualizar</a>
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
			}
		}
	}
</script>
