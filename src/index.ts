type FnLike<T> = () => T | Promise<T>;

/**
 * @summary sync/async wrap
 * @description wraps a sync/async function call in a try/catch
 */
const saw = async <T>(fn: FnLike<T>): Promise<[unknown, null] | [null, T]> => {
    try {
        const result = fn();

        //  @note: awaiting sync functions has non-trivial overhead
        if (result instanceof Promise) {
            return [null, await result];
        }

        return [null, result];
    } catch (error) {
        return [error, null];
    }
};

export default saw;
