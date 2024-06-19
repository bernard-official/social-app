<template>
  <main class="main-content">
    <!-- <TransitionGroup appear name="staggered" tag="ul"> -->
    <Card
    v-for="postFeed in postFeeds"
    >
      <template #profile-pic></template>
      <template #userId>{{  }}
        <span>EVA ANN</span>
      </template>
      <template #description>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium quaerat
          blanditiis cupiditate laboriosam, tempore nemo magnam voluptatibus nihil, quis nesciunt
          natus quisquam, repellendus necessitatibus soluta accusamus. Distinctio, vitae
          dignissimos?
        </p>
      </template>
      <template #image>
        <img src="" alt="">
      </template>
      <template #like>389k</template>
      <template #comment>87</template>
    </Card>
    <!-- </TransitionGroup> -->
  </main>
</template>

<script setup lang="ts" >
import { inject } from 'vue';
import Card from './Card.vue'
import type { Posts } from '@/Types';

let string = "hello world"  // this is on pointer 1

Symbol('hello world') // this on point 4

string ='some new world' // this is on pointer 2

string = "hello world" // this is on pointer 3

const postFeeds  = inject('posts') as Posts

console.log(Symbol("foo") === Symbol("foo"))
</script>

<style>
.staggered-move {
  padding: 0;
  margin: 0;

  opacity: 0;
  height: 0;
  overflow: hidden;
  transition:
    opacity 0.3s ease,
    height 0.3s ease var(--delay);
}
.staggered-enter-active,
.staggered-leave-active {
  transition-delay: var(--delay);
  opacity: 1;
  height: 1.6em;
}
.staggered-enter-from,
.staggered-leave-to {
  transition-delay: var(--delay);
  opacity: 0;
  height: 0;
}
</style>
