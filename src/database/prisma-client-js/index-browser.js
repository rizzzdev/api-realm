
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  fullName: 'fullName',
  gender: 'gender',
  avatarUrl: 'avatarUrl',
  signedUpAt: 'signedUpAt',
  deletedAt: 'deletedAt',
  role: 'role'
};

exports.Prisma.MaterialsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  imageUrl: 'imageUrl',
  materialString: 'materialString',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ActivitiesScalarFieldEnum = {
  id: 'id',
  materialId: 'materialId',
  userId: 'userId'
};

exports.Prisma.TokensScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  loggedInAt: 'loggedInAt',
  loggedOutAt: 'loggedOutAt',
  refreshToken: 'refreshToken'
};

exports.Prisma.TestsScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.QuizzesScalarFieldEnum = {
  id: 'id',
  materialId: 'materialId',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.QuestionsScalarFieldEnum = {
  id: 'id',
  testId: 'testId',
  quizId: 'quizId',
  question: 'question',
  imageUrl: 'imageUrl',
  optionA: 'optionA',
  optionB: 'optionB',
  optionC: 'optionC',
  optionD: 'optionD',
  optionE: 'optionE',
  correctOption: 'correctOption',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.MarksScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  testId: 'testId',
  quizId: 'quizId',
  mark: 'mark',
  markedAt: 'markedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UsersOrderByRelevanceFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  fullName: 'fullName',
  avatarUrl: 'avatarUrl'
};

exports.Prisma.MaterialsOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  imageUrl: 'imageUrl',
  materialString: 'materialString'
};

exports.Prisma.ActivitiesOrderByRelevanceFieldEnum = {
  id: 'id',
  materialId: 'materialId',
  userId: 'userId'
};

exports.Prisma.TokensOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  refreshToken: 'refreshToken'
};

exports.Prisma.TestsOrderByRelevanceFieldEnum = {
  id: 'id'
};

exports.Prisma.QuizzesOrderByRelevanceFieldEnum = {
  id: 'id',
  materialId: 'materialId'
};

exports.Prisma.QuestionsOrderByRelevanceFieldEnum = {
  id: 'id',
  testId: 'testId',
  quizId: 'quizId',
  question: 'question',
  imageUrl: 'imageUrl',
  optionA: 'optionA',
  optionB: 'optionB',
  optionC: 'optionC',
  optionD: 'optionD',
  optionE: 'optionE',
  correctOption: 'correctOption'
};

exports.Prisma.MarksOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  testId: 'testId',
  quizId: 'quizId'
};
exports.Gender = exports.$Enums.Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

exports.Role = exports.$Enums.Role = {
  STUDENT: 'STUDENT',
  ADMIN: 'ADMIN'
};

exports.Prisma.ModelName = {
  Users: 'Users',
  Materials: 'Materials',
  Activities: 'Activities',
  Tokens: 'Tokens',
  Tests: 'Tests',
  Quizzes: 'Quizzes',
  Questions: 'Questions',
  Marks: 'Marks'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
