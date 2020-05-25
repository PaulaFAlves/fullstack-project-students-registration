<template  v-slot:activator="{ on }">
	<v-dialog v-model="dialog" max-width="400">
		<v-card>
			<v-card-title>Confirma a exclusão do aluno?</v-card-title>
			<v-card-actions class="d-flex justify-end">
				<v-btn text @click="dialog = false">Não</v-btn>
				<v-btn text @click="dialog = false">Sim</v-btn>
			</v-card-actions>
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
			studentId: this.$emit('studentId')
		}
	},
}
</script>