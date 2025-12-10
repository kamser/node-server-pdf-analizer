import {describe, expect, it} from "vitest";
import { sum } from "#utils/sum.js";

describe("This is the title of the test set", () => {
    it("This is a unit test of the test set", () => {
        expect(sum(1, 2)).toBe(3);
    })
})