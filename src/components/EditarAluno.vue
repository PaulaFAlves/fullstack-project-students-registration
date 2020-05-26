<template  v-slot:activator="{ on }">
	<v-dialog v-model="dialog" max-width="600">
		<v-btn small text slot="activator" @click="dialog = !dialog">Editar</v-btn>
		<v-card>
			<v-card-title class="red--text text--darken-1 text-uppercase">
				Editar dados do aluno
			</v-card-title>
			<v-form class="px-3" ref="form">
				<v-text-field label="Nome" color="black" :rules="nameRules" v-model="name" prepend-icon="mdi-account">
					
				</v-text-field>
				<v-text-field disabled label="CPF (não editável)" v-model="cpf" prepend-icon="mdi-card-account-details">
					
				</v-text-field>
				<v-text-field label="Email" color="black" :rules="emailRules" v-model="email" prepend-icon="mdi-email">
					texte
				</v-text-field>
			</v-form>
			<v-card-actions class="d-flex justify-end">
				<v-btn text @click="cancel">Cancelar</v-btn>
				<v-btn text @click="updateStudent">Confirmar</v-btn>
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
		studentEmail: {
			type: String
		},
		studentCpf: {
			type: String
		}
	},
	data() {
		return {
			data: [],
			dialog: false,
			name: this.studentName,
			cpf: this.studentCpf,
			email: this.studentEmail,
			nameRules: [
				() => this.name.match(/\s/) || 'Informar Nome e Sobrenome',
			],
			emailRules: [
				() => this.email.match(/[@]*[.]/) || 'Email Inválido',
			],
		}
	},
	methods: {
		updateStudent() {
			if(this.$refs.form.validate()) {
				db.collection('students').doc(this.studentId).update({
					name: this.name,
					email: this.email
				}).then(() => {
					this.dialog = false;
					// location.reload()
				})

				}
		},
		cancel() {
			this.dialog = false;
		}
	},
}
</script>