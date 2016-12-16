import * as assert from "assert";
import { Enumerable, every } from "../../src/index";

it('every', function () {
    assert.deepEqual(every([1, 2], x => x > 0), true);
    assert.deepEqual(Enumerable.from([1, 2]).every(x => x > 0), true);
    assert.deepEqual(Enumerable.from([1, 2]).every(x => x > 1), false);
});

export const linq = "All";