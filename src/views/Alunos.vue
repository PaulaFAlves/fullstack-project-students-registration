<template>
<div class="alunos">
	<h1 class="subheading">Alunos</h1>
	<v-container class="my-5">
		<v-layout row wrap class="mx-0">
			<v-flex md6>
				<v-text-field v-model="search" label="Pesquisar aluno pelo nome"></v-text-field>
			</v-flex>
			<v-flex md2>
				<v-btn text small @click="searchStudent(search)">Procurar</v-btn>	
			</v-flex>	
		</v-layout>

		<v-divider></v-divider>
		<v-flex class="my-5">
			<IncluirAluno @studentAdded="snackbar= true"/>
		</v-flex>

		<v-layout row class="mb-3">
			<v-btn small text color="grey" @click="sortBy('id')">
				<v-icon left small>mdi-card-account-details</v-icon>
				<span class="caption text-lowercase">Ordenar por registro</span>
			</v-btn>
			<v-btn small text color="grey" @click="sortBy('name')">
				<v-icon left small>mdi-account</v-icon>
				<span class="caption text-lowercase">Ordenar por nome</span>
			</v-btn>
		</v-layout>

		<v-card flat v-for="data in data" :key="data.id">
			<v-layout row wrap class="mx-3">
				<v-flex xs12 md2>
					<div class="caption grey--text" >Registro:</div>
					<div>{{ data.ra }}</div>
				</v-flex>
				<v-flex xs6 sm4 md6>
					<div class="caption grey--text">Nome:</div>
					<div>{{ data.name }}</div>
				</v-flex>
				<v-flex xs6 sm4 md2>
					<div class="caption grey--text">CPF:</div>
					<div>{{ data.cpf }}</div>
				</v-flex>
				<v-flex xs2 sm4 md2>
					<div class="my-5">
						<!-- <EditarAluno /> -->
						<v-btn text small @click.stop="dialogEdit = true">Editar</v-btn>
						<v-dialog v-model="dialogEdit" max-width="500">
							<v-card>
								<v-form class="px-3">
									<v-text-field label="" :placeholder="`${data.name}`" v-model="name" prepend-icon="mdi-account">
										
									</v-text-field>
									<v-text-field readonly label="CPF" :placeholder="`${data.cpf}`" v-model="cpf" prepend-icon="mdi-account">
										
									</v-text-field>
									<v-text-field label="Email" :placeholder="`${data.email}`" v-model="email" prepend-icon="mdi-account">
										
									</v-text-field>
								</v-form>


								<v-card-title>Confirma a edição dos dados do aluno?</v-card-title>
								<v-card-actions class="d-flex justify-end">
									<v-btn text @click="dialogEdit = false">Não</v-btn>
									<v-btn text @click="updateStudent(data.id)">Sim</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>

						<!-- <ExcluirAluno props/> -->
						<v-btn text small @click.stop="dialog = true">Excluir</v-btn>
						<v-dialog v-model="dialog" max-width="400">
							<v-card>
								<v-card-title>Confirma a exclusão do aluno?</v-card-title>
								<v-card-actions class="d-flex justify-end">
									<v-btn text @click="dialog = false">Não</v-btn>
									<v-btn text @click="deleteStudent(data.id)">Sim</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</div>



				</v-flex>
			</v-layout>
			<v-divider></v-divider>
		</v-card>
	</v-container>
</div>
</template>

<script>
import IncluirAluno from '../components/IncluirAluno'
// import EditarAluno from '../components/EditarAluno'
// import ExcluirAluno from '../components/ExcluirAluno'
import db from '@/db'

export default {
	data() {
	return {
		data: [],
		name: '',
		email: '',
		cpf: '',
		dialog: false,
		dialogEdit: false,
		search: '',
	}
	},
	components: {
		IncluirAluno,
		// EditarAluno,
		// ExcluirAluno,
	},
	methods: {
		sortBy(prop) {
			this.data.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
		},
		deleteStudent(id) {
			console.log(id)
			db.collection('students').doc(id).delete()
				.then(() => {
					this.dialog = false;
					location.reload();	
				})

		},
		updateStudent(id) {
			console.log(id)

			db.collection('students').doc(id).update({
				name: this.name,
				email: this.email,
			}).then(() => {
				this.name = '';
				this.email = '';
				this.dialog = false;
				location.reload();
			})
		},
		searchStudent(search) {
			
			db.collection("students").where("name", "==", search)
				.get()
				.then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
						console.log(doc.id, " => ", doc.data());

					});
				})
				.catch(function(error) {
					console.log("Error getting documents: ", error);
				});
		}
	},
	created() {
		db.collection('students').onSnapshot(res => {
			const changes = res.docChanges();

			changes.forEach(change => {
				if (change.type === 'added'){
					this.data.push({
						...change.doc.data(),
						id: change.doc.id
					})
				}
			})
		})
	}
}
</script>
