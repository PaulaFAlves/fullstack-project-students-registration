<template  v-slot:activator="{ on }">
	<v-dialog v-model="dialog" width="600px">
		<v-btn slot="activator" @click="dialog = !dialog">Incluir novo aluno</v-btn>
		<v-card>
			<v-card-title>
				<h2>Adicionar aluno</h2>
			</v-card-title>
			<v-card-text>
				<v-form class="px-3" ref="form">
					<v-text-field label="Registro Acadêmico" v-model="ra" prepend-icon="mdi-account" :rules="raRules"></v-text-field>
					<v-text-field label="Name" v-model="name" prepend-icon="mdi-account" :rules="nameRules"></v-text-field>
					<v-text-field label="CPF" v-model="cpf" prepend-icon="mdi-card-account-details" :rules="cpfRules"></v-text-field>
					<v-text-field label="email" v-model="email" prepend-icon="mdi-email" :rules="emailRules"></v-text-field>
					<v-btn text disable class="success" @click="submit" :loading="loading">Adicionar</v-btn>
				</v-form>
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
			inputRules: [
				v => v.length >= 3 || 'Minimum 3 caracters'
			],
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
					this.name = '';
					this.cpf = '';
					this.email = '';
					this.$emit('studentAdded');
				})	
			} else {
				alert('digite tudo')
			}
		}
	}

}

</script>