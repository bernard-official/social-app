<script setup lang="ts" generic="T">

export interface ApiResponse<T>{
  posts?: Posts<T>, 
  comments?: Comments<T>, 
  limits: number,
  skip: number, 
  total: number
}

export type Posts<T> = {
    body:string,
    id: number,
    reactions: Reactions<T>,
    tags: string[],
    title: string;
    userId: number
    views: number
}

export type Comments<T> = {
    body: string,
    id: number, 
    likes: number,
    postId:number 
    users: User<T>,
}

export type User<T> = {
    fullName: string,
    id: number,
    username: string,
}

export type Reactions<T> = {
    likes: 192, 
    dislikes: 25
}

</script>