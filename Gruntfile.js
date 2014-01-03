'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('jsontotable.jquery.json'),
    name: 'jquery.jsontotable',
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    clean: {
      files: ['dist']
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'src/<%= name %>.js',
        dest: 'dist/<%= name %>.min.js'
      }
    },
    cssmin: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'src/<%= name %>.css',
        dest: 'dist/<%= name %>.min.css'
      }
    },
    qunit: {
      files: ['test/**/*.html'],
      options: {
        coverage: {
          src: ['src/**/*.js'],
          instrumentedFiles: "temp/",
          lcovReport: "report/coverage"
        }
      }
    },
    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'src/.jshintrc'
        },
        src: ['src/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      },      
    },
    shell: {
      coverall: {
        command: 'node_modules/coveralls/bin/coveralls.js < report/coverage/lcov.info'
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
    },    
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-qunit-istanbul');
  grunt.loadNpmTasks('grunt-shell');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit', 'clean', 'uglify', 'cssmin']);

  // Travis task.
  grunt.registerTask('travis', ['jshint', 'qunit', 'shell:coverall']);
};
