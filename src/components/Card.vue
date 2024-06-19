<template>
  <div class="post-card">
    <div class="card-header">
      <div class="profile">
        <div class="avatar">
          <slot name="profile-pic"></slot>
        </div>
        <div class="user-name">
          <slot name="userId"></slot>
        </div>
      </div>

      <h1 class="btn-ellipses">...</h1>
    </div>
    <div class="card-description">
      <slot name="description"></slot>
    </div>
    <div class="card-img">
      pic
      <slot name="image"></slot>
    </div>
    <div class="card-footer">
      <div class="icons">
          <i class="pi pi-heart" style="font-size: 1rem"></i>
        <slot name="like"></slot>
      </div>
      <div class="icons">
        <i class="pi pi-comments" style="font-size: 1rem"></i>
        <slot name="comment"  ></slot>
      </div>
    </div>
  </div>
</template>



<style>
.post-card {
  padding: 1rem;
  border-radius: 1cap;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1rem;
}
.card-header {
  width: 100%;
  padding: 2px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  border: 1px solid blue;
}
.card-header .profile {
  display: flex;
  gap: 3px;
}
.card-header .profile .avatar {
  background-color: azure;
  border: 1px solid;
  border-radius: 100cap;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  object-fit: cover;
}
.card-header .profile .btn-ellipses {
  font-size: larger;
  justify-content: center;
  align-items: center;
  object-fit: cover;
}
.card-description{
margin-left: 3rem;
display: flex;
max-width: 100%;
justify-content: space-between;
}
.card-img{
border: 1px solid;
border-radius: 1cap;
margin-left: 3rem;
display: flex;
max-width: 100%;
height: 50vh;
justify-content: space-between;
}
.card-footer {
  padding-left: 3rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.icons{
    display: flex;
    justify-content: center;
    gap:5px;
}
</style>

<script setup lang="ts">

import 'primeicons/primeicons.css'
</script>