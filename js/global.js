require.config({
    baseUrl : 'js',
    paths: {
        '$name': 'path/to/$name'
    }
});

require(['$name'], function($) {

});
