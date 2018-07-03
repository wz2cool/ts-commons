import { expect } from "chai";
import { describe } from "mocha";
import { ObjectUtils } from "../../src";
describe(".ObjectUtils", () => {
  describe("#isNull", () => {
    it("should return true if value is null", () => {
      const testValue = null;
      const result = ObjectUtils.isNull(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is undefined", () => {
      const testValue = undefined;
      const result = ObjectUtils.isNull(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return false if value is object", () => {
      const testValue = {};
      const result = ObjectUtils.isNull(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isUndefinend", () => {
    it("should return false if value is null", () => {
      const testValue = null;
      const result = ObjectUtils.isUndefinend(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return true if value is undefined", () => {
      const testValue = undefined;
      const result = ObjectUtils.isUndefinend(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is object", () => {
      const testValue = {};
      const result = ObjectUtils.isUndefinend(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isNullOrUndefined", () => {
    it("should return true if value is null", () => {
      const testValue = null;
      const result = ObjectUtils.isNullOrUndefined(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return true if value is undefined", () => {
      const testValue = undefined;
      const result = ObjectUtils.isNullOrUndefined(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is number", () => {
      const testValue = 123;
      const result = ObjectUtils.isNullOrUndefined(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return false if value is string", () => {
      const testValue = "test";
      const result = ObjectUtils.isNullOrUndefined(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return false if value is object", () => {
      const testValue: any = {};
      const result = ObjectUtils.isNullOrUndefined(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isArray", () => {
    it("should return false if value is null", () => {
      const testValue = null;
      const result = ObjectUtils.isArray(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return false if value is undefined", () => {
      const testValue = undefined;
      const result = ObjectUtils.isArray(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return false if value is object", () => {
      const testValue: any = {};
      const result = ObjectUtils.isArray(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return true if value is string array", () => {
      const testValue: string[] = [];
      const result = ObjectUtils.isArray(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return true if value is any array", () => {
      const testValue: any[] = [];
      const result = ObjectUtils.isArray(testValue);
      expect(true).to.be.eq(result);
    });
  });

  describe("#isDate", () => {
    it("should return true if value is new Date()", () => {
      const testValue = new Date();
      const result = ObjectUtils.isDate(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is 123", () => {
      const testValue = "123";
      const result = ObjectUtils.isDate(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isString", () => {
    it("should return true if value is 'test'", () => {
      const testValue = "test";
      const result = ObjectUtils.isString(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is 123", () => {
      const testValue = 123;
      const result = ObjectUtils.isString(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return false if value is null", () => {
      const testValue = null;
      const result = ObjectUtils.isString(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isNumber", () => {
    it("should return true if value is 123", () => {
      const testValue = 123;
      const result = ObjectUtils.isNumber(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is 'test'", () => {
      const testValue = "test";
      const result = ObjectUtils.isNumber(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isBoolean", () => {
    it("should return true if value is true", () => {
      const testValue = true;
      const result = ObjectUtils.isBoolean(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is 'test'", () => {
      const testValue = "test";
      const result = ObjectUtils.isBoolean(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#toSafeString", () => {
    it("shoud return '' if value is null", () => {
      const value = null;
      const result = ObjectUtils.toSafeString(value);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is undefined", () => {
      const value = undefined;
      const result = ObjectUtils.toSafeString(value);
      expect("").to.be.eq(result);
    });
    it("should return '1' if value is 1", () => {
      const value = 1;
      const result = ObjectUtils.toSafeString(value);
      expect("1").to.be.eq(result);
    });
    it("should return '1' if value is '1'", () => {
      const value = "1";
      const result = ObjectUtils.toSafeString(value);
      expect("1").to.be.eq(result);
    });
    it("should return 'true' if value is true", () => {
      const value = true;
      const result = ObjectUtils.toSafeString(value);
      expect("true").to.be.eq(result);
    });
    it("should return 'true' if value is [1,2]", () => {
      const value = [1, 2];
      const result = ObjectUtils.toSafeString(value);
      expect("1,2").to.be.eq(result);
    });
  });

  describe("#getProperty", () => {
    class Student {
      name: string;
      age: number;
    }
    it("should return undefind if don't have property", () => {
      const student = new Student();
      const result = ObjectUtils.getProperty(student, "name");
      expect(undefined).to.be.eq(result);
    });
    it("should return 'test' if name is 'test'", () => {
      const student = new Student();
      student.name = "test";
      const result = ObjectUtils.getProperty(student, "name");
      expect("test").to.be.eq(result);
    });
  });

  describe("#setProperty", () => {
    class Student {
      name: string;
      age: number;
    }
    it("should set success", () => {
      const student = new Student();
      ObjectUtils.setProperty(student, "name", "test");
      expect("test").to.be.eq(student.name);
    });
  });

  describe("#getClassName", () => {
    class Student {
      name: string;
      age: number;
    }

    it("should return '' if value is undefinend", () => {
      const value = undefined;
      const result = ObjectUtils.getClassName(value);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is null", () => {
      const value = null;
      const result = ObjectUtils.getClassName(value);
      expect("").to.be.eq(result);
    });
    it("should return 'Student' if value is student", () => {
      const value = new Student();
      const result = ObjectUtils.getClassName(value);
      expect("Student").to.be.eq(result);
    });
    it("should return 'String' if value is 'test'", () => {
      const value = "test";
      const result = ObjectUtils.getClassName(value);
      expect("String").to.be.eq(result);
    });
    it("should return 'number' if value is 123", () => {
      const value = 123;
      const result = ObjectUtils.getClassName(value);
      expect("Number").to.be.eq(result);
    });
    it("should return 'Student' if value is Student", () => {
      const value = Student;
      const result = ObjectUtils.getClassName(value);
      expect("Student").to.be.eq(result);
    });
  });

  describe("#createObject", () => {
    class Student {
      name: string;
      age: number;
    }
    it("should return null if value is null", () => {
      const value = null;
      const result = ObjectUtils.createObject(value);
      expect(null).to.be.eq(result);
    });
    it("should return null if value is undefined", () => {
      const value = undefined;
      const result = ObjectUtils.createObject(value);
      expect(null).to.be.eq(result);
    });
    it("should return student if value is student", () => {
      const value = Student;
      const result = ObjectUtils.createObject(value);
      expect(true).to.be.eq(result instanceof Student);
    });
  });

  describe("#getPropertyName", () => {
    class Student {
      name: string;
      age: number;
    }
    it("should return 'name' if (s)=> s.name", () => {
      const result = ObjectUtils.getPropertyName<Student>(
        // tslint:disable-next-line:trailing-comma
        student => student.name
      );
      expect("name").to.be.eq(result);
    });
    it("should return '' if null", () => {
      const result = ObjectUtils.getPropertyName<Student>(null);
      expect("").to.be.eq(result);
    });
  });
});
