'use strict';

module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist'],

        copy: {
            main: {
                files:[{
                    expand: true,
                    cwd: 'app/',
                    src: ['*.html'],
                    dest: 'dist/',
                    flatten: true,
                    filter: 'isFile'
                    },
                    {
                    expand:true,
                    flatten: true,
                    cwd:'app/',
                    src:['bootstrap/css/*'],
                    dest:'dist/styles'
                    },
                    {
                    expand:true,
                    flatten: true,
                    cwd:'app/',
                    src:['bootstrap/js/*'],
                    dest:'dist/js'
                    },
                    {
                    expand:true,
                    flatten: true,
                    cwd:'app/',
                    src:['bootstrap/img/*'],
                    dest:'dist/img'
                    },
                    {
                    expand: true,
                    flatten: true,
                    cwd:'app/',
                    src:['templates/*'],
                    dest:'dist/templates'
                    }
                ]
            }
        },

        browserify: {
            standalone: {
                src: 'app/**/*.js',
                dest: 'dist/client.js'
            },
            options: {
                transform: [ 'debowerify'],
                debug: true
            }
        },

        watch: {
            options: {
                livereload: true
            },

            html: {
                files: ['app/*.html', 'app/bootstrap/css/*.css', 'app/templates/*.html'],
                tasks: ['copy']
            },

            js: {
                files: '<%= browserify.standalone.src %>',
                tasks: ['jshint', 'browserify:standalone',
                'browserify:test']
            },

            testjs: {
                files: '<%= browserify.test.src %>',
                tasks: ['browserify:test']
            },
            express: {
                files: ['server.js', 'api/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }


        },

        jshint: {
            options: {
                jshintrc: true
            },
            all: ['server.js', 'app/*.js', 'app/modules/**/*.js']
        },

        express: {
            dev: {
                options: {
                    background: true,
                    script: 'server.js'
                }
            }
        },
        mochaTest:{
            all:{
                options:{
                    reporter: 'spec'
                },
                src: ['test/apiTest.js']   
            }
    },
    });

    grunt.registerTask('build', ['clean', 'copy', 'browserify:standalone']);
    grunt.registerTask('server', ['jshint', 'express:dev', 'build', 'watch']);
    grunt.registerTask('serve', ['server']);
    grunt.registerTask('test', ['jshint', 'mochaTest']);
};
