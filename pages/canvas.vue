<template>
    <canvas ref="canvas" id="canvas" class="w-[400px] h-[400px] border mt-4"></canvas>
</template>

<script setup>
  // import {onMounted} from "#imports";
  import { onMounted, ref, reactive } from '#imports'
  // import { CanvasManager } from '@/managers/canvasmanager'

  definePageMeta({
    title: 'Canvas'
  });

  const canvas = ref<HTMLCanvasElement>();

  const drawCircle = () => {
    let ctx = canvas.value?.getContext('2d');
    if (ctx) {
      ctx.beginPath()
      ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }

  drawCircle()

  // let myCanvas = ref(null)
  // let myContext = ref(null)
  // let manager = ref(null)
  //
  // let size = reactive({
  //   w: 200,
  //   h: 200
  // })
  //
  // function grow() {
  //   size.w += 10
  //   size.h += 10
  //   manager.drawGrid(4, 4, 1, 'black')
  // }
  //
  // onMounted(() => {
  //   myContext = myCanvas.value.getContext('2d')
  //   manager = new CanvasManager(myContext, size.w, size.h)
  //   manager.drawGrid(4, 4, 1, 'black')
  // })
</script>

<style scoped>

</style>