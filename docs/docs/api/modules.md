---
id: "modules"
title: "powerseq"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Interfaces

- [EnumerableGroup](interfaces/EnumerableGroup.md)
- [IterableGroup](interfaces/IterableGroup.md)

## Type Aliases

### ElementSelectorFunc

Ƭ **ElementSelectorFunc**<`T`, `TElement`\>: (`item`: `T`) => `TElement`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TElement` |

#### Type declaration

▸ (`item`): `TElement`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

##### Returns

`TElement`

#### Defined in

[src/operators/groupby.ts:13](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupby.ts#L13)

___

### KeySelectorFunc

Ƭ **KeySelectorFunc**<`T`, `TKey`\>: (`item`: `T`, `index`: `number`) => `TKey`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |

#### Type declaration

▸ (`item`, `index`): `TKey`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |
| `index` | `number` |

##### Returns

`TKey`

#### Defined in

[src/operators/groupby.ts:12](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupby.ts#L12)

___

### ResultSelectorFunc

Ƭ **ResultSelectorFunc**<`TKey`, `T`, `TResult`\>: (`key`: `TKey`, `items`: `Enumerable`<`T`\>) => `TResult`

#### Type parameters

| Name |
| :------ |
| `TKey` |
| `T` |
| `TResult` |

#### Type declaration

▸ (`key`, `items`): `TResult`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |
| `items` | `Enumerable`<`T`\> |

##### Returns

`TResult`

#### Defined in

[src/operators/groupby.ts:14](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupby.ts#L14)

## Functions

### asiterable

▸ **asiterable**<`T`\>(`source`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/asiterable.ts:3](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/asiterable.ts#L3)

___

### average

▸ **average**(`source`): `number` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`number`\> |

#### Returns

`number` \| `undefined`

#### Defined in

[src/operators/average.ts:23](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/average.ts#L23)

▸ **average**<`T`\>(`source`, `valueSelector`): `number` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `valueSelector` | `keySelector`<`T`, `number`\> |

#### Returns

`number` \| `undefined`

#### Defined in

[src/operators/average.ts:24](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/average.ts#L24)

▸ **average**<`T`\>(): `OperatorR`<`T`, `number` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`OperatorR`<`T`, `number` \| `undefined`\>

#### Defined in

[src/operators/average.ts:25](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/average.ts#L25)

▸ **average**<`T`\>(`valueSelector`): `OperatorR`<`T`, `number` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector` | `keySelector`<`T`, `number`\> |

#### Returns

`OperatorR`<`T`, `number` \| `undefined`\>

#### Defined in

