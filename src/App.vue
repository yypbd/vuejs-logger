<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {logger} from "@/plugins/logger";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    logger.info('App', 'created')
  },
  mounted() {
    logger.info('App', 'mounted')

    this.testLogger()
  },
  methods: {
    testLogger: function () {
      logger.info('testLogger', 'test info', 'description')
      logger.debug('testLogger', 'test debug', 'description')
      logger.warn('testLogger', 'test warn', 'description')
      logger.error('testLogger', 'test error', 'description')

      logger.info('testLogger', undefined)
      const json = { "name": "yypbd", "age": "20" };
      logger.info('testLogger', json, 'json object test')
      logger.info('testLogger', false, 'boolean test')
      logger.info('testLogger', 1234, 'number test')
      logger.info('testLogger', 'aaaaa', 'string test')
      logger.info('testLogger', this.testFunc, 'testFunc function')
      const symbol2 = Symbol(42);
      logger.info('testLogger', symbol2, 'symbol test')
      const theBiggestInt = 9007199254740991n;
      logger.info('testLogger', theBiggestInt, 'bigint test')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
