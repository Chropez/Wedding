module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./css/bootstrap-theme"],
                    yuicompress: true
                },
                files: {
                    "./css/wedding-theme.css": "./css/bootstrap-theme/bootstrap-theme.less"
                }
            }
        },
        watch: {
            files: "./css/bootstrap-theme/*",
            tasks: ["less"]
        }
    });

    grunt.registerTask('default','watch');

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
