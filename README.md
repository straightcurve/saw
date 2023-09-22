# saw
sync/async function wrapper

## usage
```typescript
const doSomething = () => console.log("zzZ..");
const doSomethingAsync = async () => console.log("...zzZ");
const doSomethingWith = (value: number) => console.log(value);
const throwSomething = () => {
    throw new Error("ZZZ");
};

const example = async () => {
    await saw(doSomething);

    await saw(doSomethingAsync);

    await saw(() => doSomethingWith(69));

    const [error] = await saw(throwSomething);
    if (error) {
        console.log("something bad happened");
    }
};
```
