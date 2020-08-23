<template>
  <div id="app">
    <router-view/>
    <notifications group="foo" />
  </div>
</template>

<script>
</script>

<style>
* {
  font-family: 'Montserrat', sans-serif;
}

.lb {
  font-family: 'Libre Baskerville', serif !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bg-pur {
  background-color: #79616f;
}

.bg-mve {
  background-color: #ae6378;
}

.txt-pur {
  color: #79616f;
}

.txt-mve {
  color: #ae6378;
}

.txt-drk {
  color: #2a363b;
}

.btn-btm {
  /* border-bottom: 2px solid #2a363b; */
  text-align: left;
  color: #2a363b;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 5px 10px;
  cursor: pointer;
}

.btn-btm:hover {
  /* border-bottom: 2px solid #ae6378; */
  color: #ae6378;
  text-align: left;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 5px 10px;
}

.btn-dark:hover {
  background-color: #ae6378 !important;
  letter-spacing: 2px !important;
  border: 1px solid #ae6378;
}

</style>
