<template  v-slot:activator="{ on }">
	<v-dialog v-model="dialog" width="600px">
		<v-btn slot="activator" @click="dialog = !dialog">Incluir novo aluno</v-btn>
		<v-card>
			<v-card-title class="red--text text--darken-1 text-uppercase">
				Incluir Novo Aluno
			</v-card-title>
			<v-card-text>
				<v-form class="px-3" ref="form">
					<v-text-field label="Registro Acadêmico" color="black" v-model="ra" prepend-icon="mdi-book-variant" :rules="raRules"></v-text-field>
					<v-text-field label="Name" color="black" v-model="name" prepend-icon="mdi-account" :rules="nameRules"></v-text-field>
					<v-text-field label="CPF" color="black" v-model="cpf" prepend-icon="mdi-card-account-details" :rules="cpfRules"></v-text-field>
					<v-text-field label="email" color="black" v-model="email" prepend-icon="mdi-email" :rules="emailRules"></v-text-field>
				</v-form>
					<v-card-actions class="d-flex justify-end">
						<v-btn text @click="cancel">Cancelar</v-btn>
						<v-btn text @click="submit" :loading="loading">Confirmar</v-btn>
					</v-card-actions>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import db from '@/db'

export default {
	data() {
		return {
			dialog: false,
			ra: '',
			name: '',
			cpf: '',
			email: '',
			warning: '',
			loading: false,
			raRules: [
				() => this.ra.length > 0 || 'Campo obrigatório', 
				() => this.ra.length == 6 || 'Registro acadêmico deve ter 6 dígitos',
			],
			nameRules: [
				() => this.name.length > 0 || 'Campo obrigatório',
				() => this.name.match(/\s/) || 'Informar Nome e Sobrenome',
			],
			cpfRules: [
				() => this.cpf.length > 0 || 'Campo obrigatório',
				() => this.cpf.length == 11 || 'CPF Inválido',
			],
			emailRules: [
				() => this.email.length > 0 || 'Campo obrigatório',
				() => this.email.match(/[@]*[.]/) || 'Email Inválido',
			]
		}
	},
	methods: {
		submit() {
			if(this.$refs.form.validate()) {
				this.loading = true;

				const student = {
					ra: this.ra,
					name: this.name,
					cpf: this.cpf,
					email: this.email,
				}
				db.collection('students').add(student).then(()=>{
					this.loading = false;
					this.dialog = false;
					this.$emit('studentAdded');
					this.name = '';
					this.cpf = '';
					this.email = '';
				})	
			} 
		},
		cancel() {
			this.ra = '';
			this.name = '';
			this.cpf = '';
			this.email = '';
			this.dialog = false;
		}
	}

}

</script>

<style>
.red {
	color: green;
}
	
</style>