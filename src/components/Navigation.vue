<template>
  <nav class="sidebar left-sidebar">
    <header>
      <h1>Social app</h1>
    </header>
    <ul class="nav-section">
      <div>Home</div>
      <div>Explore</div>
      <div>Notifications</div>
      <div>Messages</div>
      <div>List</div>
      <div>Bookmarks</div>
      <div>Communities</div>
      <div>Profile</div>
      <div>More</div>
    </ul>
    <div class="sidebar-footer">
      <div class="user-profile">
        <div class="user-avatar"></div>

        <div class="user-name">Bernard Delase</div>
      </div>
      <div class="btn-ellipses">...</div>
    </div>
  </nav>
</template>
<script setup lang="ts"></script>
<style scoped>
.nav-section {
  /* border: 1px solid; */
  font-size: large;
  min-height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.sidebar-footer {
  position: absolute;
  bottom: 1%;
  width: 23%;
  padding: 1rem;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar-footer :hover{
  border: 1px solid;
  border-radius: 10cap;
  background-color: burlywood;
}
.sidebar-footer .user-profile {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 1rem;
}
.sidebar-footer .user-profile .user-avatar {
  background-color: azure;
  max-width: 100%;
  border: 1px solid;
  border-radius: 100cap;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
}
</style>
