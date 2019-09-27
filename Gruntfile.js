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
				src: ['dist/app.js']
			}
		},
		browserify: {
			dist: {
				files: {
					'dist/js/app.js': 'src/js/*.js'
				},
				options: {
					transform: [['babelify', { presets: ['@babel/preset-env'] }]],
					browserifyOptions: {
						debug: true
					}
				}
			}
		},
		uglify: {
			target : {
				src : 'dist/js/app.js',
				dest : 'dist/js/app.min.js'
			}
		},
		watch: {
			scripts: {
			  files: ['src/js/*.js'],
			  tasks: ['browserify:dist','uglify','clean:js'],
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
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');
	
	grunt.registerTask('default', ['connect','watch']);
  }