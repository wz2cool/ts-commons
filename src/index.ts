import { ArrayUtils } from "./utils/array.utils";
import { DateUtils } from "./utils/date.utils";
import { HttpUtils } from "./utils/http.utils";
import { NumberUtils } from "./utils/number.utils";
import { ObjectUtils } from "./utils/object.utils";
import { RegexUtils } from "./utils/regex.utils";
import { StringUtils } from "./utils/string.utils";
import { ThreadUtils } from "./utils/thread.utils";
import { ActionUtils } from "./utils/action.utils";
import { IOUtils } from "./utils/io.utils";
import { ExtUtils } from "./utils/ext.utils";

const isNumber = ObjectUtils.isNumber;
const isArray = ObjectUtils.isArray;
const isBoolean = ObjectUtils.isBoolean;
const isString = ObjectUtils.isString;
const isDate = ObjectUtils.isDate;
const isNull = ObjectUtils.isNull;
const isUndefinend = ObjectUtils.isUndefinend;
const hasValue = ObjectUtils.hasValue;
const ifHasValue = ObjectUtils.ifHasValue;
const isNullOrUndefined = ObjectUtils.isNullOrUndefined;
const getOrDefault = ObjectUtils.getOrDefault;
const isEmpty = ExtUtils.isEmpty;
const isNotEmpty = ExtUtils.isNotEmpty;
const contains = ExtUtils.contains;
const isBlank = StringUtils.isBlank;
const isNotBlank = StringUtils.isNotBlank;
const containsIgnoreCase = StringUtils.containsIgnoreCase;
const containsAny = ArrayUtils.containsAny;

export {
  ObjectUtils,
  StringUtils,
  NumberUtils,
  DateUtils,
  RegexUtils,
  HttpUtils,
  ArrayUtils,
  ThreadUtils,
  ActionUtils,
  IOUtils,
  isNumber,
  isArray,
  isBoolean,
  isString,
  isDate,
  isNull,
  isUndefinend,
  hasValue,
  isNullOrUndefined,
  getOrDefault,
  isEmpty,
  isNotEmpty,
  isBlank,
  isNotBlank,
  contains,
  containsAny,
  containsIgnoreCase,
  ifHasValue
};
