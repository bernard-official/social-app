<template>
  <div id="container">
    <Navigation />
    <MainContent />
    <NewsFeed />
    <!-- <div v-for="comment in commentFeeds" v-bind:key="comment.body">{{ comment }}</div> -->
  </div> 
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import Navigation from './components/Navigation.vue'
import MainContent from './components/MainContent.vue'
import NewsFeed from './components/NewsFeed.vue'
import { type ApiResponse, type Comments, type Posts, postsArrayKey, commentsArrayKey } from './Types'

// defineProps<ApiResponse<T>>()

const postFeeds = ref<Posts[]>()
const commentFeeds = ref<Comments[]>();

//passing props to other components
provide('posts', postFeeds)
provide(postsArrayKey, postFeeds)
provide(commentsArrayKey, commentFeeds)

async function fetchData() {
  try {
    const response = await fetch('https://dummyjson.com/posts')
    if (!response.ok) throw new Error('Failed to fetch data')
    const { posts } = (await response.json()) as Awaited<ApiResponse<Posts, 'posts'>> //as keyword takes control over the expected typecast return . Awaited utility

    console.log(posts)
    postFeeds.value = posts
  } catch (error) {
    console.error('Failed to fetch post:', error)
    return
  }
}

async function fetchData2() {
  try {
    const response = await fetch('https://dummyjson.com/comments')
    if(!response.ok) throw new Error ('Failed to fetch Data')
    const { comments } = (await response.json()) as Awaited<ApiResponse<Comments, 'comments'>>
    console.log(comments)
    commentFeeds.value = comments
  } catch (error) {
    console.error('failed to fetched comments', error)
  }
}

onMounted(async () => {
  await fetchData()
})
onMounted(async () => {
  await fetchData2()
})


</script>

<style>
header {
  width: 100%;
  padding: 1rem;
  /* border: 1px solid white; */
}
#container {
  max-width: 100%;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: row;
  height: 100vh;
  /* overflow: auto; */
}
.sidebar {
  border-left: 1px solid;
  border-right: 1px solid;
  padding: 1rem;
  flex: 1;
}
.left-sidebar {
  order: 1;
}
.right-sidebar {
  order: 3;
}
.main-content {
  padding: 1rem;
  order: 2;
  flex: 2;
  overflow: auto;
}
</style>
