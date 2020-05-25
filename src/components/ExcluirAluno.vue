<template  v-slot:activator="{ on }">
	<v-dialog v-model="dialog" width="600px">
		<v-btn small text slot="activator" class="red--text" @click="dialog = !dialog">Excluir</v-btn>
		<v-card>
			<v-card-title>
				<h2>Excluir aluno</h2>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	data() {
		return {
			dialog: false,
			name: '',
			cpf: '',
		}
	},
}
</script>

<style>
.red {
	color: #E30513
}
	
</style>