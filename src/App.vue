<template>
  <div id="container">
    <Navigation />
    <MainContent />
    <NewsFeed />
    <!-- <div v-for="post in postFeeds" v-bind:key="postFeeds?.id">{{ post }}</div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import Navigation from './components/Navigation.vue'
import MainContent from './components/MainContent.vue'
import NewsFeed from './components/NewsFeed.vue'
import { type ApiResponse, type Comments, type Posts, postsArrayKey } from './Types'

// defineProps<ApiResponse<T>>()

const postFeeds = ref<Posts[]>()
// const comments = ref<Comments<T> | null>(null);
provide('posts', postFeeds)
provide(postsArrayKey, postFeeds)

// const url = 'https://dummyjson.com/posts'
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

onMounted(async () => {
  await fetchData()
})

// onMounted(async() => {
//     try {
//       const response = await fetch(url);
//       const data: any = response.json();
//       posts.value = data
//       console.log(posts.value)
//     } catch (error) {
//       console.error("Failed to fetch post:", error);
//     }
//   }
// )

// async function fetchData(){
//   try {
//       const response = await fetch(url);
//       // const data: Promise<ApiResponse<T>> = response.json();
//       /*
//       What is actually being returned is {
//       total:number
//       skip:number,
//       limit:number
//       posts:POSTS
//       }
//       */
//       const dataJSON: Promise<ApiResponse<Posts>> =  response.json();
//       const data = await dataJSON

//       console.log(postFeeds.value)
//     } catch (error) {
//       console.error("Failed to fetch post:", error);
//     }
// }

// onMounted(
// /*
//   POSTS will return {

//   posts:Array<{}>
//   total:number
//   skip:number,
//   limit:number
// }
// */
//   async function fetchData<T>() {
//     try {
//       const response = await fetch(url);
//       // const data: Promise<ApiResponse<T>> = response.json();
//       const data: Promise<Posts<T>> = response.json();
//       postFeeds.value = await data
//       console.log(postFeeds.value)
//     } catch (error) {
//       console.error("Failed to fetch post:", error);
//     }
//   }

// )

// onMounted(
//   async function fetchDataApi<T>(url:string): Promise<ApiResponse<T>>{
//     try {
//       const response = await fetch(url);
//       const data: ApiResponse<T> = response.json();
//       posts.value = data
//       console.log(posts.value)
//     } catch (error) {
//       console.error("Failed to fetch post:", error);
//     }
//   }
// )
// onMounted(async () => {
//     try {
//       const response = await fetch('https://dummyjson.com/comments');
//       const data: any = response.json();
//       comments.value = data
//       console.log(comments.value)
//     } catch (error) {
//       console.error("Failed to fetch post:", error);
//     }
//   }
// )
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
