import { expect } from "chai";
import { isEmpty, isNotEmpty } from "../../src";

describe(".ExtUtils", () => {
    describe('isEmpty', () => {
        it('should return true for empty string', () => {
            expect(isEmpty('')).to.eq(true);
        });

        it('should return true for null', () => {
            expect(isEmpty(undefined)).to.eq(true);
        });

        it('should return false for non-empty string', () => {
            expect(isEmpty('test')).to.eq(false);
        });

        it('should return true for empty array', () => {
            expect(isEmpty([])).to.eq(true);
        });

        it('should return false for non-empty array', () => {
            expect(isEmpty([1, 2, 3])).to.eq(false);
        });
    });

    describe('isNotEmpty', () => {
        it('should return true for a non-empty array', () => {
            expect(isNotEmpty([1, 2, 3])).to.be.true;
        });

        it('should return false for an empty array', () => {
            expect(isNotEmpty([])).to.be.false;
        });

        it('should return true for a non-empty string', () => {
            expect(isNotEmpty('test')).to.be.true;
        });

        it('should return false for an empty string', () => {
            expect(isNotEmpty('')).to.be.false;
        });

        it('should return false for null', () => {
            expect(isNotEmpty(null)).to.be.false;
        });

        it('should return false for undefined', () => {
            expect(isNotEmpty(undefined)).to.be.false;
        });
    });
})


