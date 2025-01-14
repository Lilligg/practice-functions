import myEvery from "./every";
import { strict as assert } from "assert";

describe("myEvery", function () {
  it("myEvery([7, 8, 9, 10, 1], (num=1) => num>6) should return false", () => {
    assert.equal(
      myEvery([7, 8, 9, 10, 1], (num) => num > 6),
      false,
    );
  });
  it("myEvery([7, 8, 9, 10, 1], (num=1) => num>0) should return true", () => {
    assert.equal(
      myEvery([7, 8, 9, 10, 1], (num) => num > 0),
      true,
    );
  });
});
