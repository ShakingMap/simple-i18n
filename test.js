const i18n = require('./index');

const zh_cn = {
    hello: '你好',
    welcome: {
        toMe: name=> `欢迎，${name}`
    }
};

const en = {
    hello: 'Hello',
    welcome: {
        toMe: name=> `Welcome to me, ${name}`,
        toYou: (name1, name2)=> `${name1} is ${name2}`
    }
};

console.log(i18n('hello') == 'hello');

i18n.setMapper(locale=> {
    switch (locale) {
        case 'zh-cn':
            return zh_cn;
        case 'en':
            return en;
    }
});

console.log(i18n('hello') == 'Hello');

i18n.setLocale('zh-cn');

console.log(i18n('hello') == '你好');
console.log(i18n('welcome.toMe', 'bob') == '欢迎，bob');
console.log(i18n('welcome.toYou', 'bob', 'alan') == 'bob is alan');
console.log(i18n('welcome.toAll', 'bob') == 'welcome.toAll');
