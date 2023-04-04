
## installation and usage

```
npm install powerseq
```

executing single operator

```javascript 
import { filter } from "powerseq";

for(var item of filter([1,2,3,4,5], x => x % 2 === 0)){
    console.log(item);
}
```

chaining many operators 

```javascript
import { Enumerable } from "powerseq/enumerable";  
// use 'Enumerable' class ONLY on the server side !! (use 'pipe' method on the client side )

const items = Enumerable
    .range(1,Number.MAX_VALUE)
    .filter( x => x % 2 === 0)
    .take(5)
    .reverse()
    .toarray();

console.log(items);
```

chaining many operators using **pipe** method (it allows code tree shaking)

```javascript
import { pipe, range, filter, take, reverse, toarray } from "powerseq";

const items = pipe(
    range(1, Number.MAX_VALUE),
    filter(x => x % 2 === 0),
    take(5),
    reverse(),
    toarray());

console.log(items);
```

most of the operators can be used as a single operator (`filter([1,2,3,4,5], x => x % 2 === 0)`) or as a part of the operator chain `pipe([1, 2, 3, 4, 5], filter(x => x % 2 === 0), ... )`.But some operators have special counterparts (concatp, defaultifemptyp, includesp, sequenceequalp, zipp) when used with pipe, so we call `concat([1,2,3], [4,5,6])` but we have to call `pipe([1,2,3], concatp([4,5,6]), ... )` if we want to chain `concat` with other operators.


## Operators

