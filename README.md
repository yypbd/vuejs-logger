# vuejs-logger

## Usage

### Import
```
    import {logger} from "@/plugins/logger";
```

### Log type
```
    logger.info(this, 'testLogger', 'test info')
    logger.debug(this, 'testLogger', 'test debug')
    logger.warn(this, 'testLogger', 'test warn')
    logger.error(this, 'testLogger', 'test error')
```

### Vue log
```
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
```

### Text tag log
```    
    logger.info('sample', 'testLogger', 'test info')
    logger.debug('sample', 'testLogger', 'test debug')
    logger.warn('sample', 'testLogger', 'test warn')
    logger.error('sample', 'testLogger', 'test error')
```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
