<template>
  <main class="enroll-edit-grid">
    <h1>Editar Matriculas</h1>
    <div>
      <h2>Pedido de Matriculas</h2>
      <div v-for="course in selectedCourses" :key="course._id">
        {{ course.name }}
        <app-button @click="removeCourse(course._id)" size="sm" color="danger"
          >Remover</app-button
        >
      </div>
    </div>
    <div>
      <h2>Pedido de Matriculas a Serem Canceladas</h2>
      <div v-for="course in coursesToBeRemoved" :key="course._id">
        {{ course.name }}
        <app-button @click="cancelRemoval(course._id)" size="sm">
          Cancelar Remoção
        </app-button>
      </div>
    </div>
    <app-button @click="submitChanges" class="enrol-edit-grid__confirm"
      >Confirmar</app-button
    >
  </main>
</template>

<script lang="ts">
import appButton from "@/components/app-button.vue";
import Vue from "vue";
export default Vue.extend({
  components: { appButton },
  data() {
    return {
      selectedCourses: [
        {
          _id: 1,
          name: "Calculo 1",
          prerequisites: [],
        },
        {
          _id: 2,
          name: "Calculo 2",
          prerequisites: [1],
        },
        {
          _id: 3,
          name: "Calculo 3",
          prerequisites: [2],
        },
      ],
      coursesToBeRemoved: [] as any[],
    };
  },
  methods: {
    removeCourse(courseId: number) {
      const course = this.selectedCourses.find(
        (course) => course._id == courseId
      );

      this.selectedCourses = this.selectedCourses.filter(
        (course) => course._id != courseId
      );

      this.coursesToBeRemoved = [...this.coursesToBeRemoved, course];
    },
    cancelRemoval(courseId: number) {
      const course = this.coursesToBeRemoved.find(
        (course) => course._id == courseId
      );

      this.coursesToBeRemoved = this.coursesToBeRemoved.filter(
        (course) => course._id != courseId
      );

      this.selectedCourses = [...this.selectedCourses, course];
    },
    async submitChanges() {
      alert("to submit changes");
    },
  },
});
</script>

<style scoped>
.enroll-edit-grid {
  display: grid;
  height: 100%;
  grid-template-rows: 3rem auto auto 3rem;
  padding: 2rem;
}

.enrol-edit-grid__confirm {
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
}
</style>
