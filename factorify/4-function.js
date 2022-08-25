//@ts-check
const colors = {
    'warning': '\x1b[1;33m',
    'error': '\x1b[0;31m',
    'info': '\x1b[1;37m'
};

/** 
 * @param {'warning' | 'error' | 'info'} level 
 * @returns 
 */
const logger = (level = 'info') => {
    const color = colors[level];
    return s => {
        const date = new Date().toISOString();
        console.log(color, date, '\t', s);
    }
}

const warning = logger('warning');
const info = logger('info');
const error = logger('error');

warning('hello');
info('world');
error('!');
