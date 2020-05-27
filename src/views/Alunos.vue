<template>
<div class="alunos">
	<h1 class="subheading">Alunos</h1>
	<v-container class="my-5">
		<v-snackbar v-model="snackbar" top :timeout="4000">
			<span>Aluno incluído com sucesso!</span>
			<v-btn text color="white" @click="snackbar = false">
				<v-icon center left small>mdi-close</v-icon>
			</v-btn>
		</v-snackbar>
		<!-- search -->
		<v-layout row wrap justify-end class="mx-0 my-0">
			<v-flex md4>
				<v-text-field class="search" v-model="search" color="black" label="Pesquisar aluno pelo nome" append-icon="mdi-account-search" @click:append="searchStudent(search)">
				</v-text-field>
			</v-flex>	
		</v-layout>
		<!-- success add message -->
		<v-flex class="my-5">
			<IncluirAluno @studentAdded="snackbar = true"/>
		</v-flex>
		<!-- sort students -->
		<v-layout row class="mb-3">
			<v-btn small text color="grey" @click="sortBy('ra')">
				<v-icon left small>mdi-card-account-details</v-icon>
				<span class="caption text-lowercase">Ordenar por registro</span>
			</v-btn>
			<v-btn small text color="grey" @click="sortBy('name')">
				<v-icon left small>mdi-account</v-icon>
				<span class="caption text-lowercase">Ordenar por nome</span>
			</v-btn>
		</v-layout>
		<!-- students list -->
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
				<!-- update and delete -->
				<v-flex xs2 sm4 md2>
					<div class="my-5">
						<EditarAluno 
							:studentId="data.id" 
							:studentName="data.name" 
							:studentEmail="data.email"
							:studentCpf="data.cpf" />
						<ExcluirAluno 
							:studentId="data.id"
							:studentName="data.name" />
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
import EditarAluno from '../components/EditarAluno'
import ExcluirAluno from '../components/ExcluirAluno'
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
		snackbar: false,
	}
	},
	components: {
		IncluirAluno,
		EditarAluno,
		ExcluirAluno,
	},
	methods: {
		sortBy(prop) {
			this.data.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
		},
		searchStudent(search) {
			console.log(search)
			db.collection("students").where("name", "==", search)
				.onSnapshot(res => {
					const changes = res.docChanges();
					console.log(changes)
					changes.forEach(change => {
							this.data.push({
								...change.doc.data(),
								// id: change.doc.id
							})
					})
				})
			this.search = ''
		}
	},
	created() {
		db.collection('students').onSnapshot(res => {
			const changes = res.docChanges();
			console.log(changes)

			changes.forEach(change => {
				if (change.type === 'added'){
					this.data.push({
						...change.doc.data(),
						id: change.doc.id
					})
				}
			})
			changes.forEach(change => {
				if (change.type === 'modified'){
					this.data.push({
						...change.doc.data(),
						id: change.doc.id
					})
				}
			})
			changes.forEach(change => {
				if (change.type === 'deleted'){
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

<style>
.search {
	opacity: 0.7;
	font-style: italic;
}
	
</style>
