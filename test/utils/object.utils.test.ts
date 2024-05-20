import { expect } from "chai";
import { describe } from "mocha";
import { ObjectUtils } from "../../src/index";
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
      const testValue = false;
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
    it("should return '--' if value is null and default value is '--'", () => {
      const value = null;
      const result = ObjectUtils.toSafeString(value, "--");
      expect("--").to.be.eq(result);
    });
  });

  class Band {
    public name: string;
  }

  class ClassRoom {
    public name: string;
    public band: Band;
  }
  class Student {
    public name: string;
    public age: number;
    public classroom: ClassRoom;
  }
  describe("#getProperty", () => {

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
    it("should return undefined, if object is null", () => {
      let student: any = new Student();
      student = undefined;
      const result = ObjectUtils.getProperty(student, "name", "defaultValue");
      expect("defaultValue").to.be.eq(result);
    })
  });

  describe("#getProperty2", () => {
    it("should get class room name", () => {
      const student = new Student();
      const classroom = new ClassRoom();
      classroom.name = "class room 1";
      student.classroom = classroom;
      student.name = "student 1";
      const classRoomName = ObjectUtils.getProperty2(student, "classroom", "name");
      expect("class room 1").to.eq(classRoomName);
    });

    it("should return undefined", () => {
      const student = new Student();
      const classRoomName = ObjectUtils.getProperty2(student, "classroom", "name");
      expect(undefined).to.eq(classRoomName);
    })

    it("should return default value", () => {
      const student = new Student();
      const classRoomName = ObjectUtils.getProperty2(student, "classroom", "name", "defaultValue");
      expect("defaultValue").to.eq(classRoomName);
    })
  });

  describe("#getProperty3", () => {
    it("should return default value", () => {
      const student = new Student();
      const classRoomName = ObjectUtils.getProperty3(student, "classroom", "band", "name", "defaultValue");
      expect("defaultValue").to.eq(classRoomName);
    })

    it("get band name", () => {
      const student = new Student();
      const classroom = new ClassRoom();
      const band = new Band();
      band.name = "band 1";
      student.classroom = classroom;
      classroom.band = band;
      const bandName = ObjectUtils.getProperty3(student, "classroom", "band", "name", "defaultValue");
      expect("band 1").to.eq(bandName);
    })
  });

  describe("#setProperty", () => {
    class Student {
      public name: string;
      public age: number;
    }
    it("should set success", () => {
      const student = new Student();
      ObjectUtils.setProperty(student, "name", "test");
      expect("test").to.be.eq(student.name);
    });
  });

  describe("#createObject", () => {
    class Student {
      public name: string;
      public age: number;
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
      public name: string;
      public age: number;
    }
    it("should return 'name' if (s)=> s.name", () => {
      const result = ObjectUtils.getPropertyName<Student>("name");
      expect("name").to.be.eq(result);
    });
  });

  describe("#values", () => {
    class Student {
      public name: string;
      public age: number;
    }
    it("should return ['Jack', 20]", () => {
      const s = new Student();
      s.name = "Jack";
      s.age = 20;
      const result = ObjectUtils.values(s);
      expect(2).to.be.eq(result.length);
      expect("Jack").to.be.eq(result[0]);
      expect(20).to.be.eq(result[1]);
    });

    it("should return []", () => {
      const result = ObjectUtils.values(null);
      expect(0).to.be.eq(result.length);
    });
  });

  describe("#getOrDefault", () => {
    it("should return 1, if value1 is not null", () => {
      const value1: string | undefined = "1";
      const value2: string | undefined = "2";
      const result = ObjectUtils.getOrDefault(value1, value2, "defaultValue");
      expect("1").to.be.eq(result);
    });

    it("should return 2, if  value2 is not null and value1 is null", () => {
      const value1: string | undefined = undefined;
      const value2: string | undefined = "2";
      const result = ObjectUtils.getOrDefault(value1, value2, "defaultValue");
      expect("2").to.be.eq(result);
    });

    it("should return 'defaultValue', if all values is null", () => {
      const value1: string | undefined = undefined;
      const value2: string | undefined = undefined;
      const result = ObjectUtils.getOrDefault<string | undefined>(value1, value2, "defaultValue");
      expect("defaultValue").to.be.eq(result);
    })

    it("should return 'defaultValue', if all values is null", () => {
      const value1: string | undefined = undefined;
      const value2: string | undefined = undefined;
      const value3: string | undefined = undefined;
      const result = ObjectUtils.getOrDefault<string | undefined>(value1, value2, value3, "defaultValue");
      expect("defaultValue").to.be.eq(result);
    })

    it("should return '', if first value is not null", () => {
      const value1: string | undefined = undefined;
      const value2: string | undefined = "2";
      const result = ObjectUtils.getOrDefault(value1, value2, "defaultValue");
      expect("2").to.be.eq(result);
    });

    it("should return  [1,2,3] if value is not null or empty", () => {
      const target = [1, 2, 3];
      const value: number[] | undefined = target;
      const result = ObjectUtils.getOrDefault(value, []);
      expect(target).to.be.eq(result);
    });

    it("should return if [] if value is not null or empty and default value is []", () => {
      const target = [];
      const value: number[] | undefined = undefined;
      const result = ObjectUtils.getOrDefault<number[] | undefined>(
        value,
        target
      );
      console.log(`length: ${result.length}`);
      expect(target).to.be.eq(result);
    });
  });

  describe("#hasValue", () => {
    it("should return true if object is 1", () => {
      const target = 1;
      const result = ObjectUtils.hasValue(target);
      expect(true).to.be.eq(result);
    });

    it("should return true if object is 'str'", () => {
      const target = "str";
      const result = ObjectUtils.hasValue(target);
      expect(true).to.be.eq(result);
    });

    it("should return true if object is undefined", () => {
      const target = undefined;
      const result = ObjectUtils.hasValue(target);
      expect(false).to.be.eq(result);
    });

    it("should return true if object is null", () => {
      const target = null;
      const result = ObjectUtils.hasValue(target);
      expect(false).to.be.eq(result);
    });
  });

  describe("#getDescendantProperty", () => {
    it("should return undefined if object is undefined", () => {
      const obj = undefined;
      const result = ObjectUtils.getDescendantProperty(obj, "1");
      expect(undefined).to.be.eq(result);
    });

    it("should return 1 if can find sub1", () => {
      const obj = { sub1: 1 };
      const result = ObjectUtils.getDescendantProperty(obj, "sub1");
      expect(1).to.be.eq(result);
    });

    it("should return 2 if can find sub2", () => {
      const obj = {
        sub1: {
          sub2: 2,
        },
      };
      const result = ObjectUtils.getDescendantProperty(obj, "sub1", "sub2");
      expect(2).to.be.eq(result);
    });

    it("should return undefined if cannot find property", () => {
      const obj = { sub1: 1 };
      const result = ObjectUtils.getDescendantProperty(obj, "sub2");
      expect(undefined).to.be.eq(result);
    });

    it("should return object if pathes is empty", () => {
      const obj = 1;
      const result = ObjectUtils.getDescendantProperty(obj);
      expect(1).to.be.eq(result);
    });
  });
});
