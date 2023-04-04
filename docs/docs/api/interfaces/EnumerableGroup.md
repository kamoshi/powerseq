---
id: "EnumerableGroup"
title: "Interface: EnumerableGroup<TKey, T>"
sidebar_label: "EnumerableGroup"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `TKey` |
| `T` |

## Hierarchy

- `Enumerable`<`T`\>

  ↳ **`EnumerableGroup`**

## Properties

### [iterator]

• **[iterator]**: () => `Iterator`<`T`, `any`, `undefined`\>

#### Type declaration

▸ (): `Iterator`<`T`, `any`, `undefined`\>

##### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Inherited from

Enumerable.\_\_@iterator@83

#### Defined in

[src/enumerable_.ts:5](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/enumerable_.ts#L5)

___

### \_iterable

• **\_iterable**: `Iterable`<`T`\>

#### Inherited from

Enumerable.\_iterable

#### Defined in

[src/enumerable_.ts:3](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/enumerable_.ts#L3)

___

### key

• **key**: `TKey`

#### Defined in

[src/operators/groupby.ts:9](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/groupby.ts#L9)

## Methods

### asiterable

▸ **asiterable**(): `Iterable`<`T`\>

#### Returns

`Iterable`<`T`\>

#### Inherited from

Enumerable.asiterable

#### Defined in

[src/operators/asiterable.ts:8](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/asiterable.ts#L8)

___

### average

▸ **average**(): `number`

#### Returns

`number`

#### Inherited from

Enumerable.average

#### Defined in

[src/operators/average.ts:33](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/average.ts#L33)

▸ **average**(`valueSelector`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector` | `keySelector`<`T`, `number`\> |

#### Returns

`number`

#### Inherited from

Enumerable.average

#### Defined in

[src/operators/average.ts:34](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/average.ts#L34)

___

### buffer

▸ **buffer**(`count`, `skip?`): `Enumerable`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `skip?` | `number` |

#### Returns

`Enumerable`<`T`[]\>

#### Inherited from

Enumerable.buffer

#### Defined in

[src/operators/buffer.ts:67](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/buffer.ts#L67)

___

### cast

▸ **cast**<`TResult`\>(`type`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Function` |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.cast

#### Defined in

[src/operators/cast.ts:28](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/cast.ts#L28)

___

### concat

▸ **concat**(`...args`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Iterable`<`T`\>[] |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.concat

#### Defined in

[src/operators/concat.ts:18](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/concat.ts#L18)

___

### count

▸ **count**(`predicate?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`number`

#### Inherited from

Enumerable.count

#### Defined in

[src/operators/count.ts:35](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/count.ts#L35)

___

### defaultifempty

▸ **defaultifempty**(`defaultValue?`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue?` | `T` |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.defaultifempty

#### Defined in

[src/operators/defaultifempty.ts:24](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/defaultifempty.ts#L24)

___

### distinct

▸ **distinct**(`keySelector?`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.distinct

#### Defined in

[src/operators/distinct.ts:30](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/distinct.ts#L30)

___

### distinctuntilchanged

▸ **distinctuntilchanged**(`keySelector?`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.distinctuntilchanged

#### Defined in

[src/operators/distinctuntilchanged.ts:42](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/distinctuntilchanged.ts#L42)

___

### doo

▸ **doo**(`action`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | (`item`: `T`, `index`: `number`) => `void` |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.doo

#### Defined in

[src/operators/doo.ts:23](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/doo.ts#L23)

___

### elementat

▸ **elementat**(`index`, `defaultValue`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `defaultValue` | `T` |

#### Returns

`T`

#### Inherited from

Enumerable.elementat

#### Defined in

[src/operators/elementat.ts:28](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/elementat.ts#L28)

▸ **elementat**(`index`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`T`

#### Inherited from

Enumerable.elementat

#### Defined in

[src/operators/elementat.ts:29](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/elementat.ts#L29)

___

### every

▸ **every**(`predicate`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |

#### Returns

`boolean`

#### Inherited from

Enumerable.every

#### Defined in

[src/operators/every.ts:24](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/every.ts#L24)

___

### except

▸ **except**(`source2`, `keySelector?`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.except

#### Defined in

[src/operators/except.ts:35](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/except.ts#L35)

___

### expand

▸ **expand**(`selector`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`item`: `T`) => `EIterable`<`T`\> |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.expand

#### Defined in

[src/operators/expand.ts:37](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/expand.ts#L37)

___

### filter

▸ **filter**(`predicate`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.filter

#### Defined in

[src/operators/filter.ts:24](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/filter.ts#L24)

___

### find

▸ **find**(`predicate?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`T`

#### Inherited from

Enumerable.find

#### Defined in

[src/operators/find.ts:33](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/find.ts#L33)

▸ **find**(`predicate`, `defaultValue`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |
| `defaultValue` | `T` |

#### Returns

`T`

#### Inherited from

Enumerable.find

#### Defined in

[src/operators/find.ts:34](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/find.ts#L34)

___

### findindex

▸ **findindex**(`predicate`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |

#### Returns

`number`

#### Inherited from

Enumerable.findindex

#### Defined in

[src/operators/findindex.ts:24](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/findindex.ts#L24)

___

### flatmap

▸ **flatmap**<`TCollection`\>(`collectionSelector`): `Enumerable`<`TCollection`\>

#### Type parameters

| Name |
| :------ |
| `TCollection` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionSelector` | `selector`<`T`, `EIterable`<`TCollection`\>\> |

#### Returns

`Enumerable`<`TCollection`\>

#### Inherited from

Enumerable.flatmap

#### Defined in

[src/operators/flatmap.ts:35](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/flatmap.ts#L35)

▸ **flatmap**<`TCollection`, `TResult`\>(`collectionSelector`, `resultSelector`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TCollection` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionSelector` | `selector`<`T`, `EIterable`<`TCollection`\>\> |
| `resultSelector` | (`item`: `T`, `collectionItem`: `TCollection`) => `TResult` |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.flatmap

#### Defined in

[src/operators/flatmap.ts:36](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/flatmap.ts#L36)

___

### foreach

▸ **foreach**(`action?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action?` | (`item`: `T`, `index`: `number`) => `void` |

#### Returns

`void`

#### Inherited from

Enumerable.foreach

#### Defined in

[src/operators/foreach.ts:26](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/foreach.ts#L26)

___

### groupby

▸ **groupby**<`TKey`\>(`keySelector`): `Enumerable`<[`EnumerableGroup`](EnumerableGroup.md)<`TKey`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TKey` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | [`KeySelectorFunc`](../modules.md#keyselectorfunc)<`T`, `TKey`\> |

#### Returns

`Enumerable`<[`EnumerableGroup`](EnumerableGroup.md)<`TKey`, `T`\>\>

#### Inherited from

Enumerable.groupby

#### Defined in

[src/operators/groupby.ts:72](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/groupby.ts#L72)

▸ **groupby**<`TKey`, `TElement`\>(`keySelector`, `elementSelector`): `Enumerable`<[`EnumerableGroup`](EnumerableGroup.md)<`TKey`, `TElement`\>\>

#### Type parameters

| Name |
| :------ |
| `TKey` |
| `TElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | [`KeySelectorFunc`](../modules.md#keyselectorfunc)<`T`, `TKey`\> |
| `elementSelector` | [`ElementSelectorFunc`](../modules.md#elementselectorfunc)<`T`, `TElement`\> |

#### Returns

`Enumerable`<[`EnumerableGroup`](EnumerableGroup.md)<`TKey`, `TElement`\>\>

#### Inherited from

Enumerable.groupby

#### Defined in

[src/operators/groupby.ts:73](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/groupby.ts#L73)

▸ **groupby**<`TKey`, `TResult`\>(`keySelector`, `resultSelector`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TKey` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | [`KeySelectorFunc`](../modules.md#keyselectorfunc)<`T`, `TKey`\> |
| `resultSelector` | [`ResultSelectorFunc`](../modules.md#resultselectorfunc)<`TKey`, `T`, `TResult`\> |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.groupby

#### Defined in

[src/operators/groupby.ts:74](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/groupby.ts#L74)

▸ **groupby**<`TKey`, `TElement`, `TResult`\>(`keySelector`, `elementSelector`, `resultSelector`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TKey` |
| `TElement` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | [`KeySelectorFunc`](../modules.md#keyselectorfunc)<`T`, `TKey`\> |
| `elementSelector` | [`ElementSelectorFunc`](../modules.md#elementselectorfunc)<`T`, `TElement`\> |
| `resultSelector` | [`ResultSelectorFunc`](../modules.md#resultselectorfunc)<`TKey`, `TElement`, `TResult`\> |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.groupby

#### Defined in

[src/operators/groupby.ts:75](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/groupby.ts#L75)

___

### groupjoin

▸ **groupjoin**<`T2`, `TKey`, `TResult`\>(`source2`, `key1Selector`, `key2Selector`, `resultSelector`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T2` |
| `TKey` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `EIterable`<`T2`\> |
| `key1Selector` | `keySelector`<`T`, `TKey`\> |
| `key2Selector` | `keySelector`<`T2`, `TKey`\> |
| `resultSelector` | (`item1`: `T`, `item2`: `Enumerable`<`T2`\>) => `TResult` |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.groupjoin

#### Defined in

[src/operators/groupjoin.ts:47](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/groupjoin.ts#L47)

___

### ignoreelements

▸ **ignoreelements**(): `Enumerable`<`T`\>

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.ignoreelements

#### Defined in

[src/operators/ignoreelements.ts:20](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/ignoreelements.ts#L20)

___

### includes

▸ **includes**(`earchElement`, `fromIndex?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `earchElement` | `T` |
| `fromIndex?` | `number` |

#### Returns

`boolean`

#### Inherited from

Enumerable.includes

#### Defined in

[src/operators/includes.ts:41](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/includes.ts#L41)

___

### intersect

▸ **intersect**(`source2`, `keySelector?`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.intersect

#### Defined in

[src/operators/intersect.ts:35](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/intersect.ts#L35)

___

### isempty

▸ **isempty**<`TResult`\>(): `boolean`

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Returns

`boolean`

#### Inherited from

Enumerable.isempty

#### Defined in

[src/operators/isempty.ts:20](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/isempty.ts#L20)

___

### join

▸ **join**<`T2`, `TKey`, `TResult`\>(`source2`, `key1Selector`, `key2Selector`, `resultSelector`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T2` |
| `TKey` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `EIterable`<`T2`\> |
| `key1Selector` | `keySelector`<`T`, `TKey`\> |
| `key2Selector` | `keySelector`<`T2`, `TKey`\> |
| `resultSelector` | (`item1`: `T`, `item2`: `T2`) => `TResult` |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.join

#### Defined in

[src/operators/join.ts:45](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/join.ts#L45)

___

### last

▸ **last**(`predicate?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`T`

#### Inherited from

Enumerable.last

#### Defined in

[src/operators/last.ts:31](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/last.ts#L31)

___

### map

▸ **map**<`TResult`\>(`projection`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `projection` | `selector`<`T`, `TResult`\> |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.map

#### Defined in

[src/operators/map.ts:21](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/map.ts#L21)

___

### max

▸ **max**(): `T`

#### Returns

`T`

#### Inherited from

Enumerable.max

#### Defined in

[src/operators/max.ts:21](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/max.ts#L21)

▸ **max**<`TValue`\>(`valueSelector`): `TValue`

#### Type parameters

| Name |
| :------ |
| `TValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector` | `keySelector`<`T`, `TValue`\> |

#### Returns

`TValue`

#### Inherited from

Enumerable.max

#### Defined in

[src/operators/max.ts:22](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/max.ts#L22)

___

### maxby

▸ **maxby**(`valueSelector?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`T`

#### Inherited from

Enumerable.maxby

#### Defined in

[src/operators/maxby.ts:18](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/maxby.ts#L18)

___

### min

▸ **min**(): `T`

#### Returns

`T`

#### Inherited from

Enumerable.min

#### Defined in

[src/operators/min.ts:19](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/min.ts#L19)

▸ **min**<`TValue`\>(`valueSelector?`): `TValue`

#### Type parameters

| Name |
| :------ |
| `TValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector?` | `keySelector`<`T`, `TValue`\> |

#### Returns

`TValue`

#### Inherited from

Enumerable.min

#### Defined in

[src/operators/min.ts:20](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/min.ts#L20)

___

### minby

▸ **minby**(`valueSelector?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`T`

#### Inherited from

Enumerable.minby

#### Defined in

[src/operators/minby.ts:18](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/minby.ts#L18)

___

### oftype

▸ **oftype**<`TResult`\>(`type`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Function` |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.oftype

#### Defined in

[src/operators/oftype.ts:23](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/oftype.ts#L23)

___

### orderby

▸ **orderby**(`keySelector`): `OrderedEnumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OrderedEnumerable`<`T`\>

#### Inherited from

Enumerable.orderby

#### Defined in

[src/operators/orderby.ts:21](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/orderby.ts#L21)

___

### orderbydescending

▸ **orderbydescending**(`keySelector`): `OrderedEnumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OrderedEnumerable`<`T`\>

#### Inherited from

Enumerable.orderbydescending

#### Defined in

[src/operators/orderbydescending.ts:20](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/orderbydescending.ts#L20)

___

### reduce

▸ **reduce**(`func`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`prev`: `T`, `item`: `T`) => `T` |

#### Returns

`T`

#### Inherited from

Enumerable.reduce

#### Defined in

[src/operators/reduce.ts:35](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/reduce.ts#L35)

▸ **reduce**<`TAccumulate`\>(`func`, `seed`): `TAccumulate`

#### Type parameters

| Name |
| :------ |
| `TAccumulate` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`prev`: `TAccumulate`, `item`: `T`) => `TAccumulate` |
| `seed` | `TAccumulate` |

#### Returns

`TAccumulate`

#### Inherited from

Enumerable.reduce

#### Defined in

[src/operators/reduce.ts:36](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/reduce.ts#L36)

___

### repeat

▸ **repeat**(`count?`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `count?` | `number` |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.repeat

#### Defined in

[src/operators/repeat.ts:28](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/repeat.ts#L28)

___

### reverse

▸ **reverse**(): `Enumerable`<`T`\>

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.reverse

#### Defined in

[src/operators/reverse.ts:20](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/reverse.ts#L20)

___

### scan

▸ **scan**(`func`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`prev`: `T`, `item`: `T`) => `T` |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.scan

#### Defined in

[src/operators/scan.ts:38](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/scan.ts#L38)

▸ **scan**<`TAccumulate`\>(`func`, `seed`): `Enumerable`<`TAccumulate`\>

#### Type parameters

| Name |
| :------ |
| `TAccumulate` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`prev`: `TAccumulate`, `item`: `T`) => `TAccumulate` |
| `seed` | `TAccumulate` |

#### Returns

`Enumerable`<`TAccumulate`\>

#### Inherited from

Enumerable.scan

#### Defined in

[src/operators/scan.ts:39](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/scan.ts#L39)

___

### sequenceequal

▸ **sequenceequal**(`source2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |

#### Returns

`boolean`

#### Inherited from

Enumerable.sequenceequal

#### Defined in

[src/operators/sequenceequal.ts:46](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/sequenceequal.ts#L46)

▸ **sequenceequal**(`source2`, `source3`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `source3` | `Iterable`<`T`\> |

#### Returns

`boolean`

#### Inherited from

Enumerable.sequenceequal

#### Defined in

[src/operators/sequenceequal.ts:47](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/sequenceequal.ts#L47)

▸ **sequenceequal**(`source2`, `source3`, `source4`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `source3` | `Iterable`<`T`\> |
| `source4` | `Iterable`<`T`\> |

#### Returns

`boolean`

#### Inherited from

Enumerable.sequenceequal

#### Defined in

[src/operators/sequenceequal.ts:48](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/sequenceequal.ts#L48)

▸ **sequenceequal**(`source2`, `source3`, `source4`, `source5`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `source3` | `Iterable`<`T`\> |
| `source4` | `Iterable`<`T`\> |
| `source5` | `Iterable`<`T`\> |

#### Returns

`boolean`

#### Inherited from

Enumerable.sequenceequal

#### Defined in

[src/operators/sequenceequal.ts:49](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/sequenceequal.ts#L49)

▸ **sequenceequal**(`...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Iterable`<`T`\>[] |

#### Returns

`boolean`

#### Inherited from

Enumerable.sequenceequal

#### Defined in

[src/operators/sequenceequal.ts:50](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/sequenceequal.ts#L50)

___

### single

▸ **single**(`predicate?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`T`

#### Inherited from

Enumerable.single

#### Defined in

[src/operators/single.ts:45](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/single.ts#L45)

___

### skip

▸ **skip**(`count`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.skip

#### Defined in

[src/operators/skip.ts:35](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/skip.ts#L35)

___

### skiplast

▸ **skiplast**(`count`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.skiplast

#### Defined in

[src/operators/skiplast.ts:53](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/skiplast.ts#L53)

___

### skipwhile

▸ **skipwhile**(`predicate`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.skipwhile

#### Defined in

[src/operators/skipwhile.ts:35](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/skipwhile.ts#L35)

___

### some

▸ **some**(`predicate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`boolean`

#### Inherited from

Enumerable.some

#### Defined in

[src/operators/some.ts:31](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/some.ts#L31)

___

### sum

▸ **sum**(): `number`

#### Returns

`number`

#### Inherited from

Enumerable.sum

#### Defined in

[src/operators/sum.ts:27](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/sum.ts#L27)

▸ **sum**(`valueSelector`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector` | `keySelector`<`T`, `number`\> |

#### Returns

`number`

#### Inherited from

Enumerable.sum

#### Defined in

[src/operators/sum.ts:28](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/sum.ts#L28)

___

### take

▸ **take**(`count`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.take

#### Defined in

[src/operators/take.ts:25](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/take.ts#L25)

___

### takelast

▸ **takelast**(`count`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.takelast

#### Defined in

[src/operators/takelast.ts:67](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/takelast.ts#L67)

___

### takewhile

▸ **takewhile**(`predicate`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.takewhile

#### Defined in

[src/operators/takewhile.ts:25](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/takewhile.ts#L25)

___

### toarray

▸ **toarray**(): `T`[]

#### Returns

`T`[]

#### Inherited from

Enumerable.toarray

#### Defined in

[src/operators/toarray.ts:24](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/toarray.ts#L24)

___

### tomap

▸ **tomap**<`TKey`\>(`keySelector`): `Map`<`TKey`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TKey` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | (`item`: `T`) => `TKey` |

#### Returns

`Map`<`TKey`, `T`\>

#### Inherited from

Enumerable.tomap

#### Defined in

[src/operators/tomap.ts:33](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/tomap.ts#L33)

▸ **tomap**<`TKey`, `TElement`\>(`keySelector`, `elementSelector`): `Map`<`TKey`, `TElement`\>

#### Type parameters

| Name |
| :------ |
| `TKey` |
| `TElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | (`item`: `T`) => `TKey` |
| `elementSelector` | (`item`: `T`) => `TElement` |

#### Returns

`Map`<`TKey`, `TElement`\>

#### Inherited from

Enumerable.tomap

#### Defined in

[src/operators/tomap.ts:34](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/tomap.ts#L34)

___

### toobject

▸ **toobject**(`keySelector`): `Dictionary`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | (`item`: `T`) => `any` |

#### Returns

`Dictionary`<`T`\>

#### Inherited from

Enumerable.toobject

#### Defined in

[src/operators/toobject.ts:31](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/toobject.ts#L31)

▸ **toobject**<`TElement`\>(`keySelector`, `elementSelector`): `Dictionary`<`TElement`\>

#### Type parameters

| Name |
| :------ |
| `TElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | (`item`: `T`) => `any` |
| `elementSelector` | (`item`: `T`) => `TElement` |

#### Returns

`Dictionary`<`TElement`\>

#### Inherited from

Enumerable.toobject

#### Defined in

[src/operators/toobject.ts:32](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/toobject.ts#L32)

___

### union

▸ **union**(`source2`, `keySelector?`): `Enumerable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Enumerable`<`T`\>

#### Inherited from

Enumerable.union

#### Defined in

[src/operators/union.ts:37](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/union.ts#L37)

___

### zip

▸ **zip**<`T2`, `TResult`\>(`source2`, `func`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T2` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `EIterable`<`T2`\> |
| `func` | (`item1`: `T`, `item2`: `T2`) => `TResult` |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.zip

#### Defined in

[src/operators/zip.ts:35](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/zip.ts#L35)

▸ **zip**<`T2`, `T3`, `TResult`\>(`source2`, `source3`, `func`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T2` |
| `T3` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `EIterable`<`T2`\> |
| `source3` | `EIterable`<`T3`\> |
| `func` | (`item1`: `T`, `item2`: `T2`, `item3`: `T3`) => `TResult` |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.zip

#### Defined in

[src/operators/zip.ts:36](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/zip.ts#L36)

▸ **zip**<`T2`, `T3`, `T4`, `TResult`\>(`source2`, `source3`, `source4`, `func`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T2` |
| `T3` |
| `T4` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `EIterable`<`T2`\> |
| `source3` | `EIterable`<`T3`\> |
| `source4` | `EIterable`<`T4`\> |
| `func` | (`item1`: `T`, `item2`: `T2`, `item3`: `T3`, `item4`: `T4`) => `TResult` |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.zip

#### Defined in

[src/operators/zip.ts:37](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/zip.ts#L37)

▸ **zip**<`T2`, `T3`, `T4`, `T5`, `TResult`\>(`source2`, `source3`, `source4`, `source5`, `func`): `Enumerable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `EIterable`<`T2`\> |
| `source3` | `EIterable`<`T3`\> |
| `source4` | `EIterable`<`T4`\> |
| `source5` | `EIterable`<`T5`\> |
| `func` | (`item1`: `T`, `item2`: `T2`, `item3`: `T3`, `item4`: `T4`, `item5`: `T5`) => `TResult` |

#### Returns

`Enumerable`<`TResult`\>

#### Inherited from

Enumerable.zip

#### Defined in

[src/operators/zip.ts:38](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/zip.ts#L38)

▸ **zip**(`...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`any`

#### Inherited from

Enumerable.zip

#### Defined in

[src/operators/zip.ts:39](https://github.com/kamoshi/powerseq/blob/3f69b2c/src/operators/zip.ts#L39)
