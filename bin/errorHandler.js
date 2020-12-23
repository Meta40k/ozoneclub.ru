const Logger = require('../logger');
const logger = new Logger();
module.exports = function(err,req,res,next)
{
	logger.error(err);
	res.status(503).send(err.stack || err.message);
};