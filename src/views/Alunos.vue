<template>
<div class="alunos">
	<h1 class="subheading">Alunos</h1>
	<v-container class="my-5">
		<v-layout row wrap class="mx-0">
			<v-flex md6>
				<v-text-field label="Pesquisar aluno pelo nome"></v-text-field>
			</v-flex>
			<v-flex md2>
				<v-btn text small>Procurar</v-btn>	
			</v-flex>	
		</v-layout>

		<v-divider></v-divider>
		<v-flex class="my-5">
			<IncluirAluno />
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
					<div class="caption grey--text">Registro:</div>
					<div>{{ data.id }}</div>
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
						<EditarAluno />
						<ExcluirAluno />
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

export default {
	data() {
	return {
		data: [
			{ id: '100200', name: 'Paula Alves', cpf: '12212212212' },
			{ id: '100201', name: 'Leandro Ferri', cpf: '12212212212' },
			{ id: '100202', name: 'Caroline Vanazzi', cpf: '12212212212' },
			{ id: '100203', name: 'Henrique Barbosa', cpf: '12212212212' },	
		]
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
		}
	}
}
</script>
