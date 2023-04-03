import * as assert from "assert";
import { Enumerable, throww } from "../../src/enumerable";

it('throww', function () {
    assert.throws(() => {
        Array.from(throww<string>(new Error("exception ...")));
    }, /exception .../);
});

export const samples = [
    () => throww(new Error("exception ..."))
];

export const rxjs = "throw";