

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
      watch: {
        prod: {
          files: ['./src/**.html'],
          tasks: ['bake:prod', 'copy:prod'],
          options: {
            spawn: false,
          },
        },
      },

      bake: {
        prod: {
            files: {
              "./public/index.html": "./src/index.html",
              "./public/dokumentation.html": "./src/dokumentation.html",
              "./public/impressum.html": "./src/impressum.html",
              "./public/map.html": "./src/map.html",
            }
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
            {expand: true, cwd: 'public', src: ['**/**/**/*.xml'], dest: 'build'},
       
            // includes files within path and its sub-directories
            {expand: true, cwd: 'public', src: ['**/**/**.css'], dest: 'build'},
       
          ],
        },
        prod: {
          files: [
            // includes files within path
            {expand: true, cwd: 'src', src: ['**/**/**/*.glb'], dest: 'public'},
            {expand: true, cwd: 'src', src: ['**/**/**/*.gltf'], dest: 'public'},
            {expand: true, cwd: 'src', src: ['**/**/**/*.bin'], dest: 'public'},
            {expand: true, cwd: 'src', src: ['**/**/**/*.svg'], dest: 'public'},
            {expand: true, cwd: 'src', src: ['**/**/**/*.mp4'], dest: 'public'},
            {expand: true, cwd: 'src', src: ['**/**/**/*.json'], dest: 'public'},
            {expand: true, cwd: 'src', src: ['**/**/**/*.ico'], dest: 'public'},
            {expand: true, cwd: 'src', src: ['**/**/**/*.xml'], dest: 'public'},
            {expand: true, cwd: 'src', src: ['**/**/**/*.js'], dest: 'public'},
            {expand: true, cwd: 'src', src: ['**/**/**/*.jpg'], dest: 'public'},
            {expand: true, cwd: 'src', src: ['**/**/**/*.png'], dest: 'public'},
       
          ],
        }
      },
      clean: ['build']
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks( "grunt-bake" );
  
    // Default task(s).
    grunt.registerTask('build', ['clean', 'uglify:build', 'imagemin:dynamic','htmlmin:build', 'copy:build']);
    grunt.registerTask('production', ['watch:prod']);
  
  };