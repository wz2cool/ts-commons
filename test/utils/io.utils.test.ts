import { expect } from "chai";
import { describe } from "mocha";
import { IOUtils } from "../../src";

describe(".ioUtils", () => {
  describe("#getExtension", () => {
    it("should return 'pdf'", async () => {
      const url =
        "https://xx.xx.com/download/pdf/DM/PRD/JUCHAO/EXCHANGE/2022/2022-07/2022-07-16/a50c6b00f52211eca717fa163e26e5de.pdf";
      const extName = IOUtils.getExtension(url);
      expect(".pdf").to.be.eq(extName);
    });

    it("should return ''", async () => {
      const url = "xxxxxxxxxxxxxxxxxxxx";
      const extName = IOUtils.getExtension(url);
      expect("").to.be.eq(extName);
    });
  });
});
