var lighter = require('lighter')({
  httpPort: 8888,
  scripts: {
    '/a.js': [
      'bower_components/jquery/jquery.js',
      'bower_components/todomvc-common/base.js',
      'scripts'
    ]
  },
  styles: {
    '/a.css': [
      'bower_components/todomvc-common/base.css',
      'styles'
    ]
  },
  enableCluster: false
});
