'use strict';

class DronePlugin {
    parse() {

        for (let i = 0; i < process.argv.length; ++i) {
            if (process.argv[i] === '--') {
                return Promise.resolve(JSON.parse(process.argv[i + 1]));
            }
        }

        return new Promise((resolve) => {

            let input = '';
            process.stdin.setEncoding('utf8');
            process.stdin.on('readable', () => {

                const chunk = process.stdin.read();
                if (chunk !== null) {
                    input = input + chunk;
                }
            });

            process.stdin.on('end', () => {

                return resolve(JSON.parse(input));
            });
        });
    };
};

module.exports = DronePlugin;
