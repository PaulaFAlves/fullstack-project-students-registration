<template  v-slot:activator="{ on }">
	<v-dialog v-model="dialog" max-width="600">
		<v-btn small text slot="activator" @click="dialog = !dialog">Editar</v-btn>
		<v-card>
			<v-card-title>Edição de dados do aluno?</v-card-title>
			<v-form class="px-3">
				<v-text-field label="Nome" :placeholder="`${this.studentName}`" v-model="name" prepend-icon="mdi-account">
					
				</v-text-field>
				<v-text-field disabled label="CPF (não editável)" :placeholder="`${this.studentCpf}`" v-model="cpf" prepend-icon="mdi-account">
					
				</v-text-field>
				<v-text-field label="Email" :placeholder="`${this.studentEmail}`" v-model="email" prepend-icon="mdi-account">
					
				</v-text-field>
			</v-form>
			<v-card-actions class="d-flex justify-end">
				<v-btn text @click="dialog = false">Não</v-btn>
				<v-btn text @click="updateStudent">Sim</v-btn>
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
			name: '',
			cpf: '',
			email: '',
		}
	},
	methods: {
		updateStudent() {
			console.log(this.studentId)
			if (this.name !== '') {
				db.collection('students').doc(this.studentId).update({
					name: this.name,
				}).then(() => {
					this.dialog = false;
				})
			}
			if (this.email !== '') {
				db.collection('students').doc(this.studentId).update({
					email: this.email,
				}).then(() => {
					this.dialog = false;
				})
			}
		

			// .then(() => {
			// 	db.collection('students').onSnapshot(snapshot => {
			// 		let changes = snapshot.docChanges();
			// 		changes.forEach(change => {
			// 			if (change.type === 'updated') {
			// 				this.name.push({
			// 				...change.doc.data(),
			// 				id: change.doc.id
			// 			})}
			// 		})
			// 	})
			// })
		},
	},
	created() {

	}
}
</script>