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

const hasValue = ObjectUtils.hasValue;
const isNullOrUndefined = ObjectUtils.isNullOrUndefined;
const getOrDefault = ObjectUtils.getOrDefault;
const isEmpty = ExtUtils.isEmpty;
const isNotEmpty = ExtUtils.isNotEmpty;


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
  hasValue,
  isNullOrUndefined,
  getOrDefault,
  isEmpty,
  isNotEmpty
};
