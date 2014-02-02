module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assemble: {
		  options: {
		    assets: 'assets',
		    plugins: ['permalinks'],
		    partials: ['includes/**/*.hbs'],
		    layout: ['layouts/default.hbs'],
		    data: ['data/*.{json,yml}']
		  },
		  pages: {
		    src: ['docs/*.hbs'],
		    dest: './'
		  }
		},
    grunt.loadNpmTasks('assemble')
  });
};