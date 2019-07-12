declare module 'url' {
  export function parse(s: string): void;
  interface ADDD {
    (): number;
  }
  export const add: ADDD;
}

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

interface _D {
  add<T>(s: T): T;
  readonly _index: number;
  Person(name: string, age: number): any;
}
