import {type InjectionKey} from 'vue'
//creating a generic interface for our data. T extents -> constrict the type to that data structure we set i.e string or object or whatever
// export interface ApiResponse<T ,K extends string>{
//     // posts?: Posts<T> | [], 
//     // comments?: Comments<T> | [], 
//     limits: number
//     skip: number
//     total: number
//     [key: string]:T[] | number
//     [P in K]: T
// }

export interface StaticProperties {
    limits: number;
    skip: number;
    total: number;
}

export type ApiResponse<T, K extends string> = StaticProperties & {
    [Property in K]: T[];
};


export const postsArrayKey = Symbol() as InjectionKey<string>

// function getPostTitle(title,postID){
//     return {
//         postID,
//     }
// }

  /*
  POSTS will return {

  posts:Array<{}>
  total:number
  skip:number,
  limit:number
}
*/

  /*
  Comments will return {

  comments:Array<{}>
  total:number
  skip:number,
  limit:number
}
*/
  
  export type Posts = {
      body:string,
      id: number,
      reactions: Reactions,
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
  
  export type Reactions = {
      likes: 192, 
      dislikes: 25
  }
  