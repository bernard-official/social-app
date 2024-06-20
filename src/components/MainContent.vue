<template>
  <main class="main-content">
    <!-- <TransitionGroup appear name="staggered" tag="ul"> -->
    <Card v-for="(postFeed,index) in postFeeds" :key="postFeed.id">
      <template #profile-pic>
        <img :src="`https://picsum.photos/id/${postFeed.id * 10}/50/50`" alt="" />
      </template>
      <template #userId>
        <span>EVA ANN</span>
        <small style="display: block">{{ postFeed.title }}</small>
      </template>
      <template #description>
        <p>
          {{ postFeed.body }}
        </p>
      </template>
      <template #image>
        <img :src="`https://picsum.photos/id/${[postFeed.id]}/400/400`" alt="" />
      </template>
      <template #like>389k</template>
      
      <!-- <template #comment v-for="comment in commentFeeds" v-bind:key="comment.id">
        {{ comment.likes }} 
      </template> -->
      
      <template   #commentFeed>
        <div >
          <div v-for="comments in fetchCommentByPostId(postFeed.id)" >
            {{ comments }}
          </div>
        </div>
      </template>
    </Card>
    <!-- </TransitionGroup> -->
  </main>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Card from './Card.vue'
import type { ApiResponse, Comments, Posts } from '@/Types'
import { postsArrayKey, commentsArrayKey } from '@/Types'

const postFeeds = inject(postsArrayKey)
const commentFeeds = inject(commentsArrayKey)


async function fetchCommentByPostId(postFeedId: number) {
  try {
    const response = await fetch(`https://dummyjson.com/comments/post/${postFeedId}`)
    if(!response.ok) throw new Error ('Failed to fetch Data')
    const { comments } = (await response.json()) as Awaited<ApiResponse<Comments, 'comments'>>
  
    return comments
  } catch (error) {
    console.error('failed to fetched comments', error)
  }
}

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

</style>ApiResponse, Comments, 
