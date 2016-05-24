var invoke = require('lodash/invoke');

var options = {
    locale: '',
    defaultLocale: 'en',
    mapper: function () {}
};

var i18n = function (key) {
    var args = getArgs(arguments, 1);
    var translated = i18n.translate.apply(null, [options.locale, key].concat(args));
    if (!translated) translated = i18n.translate.apply(null, [options.defaultLocale, key].concat(args));
    if (!translated) translated = key;
    return translated;
};

i18n.__ = i18n;

i18n.setLocale = function (locale) {
    options.locale = locale
};

i18n.setDefaultLocale = function (locale) {
    options.defaultLocale = locale;
};

i18n.setMapper = function (mapper) {
    options.mapper = mapper;
};

i18n.translate = function (locale, key) {
    var lang = options.mapper(locale);
    return lang ? invoke.apply(null, [lang, key].concat(getArgs(arguments, 2))) : '';
};

function getArgs(args, from) {
    return Array.from(args).slice(from);
}