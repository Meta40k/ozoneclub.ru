const cluster = require('cluster');
var CPUCount = require("os").cpus().length;


const Logger = require('../logger');

const logger = new Logger(); //  Загрузить логгер!

logger.info(`PROSESSOR THROW: ${CPUCount} WILL USE ${Math.floor(CPUCount / 2)}`);

CPUCount = Math.floor(CPUCount);

CPUCount = 1;

cluster.on('disconnect', (worker, code, signal) => {
    logger.log(`Worker ${worker.id} (${worker.process.pid}) died with code: ${code}`);
    cluster.fork();
});

cluster.on('online', (worker) => {
    logger.log(`Worker ${worker.id} (proc: ${worker.process.pid}) running`);
});
for (let i = 0; i < CPUCount; ++i) {
    cluster.fork();
}