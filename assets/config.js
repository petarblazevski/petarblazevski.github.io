/**
 * Master config file
 * 
 * @type {Object}
 */
var config = {

	/**
	 * CSS Configurations
	 * 
	 * @type {Object}
	 */
	css: {

		folder: 'assets/css',

		outputFolder: 'assets/css',

		/**
		 * SASS Configuration
		 * 
		 * @type {Object}
		 */
		sass: {
			folder: 'assets/sass'
		}
	},

	/**
	 * Browsersync Configuration
	 * 
	 * @type {Object}
	 */
	browserSync: {

		options: {
			server: {
				baseDir: "./"
			},
			reloadOnRestart : true,
	        notify: true,
	        reloadDelay: 500
		}
	}
}

module.exports = config;