<template  v-slot:activator="{ on }">
	<v-dialog v-model="dialog" width="600px">
		<v-btn slot="activator" @click="dialog = !dialog">Incluir novo aluno</v-btn>
		<v-card>
			<v-card-title>
				<h2>Adicionar aluno</h2>
			</v-card-title>
			<v-card-text>
				<v-form class="px-3">
					<v-text-field label="Name" v-model="name" prepend-icon="mdi-account"></v-text-field>
					<v-text-field label="CPF" v-model="cpf" prepend-icon="mdi-card-account-details"></v-text-field>
					<v-btn text class="success" @click="submit">Adicionar</v-btn>
				</v-form>
			</v-card-text>
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
	methods: {
		submit() {
			console.log(this.name, this.cpf)
		}
	}

}

</script>