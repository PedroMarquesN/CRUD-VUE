<script setup lang="ts">
import {  ref } from 'vue';
import { ICourse } from '../types/API';
import coursesService from '../services/course';
import { showSuccessDialog } from '../services/dialogService';
import { useRouter } from 'vue-router';

const router = useRouter(); 

const course = ref<ICourse>({
  id: 0, 
  title: '',
  author: '',
  views: 0 
});



const submitForm = async () => {

  try {
    await coursesService().save(course.value);
    showSuccessDialog('Curso cadastrado com sucesso');
    router.push({ name: 'home' });

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
  
        <q-card-section padding>
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

            <div class="col-12 q-gutter-sm flex justify-end items-center">
                <q-btn type="submit" label="Salvar" color="primary" icon="save" />
                <q-btn label="Cancelar" color="negative" @click="router.push({ name: 'home' })" />
              </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
    
