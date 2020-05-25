<template  v-slot:activator="{ on }">
	<v-dialog v-model="dialog" width="600px">
		<v-btn small text slot="activator" @click="dialog = !dialog">Editar</v-btn>
		<v-card>
			<v-card-title>
				<h2>Editar aluno</h2>
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