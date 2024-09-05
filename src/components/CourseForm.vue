<template>
    <q-card>
      <q-card-section>
        <div class="text-h6">Formulário de Curso</div>
      </q-card-section>
  
      <q-card-section padding>
        <q-form @submit="submitForm">
          <div v-for="(course, index) in courses" :key="index" class="q-mt-xl">
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
          </div>
  
          <q-btn label="Adicionar Curso" color="primary" icon="add" @click="addCourse" />
          <q-btn label="Remover Curso" class="q-ml-xl" color="negative" icon="remove" @click="removeCourse" />
  
          <div class="col-12 q-gutter-sm flex justify-end items-center">
            <q-btn type="submit" label="Salvar" color="primary" icon="save" />
            <q-btn label="Cancelar" color="negative" @click="cancel" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </template>
  
  <script setup lang="ts">
  import { ICourse } from '../types/API';
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps<{
    courses: ICourse[];
  }>();
  
  const emit = defineEmits(['submit', 'cancel', 'update:courses']);
  
  const addCourse = () => {
    const newCourses = [...props.courses, { id: 0, title: '', author: '', views: 0 }];
    emit('update:courses', newCourses);
  };
  
  const removeCourse = () => {
    const newCourses = props.courses.slice(0, -1);
    emit('update:courses', newCourses);
  };
  
  const submitForm = () => {
    emit('submit');
  };
  
  const cancel = () => {
    emit('cancel');
  };
  </script>