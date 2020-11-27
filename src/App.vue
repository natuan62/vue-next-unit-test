<template>
  <div id="nav">
     <p>HTML : 
      <router-link to="/html-table">Table</router-link> |
      <router-link to="/html-select">Select</router-link> |
      <router-link to="/html-input">Input</router-link> |
    </p>
    <p>Ant Design : 
      <router-link to="/ant-table">Table</router-link> |
      <router-link to="/ant-select">Select</router-link> |
      <router-link to="/ant-input">Input</router-link> |
    </p>
    <p>Quasar :
      <router-link to="/quasar-table">Table</router-link> |
      <router-link to="/quasar-select">Select</router-link> |
      <router-link to="/quasar-input">Input</router-link> |
    </p>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