[src/operators/average.ts:26](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/average.ts#L26)

___

### buffer

▸ **buffer**<`T`\>(`source`, `count`, `skip?`): `Iterable`<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `count` | `number` |
| `skip?` | `number` |

#### Returns

`Iterable`<`T`[]\>

#### Defined in

[src/operators/buffer.ts:58](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/buffer.ts#L58)

▸ **buffer**<`T`\>(`count`, `skip?`): `Operator`<`T`, `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `skip?` | `number` |

#### Returns

`Operator`<`T`, `T`[]\>

#### Defined in

[src/operators/buffer.ts:59](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/buffer.ts#L59)

___

### cast

▸ **cast**<`TResult`\>(`source`, `type`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`any`\> |
| `type` | `Function` |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/cast.ts:19](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/cast.ts#L19)

▸ **cast**<`TResult`\>(`type`): `Operator`<`any`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Function` |

#### Returns

`Operator`<`any`, `TResult`\>

#### Defined in

[src/operators/cast.ts:20](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/cast.ts#L20)

___

### concat

▸ **concat**<`T`\>(`...args`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Iterable`<`T`\>[] |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/concat.ts:5](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/concat.ts#L5)

___

### concatp

▸ **concatp**<`T`\>(`...args`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Iterable`<`T`\>[] |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/concat.ts:12](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/concat.ts#L12)

___

### count

▸ **count**<`T`\>(`source`, `predicate?`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`number`

#### Defined in

[src/operators/count.ts:27](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/count.ts#L27)

▸ **count**<`T`\>(`predicate?`): `OperatorR`<`T`, `number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`OperatorR`<`T`, `number`\>

#### Defined in

[src/operators/count.ts:28](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/count.ts#L28)

___

### defaultifempty

▸ **defaultifempty**<`T`\>(`source`, `defaultValue?`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `defaultValue?` | `T` |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/defaultifempty.ts:5](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/defaultifempty.ts#L5)

___

### defaultifemptyp

▸ **defaultifemptyp**<`T`\>(`defaultValue?`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue?` | `T` |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/defaultifempty.ts:18](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/defaultifempty.ts#L18)

___

### defer

▸ **defer**<`T`\>(`factory`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => `Iterable`<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/enumerable/defer.ts:5](https://github.com/kamoshi/powerseq/blob/abc2814/src/enumerable/defer.ts#L5)

___

### distinct

▸ **distinct**<`T`\>(`source`, `keySelector?`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/distinct.ts:22](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/distinct.ts#L22)

▸ **distinct**<`T`\>(`keySelector?`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/distinct.ts:23](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/distinct.ts#L23)

___

### distinctuntilchanged

▸ **distinctuntilchanged**<`T`\>(`source`, `keySelector?`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/distinctuntilchanged.ts:34](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/distinctuntilchanged.ts#L34)

▸ **distinctuntilchanged**<`T`\>(`keySelector?`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/distinctuntilchanged.ts:35](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/distinctuntilchanged.ts#L35)

___

### doo

▸ **doo**<`T`\>(`source`, `action`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `action` | (`item`: `T`, `index`: `number`) => `void` |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/doo.ts:15](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/doo.ts#L15)

▸ **doo**<`T`\>(`action`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | (`item`: `T`, `index`: `number`) => `void` |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/doo.ts:16](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/doo.ts#L16)

___

### elementat

▸ **elementat**<`T`\>(`source`, `index`, `defaultValue`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `index` | `number` |
| `defaultValue` | `T` |

#### Returns

`T`

#### Defined in

[src/operators/elementat.ts:17](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/elementat.ts#L17)

▸ **elementat**<`T`\>(`source`, `index`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `index` | `number` |

#### Returns

`T` \| `undefined`

#### Defined in

[src/operators/elementat.ts:18](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/elementat.ts#L18)

▸ **elementat**<`T`\>(`index`, `defaultValue`): `OperatorR`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `defaultValue` | `T` |

#### Returns

`OperatorR`<`T`, `T`\>

#### Defined in

[src/operators/elementat.ts:19](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/elementat.ts#L19)

▸ **elementat**<`T`\>(`index`): `OperatorR`<`T`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`OperatorR`<`T`, `T` \| `undefined`\>

#### Defined in

[src/operators/elementat.ts:20](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/elementat.ts#L20)

___

### empty

▸ **empty**<`T`\>(): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/enumerable/empty.ts:4](https://github.com/kamoshi/powerseq/blob/abc2814/src/enumerable/empty.ts#L4)

___

### entries

▸ **entries**<`T`\>(`array`): `Iterable`<[`number`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |

#### Returns

`Iterable`<[`number`, `T`]\>

#### Defined in

[src/enumerable/entries.ts:4](https://github.com/kamoshi/powerseq/blob/abc2814/src/enumerable/entries.ts#L4)

▸ **entries**<`TValue`\>(`obj`): `Iterable`<[`string`, `TValue`]\>

#### Type parameters

| Name |
| :------ |
| `TValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`Iterable`<[`string`, `TValue`]\>

#### Defined in

[src/enumerable/entries.ts:5](https://github.com/kamoshi/powerseq/blob/abc2814/src/enumerable/entries.ts#L5)

___

### every

▸ **every**<`T`\>(`source`, `predicate`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `predicate` | `predicate`<`T`\> |

#### Returns

`boolean`

#### Defined in

[src/operators/every.ts:15](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/every.ts#L15)

▸ **every**<`T`\>(`predicate`): `OperatorR`<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |

#### Returns

`OperatorR`<`T`, `boolean`\>

#### Defined in

[src/operators/every.ts:16](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/every.ts#L16)

___

### except

▸ **except**<`T`\>(`source`, `source2`, `keySelector?`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `source2` | `Iterable`<`T`\> |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/except.ts:28](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/except.ts#L28)

▸ **except**<`T`\>(`source2`, `keySelector?`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/except.ts:29](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/except.ts#L29)

___

### expand

▸ **expand**<`T`\>(`source`, `selector`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `selector` | (`item`: `T`, `index?`: `number`) => `Iterable`<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/expand.ts:28](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/expand.ts#L28)

▸ **expand**<`T`\>(`selector`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`item`: `T`, `index?`: `number`) => `Iterable`<`T`\> |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/expand.ts:29](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/expand.ts#L29)

___

### filter

▸ **filter**<`T`\>(`source`, `predicate`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `predicate` | `predicate`<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/filter.ts:16](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/filter.ts#L16)

▸ **filter**<`T`\>(`predicate`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/filter.ts:17](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/filter.ts#L17)

___

### find

▸ **find**<`T`\>(`source`, `predicate?`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`T` \| `undefined`

#### Defined in

[src/operators/find.ts:23](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/find.ts#L23)

▸ **find**<`T`\>(`source`, `predicate`, `defaultValue`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `predicate` | `predicate`<`T`\> |
| `defaultValue` | `T` |

#### Returns

`T`

#### Defined in

[src/operators/find.ts:24](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/find.ts#L24)

▸ **find**<`T`\>(`predicate?`): `OperatorR`<`T`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`OperatorR`<`T`, `T` \| `undefined`\>

#### Defined in

[src/operators/find.ts:25](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/find.ts#L25)

▸ **find**<`T`\>(`predicate`, `defaultValue`): `OperatorR`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |
| `defaultValue` | `T` |

#### Returns

`OperatorR`<`T`, `T`\>

#### Defined in

[src/operators/find.ts:26](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/find.ts#L26)

___

### findindex

▸ **findindex**<`T`\>(`source`, `predicate`): `number` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `predicate` | `predicate`<`T`\> |

#### Returns

`number` \| `undefined`

#### Defined in

[src/operators/findindex.ts:15](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/findindex.ts#L15)

▸ **findindex**<`T`\>(`predicate`): `OperatorR`<`T`, `number` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |

#### Returns

`OperatorR`<`T`, `number` \| `undefined`\>

#### Defined in

[src/operators/findindex.ts:16](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/findindex.ts#L16)

___

### flatmap

▸ **flatmap**<`T`, `TCollection`\>(`source`, `collectionSelector`): `Iterable`<`TCollection`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TCollection` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `collectionSelector` | `selector`<`T`, `Iterable`<`TCollection`\>\> |

#### Returns

`Iterable`<`TCollection`\>

#### Defined in

[src/operators/flatmap.ts:25](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/flatmap.ts#L25)

▸ **flatmap**<`T`, `TCollection`, `TResult`\>(`source`, `collectionSelector`, `resultSelector`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TCollection` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `collectionSelector` | `selector`<`T`, `Iterable`<`TCollection`\>\> |
| `resultSelector` | (`item`: `T`, `collectionItem`: `TCollection`) => `TResult` |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/flatmap.ts:26](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/flatmap.ts#L26)

▸ **flatmap**<`T`, `TCollection`\>(`collectionSelector`): `Operator`<`T`, `TCollection`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TCollection` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionSelector` | `selector`<`T`, `Iterable`<`TCollection`\>\> |

#### Returns

`Operator`<`T`, `TCollection`\>

#### Defined in

[src/operators/flatmap.ts:27](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/flatmap.ts#L27)

▸ **flatmap**<`T`, `TCollection`, `TResult`\>(`collectionSelector`, `resultSelector`): `Operator`<`T`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TCollection` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionSelector` | `selector`<`T`, `Iterable`<`TCollection`\>\> |
| `resultSelector` | (`item`: `T`, `collectionItem`: `TCollection`) => `TResult` |

#### Returns

`Operator`<`T`, `TResult`\>

#### Defined in

[src/operators/flatmap.ts:28](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/flatmap.ts#L28)

___

### foreach

▸ **foreach**<`T`\>(`source`, `action?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `action?` | (`item`: `T`, `index`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/operators/foreach.ts:18](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/foreach.ts#L18)

▸ **foreach**<`T`\>(`action?`): `OperatorR`<`T`, `void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action?` | (`item`: `T`, `index`: `number`) => `void` |

#### Returns

`OperatorR`<`T`, `void`\>

#### Defined in

[src/operators/foreach.ts:19](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/foreach.ts#L19)

___

### from

▸ **from**<`T`\>(`iterable`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/enumerable/from.ts:3](https://github.com/kamoshi/powerseq/blob/abc2814/src/enumerable/from.ts#L3)

___

### generate

▸ **generate**<`TState`, `TResult`\>(`initState`, `condition`, `iterate`, `resultSelector`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TState` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initState` | `TState` |
| `condition` | (`state`: `TState`) => `boolean` |
| `iterate` | (`state`: `TState`) => `TState` |
| `resultSelector` | (`state`: `TState`) => `TResult` |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/enumerable/generate.ts:4](https://github.com/kamoshi/powerseq/blob/abc2814/src/enumerable/generate.ts#L4)

___

### groupby

▸ **groupby**<`T`, `TKey`\>(`source`, `keySelector`): `Iterable`<[`IterableGroup`](interfaces/IterableGroup.md)<`TKey`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector` | [`KeySelectorFunc`](modules.md#keyselectorfunc)<`T`, `TKey`\> |

#### Returns

`Iterable`<[`IterableGroup`](interfaces/IterableGroup.md)<`TKey`, `T`\>\>

#### Defined in

[src/operators/groupby.ts:58](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupby.ts#L58)

▸ **groupby**<`T`, `TKey`, `TElement`\>(`source`, `keySelector`, `elementSelector`): `Iterable`<[`IterableGroup`](interfaces/IterableGroup.md)<`TKey`, `TElement`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |
| `TElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector` | [`KeySelectorFunc`](modules.md#keyselectorfunc)<`T`, `TKey`\> |
| `elementSelector` | [`ElementSelectorFunc`](modules.md#elementselectorfunc)<`T`, `TElement`\> |

#### Returns

`Iterable`<[`IterableGroup`](interfaces/IterableGroup.md)<`TKey`, `TElement`\>\>

#### Defined in

[src/operators/groupby.ts:59](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupby.ts#L59)

▸ **groupby**<`T`, `TKey`, `TResult`\>(`source`, `keySelector`, `resultSelector`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector` | [`KeySelectorFunc`](modules.md#keyselectorfunc)<`T`, `TKey`\> |
| `resultSelector` | [`ResultSelectorFunc`](modules.md#resultselectorfunc)<`TKey`, `T`, `TResult`\> |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/groupby.ts:60](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupby.ts#L60)

▸ **groupby**<`T`, `TKey`, `TElement`, `TResult`\>(`source`, `keySelector`, `elementSelector`, `resultSelector`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |
| `TElement` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector` | [`KeySelectorFunc`](modules.md#keyselectorfunc)<`T`, `TKey`\> |
| `elementSelector` | [`ElementSelectorFunc`](modules.md#elementselectorfunc)<`T`, `TElement`\> |
| `resultSelector` | [`ResultSelectorFunc`](modules.md#resultselectorfunc)<`TKey`, `TElement`, `TResult`\> |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/groupby.ts:61](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupby.ts#L61)

▸ **groupby**<`T`, `TKey`\>(`keySelector`): `Operator`<`T`, [`IterableGroup`](interfaces/IterableGroup.md)<`TKey`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | [`KeySelectorFunc`](modules.md#keyselectorfunc)<`T`, `TKey`\> |

#### Returns

`Operator`<`T`, [`IterableGroup`](interfaces/IterableGroup.md)<`TKey`, `T`\>\>

#### Defined in

[src/operators/groupby.ts:62](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupby.ts#L62)

▸ **groupby**<`T`, `TKey`, `TElement`\>(`keySelector`, `elementSelector`): `Operator`<`T`, [`IterableGroup`](interfaces/IterableGroup.md)<`TKey`, `TElement`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |
| `TElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | [`KeySelectorFunc`](modules.md#keyselectorfunc)<`T`, `TKey`\> |
| `elementSelector` | [`ElementSelectorFunc`](modules.md#elementselectorfunc)<`T`, `TElement`\> |

#### Returns

`Operator`<`T`, [`IterableGroup`](interfaces/IterableGroup.md)<`TKey`, `TElement`\>\>

#### Defined in

[src/operators/groupby.ts:63](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupby.ts#L63)

▸ **groupby**<`T`, `TKey`, `TResult`\>(`keySelector`, `resultSelector`): `Operator`<`T`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | [`KeySelectorFunc`](modules.md#keyselectorfunc)<`T`, `TKey`\> |
| `resultSelector` | [`ResultSelectorFunc`](modules.md#resultselectorfunc)<`TKey`, `T`, `TResult`\> |

#### Returns

`Operator`<`T`, `TResult`\>

#### Defined in

[src/operators/groupby.ts:64](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupby.ts#L64)

▸ **groupby**<`T`, `TKey`, `TElement`, `TResult`\>(`keySelector`, `elementSelector`, `resultSelector`): `Operator`<`T`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |
| `TElement` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | [`KeySelectorFunc`](modules.md#keyselectorfunc)<`T`, `TKey`\> |
| `elementSelector` | [`ElementSelectorFunc`](modules.md#elementselectorfunc)<`T`, `TElement`\> |
| `resultSelector` | [`ResultSelectorFunc`](modules.md#resultselectorfunc)<`TKey`, `TElement`, `TResult`\> |

#### Returns

`Operator`<`T`, `TResult`\>

#### Defined in

[src/operators/groupby.ts:65](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupby.ts#L65)

___

### groupjoin

▸ **groupjoin**<`T`, `T2`, `TKey`, `TResult`\>(`source1`, `source2`, `key1Selector`, `key2Selector`, `resultSelector`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `T2` |
| `TKey` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source1` | `Iterable`<`T`\> |
| `source2` | `Iterable`<`T2`\> |
| `key1Selector` | `keySelector`<`T`, `TKey`\> |
| `key2Selector` | `keySelector`<`T2`, `TKey`\> |
| `resultSelector` | (`item1`: `T`, `item2`: `Iterable`<`T2`\>) => `TResult` |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/groupjoin.ts:33](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupjoin.ts#L33)

▸ **groupjoin**<`T`, `T2`, `TKey`, `TResult`\>(`source1`, `source2`, `key1Selector`, `key2Selector`, `resultSelector`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `T2` |
| `TKey` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source1` | `Iterable`<`T`\> |
| `source2` | `Iterable`<`T2`\> |
| `key1Selector` | `keySelector`<`T`, `TKey`\> |
| `key2Selector` | `keySelector`<`T2`, `TKey`\> |
| `resultSelector` | (`item1`: `T`, `item2`: `Iterable`<`T2`\>) => `TResult` |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/groupjoin.ts:35](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupjoin.ts#L35)

▸ **groupjoin**<`T`, `T2`, `TKey`, `TResult`\>(`source2`, `key1Selector`, `key2Selector`, `resultSelector`): `Operator`<`T`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `T2` |
| `TKey` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T2`\> |
| `key1Selector` | `keySelector`<`T`, `TKey`\> |
| `key2Selector` | `keySelector`<`T2`, `TKey`\> |
| `resultSelector` | (`item1`: `T`, `item2`: `Iterable`<`T2`\>) => `TResult` |

#### Returns

`Operator`<`T`, `TResult`\>

#### Defined in

[src/operators/groupjoin.ts:37](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupjoin.ts#L37)

▸ **groupjoin**<`T`, `T2`, `TKey`, `TResult`\>(`source2`, `key1Selector`, `key2Selector`, `resultSelector`): `Operator`<`T`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `T2` |
| `TKey` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T2`\> |
| `key1Selector` | `keySelector`<`T`, `TKey`\> |
| `key2Selector` | `keySelector`<`T2`, `TKey`\> |
| `resultSelector` | (`item1`: `T`, `item2`: `Iterable`<`T2`\>) => `TResult` |

#### Returns

`Operator`<`T`, `TResult`\>

#### Defined in

[src/operators/groupjoin.ts:39](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/groupjoin.ts#L39)

___

### ignoreelements

▸ **ignoreelements**<`T`\>(`source`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/ignoreelements.ts:12](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/ignoreelements.ts#L12)

▸ **ignoreelements**<`T`\>(): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/ignoreelements.ts:13](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/ignoreelements.ts#L13)

___

### includes

▸ **includes**<`T`\>(`source`, `searchElement`, `fromIndex?`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `searchElement` | `T` |
| `fromIndex?` | `number` |

#### Returns

`boolean`

#### Defined in

[src/operators/includes.ts:5](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/includes.ts#L5)

___

### includesp

▸ **includesp**<`T`\>(`searchElement`, `fromIndex?`): `OperatorR`<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchElement` | `T` |
| `fromIndex?` | `number` |

#### Returns

`OperatorR`<`T`, `boolean`\>

#### Defined in

[src/operators/includes.ts:35](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/includes.ts#L35)

___

### intersect

▸ **intersect**<`T`\>(`source`, `source2`, `keySelector?`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `source2` | `Iterable`<`T`\> |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/intersect.ts:26](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/intersect.ts#L26)

▸ **intersect**<`T`\>(`source2`, `keySelector?`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/intersect.ts:27](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/intersect.ts#L27)

___

### isempty

▸ **isempty**<`T`\>(`source`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |

#### Returns

`boolean`

#### Defined in

[src/operators/isempty.ts:12](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/isempty.ts#L12)

▸ **isempty**<`T`\>(): `OperatorR`<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`OperatorR`<`T`, `boolean`\>

#### Defined in

[src/operators/isempty.ts:13](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/isempty.ts#L13)

___

### join

▸ **join**<`T`, `T2`, `TKey`, `TResult`\>(`source1`, `source2`, `key1Selector`, `key2Selector`, `resultSelector`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `T2` |
| `TKey` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source1` | `Iterable`<`T`\> |
| `source2` | `Iterable`<`T2`\> |
| `key1Selector` | `keySelector`<`T`, `TKey`\> |
| `key2Selector` | `keySelector`<`T2`, `TKey`\> |
| `resultSelector` | (`item1`: `T`, `item2`: `T2`) => `TResult` |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/join.ts:35](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/join.ts#L35)

▸ **join**<`T`, `T2`, `TKey`, `TResult`\>(`source2`, `key1Selector`, `key2Selector`, `resultSelector`): `Operator`<`T`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `T2` |
| `TKey` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T2`\> |
| `key1Selector` | `keySelector`<`T`, `TKey`\> |
| `key2Selector` | `keySelector`<`T2`, `TKey`\> |
| `resultSelector` | (`item1`: `T`, `item2`: `T2`) => `TResult` |

#### Returns

`Operator`<`T`, `TResult`\>

#### Defined in

[src/operators/join.ts:37](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/join.ts#L37)

___

### last

▸ **last**<`T`\>(`source`, `predicate?`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`T` \| `undefined`

#### Defined in

[src/operators/last.ts:23](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/last.ts#L23)

▸ **last**<`T`\>(`predicate?`): `OperatorR`<`T`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`OperatorR`<`T`, `T` \| `undefined`\>

#### Defined in

[src/operators/last.ts:24](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/last.ts#L24)

___

### map

▸ **map**<`T`, `TResult`\>(`source`, `projection`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `projection` | `selector`<`T`, `TResult`\> |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/map.ts:14](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/map.ts#L14)

▸ **map**<`T`, `TResult`\>(`projection`): `Operator`<`T`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `projection` | `selector`<`T`, `TResult`\> |

#### Returns

`Operator`<`T`, `TResult`\>

#### Defined in

[src/operators/map.ts:15](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/map.ts#L15)

___

### max

▸ **max**<`T`\>(`source`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |

#### Returns

`T` \| `undefined`

#### Defined in

[src/operators/max.ts:10](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/max.ts#L10)

▸ **max**<`T`, `TValue`\>(`source`, `valueSelector`): `TValue` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `valueSelector` | `keySelector`<`T`, `TValue`\> |

#### Returns

`TValue` \| `undefined`

#### Defined in

[src/operators/max.ts:11](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/max.ts#L11)

▸ **max**<`T`\>(): `OperatorR`<`T`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`OperatorR`<`T`, `T` \| `undefined`\>

#### Defined in

[src/operators/max.ts:12](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/max.ts#L12)

▸ **max**<`T`, `TValue`\>(`valueSelector`): `OperatorR`<`T`, `TValue` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector` | `keySelector`<`T`, `TValue`\> |

#### Returns

`OperatorR`<`T`, `TValue` \| `undefined`\>

#### Defined in

[src/operators/max.ts:13](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/max.ts#L13)

___

### maxby

▸ **maxby**<`T`\>(`source`, `valueSelector`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `valueSelector` | `keySelector`<`T`, `any`\> |

#### Returns

`T` \| `undefined`

#### Defined in

[src/operators/maxby.ts:10](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/maxby.ts#L10)

▸ **maxby**<`T`\>(`valueSelector`): `OperatorR`<`T`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OperatorR`<`T`, `T` \| `undefined`\>

#### Defined in

[src/operators/maxby.ts:11](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/maxby.ts#L11)

___

### min

▸ **min**<`T`\>(`source`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |

#### Returns

`T` \| `undefined`

#### Defined in

[src/operators/min.ts:9](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/min.ts#L9)

▸ **min**<`T`, `TValue`\>(`source`, `valueSelector`): `TValue` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `valueSelector` | `keySelector`<`T`, `TValue`\> |

#### Returns

`TValue` \| `undefined`

#### Defined in

[src/operators/min.ts:10](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/min.ts#L10)

▸ **min**<`T`\>(): `OperatorR`<`T`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`OperatorR`<`T`, `T` \| `undefined`\>

#### Defined in

[src/operators/min.ts:11](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/min.ts#L11)

▸ **min**<`T`, `TValue`\>(`valueSelector`): `OperatorR`<`T`, `TValue` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector` | `keySelector`<`T`, `TValue`\> |

#### Returns

`OperatorR`<`T`, `TValue` \| `undefined`\>

#### Defined in

[src/operators/min.ts:12](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/min.ts#L12)

___

### minby

▸ **minby**<`T`\>(`source`, `valueSelector`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `valueSelector` | `keySelector`<`T`, `any`\> |

#### Returns

`T` \| `undefined`

#### Defined in

[src/operators/minby.ts:10](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/minby.ts#L10)

▸ **minby**<`T`\>(`valueSelector`): `OperatorR`<`T`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OperatorR`<`T`, `T` \| `undefined`\>

#### Defined in

[src/operators/minby.ts:11](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/minby.ts#L11)

___

### of

▸ **of**<`T`\>(`...args`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T`[] |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/enumerable/of.ts:4](https://github.com/kamoshi/powerseq/blob/abc2814/src/enumerable/of.ts#L4)

___

### oftype

▸ **oftype**<`TResult`\>(`source`, `type`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`any`\> |
| `type` | `Function` |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/oftype.ts:15](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/oftype.ts#L15)

▸ **oftype**<`TResult`\>(`type`): `Operator`<`any`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Function` |

#### Returns

`Operator`<`any`, `TResult`\>

#### Defined in

[src/operators/oftype.ts:16](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/oftype.ts#L16)

___

### orderby

▸ **orderby**<`T`\>(`source`, `keySelector`): `OrderedEnumerable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OrderedEnumerable`<`T`\>

#### Defined in

[src/operators/orderby.ts:13](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/orderby.ts#L13)

▸ **orderby**<`T`\>(`keySelector`): `OperatorR`<`T`, `OrderedEnumerable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OperatorR`<`T`, `OrderedEnumerable`<`T`\>\>

#### Defined in

[src/operators/orderby.ts:14](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/orderby.ts#L14)

___

### orderbydescending

▸ **orderbydescending**<`T`\>(`source`, `keySelector`): `OrderedEnumerable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OrderedEnumerable`<`T`\>

#### Defined in

[src/operators/orderbydescending.ts:13](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/orderbydescending.ts#L13)

▸ **orderbydescending**<`T`\>(`keySelector`): `OperatorR`<`T`, `OrderedEnumerable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OperatorR`<`T`, `OrderedEnumerable`<`T`\>\>

#### Defined in

[src/operators/orderbydescending.ts:14](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/orderbydescending.ts#L14)

___

### pipe

▸ **pipe**<`T`\>(`source`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/pipe.ts:3](https://github.com/kamoshi/powerseq/blob/abc2814/src/pipe.ts#L3)

▸ **pipe**<`T`, `A`\>(`source`, `op1`): `A`

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `op1` | `OperatorR`<`T`, `A`\> |

#### Returns

`A`

#### Defined in

[src/pipe.ts:4](https://github.com/kamoshi/powerseq/blob/abc2814/src/pipe.ts#L4)

▸ **pipe**<`T`, `A`, `B`\>(`source`, `op1`, `op2`): `B`

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `op1` | `Operator`<`T`, `A`\> |
| `op2` | `OperatorR`<`A`, `B`\> |

#### Returns

`B`

#### Defined in

[src/pipe.ts:5](https://github.com/kamoshi/powerseq/blob/abc2814/src/pipe.ts#L5)

▸ **pipe**<`T`, `A`, `B`, `C`\>(`source`, `op1`, `op2`, `op3`): `C`

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `op1` | `Operator`<`T`, `A`\> |
| `op2` | `Operator`<`A`, `B`\> |
| `op3` | `OperatorR`<`B`, `C`\> |

#### Returns

`C`

#### Defined in

[src/pipe.ts:6](https://github.com/kamoshi/powerseq/blob/abc2814/src/pipe.ts#L6)

▸ **pipe**<`T`, `A`, `B`, `C`, `D`\>(`source`, `op1`, `op2`, `op3`, `op4`): `D`

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `op1` | `Operator`<`T`, `A`\> |
| `op2` | `Operator`<`A`, `B`\> |
| `op3` | `Operator`<`B`, `C`\> |
| `op4` | `OperatorR`<`C`, `D`\> |

#### Returns

`D`

#### Defined in

[src/pipe.ts:7](https://github.com/kamoshi/powerseq/blob/abc2814/src/pipe.ts#L7)

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`\>(`source`, `op1`, `op2`, `op3`, `op4`, `op5`): `E`

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `op1` | `Operator`<`T`, `A`\> |
| `op2` | `Operator`<`A`, `B`\> |
| `op3` | `Operator`<`B`, `C`\> |
| `op4` | `Operator`<`C`, `D`\> |
| `op5` | `OperatorR`<`D`, `E`\> |

#### Returns

`E`

#### Defined in

[src/pipe.ts:8](https://github.com/kamoshi/powerseq/blob/abc2814/src/pipe.ts#L8)

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`source`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`): `F`

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `op1` | `Operator`<`T`, `A`\> |
| `op2` | `Operator`<`A`, `B`\> |
| `op3` | `Operator`<`B`, `C`\> |
| `op4` | `Operator`<`C`, `D`\> |
| `op5` | `Operator`<`D`, `E`\> |
| `op6` | `OperatorR`<`E`, `F`\> |

#### Returns

`F`

#### Defined in

[src/pipe.ts:9](https://github.com/kamoshi/powerseq/blob/abc2814/src/pipe.ts#L9)

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`source`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): `G`

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `op1` | `Operator`<`T`, `A`\> |
| `op2` | `Operator`<`A`, `B`\> |
| `op3` | `Operator`<`B`, `C`\> |
| `op4` | `Operator`<`C`, `D`\> |
| `op5` | `Operator`<`D`, `E`\> |
| `op6` | `Operator`<`E`, `F`\> |
| `op7` | `OperatorR`<`F`, `G`\> |

#### Returns

`G`

#### Defined in

[src/pipe.ts:10](https://github.com/kamoshi/powerseq/blob/abc2814/src/pipe.ts#L10)

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`source`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): `H`

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `op1` | `Operator`<`T`, `A`\> |
| `op2` | `Operator`<`A`, `B`\> |
| `op3` | `Operator`<`B`, `C`\> |
| `op4` | `Operator`<`C`, `D`\> |
| `op5` | `Operator`<`D`, `E`\> |
| `op6` | `Operator`<`E`, `F`\> |
| `op7` | `Operator`<`F`, `G`\> |
| `op8` | `OperatorR`<`G`, `H`\> |

#### Returns

`H`

#### Defined in

[src/pipe.ts:11](https://github.com/kamoshi/powerseq/blob/abc2814/src/pipe.ts#L11)

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`source`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): `I`

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `op1` | `Operator`<`T`, `A`\> |
| `op2` | `Operator`<`A`, `B`\> |
| `op3` | `Operator`<`B`, `C`\> |
| `op4` | `Operator`<`C`, `D`\> |
| `op5` | `Operator`<`D`, `E`\> |
| `op6` | `Operator`<`E`, `F`\> |
| `op7` | `Operator`<`F`, `G`\> |
| `op8` | `Operator`<`G`, `H`\> |
| `op9` | `OperatorR`<`H`, `I`\> |

#### Returns

`I`

#### Defined in

[src/pipe.ts:12](https://github.com/kamoshi/powerseq/blob/abc2814/src/pipe.ts#L12)

___

### range

▸ **range**(`start`, `count`): `Iterable`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `count` | `number` |

#### Returns

`Iterable`<`number`\>

#### Defined in

[src/enumerable/range.ts:4](https://github.com/kamoshi/powerseq/blob/abc2814/src/enumerable/range.ts#L4)

___

### reduce

▸ **reduce**<`T`\>(`source`, `func`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `func` | (`prev`: `T`, `item`: `T`) => `T` |

#### Returns

`T`

#### Defined in

[src/operators/reduce.ts:26](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/reduce.ts#L26)

▸ **reduce**<`T`, `TAccumulate`\>(`source`, `func`, `seed`): `TAccumulate`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAccumulate` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `func` | (`prev`: `TAccumulate`, `item`: `T`) => `TAccumulate` |
| `seed` | `TAccumulate` |

#### Returns

`TAccumulate`

#### Defined in

[src/operators/reduce.ts:27](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/reduce.ts#L27)

▸ **reduce**<`T`\>(`func`): `OperatorR`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`prev`: `T`, `item`: `T`) => `T` |

#### Returns

`OperatorR`<`T`, `T`\>

#### Defined in

[src/operators/reduce.ts:28](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/reduce.ts#L28)

▸ **reduce**<`T`, `TAccumulate`\>(`func`, `seed`): `OperatorR`<`T`, `TAccumulate`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAccumulate` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`prev`: `TAccumulate`, `item`: `T`) => `TAccumulate` |
| `seed` | `TAccumulate` |

#### Returns

`OperatorR`<`T`, `TAccumulate`\>

#### Defined in

[src/operators/reduce.ts:29](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/reduce.ts#L29)

___

### repeat

▸ **repeat**<`T`\>(`source`, `count?`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `count?` | `number` |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/repeat.ts:19](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/repeat.ts#L19)

▸ **repeat**<`T`\>(`count?`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count?` | `number` |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/repeat.ts:20](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/repeat.ts#L20)

___

### repeatvalue

▸ **repeatvalue**<`T`\>(`value`, `count?`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `count?` | `number` |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/enumerable/repeatvalue.ts:4](https://github.com/kamoshi/powerseq/blob/abc2814/src/enumerable/repeatvalue.ts#L4)

___

### reverse

▸ **reverse**<`T`\>(`source`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/reverse.ts:11](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/reverse.ts#L11)

▸ **reverse**<`T`\>(): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/reverse.ts:12](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/reverse.ts#L12)

___

### scan

▸ **scan**<`T`\>(`source`, `func`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `func` | (`prev`: `T`, `item`: `T`) => `T` |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/scan.ts:27](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/scan.ts#L27)

▸ **scan**<`T`, `TAccumulate`\>(`source`, `func`, `seed`): `Iterable`<`TAccumulate`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAccumulate` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `func` | (`prev`: `TAccumulate`, `item`: `T`) => `TAccumulate` |
| `seed` | `TAccumulate` |

#### Returns

`Iterable`<`TAccumulate`\>

#### Defined in

[src/operators/scan.ts:28](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/scan.ts#L28)

▸ **scan**<`T`\>(`func`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`prev`: `T`, `item`: `T`) => `T` |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/scan.ts:29](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/scan.ts#L29)

▸ **scan**<`T`, `TAccumulate`\>(`func`, `seed`): `Operator`<`T`, `TAccumulate`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAccumulate` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`prev`: `TAccumulate`, `item`: `T`) => `TAccumulate` |
| `seed` | `TAccumulate` |

#### Returns

`Operator`<`T`, `TAccumulate`\>

#### Defined in

[src/operators/scan.ts:30](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/scan.ts#L30)

___

### sequenceequal

▸ **sequenceequal**<`T`\>(`source1`, `source2`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source1` | `Iterable`<`T`\> |
| `source2` | `Iterable`<`T`\> |

#### Returns

`boolean`

#### Defined in

[src/operators/sequenceequal.ts:5](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sequenceequal.ts#L5)

▸ **sequenceequal**<`T`\>(`source1`, `source2`, `source3`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source1` | `Iterable`<`T`\> |
| `source2` | `Iterable`<`T`\> |
| `source3` | `Iterable`<`T`\> |

#### Returns

`boolean`

#### Defined in

[src/operators/sequenceequal.ts:6](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sequenceequal.ts#L6)

▸ **sequenceequal**<`T`\>(`source1`, `source2`, `source3`, `source4`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source1` | `Iterable`<`T`\> |
| `source2` | `Iterable`<`T`\> |
| `source3` | `Iterable`<`T`\> |
| `source4` | `Iterable`<`T`\> |

#### Returns

`boolean`

#### Defined in

[src/operators/sequenceequal.ts:7](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sequenceequal.ts#L7)

▸ **sequenceequal**<`T`\>(`source1`, `source2`, `source3`, `source4`, `source5`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source1` | `Iterable`<`T`\> |
| `source2` | `Iterable`<`T`\> |
| `source3` | `Iterable`<`T`\> |
| `source4` | `Iterable`<`T`\> |
| `source5` | `Iterable`<`T`\> |

#### Returns

`boolean`

#### Defined in

[src/operators/sequenceequal.ts:8](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sequenceequal.ts#L8)

▸ **sequenceequal**<`T`\>(`...args`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Iterable`<`T`\>[] |

#### Returns

`boolean`

#### Defined in

[src/operators/sequenceequal.ts:9](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sequenceequal.ts#L9)

___

### sequenceequalp

▸ **sequenceequalp**<`T`\>(`source2`): `OperatorR`<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |

#### Returns

`OperatorR`<`T`, `boolean`\>

#### Defined in

[src/operators/sequenceequal.ts:34](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sequenceequal.ts#L34)

▸ **sequenceequalp**<`T`\>(`source2`, `source3`): `OperatorR`<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `source3` | `Iterable`<`T`\> |

#### Returns

`OperatorR`<`T`, `boolean`\>

#### Defined in

[src/operators/sequenceequal.ts:35](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sequenceequal.ts#L35)

▸ **sequenceequalp**<`T`\>(`source2`, `source3`, `source4`): `OperatorR`<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `source3` | `Iterable`<`T`\> |
| `source4` | `Iterable`<`T`\> |

#### Returns

`OperatorR`<`T`, `boolean`\>

#### Defined in

[src/operators/sequenceequal.ts:36](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sequenceequal.ts#L36)

▸ **sequenceequalp**<`T`\>(`source2`, `source3`, `source4`, `source5`): `OperatorR`<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `source3` | `Iterable`<`T`\> |
| `source4` | `Iterable`<`T`\> |
| `source5` | `Iterable`<`T`\> |

#### Returns

`OperatorR`<`T`, `boolean`\>

#### Defined in

[src/operators/sequenceequal.ts:37](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sequenceequal.ts#L37)

▸ **sequenceequalp**<`T`\>(`...args`): `OperatorR`<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Iterable`<`T`\>[] |

#### Returns

`OperatorR`<`T`, `boolean`\>

#### Defined in

[src/operators/sequenceequal.ts:38](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sequenceequal.ts#L38)

___

### single

▸ **single**<`T`\>(`source`, `predicate?`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`T` \| `undefined`

#### Defined in

[src/operators/single.ts:37](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/single.ts#L37)

▸ **single**<`T`\>(`predicate?`): `OperatorR`<`T`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`OperatorR`<`T`, `T` \| `undefined`\>

#### Defined in

[src/operators/single.ts:38](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/single.ts#L38)

___

### skip

▸ **skip**<`T`\>(`source`, `count`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `count` | `number` |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/skip.ts:26](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/skip.ts#L26)

▸ **skip**<`T`\>(`count`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/skip.ts:27](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/skip.ts#L27)

___

### skiplast

▸ **skiplast**<`T`\>(`source`, `count`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `count` | `number` |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/skiplast.ts:45](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/skiplast.ts#L45)

▸ **skiplast**<`T`\>(`count`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/skiplast.ts:46](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/skiplast.ts#L46)

___

### skipwhile

▸ **skipwhile**<`T`\>(`source`, `predicate`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `predicate` | `predicate`<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/skipwhile.ts:27](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/skipwhile.ts#L27)

▸ **skipwhile**<`T`\>(`predicate`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/skipwhile.ts:28](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/skipwhile.ts#L28)

___

### some

▸ **some**<`T`\>(`source`, `predicate?`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`boolean`

#### Defined in

[src/operators/some.ts:23](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/some.ts#L23)

▸ **some**<`T`\>(`predicate?`): `OperatorR`<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | `predicate`<`T`\> |

#### Returns

`OperatorR`<`T`, `boolean`\>

#### Defined in

[src/operators/some.ts:24](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/some.ts#L24)

___

### sum

▸ **sum**<`T`\>(`source`, `valueSelector?`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `valueSelector?` | `keySelector`<`T`, `number`\> |

#### Returns

`number`

#### Defined in

[src/operators/sum.ts:19](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sum.ts#L19)

▸ **sum**<`T`\>(`valueSelector?`): `OperatorR`<`T`, `number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSelector?` | `keySelector`<`T`, `number`\> |

#### Returns

`OperatorR`<`T`, `number`\>

#### Defined in

[src/operators/sum.ts:20](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/sum.ts#L20)

___

### take

▸ **take**<`T`\>(`source`, `count`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `count` | `number` |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/take.ts:17](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/take.ts#L17)

▸ **take**<`T`\>(`count`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/take.ts:18](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/take.ts#L18)

___

### takelast

▸ **takelast**<`T`\>(`source`, `count`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `count` | `number` |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/takelast.ts:59](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/takelast.ts#L59)

▸ **takelast**<`T`\>(`count`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/takelast.ts:60](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/takelast.ts#L60)

___

### takewhile

▸ **takewhile**<`T`\>(`source`, `predicate`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `predicate` | `predicate`<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/takewhile.ts:17](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/takewhile.ts#L17)

▸ **takewhile**<`T`\>(`predicate`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `predicate`<`T`\> |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/takewhile.ts:18](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/takewhile.ts#L18)

___

### thenby

▸ **thenby**<`T`\>(`source`, `keySelector`): `OrderedEnumerable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `OrderedEnumerable`<`T`\> |
| `keySelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OrderedEnumerable`<`T`\>

#### Defined in

[src/operators/thenby.ts:12](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/thenby.ts#L12)

▸ **thenby**<`T`\>(`keySelector`): `OperatorRA`<`OrderedEnumerable`<`T`\>, `OrderedEnumerable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OperatorRA`<`OrderedEnumerable`<`T`\>, `OrderedEnumerable`<`T`\>\>

#### Defined in

[src/operators/thenby.ts:13](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/thenby.ts#L13)

___

### thenbydescending

▸ **thenbydescending**<`T`\>(`source`, `keySelector`): `OrderedEnumerable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `OrderedEnumerable`<`T`\> |
| `keySelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OrderedEnumerable`<`T`\>

#### Defined in

[src/operators/thenbydescending.ts:13](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/thenbydescending.ts#L13)

▸ **thenbydescending**<`T`\>(`keySelector`): `OperatorRA`<`OrderedEnumerable`<`T`\>, `OrderedEnumerable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | `keySelector`<`T`, `any`\> |

#### Returns

`OperatorRA`<`OrderedEnumerable`<`T`\>, `OrderedEnumerable`<`T`\>\>

#### Defined in

[src/operators/thenbydescending.ts:14](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/thenbydescending.ts#L14)

___

### throww

▸ **throww**<`T`\>(`error`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/enumerable/throww.ts:4](https://github.com/kamoshi/powerseq/blob/abc2814/src/enumerable/throww.ts#L4)

___

### toarray

▸ **toarray**<`T`\>(`source`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |

#### Returns

`T`[]

#### Defined in

[src/operators/toarray.ts:16](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/toarray.ts#L16)

▸ **toarray**<`T`\>(): `OperatorR`<`T`, `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`OperatorR`<`T`, `T`[]\>

#### Defined in

[src/operators/toarray.ts:17](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/toarray.ts#L17)

___

### tomap

▸ **tomap**<`T`, `TKey`\>(`source`, `keySelector`): `Map`<`TKey`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector` | (`item`: `T`) => `TKey` |

#### Returns

`Map`<`TKey`, `T`\>

#### Defined in

[src/operators/tomap.ts:22](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/tomap.ts#L22)

▸ **tomap**<`T`, `TKey`, `TElement`\>(`source`, `keySelector`, `elementSelector`): `Map`<`TKey`, `TElement`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |
| `TElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector` | (`item`: `T`) => `TKey` |
| `elementSelector` | (`item`: `T`) => `TElement` |

#### Returns

`Map`<`TKey`, `TElement`\>

#### Defined in

[src/operators/tomap.ts:23](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/tomap.ts#L23)

▸ **tomap**<`T`, `TKey`\>(`keySelector`): `OperatorR`<`T`, `Map`<`TKey`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | (`item`: `T`) => `TKey` |

#### Returns

`OperatorR`<`T`, `Map`<`TKey`, `T`\>\>

#### Defined in

[src/operators/tomap.ts:24](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/tomap.ts#L24)

▸ **tomap**<`T`, `TKey`, `TElement`\>(`keySelector`, `elementSelector`): `OperatorR`<`T`, `Map`<`TKey`, `TElement`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TKey` |
| `TElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | (`item`: `T`) => `TKey` |
| `elementSelector` | (`item`: `T`) => `TElement` |

#### Returns

`OperatorR`<`T`, `Map`<`TKey`, `TElement`\>\>

#### Defined in

[src/operators/tomap.ts:25](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/tomap.ts#L25)

___

### toobject

▸ **toobject**<`T`\>(`source`, `keySelector`): `Dictionary`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector` | (`item`: `T`) => `any` |

#### Returns

`Dictionary`<`T`\>

#### Defined in

[src/operators/toobject.ts:21](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/toobject.ts#L21)

▸ **toobject**<`T`, `TElement`\>(`source`, `keySelector`, `elementSelector`): `Dictionary`<`TElement`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `keySelector` | (`item`: `T`) => `any` |
| `elementSelector` | (`item`: `T`) => `TElement` |

#### Returns

`Dictionary`<`TElement`\>

#### Defined in

[src/operators/toobject.ts:22](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/toobject.ts#L22)

▸ **toobject**<`T`\>(`keySelector`): `OperatorR`<`T`, `Dictionary`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | (`item`: `T`) => `any` |

#### Returns

`OperatorR`<`T`, `Dictionary`<`T`\>\>

#### Defined in

[src/operators/toobject.ts:23](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/toobject.ts#L23)

▸ **toobject**<`T`, `TElement`\>(`keySelector`, `elementSelector`): `OperatorR`<`T`, `Dictionary`<`TElement`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector` | (`item`: `T`) => `any` |
| `elementSelector` | (`item`: `T`) => `TElement` |

#### Returns

`OperatorR`<`T`, `Dictionary`<`TElement`\>\>

#### Defined in

[src/operators/toobject.ts:24](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/toobject.ts#L24)

___

### union

▸ **union**<`T`\>(`source`, `source2`, `keySelector?`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Iterable`<`T`\> |
| `source2` | `Iterable`<`T`\> |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Iterable`<`T`\>

#### Defined in

[src/operators/union.ts:29](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/union.ts#L29)

▸ **union**<`T`\>(`source2`, `keySelector?`): `Operator`<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T`\> |
| `keySelector?` | `keySelector`<`T`, `any`\> |

#### Returns

`Operator`<`T`, `T`\>

#### Defined in

[src/operators/union.ts:30](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/union.ts#L30)

___

### zip

▸ **zip**<`T1`, `T2`, `TResult`\>(`source1`, `source2`, `func`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source1` | `Iterable`<`T1`\> |
| `source2` | `Iterable`<`T2`\> |
| `func` | (`item1`: `T1`, `item2`: `T2`) => `TResult` |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/zip.ts:5](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/zip.ts#L5)

▸ **zip**<`T1`, `T2`, `T3`, `TResult`\>(`source1`, `source2`, `source3`, `func`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source1` | `Iterable`<`T1`\> |
| `source2` | `Iterable`<`T2`\> |
| `source3` | `Iterable`<`T3`\> |
| `func` | (`item1`: `T1`, `item2`: `T2`, `item3`: `T3`) => `TResult` |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/zip.ts:6](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/zip.ts#L6)

▸ **zip**<`T1`, `T2`, `T3`, `T4`, `TResult`\>(`source1`, `source2`, `source3`, `source4`, `func`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source1` | `Iterable`<`T1`\> |
| `source2` | `Iterable`<`T2`\> |
| `source3` | `Iterable`<`T3`\> |
| `source4` | `Iterable`<`T4`\> |
| `func` | (`item1`: `T1`, `item2`: `T2`, `item3`: `T3`, `item4`: `T4`) => `TResult` |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/zip.ts:7](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/zip.ts#L7)

▸ **zip**<`T1`, `T2`, `T3`, `T4`, `T5`, `TResult`\>(`source1`, `source2`, `source3`, `source4`, `source5`, `func`): `Iterable`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source1` | `Iterable`<`T1`\> |
| `source2` | `Iterable`<`T2`\> |
| `source3` | `Iterable`<`T3`\> |
| `source4` | `Iterable`<`T4`\> |
| `source5` | `Iterable`<`T5`\> |
| `func` | (`item1`: `T1`, `item2`: `T2`, `item3`: `T3`, `item4`: `T4`, `item5`: `T5`) => `TResult` |

#### Returns

`Iterable`<`TResult`\>

#### Defined in

[src/operators/zip.ts:8](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/zip.ts#L8)

▸ **zip**(`...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

[src/operators/zip.ts:9](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/zip.ts#L9)

___

### zipp

▸ **zipp**<`T1`, `T2`, `TResult`\>(`source2`, `func`): `Operator`<`T1`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T2`\> |
| `func` | (`item1`: `T1`, `item2`: `T2`) => `TResult` |

#### Returns

`Operator`<`T1`, `TResult`\>

#### Defined in

[src/operators/zip.ts:24](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/zip.ts#L24)

▸ **zipp**<`T1`, `T2`, `T3`, `TResult`\>(`source2`, `source3`, `func`): `Operator`<`T1`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T2`\> |
| `source3` | `Iterable`<`T3`\> |
| `func` | (`item1`: `T1`, `item2`: `T2`, `item3`: `T3`) => `TResult` |

#### Returns

`Operator`<`T1`, `TResult`\>

#### Defined in

[src/operators/zip.ts:25](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/zip.ts#L25)

▸ **zipp**<`T1`, `T2`, `T3`, `T4`, `TResult`\>(`source2`, `source3`, `source4`, `func`): `Operator`<`T1`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T2`\> |
| `source3` | `Iterable`<`T3`\> |
| `source4` | `Iterable`<`T4`\> |
| `func` | (`item1`: `T1`, `item2`: `T2`, `item3`: `T3`, `item4`: `T4`) => `TResult` |

#### Returns

`Operator`<`T1`, `TResult`\>

#### Defined in

[src/operators/zip.ts:26](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/zip.ts#L26)

▸ **zipp**<`T1`, `T2`, `T3`, `T4`, `T5`, `TResult`\>(`source2`, `source3`, `source4`, `source5`, `func`): `Operator`<`T1`, `TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source2` | `Iterable`<`T2`\> |
| `source3` | `Iterable`<`T3`\> |
| `source4` | `Iterable`<`T4`\> |
| `source5` | `Iterable`<`T5`\> |
| `func` | (`item1`: `T1`, `item2`: `T2`, `item3`: `T3`, `item4`: `T4`, `item5`: `T5`) => `TResult` |

#### Returns

`Operator`<`T1`, `TResult`\>

#### Defined in

[src/operators/zip.ts:27](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/zip.ts#L27)

▸ **zipp**(`...args`): `Operator`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Operator`<`any`, `any`\>

#### Defined in

[src/operators/zip.ts:28](https://github.com/kamoshi/powerseq/blob/abc2814/src/operators/zip.ts#L28)
