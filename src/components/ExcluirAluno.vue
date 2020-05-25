<template  v-slot:activator="{ on }">
	<v-dialog v-model="dialog" width="600px">
		<v-btn small text slot="activator" class="red--text" @click="dialog = !dialog">Excluir</v-btn>
		<v-card>
			<v-card-title>
				<h2>Excluir aluno</h2>
				<v-btn @click="deleteStudent()">confirmar</v-btn>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script>
// import db from '@/db'

export default {
	data() {
		return {
			dialog: false,
		}
	},
	methods: {
		deleteStudent() {
			let id = this.data.id
			// db.collection('students').doc(data.id).delete();
			console.log(id)
		}
	}
}
</script>

<style>
.red {
	color: #E30513
}
	
</style>