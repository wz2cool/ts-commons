import { expect, assert } from "chai";
import { contains, isEmpty, isNotEmpty, isNullOrUndefined } from "../../src";

describe(".ExtUtils", () => {
    describe('#isEmpty', () => {
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

    describe('#isNotEmpty', () => {
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

    describe('#contains', () => {
        it('should return true if value2 is contained in value1 array', () => {
            const value1 = [1, 2, 3];
            const value2 = 2;
            assert.equal(contains(value1, value2), true);
        });

        it('should return false if value2 is not contained in value1 array', () => {
            const value1 = [1, 2, 3];
            const value2 = 4;
            assert.equal(contains(value1, value2), false);
        });

        it('should return true if value2 is contained in value1 string', () => {
            const value1 = 'Hello, world!';
            const value2 = 'world';
            assert.equal(contains(value1, value2), true);
        });

        it('should return false if value2 is not contained in value1 string', () => {
            const value1 = 'Hello, world!';
            const value2 = 'universe';
            assert.equal(contains(value1, value2), false);
        });
    });
})


