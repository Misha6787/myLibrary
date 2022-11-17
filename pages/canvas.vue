<template>
  <img src="../assets/image/test.jpg" class="mt-4 mx-auto absolute w-[1000px] h-[500px] t-0" alt="">
    <canvas
        ref="canvas" id="canvas" width="1000px" height="500px" class="mt-4 mx-auto absolute z-10"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove">
    </canvas>
</template>

<script setup lang="ts">
  // import { onMounted, ref, reactive } from '#imports'

  const roadMap = [
    {
      name: 'test',
      x: 220,
      y: 220
    }
  ]

  definePageMeta({
    title: 'Canvas'
  });

  const canvas = ref<HTMLCanvasElement>();

  onMounted(() => {
    drawCircle(10, 10)
  })

  const drawCircle = (x:number, y:number) => {
    let ctx = canvas.value?.getContext('2d');
    if (ctx) {

      ctx.beginPath()
      ctx.arc(x, y, 30, 0, 2 * Math.PI);
      ctx.fillStyle = 'black';
      ctx.fill()
    }
  }

  const onMouseDown = (e:MouseEvent) => {
    let x = e.offsetX;
    let y = e.offsetY;
    drawCircle(x,y);
    // console.log(e)
  }

  const onMouseMove = (e:MouseEvent) => {
    // console.log(e)
  }

  // const onMouseMove = (e:MouseEvent) => {
  //   // Check whether point is inside circle
  //   const isPointInPath = ctx.isPointInPath(circle, event.offsetX, event.offsetY);
  //   ctx.fillStyle = isPointInPath ? 'green' : 'red';
  //
  //   // Draw circle
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx.fill(circle);
  // }

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