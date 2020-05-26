<template  v-slot:activator="{ on }">
	<v-dialog v-model="dialog" width="400px">
		<v-btn small text slot="activator" class="red--text" @click="dialog = !dialog">Excluir</v-btn>
		<v-card>
			<v-card-title class="red--text text-uppercase text--darken-1">Exclusão de aluno</v-card-title>
			<p class="text-center name">Confirma a exclusão do aluno <br />{{ studentName }}?</p>
			<v-card-actions class="d-flex justify-end">
				<v-btn text @click="dialog = false">Cancelar</v-btn>
				<v-btn text @click="deleteStudent">Confirmar</v-btn>
			</v-card-actions>	
		</v-card>
	</v-dialog>
</template>

<script>
import db from '@/db'

export default {
	props: {
		studentId: {
			type: String
		},
		studentName: {
			type: String
		},
	},
	data() {
		return {
			dialog: false,
		}
	},
	methods: {
		deleteStudent() {
			db.collection('students').doc(this.studentId).delete()
			.then(() => {
				console.log(this.studentId)
				this.dialog = false
				location.reload()
			})
		},
	},
}
</script>

<style>
.red {
	color: #E30513
}
.name {
	font-size: 17px;
}
	
</style>