// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...

type PromiseFunc<T> = (value: T) => Promise<T>

let arr: PromiseFunc<string> = (a: string) => {
  return Promise.resolve(a)
}


export default class DummyClass {

}
