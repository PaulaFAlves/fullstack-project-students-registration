<template>
	<nav>
		<v-app-bar flat app style="height: 60px">
			<v-snackbar v-model="snackbar" :timeout="4000">
				<span>awesome</span>
				<v-btn text color="white" @click="snackbar = false">Close</v-btn>
			</v-snackbar>

			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">Módulo Acadêmico</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn text color="grey">
				<span>Sign Out</span>
				<v-icon right>mdi-exit-to-app</v-icon>
			</v-btn>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" app class="black">
			<v-img src="../assets/logo-black.png" class="my-2" height="70" contain></v-img>

			<v-list class="d-flex flex-column py-0  my-5">

				<v-list-item  v-for="link in links" :key="link.text" router :to="link.route">
					<v-list-item-action>
						<v-icon class="white--text" left>{{ link.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title class="white--text" right>{{ link.text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			drawer: true,
			links: [
				{ icon: 'mdi-view-dashboard', text: 'Home', route: '/' },
				{ icon: 'mdi-account-multiple', text: 'Alunos', route: '/alunos' },
				{ icon: 'mdi-teach', text: 'Professores', route: '/professores' },
				{ icon: 'mdi-notebook', text: 'Disciplinas', route: '/' },
			],
			snackbar: false,
		}
	}
}
	
</script>