- [click](https://github.com/marcinnajder/powerseq/tree/master/docs/mapping.md) to see mapping powerseq operators to [LINQ](https://msdn.microsoft.com/en-us/library/system.linq.enumerable(v=vs.110).aspx), [RxJS](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html), [JS Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [lodash](https://lodash.com/docs/4.17.2), [F#](https://msdn.microsoft.com/en-us/visualfsharpdocs/conceptual/collections.seq-module-%5bfsharp%5d)


### Enumerable

Function   | Example
-----------|-------------
[defer](https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/defer.ts)    | `defer(() => [1, 2, 3] /* executed on demand */) -> seq [1, 2, 3]`
[range](https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/range.ts)    | `range(10, 4) -> seq [10, 11, 12, 13]`
[empty](https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/empty.ts)    | `empty() -> seq []`
[repeatvalue](https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/repeatvalue.ts) | `repeatvalue(true, 4) -> seq [true, true, true, true]`<br/>`take(repeatvalue(true), 2) -> seq [true, true]`
[entries](https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/entries.ts)  | `entries({ 'a': 1, b: 2 }) -> seq [['a', 1], ['b', 2]]`<br/>`entries([1, 2, 3]) -> seq [[0, 1], [1, 2], [2, 3]]`
[throww](https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/throww.ts)   | `throww(new Error('exception ...')) -> error: exception ...`
[from](https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/from.ts)     | `Enumerable.from([1, 2, 3]) -> enumerable [1, 2, 3]`<br/>`Enumerable.from((function* () { yield 1; })()) -> enumerable []`
[generate](https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/generate.ts) | `generate(0, x => x < 4, x => x + 1, x => 'a'.repeat(x)) -> seq ['', 'a', 'aa', 'aaa']`
[of](https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/of.ts)       | `of(1, 2, true, 'abc') -> seq [1, 2, true, 'abc']`


### Operators

| Operator | Examples |
|----------|-------------|
| asiterable | `asiterable([1, 2] /**changes seq type to help TypeScript*/) -> [1, 2]` |
| filter | `filter([1, 2, 2, 3, 4], x => x > 2) -> seq [3, 4]`<br/>`filter([1, 2, 2, 3, 4], (x, index) => x - 1 === index) -> seq [1, 2]` |
| max | `max([1, 2, 3, 1]) -> 3`<br>`max(['a', 'bb', 'rrr', 'd'], x => x.length) -> 3` |
| skiplast | `skiplast([1, 2, 3, 4], 2) -> seq [1, 2]`<br> `skiplast([1, 2, 3, 4], 0) -> seq [1, 2, 3, 4]`<br> `skiplast([1, 2, 3, 4], 5) -> seq []` |
| average | `average([1, 2, 3, 4]) -> 2.5`<br> `average(['a', 'aa', 'aaa'], s => s.length) -> 2` |
| find | `find([1, 2, 2, 3, 4]) -> 1`<br> `find([1, 2, 2, 3, 4], x => x > 2) -> 3`<br> `find([1, 2, 2, 3, 4], x => x > 4) -> undefined`<br> `find([1, 2, 2, 3, 4], x => x > 4, 100) -> 100`<br> `find([1, 2, 2, 3, 4], (x, index) => x > 1 && index > 2) -> 3` |
| maxby | `maxby(['a', 'bb', 'rrr', 'd'], x => x.length) -> 'rrr'` |
| skipwhile | `skipwhile([1, 2, 2, 3, 3, 4, 5], x => x < 3) -> seq [3, 3, 4, 5]` |
| buffer | `buffer([1, 2, 3, 4, 5, 6, 7], 2) -> seq [[1, 2], [3, 4], [5, 6], [7]]`<br> `buffer([1, 2, 3, 4, 5, 6, 7], 2, /*skip*/ 4) -> seq [[1, 2], [5, 6]]` |
| findindex | `findindex([1, 2, 2, 3, 4], x => x > 1) -> 1`<br> `findindex([1, 2, 2, 3, 4], (x, index) => x > 1 && index > 2) -> 3` |
| min | `min([1, 2, 3, 1]) -> 1`<br> `min(['a', 'bb', 'rrr', 'd'], x => x.length) -> 1` |
| some | `some([1]) -> true`<br>`some([]) -> false`<br>`some([1, 2, 3], x => x > 2) -> true`<br>`some([1, 2, 3], x => x > 3) -> false">some`|
| cast | `cast([new Number(1), new Number(2), 's', false], Number) -> error: An element in the sequence cannot be cast to type 'Number'.` |
| flatmap | `flatmap([{ ns: [1] }, { ns: [99, 10] }, { ns: [6, 3] }], x => x.ns) -> seq [1, 99, 10, 6, 3]`<br>`flatmap(['abc', 'cd'], text => text, (text, char) => text + '-' + char) -> seq ['abc-a', 'abc-b', 'abc-c', 'cd-c', 'cd-d']`
| minby | `minby(['a', 'bb', 'rrr', 'd'], x => x.length) -> 'a'` |
| sum | `sum([1, 2, 3]) -> 6`<br>`sum(['a', 'asd', 'yy'], x => x.length) -> 6`
| concat | `concat([1, 2], [3, 5], [6]) -> seq [1, 2, 3, 5, 6]` |
| foreach | `foreach([1, 2, 3], x => { /* some action */ ; }) -> undefined` |
| oftype | `oftype([new Number(1), new Number(2), 's', false], Number) -> seq [{ }, { }]` |
| take | `take([1, 2, 3, 4, 5], 2) -> seq [1, 2]` |
| count | `count([2, 2, 2]) -> 3`<br>`count([2, 4, 6], x => x > 2) -> 2` |
| groupby | `groupby(['a', 'b', 'cc', 'ddd', 'xx'], x => x.length) -> seq [enumerable ['a', 'b'], enumerable ['cc', 'xx'], enumerable ['ddd']]`<br>`groupby(['a', 'b', 'cc', 'ddd', 'xx'], x => x.length, x => x.toUpperCase()) -> seq [enumerable ['A', 'B'], enumerable ['CC', 'XX'], enumerable ['DDD']]` |
| orderby | `orderby([1, 4, 2, 3, 5, 1], x => x) -> enumerable [1, 1, 2, 3, 4, 5]`<br>`orderby(['abc', 'dd', 'sdfe', 'f'], x => x.length) -> enumerable ['f', 'dd', 'abc', 'sdfe']` |
| takelast | `takelast([1, 2, 3], 2) -> seq [2, 3]`<br>`takelast([1, 2, 3], 0) -> seq []`<br>`takelast([1, 2, 3], 5) -> seq [1, 2, 3]` |
| defaultifempty | `defaultifempty([1, 2, 3]) -> seq [1, 2, 3], defaultifempty([]) -> seq [undefined], and defaultifempty([], 10) -> seq [10]` |
| groupjoin | `groupjoin([1, 3, 2], ['a', 'b', 'cc'], x => x, y => y.length, (x, ys) => x + ':' + toarray(ys)) -> seq ['1:a,b', '2:cc']` |
| orderbydescending | `orderbydescending([1, 4, 2, 3, 5, 1], x => x) -> enumerable [5, 4, 3, 2, 1, 1] and orderbydescending(['abc', 'dd', 'sdfe', 'f'], x => x.length) -> enumerable ['sdfe', 'abc', 'dd', 'f']` |
| takewhile | `takewhile([1, 2, 2, 3, 3, 4, 5], x => x < 3) -> seq [1, 2, 2]` |
| distinct | `distinct([1, 2, 1, 3, 2]) -> seq [1, 2, 3]`<br>`distinct(['a', 'aa', 'ab', 'abc'], x => x.length) -> seq ['a', 'aa', 'abc']` |
| ignoreelements | `ignoreelements([1, 3, 2]) -> seq []` |
| reduce | `reduce([1, 2, 3], (a, x) => a + x) -> 6`<br>`reduce([1, 2, 3], (a, x) => a + (x * 10), '') -> '102030'` |
| thenby | `thenby(orderby(['xa', 'a', 'fg', 'ert', 'b'], x => x.length), x => x) -> enumerable ['a', 'b', 'fg', 'xa', 'ert']` |
| distinctuntilchanged | `distinctuntilchanged([1, 1, 2, 2, 2, 1, 3, 3]) -> seq [1, 2, 1, 3]` |
| includes | `includes([1, 2, 3], 2) -> true`<br>`includes([1, 2, 3], 5) -> false`<br>`includes([1, 2, 3], 3, /*fromIndex*/ 4) -> false` |
| repeat | `repeat([1, 2, 3], 2) -> seq [1, 2, 3, 1, 2, 3]`<br>`take(repeat([1, 2, 3]), 5) -> seq [1, 2, 3, 1, 2]` |
| thenbydescending | `thenbydescending(orderby(['xa', 'a', 'fg', 'ert', 'b'], x => x.length), x => x) -> enumerable ['b', 'a', 'xa', 'fg', 'ert']` |
| doo | `doo([1, 2, 3,], (x) => { /* executed during iteration */ ; }) -> seq [1, 2, 3]` |
| intersect | `intersect([1, 2, 2, 3], [3, 3, 1]) -> seq [3, 1]`<br>`intersect(['a', 'c', 'ddd'], ['r', 'ww', 'ttt', 'oooo'], x => x.length) -> seq ['r', 'ttt']` |
| reverse | `reverse([1, 2, 3]) -> seq [3, 2, 1]` |
| toarray | `toarray([1, 2, 2]) -> [1, 2, 2]` |
| elementat | `elementat([1, 2, 12, 15], 2) -> 12`<br>`elementat([1, 2, 12, 15], 20) -> undefined`<br>`elementat([1, 2, 12, 15], 20, 100) -> 100` |
| isempty | `isempty([]) -> true`<br>`isempty([1, 2]) -> false` |
| scan | `scan([1, 2, 3], (a, x) => a + x) -> seq [3, 6]`<br>`scan([1, 2, 3], (a, x) => a + (x * 10), '') -> seq ['10', '1020', '102030']` |
| tomap | `tomap(['a', 'bb', 'ccc'], x => x.length) -> Map {1 => 'a', 2 => 'bb', 3 => 'ccc'}`<br>`tomap(['a', 'bb', 'ccc'], x => x.length, x => x.toUpperCase()) -> Map {1 => 'A', 2 => 'BB', 3 => 'CCC'}` |
| every | `every([1, 2, 12, 15], x => x > 0) -> true`<br>`every([1, 2, 12, 15], x => x < 10) -> false` |
| join | `join([1, 2, 3], ['a', 'bb', 'x'], x => x, y => y.length, (x, y) => x + ':' + y) -> seq ['1:a', '1:x', '2:bb']` |
| sequenceequal | `sequenceequal([1, 2, 3], [1, 2, 3]) -> true`<br>`sequenceequal([1, 2, 3], [1, 2, 2]) -> false`<br>`sequenceequal([1, 2, 3], [1, 2]) -> false` |
| toobject | `toobject(['a', 'bb', 'ccc'], x => x.length) -> { 1:a, 2:bb, 3:ccc }`<br>`toobject(['a', 'bb', 'ccc'], x => x.length, x => x.toUpperCase()) -> { 1:A, 2:BB, 3:CCC }` |
| except | `except([1, 2, 2, 3, 4], [2, 3]) -> seq [1, 4]`<br>`except(['a', 'b', 'ba', 'xde'], ['poc'], x => x.length) -> seq ['a', 'ba']` |
| last | `last([1, 2, 3]) -> 3`<br>`last([]) -> undefined`<br>`last([1, 2, 3, 4, 5], x => x % 2 === 0) -> 4` |
| single | `single([1]) -> 1`<br>`single([1, 2, 3], x => x > 2) -> 3`<br>`single([1, 2, 3], x => x > 1) -> error: More than one element satisfies the condition in predicate.` |
| union | `union([1, 2, 2], [2, 3, 3, 4]) -> seq [1, 2, 3, 4]`<br>`union(['a', 'c', 'ddd'], ['r', 'ww', 'ttt', 'oooo'], x => x.length) -> seq ['a', 'ddd', 'ww', 'oooo']` |
| expand | `expand([1], x => x > 8 ? [] : [10, x * 2]) -> seq [1, 10, 2, 10, 4, 10, 8, 10, 16]` |
| map | `map([1, 2, 3], x => x * 10) -> seq [10, 20, 30]`<br>`map([1, 2, 3], (x, index) => x * 10 + index) -> seq [10, 21, 32]` |
| skip | `skip([1, 2, 3, 4, 5], 2) -> seq [3, 4, 5]` |
| zip | `zip(['a', 'b', 'c'], [1, 2], (s, n) => s + n) -> seq ['a1', 'b2']`<br>`zip(['a', 'b', 'c'], [1, 2], [false], (s, n, b) => s + n + b) -> seq ['a1false']` |
