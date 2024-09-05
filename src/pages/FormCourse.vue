<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ICourse } from '../types/API';
import coursesService from '../services/course';
import { showSuccessDialog } from '../services/dialogService';
import { useRoute, useRouter } from 'vue-router';
import CourseForm from '../components/CourseForm.vue';


const router = useRouter();
const route = useRoute();

const { save, getById, update } = coursesService();
const courses = ref<ICourse[]>([{ id: 0, title: '', author: '', views: 0 }]);

onMounted(async () => {
  if (route.params.id) {
    const courseId = Array.isArray(route.params.id) ? parseInt(route.params.id[0], 10) : parseInt(route.params.id, 10);
    if (!isNaN(courseId)) {
      try {
        const course = await getById(courseId);
        courses.value[0] = course;
        console.log(course);
      } catch (error) {
        console.error('Erro ao obter o curso:', error);
      }
    }
  }
});

const submitForm = async () => {
  try {
    for (const course of courses.value) {
      if (course.id) {
        await update(course.id, course);
      } else {
        await save(course);
      }
    }
    showSuccessDialog('Cursos salvos com sucesso');
    router.push({ name: 'home' });
  } catch (error) {
    console.error('Erro ao salvar os cursos:', error);
  }
};

const cancelForm = () => {
  router.push({ name: 'home' });
};

const updateCourses = (newCourses: ICourse[]) => {
  courses.value = newCourses;
};

defineOptions({
  name: 'FormCourse',
});
</script>

<template>
  <q-page>
    <CourseForm :courses="courses" @submit="submitForm" @cancel="cancelForm" @update:courses="updateCourses" />
  </q-page>
</template>