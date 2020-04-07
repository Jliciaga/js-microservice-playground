// Accesses a variable inside of process.env, throwing an error if it is found.
// Always run this method in advance, (i.e up initialization) so that the error
// is thrown as early as possible, caching new values improves performance -
// accessing process.env many times is bad in general.

const cache = {};

const accessEnv = (key, defaultValue) => {
    if (!(key in process.env)) {
        if (defaultValue) return defaultValue;
        throw new Error(`${key} not found in environment`);
    }

    if (cache[key]) return cache[key];

    cache[key] = process.env[key];

    return process.env[key]
};

export default accessEnv;
