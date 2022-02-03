import { expect } from "chai";
import { describe } from "mocha";
import { ActionUtils } from "../../src/index";
describe(".actionUtils", () => {
  describe("#ifTrue", () => {
    it("should exec if true", () => {
      ActionUtils.ifTrue(true, () => {
        expect(true).to.be.eq(true);
      })
    });

    it("should not exec if false", () => {
      ActionUtils.ifTrue(false, () => {
        throw ("should not exec ")
      })
    })
  })

  describe("#ifFalse", () => {
    it("should exec if false", () => {
      ActionUtils.ifFalse(false, () => {
        expect(true).to.be.eq(true);
      })
    });

    it("should not exec if true", () => {
      ActionUtils.ifFalse(true, () => {
        throw ("should not exec ")
      })
    })
  })

});
