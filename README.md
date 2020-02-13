# Reonomy Design Styles Library
<!--
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/reonomy/reactive-hooks/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@reonomy/reactive-hooks.svg?style=flat-square)](https://www.npmjs.com/package/@reonomy/reactive-hooks)
-->

```bash
$ yarn add @reonomy/styles
```
<!--

## References

1. [The Road to React: Building the Reactive Hooks Library](https://www.reonomy.com/blog/post/reactive-hooks)

2. [Hitchhiker’s guide to Reactive Hooks](https://itnext.io/hitchhikers-guide-to-reactive-hooks-92c1a708ccfe)

3. [Dependency Injection in React](https://itnext.io/dependency-injection-in-react-6fcdbd2005e6)

4. [Ajax in the Fog or HTTP in React](https://itnext.io/ajax-in-the-fog-or-http-in-react-b04c716e97e5)



## useRxState
Returns a current value and a function to update it.

```typescript
[foo, setFoo] = useRxState(foo$);
```

Example:
```typescript
import React from 'react';
import { useRxState } from '@reonomy/reactive-hooks';
import { Observable } from 'rxjs';

interface IFoo {
  foo$: Observable<string>;
}

function Foo({ foo$ }: IFoo) {
  const [foo, setFoo] = useRxState(foo$);
  return (
    <button onClick={() => setFoo('bar')}>
        {foo}
    </button>
  );
}
```

During the initial render, the returned state `foo` is the same as the current value passed as the first argument `foo$`.
The button click handler will update `foo$` and set this state to `bar`.
 -->


# Author
[Reonomy Team](https://github.com/organizations/reonomy/settings/profile)

# License
MIT