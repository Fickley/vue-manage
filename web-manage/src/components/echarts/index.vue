<script type="js" setup>
  import { ref, shallowRef, watch, onMounted, onBeforeUnmount } from 'vue';
  import * as echarts from "echarts";
  const echartsRef = ref();
  let timeout = null;
  const optionsBase = shallowRef({
    grid: {
      containLabel: true,
      left: 0,
      right: 0,
      bottom: 0,
      top: 20,
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: true,
        lineStyle: {
          width: 1,
          type: 'solid',
        }
      },
      axisTick: {
        show: true,
        alignWithLabel: true,
      },
      data: []
    },
    yAxis: {
      axisLine: {
        show: false,
        lineStyle: {
          width: 1,
          type: 'dashed',
        }
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisTick: {
        show: false,
        alignWithLabel: true,
      },
      type: 'value'
    },
    series: []
  });
  let echartInit;

  const props = defineProps({
    options: Object,
  })

  const resizeFun = () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      echartInit?.resize();
    }, 200)
  }

  onMounted(() => {
    const init = echarts.init(echartsRef.value);
    init.setOption(optionsBase.value)
    echartInit = init;
    init?.on('rendered',() => {
      window.addEventListener('resize',  resizeFun)
    });
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeFun)
  })

  watch(() => props.options, (newValue, oldValue) => {
    optionsBase.value = {...optionsBase, ...newValue}
    echartInit.setOption(optionsBase.value)
  }, {
    deep: true
  })

  defineExpose({
    echartInit: echartInit,
  })
</script>

<template>
  <div ref="echartsRef" class="echartsBox"></div>
</template>

<style scoped>
.echartsBox {
  width: 100%;
  height: 100%;
  min-height: 200px;
}
</style>
