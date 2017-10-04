module.exports = function(grunt){
    pkg: grunt.file.readJSON('package.json'),
    grunt.initConfig({
        concat: {
          js: {
            options: {
                separator: ' '
            },
            src: 'assets/js/assets/*.js',
            dest: 'assets/js/cont/main.cont.js'
          },
          css: {
            src: 'assets/css/assets/*.css',
            dest: 'assets/css/cont/style.cont.css'
          }
      },
        uglify: {
      		my_target: {
        			files: {
        			'assets/js/main.min.js': ['assets/js/cont/main.cont.js']
        					}
      				}
    	},
    	  cssmin: {
          options: {
            safe: true,
          },
          target: {
            files: [{
              expand: true,
              cwd: 'assets/css/cont',
              src: ['*.css', '!*.min.css'],
            dest: 'assets/css',
            ext: '.min.css',
                }]
              }
		  },
        autoprefixer: {
            options: {
                  browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
                  map: true,
                  inline: false,
                  sourcesContent: false
            },
            dist: {
                options: {
                  browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
                  map: true,
                  inline: false,
                  sourcesContent: false
                },
                files: {
                    'assets/css/style.min.css': 'assets/css/style.min.css'
                }
            }
        },
    	  imagemin: {
    		  main: {
      			files: [{
        			expand: true,
        			cwd: 'assets/img/',
        			src: ['assets/img/*.{png,jpg,gif,svg}'],
        			dest: 'assets/img/'
      				}]
    			}
		  },
		htmlmin: {
          dist: {
            options: {
              removeComments: true,
              collapseWhitespace: true
                  },
            files: {
              'index.html': 'index.html'
                  }
              }
      },
		watch: {
    		configFiles: {
    			files: [ 'Gruntfile.js'],
    				options: {
      					reload: true,
    					}
  					},
    		files: ['assets/js/*.js', 'assets/js/cont/*.js', 'assets/js/assets/*.js', 'assets/css/*.css', 'assets/css/assets/*.css', 'assets/css/cont/*.css', 'assets/img/*.{png,jpg,gif}', 'assets/img/*.{png,jpg,gif}', 'assets/scss/*.scss', '*.html', '*.php', '**/*.html', '**/*.php', '**/**/*.html', '**/**/*.php'],
    		tasks: ['concat', 'uglify', 'cssmin', 'autoprefixer'],
    		options: {
		      spawn: false,
          livereload: true
   				}
    	}
    });
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-imagemin');
 grunt.loadNpmTasks('grunt-autoprefixer');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.loadNpmTasks('grunt-contrib-htmlmin');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.registerTask('default', [
    'concat',
    'uglify',
    'cssmin',
    'autoprefixer'
  ]);
};
