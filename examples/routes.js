module.exports = {
	prefix: '/',
	routes: {
		'get|': {
            as: 'home.index',
            uses: 'HomeController|index'
        }
	}
}