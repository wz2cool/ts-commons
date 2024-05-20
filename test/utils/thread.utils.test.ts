import { expect } from "chai";
import { describe } from "mocha";
import { ThreadUtils } from "../../src";

describe(".threadUtils", () => {
  describe("#sleep", () => {
    it("should wait 100ms", async () => {
      const beginTime = new Date().getTime();
      await ThreadUtils.sleep(100);
      const endTime = new Date().getTime();
      const diff = endTime - beginTime;
      console.log(`endTime: ${endTime}; startTime: ${beginTime}; diff: ${diff}`);
      const result = diff >= 100;
      expect(true).to.be.eq(result);
    });
  });
});
