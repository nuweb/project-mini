module.exports = function(grunt) {

	//	Configurable paths
	var cnidConfig = {
		app: 'app',
		dist: 'dist'
	};

	//	Initialize the grunt tasks
	grunt.initConfig({
		cnid : cnidConfig,
		jasmine : {
			src : 'src/app/app.js',
			options: {
				specs : 'test/unit/appSpec.js',
				vendor: [
					'src/components/angular/angular.js',
					'src/components/angular-resource/angular-resource.js',
					'src/components/angular-mocks/angular-mocks.js'
				]
			}
		},
		requirejs: {
			compile: {
				options: {
					name: 'main',
					baseUrl: "src/app",
					mainConfigFile: "src/app/main.js",
					out: "dist/app/main.js"
				}
			}
		},
		less: {
			styles: {
				files: {
					'src/css/main.css': 'src/less/main.less'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			files: [
				'src/<%= cnid.app %>/**/*.html',
				'src/*.html'
			],
			styles: {
				files: 'src/less/*.less',
				tasks: ['less']
			}
		}
	});

	//	Load the plugins that provide the tasks we specified in package.json
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');


	//	Setup the default task
	grunt.registerTask('default', ['less', 'watch']);

};

