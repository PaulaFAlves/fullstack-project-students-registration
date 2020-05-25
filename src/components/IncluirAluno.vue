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
					<v-text-field label="email" v-model="email" prepend-icon="mdi-card-account-details"></v-text-field>
					<v-btn text class="success" @click="submit" :loading="loading">Adicionar</v-btn>
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
			name: '',
			cpf: '',
			email: '',
			loading: false,
			
		}
	},
	methods: {
		submit() {
			this.loading = true;

			const student = {
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
			})
		}
	}

}

</script>