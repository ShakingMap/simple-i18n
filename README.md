# simple i18n
simple i18n

## Installation
- `npm install --save simple-i18n`
- `import i18n from 'simple-i18n'` or `const i18n = require('simple-i18n')`


## APIs

### i18n | i18n.__
func(key): value  
translate a key into value

### i18n.translate
func(locale, key): value  
translate a key into value by locale

### i18n.setLocale
func(locale)  
set the locale

### i18n.setDefaultLocale
func(locale)  
set default locale

### i18n.setMapper
func(mapper)  
set language definition mapper. a mapper is a function as func(locale): lang.

## Language Definition
A language definition is a js object with leaves of type string or function. For example:

    // define a language
    const zh_cn = {
        name: '名字',
        account: {
            username: '用户名',
            password: '密码'
        },
        welcome: name=> `欢迎，${name}！`
    }
    
    // define a mapper
    const mapper = locale=> {
        switch (locale) {
            case: 'zh-cn': return zh_cn;
            ...
        }
    }
    
    // set mapper
    i18n.setMapper(mapper)
    
which will result in

    i18n('name') // '名字'
    i18n.__('account.username') // '用户名'
    i18n('welcome', 'Bob') // '欢迎，Bob！'
    
## License
MIT