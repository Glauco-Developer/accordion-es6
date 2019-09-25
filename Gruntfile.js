// Load Grunt
module.exports = function(grunt) {
	grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 8000,
					keepAlive: true,
				}   
			}
		},
		sass: {
			target: {
			  files: {
				'dist/css/style.css': 'src/sass/style.scss'
			  }
			}
		},
		cssmin: {
			target: {
			  files: {
				'dist/css/style.min.css': 'dist/css/style.css'
			  }
			}
		},
		clean: {
			css: {
				src: ['dist/css/style.css']
			},
			js: {
				src: ['src/js-compiled']
			}
		},
		babel: {
			options: {
			  sourceMap: true,
			  presets: ['@babel/preset-env']
			},
			dist: {
				files: [{
					"expand": true,
					"cwd": "src/js",
					"src": ["app.js"],
					"dest": "src/js-compiled/",
					"ext": "-compiled.js"
				}]
			}
		},
		uglify: {
			target : {
				src : 'src/js-compiled/*-compiled.js',
				dest : 'dist/js/app.min.js'
			}
		},
		watch: {
			scripts: {
			  files: ['src/js/*.js'],
			  tasks: ['babel', 'uglify','clean:js'],
			},
			css: {
			  files: ['src/sass/**/*.scss'],
			  tasks: ['sass','cssmin','clean:css']
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default', ['connect','watch']);
  }