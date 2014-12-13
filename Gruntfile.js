module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
			  banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
			  src: 'src/js/main.js',
			  dest: 'build/js/main.min.js'
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			all: {
				files: ['src/js/*.js', 'src/css/*.css', 'src/*.html'],
				tasks: ['uglify', 'cssmin', 'htmlmin']
			},
		},
		cssmin: {
			add_banner: {
				options: {
				  banner: '/* My minified css file */'
				},
				files: {
				  'build/css/main.min.css': ['src/css/*.css']
				}
			}
		},
		htmlmin: {
		  build: {
		    options: {
		      removeComments: true,
		      collapseWhitespace: true
		    },
		    files: {
		      'build/index.html': 'src/*.html',
		    }
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'watch']);

};