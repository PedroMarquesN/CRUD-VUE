<script setup lang="ts">
import { api } from '../boot/axios';
import { Row } from '../types/table';
import { onMounted, ref } from 'vue';

onMounted(() => {
  getPosts();
});


const getPosts = async () => {
  try {
    const response = await api.get('http://localhost:3000/posts');
    console.log(response);
  }
  catch(error){
    console.error(error);
  }
}


const columns = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left' as const,
    field: 'id',
    sortable: true
  },
  { name: 'title', align: 'center' as const, label: 'Title', field: 'title', sortable: true },
  { name: 'autor', align: 'center' as const, label: 'Autor', field: 'autor', sortable: true },
  { name: 'views', align: 'center' as const, label: 'Views', field: 'views', sortable: true },
];

const rows = ref<Row[]>([
  {
    id: 1,
    category: 'Cursos',
    title: 'Curso de Vue.js',
    autor: 'Leonardo Leitão',
    views: 1000
  },
]);

defineOptions({
  name: 'IndexPage'
});
</script>

<template>
  <q-page padding>
    <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

