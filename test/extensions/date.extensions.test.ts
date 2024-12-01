import { expect } from "chai";
import { DateUtils, ObjectUtils, StringUtils } from "../../src/index";
import "../../src/extensions/date.extensions"

describe(".DateUtils", () => {


  describe('DateUtils', () => {
    describe('#addYears', () => {
      it('should correctly add years to a date', () => {
          const originalDate = new Date(2018, 5, 1); // June 1, 2018
        const yearsToAdd = 1;
        const expectedDate = new Date(2019, 5, 1); // June 1, 2019

        const resultDate = DateUtils.addYears(originalDate, yearsToAdd);

        expect(resultDate).to.deep.equal(expectedDate);
        expect(originalDate).to.not.equal(expectedDate); // Ensure original date is unchanged
      });

      it('should correctly subtract years from a date', () => {
        const originalDate = new Date(2018, 5, 1); // June 1, 2018
        const yearsToSubtract = -1;
        const expectedDate = new Date(2017, 5, 1); // June 1, 2017

        const resultDate = DateUtils.addYears(originalDate, yearsToSubtract);

        expect(resultDate).to.deep.equal(expectedDate);
        expect(originalDate).to.not.equal(expectedDate); // Ensure original date is unchanged
      });

      it('should handle dates in different months correctly', () => {
        const originalDate = new Date(2018, 11, 30); // December 30, 2018
        const yearsToAdd = 1;
        const expectedDate = new Date(2019, 11, 30); // December 30, 2019

        const resultDate = DateUtils.addYears(originalDate, yearsToAdd);

        expect(resultDate).to.deep.equal(expectedDate);
        expect(originalDate).to.not.equal(expectedDate); // Ensure original date is unchanged
      });

      // Add more test cases as needed...
    });
  });
});
