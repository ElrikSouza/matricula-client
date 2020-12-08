<template>
  <form-page-grid title="Registro" :onSubmit="onSubmit" :onCancel="onCancel">
    <app-input v-model="email" placeholder="E-mail" type="email" />
    <app-input v-model="name" placeholder="Nome" type="email" />
    <app-input v-model="password" placeholder="Senha" type="password" />
    <app-input
      v-model="confirmPassword"
      placeholder="Confirmar Senha"
      type="password"
    />
  </form-page-grid>
</template>

<script lang="ts">
import Vue from "vue";
import AppInput from "../components/app-input.vue";
import formPageGrid from "../components/form-page-grid.vue";

export default Vue.extend({
  components: { formPageGrid, AppInput },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    onSubmit() {
      alert("submit");
    },
    onCancel() {
      alert("cancel");
    },
  },
});
</script>
