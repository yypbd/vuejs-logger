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
    logger.info(this, 'created', '')
  },
  mounted() {
    logger.info(this, 'mounted', '')

    this.testLogger()
  },
  methods: {
    testLogger: function () {
      logger.info(this, 'testLogger', 'test info')
      logger.debug(this, 'testLogger', 'test debug')
      logger.warn(this, 'testLogger', 'test warn')
      logger.error(this, 'testLogger', 'test error')

      logger.info(this, 'testLogger', undefined)
      const json = { "name": "yypbd", "age": "20" };
      logger.info(this, 'testLogger', json)
      logger.info(this, 'testLogger', false)
      logger.info(this, 'testLogger', 1234)
      logger.info(this, 'testLogger', 'aaaaa')
      logger.info(this, 'testLogger', this.testFunc)
      const symbol2 = Symbol(42);
      logger.info(this, 'testLogger', symbol2, 'symbol test')
      const theBiggestInt = 9007199254740991n;
      logger.info(this, 'testLogger', theBiggestInt, 'bigint test')

      logger.info('sample', 'testLogger', 'test info')
      logger.debug('sample', 'testLogger', 'test debug')
      logger.warn('sample', 'testLogger', 'test warn')
      logger.error('sample', 'testLogger', 'test error')

      logger.info('sample', 'testLogger', [{"name": "aaa", "age": 10}, {"name": "bbb", "age": 20}, {"name": "ccc", "age": 30}])
    },
    testFunc: function () {
      //
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
