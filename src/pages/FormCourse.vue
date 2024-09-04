<script setup lang="ts">
import {  ref } from 'vue';
import { ICourse } from '../types/API';
import coursesService from '../services/course';




const course = ref<ICourse>({
  id: 0, 
  title: '',
  author: '',
  views: 0 
});



const submitForm = async () => {
  console.log(course.value);
  try {
    await coursesService().post(course.value);
  }
  catch(error){
    console.error(error);
  }
}
defineOptions({
  name: 'FormCourse'
});

</script>

<template>
    <q-page>
      <q-card>
        <q-card-section>
          <div class="text-h6">Formulário de Curso</div>
        </q-card-section>
  
        <q-card-section>
          <q-form @submit="submitForm">
            <q-input
              v-model="course.title"
              label="Título"
              :rules="[val => !!val || 'Titulo é necessário']"
              filled
              dense
            />
            <q-space />
            <q-input
              v-model="course.author"
              label="Autor"
              :rules="[val => !!val || 'Autor é necessário']"
              filled
              dense
            />
            <q-space />
            <q-input
              v-model="course.views"
              label="Views"
              type="number"
              :rules="[val => val >= 0 || 'Views must be a positive number']"
              filled
              dense
            />
            <q-space />
            <q-btn type="submit" label="Submit" color="primary" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
    
