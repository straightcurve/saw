type FnLike<T> = () => T | Promise<T>;
/**
 * @summary sync/async wrap
 * @description wraps a sync/async function call in a try/catch
 */
declare const saw: <T>(fn: FnLike<T>) => Promise<[unknown, null] | [null, T]>;
export default saw;
