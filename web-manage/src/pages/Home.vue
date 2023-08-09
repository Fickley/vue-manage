<script setup>
  import { shallowRef, onMounted } from "vue";
  import echarts from "@/components/echarts/index.vue";
  let options = shallowRef({});
  onMounted(() => {
    const option = {
      xAxis: {
        type: 'category',
        data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          smooth: true,
          data: [200, 100, 300, 50, 150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    options.value = option;
  })
</script>

<template>
  <div class="pages">
    <el-card class="box-card" body-style="height: 300px">
      <template #header>
        <div><span>近十年</span></div>
      </template>
      <echarts :options="options" />
    </el-card>
  </div>
</template>

<style scoped>
  .pages {
    padding: 15px;
    flex: 1;
  }
</style>
