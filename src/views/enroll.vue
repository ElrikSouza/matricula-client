<template>
  <main>
    <h1>Matricula</h1>
    Cursos Disponiveis
    <ul class="course-list">
      <li v-for="course in courses" :key="course._id" class="course-list__item">
        {{ course.name }}
        <div>
          {{ course.msg ? course.msg : "Disponivel" }}
          <input
            :disabled="course.msg != undefined"
            type="checkbox"
            name="selectedCourses"
            :id="course._id"
            :value="course._id"
            v-model="selectedCourses"
          />
        </div>
      </li>
    </ul>
    <app-button @click="submitRequests">Confirmar</app-button>
  </main>
</template>

<script lang="ts">
import appButton from "@/components/app-button.vue";
import Vue from "vue";

interface Course {
  _id: number;
  name: string;
  prerequisites: number[];
  msg?: string;
}
export default Vue.extend({
  components: { appButton },
  data() {
    return {
      availableCourses: [
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
      myCourseHistory: [1, 2] as number[],
      myEnqueuedCourses: [2],
      selectedCourses: [] as Course[],
    };
  },
  computed: {
    courses(): Course[] {
      return this.availableCourses.map((course) => ({
        ...course,
        msg: this.canEnroll(course),
      }));
    },
  },
  methods: {
    canEnroll(course: any) {
      if (this.myEnqueuedCourses.includes(course._id)) {
        return "Você já está na fila";
      }

      if (this.myCourseHistory.includes(course._id)) {
        return "Já fez";
      }

      const { length: preRequisitesLength } = course.prerequisites;

      for (let i = 0; i < preRequisitesLength; i++) {
        if (!this.myCourseHistory.includes(course.prerequisites[i])) {
          return "Você Não Possui Todos os Pré-requisitos";
        }
      }
    },
    submitRequests() {
      alert(this.selectedCourses);
    },
  },
});
</script>

<style scoped>
.course-list {
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
}
.course-list__item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>
