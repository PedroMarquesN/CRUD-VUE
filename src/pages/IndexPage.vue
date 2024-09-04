<script setup lang="ts">

import coursesService from '../services/course';
import { onMounted, ref } from 'vue';
import { ICourse } from '../types/API';
import { confirmDeleteDialog} from '../services/dialogService';

const courses = ref<ICourse[]>([]);
const {list , remove} = coursesService();

onMounted(() => {
  getPosts();
});


const getPosts = async () => {
  try {
    const data  = await list();
    courses.value = data;
  }
  catch(error){
    console.error(error);
  }
}

const editCourse = (course: ICourse) => {
  console.log(course);
}

const deleteCourse = async (course: ICourse) => {

  const isConfirmed = await confirmDeleteDialog('Você tem certeza que deseja deletar este curso?')
  if (!isConfirmed) return;
  try {
    await remove(course.id);
    courses.value = courses.value.filter((c) => c.id !== course.id);
    await getPosts();
  }
  catch(error){
    console.error(error);
  }
}


const columns = [
      { name: 'id', required: true, label: 'ID', align: 'left' as const, field: (row: ICourse) => row.id, format: (val: number) => `${val}`, sortable: true },
      { name: 'title', required: true, label: 'Title', align: 'left' as const, field: (row: ICourse) => row.title, sortable: true },
      { name: 'author', required: true, label: 'Author', align: 'left' as const, field: (row: ICourse) => row.author, sortable: true },
      { name: 'views', required: true, label: 'Views', align: 'left' as const, field: (row: ICourse) => row.views, sortable: true },
      { name: 'actions', field: 'actions',label: 'Actions', align: 'right' as const }
    ];




defineOptions({
  name: 'IndexPage'
});
</script>

<template>
  <q-page padding>
    <q-table
      title="Cursos"
      flat
      bordered
      :rows="courses"
      :columns="columns"
      row-key="id"
    >
    <template v-slot:top>
      <span class="text-h5">Cursos</span>
      <q-space />
      <q-btn color="primary"  label="Novo Curso" :to="{name: 'FormCourse'}" />
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn
          dense
          icon="edit"
          color="primary"
          size="sm"
          class="q-mr-sm"
          @click="editCourse(props.row)"
        />
        <q-btn
          dense

          icon="delete"
          color="negative"
          size="sm"
          @click="deleteCourse(props.row)"
        />
      </q-td>
    </template>
  
  </q-table>
  </q-page>
</template>

