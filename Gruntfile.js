module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      options: {
        browsers: ['last 5 versions', '> 5%', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      dist: {
        options: {
          map: {
            prev: 'assets/css'
          }
        },
        src: 'assets/css/main.min.css'
      }
    },

    less: {
      dist: {
        files: {
          'assets/css/main.min.css': [
            'assets/less/main.less'
          ]
        },
        options: {
          compress: true,
          cleancss: true
        }
      },
      dev: {
        files: {
          'assets/css/main.css': [
            'assets/less/main.less'
          ]
        },
        options: {
          compress: false
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      less: {
        files: ['assets/less/**/*.less'],
        tasks: ['less:dev']
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('dist', ['less:dist', 'autoprefixer']);
  grunt.registerTask('dev', ['less:dev']);
  grunt.registerTask('default', ['watch']);
};
