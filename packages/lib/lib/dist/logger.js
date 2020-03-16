import { createLogger, format, transports } from 'winston';
import { consoleFormat } from 'winston-console-format';
import { format as formatDate } from 'date-fns';
export var startDate = formatDate(new Date(), 'MM_DD_YYYY__HH_mm_ss');
export var Logger = createLogger({
    level: 'info',
    format: format.combine(format.timestamp(), format.ms(), format.errors({ stack: true }), format.splat(), format.json()),
    defaultMeta: { service: 'dbm-cli' },
    transports: [
        new transports.File({
            filename: "session__" + startDate + ".log",
            level: 'debug'
        }),
        new transports.Console({
            format: format.combine(format.colorize({ all: true }), format.padLevels(), consoleFormat({
                showMeta: true,
                metaStrip: ['timestamp', 'service'],
                inspectOptions: {
                    depth: Infinity,
                    colors: true,
                    maxArrayLength: Infinity,
                    breakLength: 120,
                    compact: Infinity
                }
            }))
        })
    ]
});
//# sourceMappingURL=logger.js.map