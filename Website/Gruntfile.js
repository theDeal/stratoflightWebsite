

module.exports = function(grunt) {


    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        build: {
            files: [{
                expand: true,
                cwd: 'public',
                src: '**/*.js',
                dest: 'build/'
              }]
        }
      },

      imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'public',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'build/'
            }]
        }
    },
    htmlmin: {                                     // Task
        build: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: [{
            expand: true,
            cwd: 'public',
            src: ['**/**/*.html', '*.html'],
            dest: 'build'
        }]
        }
      },
      copy: {
        build: {
        
          files: [
            // includes files within path
            {expand: true, cwd: 'public', src: ['**/**/**/*.glb'], dest: 'build'},
            {expand: true, cwd: 'public', src: ['**/**/**/*.gltf'], dest: 'build'},
            {expand: true, cwd: 'public', src: ['**/**/**/*.bin'], dest: 'build'},
            {expand: true, cwd: 'public', src: ['**/**/**/*.svg'], dest: 'build'},
            {expand: true, cwd: 'public', src: ['**/**/**/*.mp4'], dest: 'build'},
            {expand: true, cwd: 'public', src: ['**/**/**/*.json'], dest: 'build'},
            {expand: true, cwd: 'public', src: ['**/**/**/*.ico'], dest: 'build'},
       
            // includes files within path and its sub-directories
            {expand: true, cwd: 'public', src: ['**/**/**.css'], dest: 'build'},
       
          ],
        },
      },
      clean: ['build']
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
  
    // Default task(s).
    grunt.registerTask('build', ['clean', 'uglify:build', 'imagemin:dynamic','htmlmin:build', 'copy:build']);
  
  };