
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Backup
 * 
 */
export type Backup = $Result.DefaultSelection<Prisma.$BackupPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Materials
 * 
 */
export type Materials = $Result.DefaultSelection<Prisma.$MaterialsPayload>
/**
 * Model Activities
 * 
 */
export type Activities = $Result.DefaultSelection<Prisma.$ActivitiesPayload>
/**
 * Model Tokens
 * 
 */
export type Tokens = $Result.DefaultSelection<Prisma.$TokensPayload>
/**
 * Model Tests
 * 
 */
export type Tests = $Result.DefaultSelection<Prisma.$TestsPayload>
/**
 * Model Quizzes
 * 
 */
export type Quizzes = $Result.DefaultSelection<Prisma.$QuizzesPayload>
/**
 * Model Questions
 * 
 */
export type Questions = $Result.DefaultSelection<Prisma.$QuestionsPayload>
/**
 * Model Marks
 * 
 */
export type Marks = $Result.DefaultSelection<Prisma.$MarksPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Role: {
  STUDENT: 'STUDENT',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ActivityType: {
  MATERIAL: 'MATERIAL',
  QUIZ: 'QUIZ',
  TEST: 'TEST',
  SIMULATION: 'SIMULATION'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Backups
 * const backups = await prisma.backup.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Backups
   * const backups = await prisma.backup.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.backup`: Exposes CRUD operations for the **Backup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Backups
    * const backups = await prisma.backup.findMany()
    * ```
    */
  get backup(): Prisma.BackupDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.materials`: Exposes CRUD operations for the **Materials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.materials.findMany()
    * ```
    */
  get materials(): Prisma.MaterialsDelegate<ExtArgs>;

  /**
   * `prisma.activities`: Exposes CRUD operations for the **Activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activities.findMany()
    * ```
    */
  get activities(): Prisma.ActivitiesDelegate<ExtArgs>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **Tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.TokensDelegate<ExtArgs>;

  /**
   * `prisma.tests`: Exposes CRUD operations for the **Tests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.tests.findMany()
    * ```
    */
  get tests(): Prisma.TestsDelegate<ExtArgs>;

  /**
   * `prisma.quizzes`: Exposes CRUD operations for the **Quizzes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quizzes.findMany()
    * ```
    */
  get quizzes(): Prisma.QuizzesDelegate<ExtArgs>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **Questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.QuestionsDelegate<ExtArgs>;

  /**
   * `prisma.marks`: Exposes CRUD operations for the **Marks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marks
    * const marks = await prisma.marks.findMany()
    * ```
    */
  get marks(): Prisma.MarksDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Backup: 'Backup',
    Users: 'Users',
    Materials: 'Materials',
    Activities: 'Activities',
    Tokens: 'Tokens',
    Tests: 'Tests',
    Quizzes: 'Quizzes',
    Questions: 'Questions',
    Marks: 'Marks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "backup" | "users" | "materials" | "activities" | "tokens" | "tests" | "quizzes" | "questions" | "marks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Backup: {
        payload: Prisma.$BackupPayload<ExtArgs>
        fields: Prisma.BackupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BackupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BackupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackupPayload>
          }
          findFirst: {
            args: Prisma.BackupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BackupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackupPayload>
          }
          findMany: {
            args: Prisma.BackupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackupPayload>[]
          }
          create: {
            args: Prisma.BackupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackupPayload>
          }
          createMany: {
            args: Prisma.BackupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BackupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackupPayload>[]
          }
          delete: {
            args: Prisma.BackupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackupPayload>
          }
          update: {
            args: Prisma.BackupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackupPayload>
          }
          deleteMany: {
            args: Prisma.BackupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BackupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BackupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackupPayload>
          }
          aggregate: {
            args: Prisma.BackupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackup>
          }
          groupBy: {
            args: Prisma.BackupGroupByArgs<ExtArgs>
            result: $Utils.Optional<BackupGroupByOutputType>[]
          }
          count: {
            args: Prisma.BackupCountArgs<ExtArgs>
            result: $Utils.Optional<BackupCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Materials: {
        payload: Prisma.$MaterialsPayload<ExtArgs>
        fields: Prisma.MaterialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          findFirst: {
            args: Prisma.MaterialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          findMany: {
            args: Prisma.MaterialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>[]
          }
          create: {
            args: Prisma.MaterialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          createMany: {
            args: Prisma.MaterialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>[]
          }
          delete: {
            args: Prisma.MaterialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          update: {
            args: Prisma.MaterialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          deleteMany: {
            args: Prisma.MaterialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaterialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          aggregate: {
            args: Prisma.MaterialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterials>
          }
          groupBy: {
            args: Prisma.MaterialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialsCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialsCountAggregateOutputType> | number
          }
        }
      }
      Activities: {
        payload: Prisma.$ActivitiesPayload<ExtArgs>
        fields: Prisma.ActivitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          findFirst: {
            args: Prisma.ActivitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          findMany: {
            args: Prisma.ActivitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>[]
          }
          create: {
            args: Prisma.ActivitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          createMany: {
            args: Prisma.ActivitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>[]
          }
          delete: {
            args: Prisma.ActivitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          update: {
            args: Prisma.ActivitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          deleteMany: {
            args: Prisma.ActivitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          aggregate: {
            args: Prisma.ActivitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivities>
          }
          groupBy: {
            args: Prisma.ActivitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivitiesCountArgs<ExtArgs>
            result: $Utils.Optional<ActivitiesCountAggregateOutputType> | number
          }
        }
      }
      Tokens: {
        payload: Prisma.$TokensPayload<ExtArgs>
        fields: Prisma.TokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findFirst: {
            args: Prisma.TokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findMany: {
            args: Prisma.TokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          create: {
            args: Prisma.TokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          createMany: {
            args: Prisma.TokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          delete: {
            args: Prisma.TokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          update: {
            args: Prisma.TokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          deleteMany: {
            args: Prisma.TokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.TokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      Tests: {
        payload: Prisma.$TestsPayload<ExtArgs>
        fields: Prisma.TestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestsPayload>
          }
          findFirst: {
            args: Prisma.TestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestsPayload>
          }
          findMany: {
            args: Prisma.TestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestsPayload>[]
          }
          create: {
            args: Prisma.TestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestsPayload>
          }
          createMany: {
            args: Prisma.TestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestsPayload>[]
          }
          delete: {
            args: Prisma.TestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestsPayload>
          }
          update: {
            args: Prisma.TestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestsPayload>
          }
          deleteMany: {
            args: Prisma.TestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestsPayload>
          }
          aggregate: {
            args: Prisma.TestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTests>
          }
          groupBy: {
            args: Prisma.TestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestsCountArgs<ExtArgs>
            result: $Utils.Optional<TestsCountAggregateOutputType> | number
          }
        }
      }
      Quizzes: {
        payload: Prisma.$QuizzesPayload<ExtArgs>
        fields: Prisma.QuizzesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizzesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizzesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzesPayload>
          }
          findFirst: {
            args: Prisma.QuizzesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizzesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzesPayload>
          }
          findMany: {
            args: Prisma.QuizzesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzesPayload>[]
          }
          create: {
            args: Prisma.QuizzesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzesPayload>
          }
          createMany: {
            args: Prisma.QuizzesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizzesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzesPayload>[]
          }
          delete: {
            args: Prisma.QuizzesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzesPayload>
          }
          update: {
            args: Prisma.QuizzesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzesPayload>
          }
          deleteMany: {
            args: Prisma.QuizzesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizzesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizzesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzesPayload>
          }
          aggregate: {
            args: Prisma.QuizzesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizzes>
          }
          groupBy: {
            args: Prisma.QuizzesGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizzesGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizzesCountArgs<ExtArgs>
            result: $Utils.Optional<QuizzesCountAggregateOutputType> | number
          }
        }
      }
      Questions: {
        payload: Prisma.$QuestionsPayload<ExtArgs>
        fields: Prisma.QuestionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findFirst: {
            args: Prisma.QuestionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findMany: {
            args: Prisma.QuestionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          create: {
            args: Prisma.QuestionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          createMany: {
            args: Prisma.QuestionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          delete: {
            args: Prisma.QuestionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          update: {
            args: Prisma.QuestionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          deleteMany: {
            args: Prisma.QuestionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.QuestionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      Marks: {
        payload: Prisma.$MarksPayload<ExtArgs>
        fields: Prisma.MarksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          findFirst: {
            args: Prisma.MarksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          findMany: {
            args: Prisma.MarksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>[]
          }
          create: {
            args: Prisma.MarksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          createMany: {
            args: Prisma.MarksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>[]
          }
          delete: {
            args: Prisma.MarksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          update: {
            args: Prisma.MarksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          deleteMany: {
            args: Prisma.MarksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          aggregate: {
            args: Prisma.MarksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarks>
          }
          groupBy: {
            args: Prisma.MarksGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarksGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarksCountArgs<ExtArgs>
            result: $Utils.Optional<MarksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    tokens: number
    marks: number
    activities: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UsersCountOutputTypeCountTokensArgs
    marks?: boolean | UsersCountOutputTypeCountMarksArgs
    activities?: boolean | UsersCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivitiesWhereInput
  }


  /**
   * Count Type MaterialsCountOutputType
   */

  export type MaterialsCountOutputType = {
    activity: number
  }

  export type MaterialsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | MaterialsCountOutputTypeCountActivityArgs
  }

  // Custom InputTypes
  /**
   * MaterialsCountOutputType without action
   */
  export type MaterialsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialsCountOutputType
     */
    select?: MaterialsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialsCountOutputType without action
   */
  export type MaterialsCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivitiesWhereInput
  }


  /**
   * Count Type TestsCountOutputType
   */

  export type TestsCountOutputType = {
    activity: number
    questions: number
    mark: number
  }

  export type TestsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | TestsCountOutputTypeCountActivityArgs
    questions?: boolean | TestsCountOutputTypeCountQuestionsArgs
    mark?: boolean | TestsCountOutputTypeCountMarkArgs
  }

  // Custom InputTypes
  /**
   * TestsCountOutputType without action
   */
  export type TestsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestsCountOutputType
     */
    select?: TestsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestsCountOutputType without action
   */
  export type TestsCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivitiesWhereInput
  }

  /**
   * TestsCountOutputType without action
   */
  export type TestsCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
  }

  /**
   * TestsCountOutputType without action
   */
  export type TestsCountOutputTypeCountMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksWhereInput
  }


  /**
   * Count Type QuizzesCountOutputType
   */

  export type QuizzesCountOutputType = {
    questions: number
    marks: number
    activity: number
  }

  export type QuizzesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizzesCountOutputTypeCountQuestionsArgs
    marks?: boolean | QuizzesCountOutputTypeCountMarksArgs
    activity?: boolean | QuizzesCountOutputTypeCountActivityArgs
  }

  // Custom InputTypes
  /**
   * QuizzesCountOutputType without action
   */
  export type QuizzesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizzesCountOutputType
     */
    select?: QuizzesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizzesCountOutputType without action
   */
  export type QuizzesCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
  }

  /**
   * QuizzesCountOutputType without action
   */
  export type QuizzesCountOutputTypeCountMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksWhereInput
  }

  /**
   * QuizzesCountOutputType without action
   */
  export type QuizzesCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivitiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Backup
   */

  export type AggregateBackup = {
    _count: BackupCountAggregateOutputType | null
    _min: BackupMinAggregateOutputType | null
    _max: BackupMaxAggregateOutputType | null
  }

  export type BackupMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type BackupMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type BackupCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type BackupMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type BackupMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type BackupCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type BackupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Backup to aggregate.
     */
    where?: BackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backups to fetch.
     */
    orderBy?: BackupOrderByWithRelationInput | BackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Backups
    **/
    _count?: true | BackupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BackupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BackupMaxAggregateInputType
  }

  export type GetBackupAggregateType<T extends BackupAggregateArgs> = {
        [P in keyof T & keyof AggregateBackup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackup[P]>
      : GetScalarType<T[P], AggregateBackup[P]>
  }




  export type BackupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BackupWhereInput
    orderBy?: BackupOrderByWithAggregationInput | BackupOrderByWithAggregationInput[]
    by: BackupScalarFieldEnum[] | BackupScalarFieldEnum
    having?: BackupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BackupCountAggregateInputType | true
    _min?: BackupMinAggregateInputType
    _max?: BackupMaxAggregateInputType
  }

  export type BackupGroupByOutputType = {
    id: string
    username: string
    password: string
    _count: BackupCountAggregateOutputType | null
    _min: BackupMinAggregateOutputType | null
    _max: BackupMaxAggregateOutputType | null
  }

  type GetBackupGroupByPayload<T extends BackupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BackupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BackupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BackupGroupByOutputType[P]>
            : GetScalarType<T[P], BackupGroupByOutputType[P]>
        }
      >
    >


  export type BackupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["backup"]>

  export type BackupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["backup"]>

  export type BackupSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }


  export type $BackupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Backup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
    }, ExtArgs["result"]["backup"]>
    composites: {}
  }

  type BackupGetPayload<S extends boolean | null | undefined | BackupDefaultArgs> = $Result.GetResult<Prisma.$BackupPayload, S>

  type BackupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BackupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BackupCountAggregateInputType | true
    }

  export interface BackupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Backup'], meta: { name: 'Backup' } }
    /**
     * Find zero or one Backup that matches the filter.
     * @param {BackupFindUniqueArgs} args - Arguments to find a Backup
     * @example
     * // Get one Backup
     * const backup = await prisma.backup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BackupFindUniqueArgs>(args: SelectSubset<T, BackupFindUniqueArgs<ExtArgs>>): Prisma__BackupClient<$Result.GetResult<Prisma.$BackupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Backup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BackupFindUniqueOrThrowArgs} args - Arguments to find a Backup
     * @example
     * // Get one Backup
     * const backup = await prisma.backup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BackupFindUniqueOrThrowArgs>(args: SelectSubset<T, BackupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BackupClient<$Result.GetResult<Prisma.$BackupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Backup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackupFindFirstArgs} args - Arguments to find a Backup
     * @example
     * // Get one Backup
     * const backup = await prisma.backup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BackupFindFirstArgs>(args?: SelectSubset<T, BackupFindFirstArgs<ExtArgs>>): Prisma__BackupClient<$Result.GetResult<Prisma.$BackupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Backup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackupFindFirstOrThrowArgs} args - Arguments to find a Backup
     * @example
     * // Get one Backup
     * const backup = await prisma.backup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BackupFindFirstOrThrowArgs>(args?: SelectSubset<T, BackupFindFirstOrThrowArgs<ExtArgs>>): Prisma__BackupClient<$Result.GetResult<Prisma.$BackupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Backups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Backups
     * const backups = await prisma.backup.findMany()
     * 
     * // Get first 10 Backups
     * const backups = await prisma.backup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const backupWithIdOnly = await prisma.backup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BackupFindManyArgs>(args?: SelectSubset<T, BackupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Backup.
     * @param {BackupCreateArgs} args - Arguments to create a Backup.
     * @example
     * // Create one Backup
     * const Backup = await prisma.backup.create({
     *   data: {
     *     // ... data to create a Backup
     *   }
     * })
     * 
     */
    create<T extends BackupCreateArgs>(args: SelectSubset<T, BackupCreateArgs<ExtArgs>>): Prisma__BackupClient<$Result.GetResult<Prisma.$BackupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Backups.
     * @param {BackupCreateManyArgs} args - Arguments to create many Backups.
     * @example
     * // Create many Backups
     * const backup = await prisma.backup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BackupCreateManyArgs>(args?: SelectSubset<T, BackupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Backups and returns the data saved in the database.
     * @param {BackupCreateManyAndReturnArgs} args - Arguments to create many Backups.
     * @example
     * // Create many Backups
     * const backup = await prisma.backup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Backups and only return the `id`
     * const backupWithIdOnly = await prisma.backup.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BackupCreateManyAndReturnArgs>(args?: SelectSubset<T, BackupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackupPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Backup.
     * @param {BackupDeleteArgs} args - Arguments to delete one Backup.
     * @example
     * // Delete one Backup
     * const Backup = await prisma.backup.delete({
     *   where: {
     *     // ... filter to delete one Backup
     *   }
     * })
     * 
     */
    delete<T extends BackupDeleteArgs>(args: SelectSubset<T, BackupDeleteArgs<ExtArgs>>): Prisma__BackupClient<$Result.GetResult<Prisma.$BackupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Backup.
     * @param {BackupUpdateArgs} args - Arguments to update one Backup.
     * @example
     * // Update one Backup
     * const backup = await prisma.backup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BackupUpdateArgs>(args: SelectSubset<T, BackupUpdateArgs<ExtArgs>>): Prisma__BackupClient<$Result.GetResult<Prisma.$BackupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Backups.
     * @param {BackupDeleteManyArgs} args - Arguments to filter Backups to delete.
     * @example
     * // Delete a few Backups
     * const { count } = await prisma.backup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BackupDeleteManyArgs>(args?: SelectSubset<T, BackupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Backups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Backups
     * const backup = await prisma.backup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BackupUpdateManyArgs>(args: SelectSubset<T, BackupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Backup.
     * @param {BackupUpsertArgs} args - Arguments to update or create a Backup.
     * @example
     * // Update or create a Backup
     * const backup = await prisma.backup.upsert({
     *   create: {
     *     // ... data to create a Backup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Backup we want to update
     *   }
     * })
     */
    upsert<T extends BackupUpsertArgs>(args: SelectSubset<T, BackupUpsertArgs<ExtArgs>>): Prisma__BackupClient<$Result.GetResult<Prisma.$BackupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Backups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackupCountArgs} args - Arguments to filter Backups to count.
     * @example
     * // Count the number of Backups
     * const count = await prisma.backup.count({
     *   where: {
     *     // ... the filter for the Backups we want to count
     *   }
     * })
    **/
    count<T extends BackupCountArgs>(
      args?: Subset<T, BackupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BackupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Backup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BackupAggregateArgs>(args: Subset<T, BackupAggregateArgs>): Prisma.PrismaPromise<GetBackupAggregateType<T>>

    /**
     * Group by Backup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BackupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BackupGroupByArgs['orderBy'] }
        : { orderBy?: BackupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BackupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Backup model
   */
  readonly fields: BackupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Backup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BackupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Backup model
   */ 
  interface BackupFieldRefs {
    readonly id: FieldRef<"Backup", 'String'>
    readonly username: FieldRef<"Backup", 'String'>
    readonly password: FieldRef<"Backup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Backup findUnique
   */
  export type BackupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backup
     */
    select?: BackupSelect<ExtArgs> | null
    /**
     * Filter, which Backup to fetch.
     */
    where: BackupWhereUniqueInput
  }

  /**
   * Backup findUniqueOrThrow
   */
  export type BackupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backup
     */
    select?: BackupSelect<ExtArgs> | null
    /**
     * Filter, which Backup to fetch.
     */
    where: BackupWhereUniqueInput
  }

  /**
   * Backup findFirst
   */
  export type BackupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backup
     */
    select?: BackupSelect<ExtArgs> | null
    /**
     * Filter, which Backup to fetch.
     */
    where?: BackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backups to fetch.
     */
    orderBy?: BackupOrderByWithRelationInput | BackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Backups.
     */
    cursor?: BackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Backups.
     */
    distinct?: BackupScalarFieldEnum | BackupScalarFieldEnum[]
  }

  /**
   * Backup findFirstOrThrow
   */
  export type BackupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backup
     */
    select?: BackupSelect<ExtArgs> | null
    /**
     * Filter, which Backup to fetch.
     */
    where?: BackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backups to fetch.
     */
    orderBy?: BackupOrderByWithRelationInput | BackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Backups.
     */
    cursor?: BackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Backups.
     */
    distinct?: BackupScalarFieldEnum | BackupScalarFieldEnum[]
  }

  /**
   * Backup findMany
   */
  export type BackupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backup
     */
    select?: BackupSelect<ExtArgs> | null
    /**
     * Filter, which Backups to fetch.
     */
    where?: BackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backups to fetch.
     */
    orderBy?: BackupOrderByWithRelationInput | BackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Backups.
     */
    cursor?: BackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backups.
     */
    skip?: number
    distinct?: BackupScalarFieldEnum | BackupScalarFieldEnum[]
  }

  /**
   * Backup create
   */
  export type BackupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backup
     */
    select?: BackupSelect<ExtArgs> | null
    /**
     * The data needed to create a Backup.
     */
    data: XOR<BackupCreateInput, BackupUncheckedCreateInput>
  }

  /**
   * Backup createMany
   */
  export type BackupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Backups.
     */
    data: BackupCreateManyInput | BackupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Backup createManyAndReturn
   */
  export type BackupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backup
     */
    select?: BackupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Backups.
     */
    data: BackupCreateManyInput | BackupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Backup update
   */
  export type BackupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backup
     */
    select?: BackupSelect<ExtArgs> | null
    /**
     * The data needed to update a Backup.
     */
    data: XOR<BackupUpdateInput, BackupUncheckedUpdateInput>
    /**
     * Choose, which Backup to update.
     */
    where: BackupWhereUniqueInput
  }

  /**
   * Backup updateMany
   */
  export type BackupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Backups.
     */
    data: XOR<BackupUpdateManyMutationInput, BackupUncheckedUpdateManyInput>
    /**
     * Filter which Backups to update
     */
    where?: BackupWhereInput
  }

  /**
   * Backup upsert
   */
  export type BackupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backup
     */
    select?: BackupSelect<ExtArgs> | null
    /**
     * The filter to search for the Backup to update in case it exists.
     */
    where: BackupWhereUniqueInput
    /**
     * In case the Backup found by the `where` argument doesn't exist, create a new Backup with this data.
     */
    create: XOR<BackupCreateInput, BackupUncheckedCreateInput>
    /**
     * In case the Backup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BackupUpdateInput, BackupUncheckedUpdateInput>
  }

  /**
   * Backup delete
   */
  export type BackupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backup
     */
    select?: BackupSelect<ExtArgs> | null
    /**
     * Filter which Backup to delete.
     */
    where: BackupWhereUniqueInput
  }

  /**
   * Backup deleteMany
   */
  export type BackupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Backups to delete
     */
    where?: BackupWhereInput
  }

  /**
   * Backup without action
   */
  export type BackupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backup
     */
    select?: BackupSelect<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    fullName: string | null
    gender: $Enums.Gender | null
    avatarUrl: string | null
    signedUpAt: Date | null
    deletedAt: Date | null
    role: $Enums.Role | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    fullName: string | null
    gender: $Enums.Gender | null
    avatarUrl: string | null
    signedUpAt: Date | null
    deletedAt: Date | null
    role: $Enums.Role | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    fullName: number
    gender: number
    avatarUrl: number
    signedUpAt: number
    deletedAt: number
    role: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullName?: true
    gender?: true
    avatarUrl?: true
    signedUpAt?: true
    deletedAt?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullName?: true
    gender?: true
    avatarUrl?: true
    signedUpAt?: true
    deletedAt?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullName?: true
    gender?: true
    avatarUrl?: true
    signedUpAt?: true
    deletedAt?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    password: string
    fullName: string
    gender: $Enums.Gender
    avatarUrl: string
    signedUpAt: Date
    deletedAt: Date | null
    role: $Enums.Role
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    gender?: boolean
    avatarUrl?: boolean
    signedUpAt?: boolean
    deletedAt?: boolean
    role?: boolean
    tokens?: boolean | Users$tokensArgs<ExtArgs>
    marks?: boolean | Users$marksArgs<ExtArgs>
    activities?: boolean | Users$activitiesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    gender?: boolean
    avatarUrl?: boolean
    signedUpAt?: boolean
    deletedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    gender?: boolean
    avatarUrl?: boolean
    signedUpAt?: boolean
    deletedAt?: boolean
    role?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | Users$tokensArgs<ExtArgs>
    marks?: boolean | Users$marksArgs<ExtArgs>
    activities?: boolean | Users$activitiesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      tokens: Prisma.$TokensPayload<ExtArgs>[]
      marks: Prisma.$MarksPayload<ExtArgs>[]
      activities: Prisma.$ActivitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      fullName: string
      gender: $Enums.Gender
      avatarUrl: string
      signedUpAt: Date
      deletedAt: Date | null
      role: $Enums.Role
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends Users$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Users$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany"> | Null>
    marks<T extends Users$marksArgs<ExtArgs> = {}>(args?: Subset<T, Users$marksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findMany"> | Null>
    activities<T extends Users$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Users$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly gender: FieldRef<"Users", 'Gender'>
    readonly avatarUrl: FieldRef<"Users", 'String'>
    readonly signedUpAt: FieldRef<"Users", 'DateTime'>
    readonly deletedAt: FieldRef<"Users", 'DateTime'>
    readonly role: FieldRef<"Users", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.tokens
   */
  export type Users$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    cursor?: TokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Users.marks
   */
  export type Users$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    where?: MarksWhereInput
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    cursor?: MarksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Users.activities
   */
  export type Users$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    where?: ActivitiesWhereInput
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    cursor?: ActivitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Materials
   */

  export type AggregateMaterials = {
    _count: MaterialsCountAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  export type MaterialsMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    materialString: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type MaterialsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    materialString: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type MaterialsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    materialString: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type MaterialsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    materialString?: true
    createdAt?: true
    deletedAt?: true
  }

  export type MaterialsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    materialString?: true
    createdAt?: true
    deletedAt?: true
  }

  export type MaterialsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    materialString?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type MaterialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to aggregate.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialsMaxAggregateInputType
  }

  export type GetMaterialsAggregateType<T extends MaterialsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterials[P]>
      : GetScalarType<T[P], AggregateMaterials[P]>
  }




  export type MaterialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialsWhereInput
    orderBy?: MaterialsOrderByWithAggregationInput | MaterialsOrderByWithAggregationInput[]
    by: MaterialsScalarFieldEnum[] | MaterialsScalarFieldEnum
    having?: MaterialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialsCountAggregateInputType | true
    _min?: MaterialsMinAggregateInputType
    _max?: MaterialsMaxAggregateInputType
  }

  export type MaterialsGroupByOutputType = {
    id: string
    title: string
    description: string
    imageUrl: string
    materialString: string
    createdAt: Date
    deletedAt: Date | null
    _count: MaterialsCountAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  type GetMaterialsGroupByPayload<T extends MaterialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
        }
      >
    >


  export type MaterialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    materialString?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    quiz?: boolean | Materials$quizArgs<ExtArgs>
    activity?: boolean | Materials$activityArgs<ExtArgs>
    _count?: boolean | MaterialsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materials"]>

  export type MaterialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    materialString?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["materials"]>

  export type MaterialsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    materialString?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type MaterialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | Materials$quizArgs<ExtArgs>
    activity?: boolean | Materials$activityArgs<ExtArgs>
    _count?: boolean | MaterialsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materials"
    objects: {
      quiz: Prisma.$QuizzesPayload<ExtArgs> | null
      activity: Prisma.$ActivitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      imageUrl: string
      materialString: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["materials"]>
    composites: {}
  }

  type MaterialsGetPayload<S extends boolean | null | undefined | MaterialsDefaultArgs> = $Result.GetResult<Prisma.$MaterialsPayload, S>

  type MaterialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaterialsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaterialsCountAggregateInputType | true
    }

  export interface MaterialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materials'], meta: { name: 'Materials' } }
    /**
     * Find zero or one Materials that matches the filter.
     * @param {MaterialsFindUniqueArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialsFindUniqueArgs>(args: SelectSubset<T, MaterialsFindUniqueArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Materials that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaterialsFindUniqueOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialsFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsFindFirstArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialsFindFirstArgs>(args?: SelectSubset<T, MaterialsFindFirstArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Materials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsFindFirstOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialsFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.materials.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.materials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialsWithIdOnly = await prisma.materials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialsFindManyArgs>(args?: SelectSubset<T, MaterialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Materials.
     * @param {MaterialsCreateArgs} args - Arguments to create a Materials.
     * @example
     * // Create one Materials
     * const Materials = await prisma.materials.create({
     *   data: {
     *     // ... data to create a Materials
     *   }
     * })
     * 
     */
    create<T extends MaterialsCreateArgs>(args: SelectSubset<T, MaterialsCreateArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Materials.
     * @param {MaterialsCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialsCreateManyArgs>(args?: SelectSubset<T, MaterialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialsCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialsWithIdOnly = await prisma.materials.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialsCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Materials.
     * @param {MaterialsDeleteArgs} args - Arguments to delete one Materials.
     * @example
     * // Delete one Materials
     * const Materials = await prisma.materials.delete({
     *   where: {
     *     // ... filter to delete one Materials
     *   }
     * })
     * 
     */
    delete<T extends MaterialsDeleteArgs>(args: SelectSubset<T, MaterialsDeleteArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Materials.
     * @param {MaterialsUpdateArgs} args - Arguments to update one Materials.
     * @example
     * // Update one Materials
     * const materials = await prisma.materials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialsUpdateArgs>(args: SelectSubset<T, MaterialsUpdateArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Materials.
     * @param {MaterialsDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.materials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialsDeleteManyArgs>(args?: SelectSubset<T, MaterialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const materials = await prisma.materials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialsUpdateManyArgs>(args: SelectSubset<T, MaterialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Materials.
     * @param {MaterialsUpsertArgs} args - Arguments to update or create a Materials.
     * @example
     * // Update or create a Materials
     * const materials = await prisma.materials.upsert({
     *   create: {
     *     // ... data to create a Materials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materials we want to update
     *   }
     * })
     */
    upsert<T extends MaterialsUpsertArgs>(args: SelectSubset<T, MaterialsUpsertArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.materials.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialsCountArgs>(
      args?: Subset<T, MaterialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialsAggregateArgs>(args: Subset<T, MaterialsAggregateArgs>): Prisma.PrismaPromise<GetMaterialsAggregateType<T>>

    /**
     * Group by Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaterialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialsGroupByArgs['orderBy'] }
        : { orderBy?: MaterialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materials model
   */
  readonly fields: MaterialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends Materials$quizArgs<ExtArgs> = {}>(args?: Subset<T, Materials$quizArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    activity<T extends Materials$activityArgs<ExtArgs> = {}>(args?: Subset<T, Materials$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materials model
   */ 
  interface MaterialsFieldRefs {
    readonly id: FieldRef<"Materials", 'String'>
    readonly title: FieldRef<"Materials", 'String'>
    readonly description: FieldRef<"Materials", 'String'>
    readonly imageUrl: FieldRef<"Materials", 'String'>
    readonly materialString: FieldRef<"Materials", 'String'>
    readonly createdAt: FieldRef<"Materials", 'DateTime'>
    readonly deletedAt: FieldRef<"Materials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Materials findUnique
   */
  export type MaterialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials findUniqueOrThrow
   */
  export type MaterialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials findFirst
   */
  export type MaterialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * Materials findFirstOrThrow
   */
  export type MaterialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * Materials findMany
   */
  export type MaterialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * Materials create
   */
  export type MaterialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * The data needed to create a Materials.
     */
    data: XOR<MaterialsCreateInput, MaterialsUncheckedCreateInput>
  }

  /**
   * Materials createMany
   */
  export type MaterialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialsCreateManyInput | MaterialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materials createManyAndReturn
   */
  export type MaterialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialsCreateManyInput | MaterialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materials update
   */
  export type MaterialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * The data needed to update a Materials.
     */
    data: XOR<MaterialsUpdateInput, MaterialsUncheckedUpdateInput>
    /**
     * Choose, which Materials to update.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials updateMany
   */
  export type MaterialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialsUpdateManyMutationInput, MaterialsUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialsWhereInput
  }

  /**
   * Materials upsert
   */
  export type MaterialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * The filter to search for the Materials to update in case it exists.
     */
    where: MaterialsWhereUniqueInput
    /**
     * In case the Materials found by the `where` argument doesn't exist, create a new Materials with this data.
     */
    create: XOR<MaterialsCreateInput, MaterialsUncheckedCreateInput>
    /**
     * In case the Materials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialsUpdateInput, MaterialsUncheckedUpdateInput>
  }

  /**
   * Materials delete
   */
  export type MaterialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter which Materials to delete.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials deleteMany
   */
  export type MaterialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialsWhereInput
  }

  /**
   * Materials.quiz
   */
  export type Materials$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    where?: QuizzesWhereInput
  }

  /**
   * Materials.activity
   */
  export type Materials$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    where?: ActivitiesWhereInput
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    cursor?: ActivitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * Materials without action
   */
  export type MaterialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
  }


  /**
   * Model Activities
   */

  export type AggregateActivities = {
    _count: ActivitiesCountAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  export type ActivitiesMinAggregateOutputType = {
    id: string | null
    materialId: string | null
    testId: string | null
    quizId: string | null
    activityType: $Enums.ActivityType | null
    message: string | null
    userId: string | null
    doneAt: Date | null
  }

  export type ActivitiesMaxAggregateOutputType = {
    id: string | null
    materialId: string | null
    testId: string | null
    quizId: string | null
    activityType: $Enums.ActivityType | null
    message: string | null
    userId: string | null
    doneAt: Date | null
  }

  export type ActivitiesCountAggregateOutputType = {
    id: number
    materialId: number
    testId: number
    quizId: number
    activityType: number
    message: number
    userId: number
    doneAt: number
    _all: number
  }


  export type ActivitiesMinAggregateInputType = {
    id?: true
    materialId?: true
    testId?: true
    quizId?: true
    activityType?: true
    message?: true
    userId?: true
    doneAt?: true
  }

  export type ActivitiesMaxAggregateInputType = {
    id?: true
    materialId?: true
    testId?: true
    quizId?: true
    activityType?: true
    message?: true
    userId?: true
    doneAt?: true
  }

  export type ActivitiesCountAggregateInputType = {
    id?: true
    materialId?: true
    testId?: true
    quizId?: true
    activityType?: true
    message?: true
    userId?: true
    doneAt?: true
    _all?: true
  }

  export type ActivitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to aggregate.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivitiesMaxAggregateInputType
  }

  export type GetActivitiesAggregateType<T extends ActivitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateActivities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivities[P]>
      : GetScalarType<T[P], AggregateActivities[P]>
  }




  export type ActivitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivitiesWhereInput
    orderBy?: ActivitiesOrderByWithAggregationInput | ActivitiesOrderByWithAggregationInput[]
    by: ActivitiesScalarFieldEnum[] | ActivitiesScalarFieldEnum
    having?: ActivitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivitiesCountAggregateInputType | true
    _min?: ActivitiesMinAggregateInputType
    _max?: ActivitiesMaxAggregateInputType
  }

  export type ActivitiesGroupByOutputType = {
    id: string
    materialId: string | null
    testId: string | null
    quizId: string | null
    activityType: $Enums.ActivityType
    message: string
    userId: string
    doneAt: Date
    _count: ActivitiesCountAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  type GetActivitiesGroupByPayload<T extends ActivitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
            : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
        }
      >
    >


  export type ActivitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    testId?: boolean
    quizId?: boolean
    activityType?: boolean
    message?: boolean
    userId?: boolean
    doneAt?: boolean
    material?: boolean | Activities$materialArgs<ExtArgs>
    test?: boolean | Activities$testArgs<ExtArgs>
    quiz?: boolean | Activities$quizArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activities"]>

  export type ActivitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    testId?: boolean
    quizId?: boolean
    activityType?: boolean
    message?: boolean
    userId?: boolean
    doneAt?: boolean
    material?: boolean | Activities$materialArgs<ExtArgs>
    test?: boolean | Activities$testArgs<ExtArgs>
    quiz?: boolean | Activities$quizArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activities"]>

  export type ActivitiesSelectScalar = {
    id?: boolean
    materialId?: boolean
    testId?: boolean
    quizId?: boolean
    activityType?: boolean
    message?: boolean
    userId?: boolean
    doneAt?: boolean
  }

  export type ActivitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | Activities$materialArgs<ExtArgs>
    test?: boolean | Activities$testArgs<ExtArgs>
    quiz?: boolean | Activities$quizArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ActivitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | Activities$materialArgs<ExtArgs>
    test?: boolean | Activities$testArgs<ExtArgs>
    quiz?: boolean | Activities$quizArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ActivitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activities"
    objects: {
      material: Prisma.$MaterialsPayload<ExtArgs> | null
      test: Prisma.$TestsPayload<ExtArgs> | null
      quiz: Prisma.$QuizzesPayload<ExtArgs> | null
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materialId: string | null
      testId: string | null
      quizId: string | null
      activityType: $Enums.ActivityType
      message: string
      userId: string
      doneAt: Date
    }, ExtArgs["result"]["activities"]>
    composites: {}
  }

  type ActivitiesGetPayload<S extends boolean | null | undefined | ActivitiesDefaultArgs> = $Result.GetResult<Prisma.$ActivitiesPayload, S>

  type ActivitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivitiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivitiesCountAggregateInputType | true
    }

  export interface ActivitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activities'], meta: { name: 'Activities' } }
    /**
     * Find zero or one Activities that matches the filter.
     * @param {ActivitiesFindUniqueArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivitiesFindUniqueArgs>(args: SelectSubset<T, ActivitiesFindUniqueArgs<ExtArgs>>): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Activities that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivitiesFindUniqueOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesFindFirstArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivitiesFindFirstArgs>(args?: SelectSubset<T, ActivitiesFindFirstArgs<ExtArgs>>): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Activities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesFindFirstOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activities.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activitiesWithIdOnly = await prisma.activities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivitiesFindManyArgs>(args?: SelectSubset<T, ActivitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Activities.
     * @param {ActivitiesCreateArgs} args - Arguments to create a Activities.
     * @example
     * // Create one Activities
     * const Activities = await prisma.activities.create({
     *   data: {
     *     // ... data to create a Activities
     *   }
     * })
     * 
     */
    create<T extends ActivitiesCreateArgs>(args: SelectSubset<T, ActivitiesCreateArgs<ExtArgs>>): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Activities.
     * @param {ActivitiesCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activities = await prisma.activities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivitiesCreateManyArgs>(args?: SelectSubset<T, ActivitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivitiesCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activities = await prisma.activities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activitiesWithIdOnly = await prisma.activities.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Activities.
     * @param {ActivitiesDeleteArgs} args - Arguments to delete one Activities.
     * @example
     * // Delete one Activities
     * const Activities = await prisma.activities.delete({
     *   where: {
     *     // ... filter to delete one Activities
     *   }
     * })
     * 
     */
    delete<T extends ActivitiesDeleteArgs>(args: SelectSubset<T, ActivitiesDeleteArgs<ExtArgs>>): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Activities.
     * @param {ActivitiesUpdateArgs} args - Arguments to update one Activities.
     * @example
     * // Update one Activities
     * const activities = await prisma.activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivitiesUpdateArgs>(args: SelectSubset<T, ActivitiesUpdateArgs<ExtArgs>>): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Activities.
     * @param {ActivitiesDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivitiesDeleteManyArgs>(args?: SelectSubset<T, ActivitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activities = await prisma.activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivitiesUpdateManyArgs>(args: SelectSubset<T, ActivitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activities.
     * @param {ActivitiesUpsertArgs} args - Arguments to update or create a Activities.
     * @example
     * // Update or create a Activities
     * const activities = await prisma.activities.upsert({
     *   create: {
     *     // ... data to create a Activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activities we want to update
     *   }
     * })
     */
    upsert<T extends ActivitiesUpsertArgs>(args: SelectSubset<T, ActivitiesUpsertArgs<ExtArgs>>): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activities.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivitiesCountArgs>(
      args?: Subset<T, ActivitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivitiesAggregateArgs>(args: Subset<T, ActivitiesAggregateArgs>): Prisma.PrismaPromise<GetActivitiesAggregateType<T>>

    /**
     * Group by Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivitiesGroupByArgs['orderBy'] }
        : { orderBy?: ActivitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activities model
   */
  readonly fields: ActivitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends Activities$materialArgs<ExtArgs> = {}>(args?: Subset<T, Activities$materialArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    test<T extends Activities$testArgs<ExtArgs> = {}>(args?: Subset<T, Activities$testArgs<ExtArgs>>): Prisma__TestsClient<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    quiz<T extends Activities$quizArgs<ExtArgs> = {}>(args?: Subset<T, Activities$quizArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activities model
   */ 
  interface ActivitiesFieldRefs {
    readonly id: FieldRef<"Activities", 'String'>
    readonly materialId: FieldRef<"Activities", 'String'>
    readonly testId: FieldRef<"Activities", 'String'>
    readonly quizId: FieldRef<"Activities", 'String'>
    readonly activityType: FieldRef<"Activities", 'ActivityType'>
    readonly message: FieldRef<"Activities", 'String'>
    readonly userId: FieldRef<"Activities", 'String'>
    readonly doneAt: FieldRef<"Activities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activities findUnique
   */
  export type ActivitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where: ActivitiesWhereUniqueInput
  }

  /**
   * Activities findUniqueOrThrow
   */
  export type ActivitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where: ActivitiesWhereUniqueInput
  }

  /**
   * Activities findFirst
   */
  export type ActivitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * Activities findFirstOrThrow
   */
  export type ActivitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * Activities findMany
   */
  export type ActivitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * Activities create
   */
  export type ActivitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Activities.
     */
    data: XOR<ActivitiesCreateInput, ActivitiesUncheckedCreateInput>
  }

  /**
   * Activities createMany
   */
  export type ActivitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivitiesCreateManyInput | ActivitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activities createManyAndReturn
   */
  export type ActivitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivitiesCreateManyInput | ActivitiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activities update
   */
  export type ActivitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Activities.
     */
    data: XOR<ActivitiesUpdateInput, ActivitiesUncheckedUpdateInput>
    /**
     * Choose, which Activities to update.
     */
    where: ActivitiesWhereUniqueInput
  }

  /**
   * Activities updateMany
   */
  export type ActivitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivitiesUpdateManyMutationInput, ActivitiesUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivitiesWhereInput
  }

  /**
   * Activities upsert
   */
  export type ActivitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Activities to update in case it exists.
     */
    where: ActivitiesWhereUniqueInput
    /**
     * In case the Activities found by the `where` argument doesn't exist, create a new Activities with this data.
     */
    create: XOR<ActivitiesCreateInput, ActivitiesUncheckedCreateInput>
    /**
     * In case the Activities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivitiesUpdateInput, ActivitiesUncheckedUpdateInput>
  }

  /**
   * Activities delete
   */
  export type ActivitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter which Activities to delete.
     */
    where: ActivitiesWhereUniqueInput
  }

  /**
   * Activities deleteMany
   */
  export type ActivitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivitiesWhereInput
  }

  /**
   * Activities.material
   */
  export type Activities$materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    where?: MaterialsWhereInput
  }

  /**
   * Activities.test
   */
  export type Activities$testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    where?: TestsWhereInput
  }

  /**
   * Activities.quiz
   */
  export type Activities$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    where?: QuizzesWhereInput
  }

  /**
   * Activities without action
   */
  export type ActivitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
  }


  /**
   * Model Tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensMinAggregateOutputType = {
    id: string | null
    userId: string | null
    loggedInAt: Date | null
    loggedOutAt: Date | null
    refreshToken: string | null
  }

  export type TokensMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    loggedInAt: Date | null
    loggedOutAt: Date | null
    refreshToken: string | null
  }

  export type TokensCountAggregateOutputType = {
    id: number
    userId: number
    loggedInAt: number
    loggedOutAt: number
    refreshToken: number
    _all: number
  }


  export type TokensMinAggregateInputType = {
    id?: true
    userId?: true
    loggedInAt?: true
    loggedOutAt?: true
    refreshToken?: true
  }

  export type TokensMaxAggregateInputType = {
    id?: true
    userId?: true
    loggedInAt?: true
    loggedOutAt?: true
    refreshToken?: true
  }

  export type TokensCountAggregateInputType = {
    id?: true
    userId?: true
    loggedInAt?: true
    loggedOutAt?: true
    refreshToken?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to aggregate.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithAggregationInput | TokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: TokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    id: string
    userId: string
    loggedInAt: Date
    loggedOutAt: Date | null
    refreshToken: string | null
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type TokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    loggedInAt?: boolean
    loggedOutAt?: boolean
    refreshToken?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    loggedInAt?: boolean
    loggedOutAt?: boolean
    refreshToken?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectScalar = {
    id?: boolean
    userId?: boolean
    loggedInAt?: boolean
    loggedOutAt?: boolean
    refreshToken?: boolean
  }

  export type TokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokens"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      loggedInAt: Date
      loggedOutAt: Date | null
      refreshToken: string | null
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type TokensGetPayload<S extends boolean | null | undefined | TokensDefaultArgs> = $Result.GetResult<Prisma.$TokensPayload, S>

  type TokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokensFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface TokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokens'], meta: { name: 'Tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {TokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokensFindUniqueArgs>(args: SelectSubset<T, TokensFindUniqueArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokensFindUniqueOrThrowArgs>(args: SelectSubset<T, TokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokensFindFirstArgs>(args?: SelectSubset<T, TokensFindFirstArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokensFindFirstOrThrowArgs>(args?: SelectSubset<T, TokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokensWithIdOnly = await prisma.tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokensFindManyArgs>(args?: SelectSubset<T, TokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tokens.
     * @param {TokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends TokensCreateArgs>(args: SelectSubset<T, TokensCreateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tokens.
     * @param {TokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokensCreateManyArgs>(args?: SelectSubset<T, TokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokensCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokensWithIdOnly = await prisma.tokens.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokensCreateManyAndReturnArgs>(args?: SelectSubset<T, TokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tokens.
     * @param {TokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends TokensDeleteArgs>(args: SelectSubset<T, TokensDeleteArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tokens.
     * @param {TokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokensUpdateArgs>(args: SelectSubset<T, TokensUpdateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {TokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokensDeleteManyArgs>(args?: SelectSubset<T, TokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokensUpdateManyArgs>(args: SelectSubset<T, TokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tokens.
     * @param {TokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends TokensUpsertArgs>(args: SelectSubset<T, TokensUpsertArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokensCountArgs>(
      args?: Subset<T, TokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokens model
   */
  readonly fields: TokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tokens model
   */ 
  interface TokensFieldRefs {
    readonly id: FieldRef<"Tokens", 'String'>
    readonly userId: FieldRef<"Tokens", 'String'>
    readonly loggedInAt: FieldRef<"Tokens", 'DateTime'>
    readonly loggedOutAt: FieldRef<"Tokens", 'DateTime'>
    readonly refreshToken: FieldRef<"Tokens", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tokens findUnique
   */
  export type TokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findUniqueOrThrow
   */
  export type TokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findFirst
   */
  export type TokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findFirstOrThrow
   */
  export type TokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findMany
   */
  export type TokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens create
   */
  export type TokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to create a Tokens.
     */
    data: XOR<TokensCreateInput, TokensUncheckedCreateInput>
  }

  /**
   * Tokens createMany
   */
  export type TokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens createManyAndReturn
   */
  export type TokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tokens update
   */
  export type TokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to update a Tokens.
     */
    data: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    /**
     * Choose, which Tokens to update.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens updateMany
   */
  export type TokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
  }

  /**
   * Tokens upsert
   */
  export type TokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The filter to search for the Tokens to update in case it exists.
     */
    where: TokensWhereUniqueInput
    /**
     * In case the Tokens found by the `where` argument doesn't exist, create a new Tokens with this data.
     */
    create: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    /**
     * In case the Tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
  }

  /**
   * Tokens delete
   */
  export type TokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter which Tokens to delete.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens deleteMany
   */
  export type TokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokensWhereInput
  }

  /**
   * Tokens without action
   */
  export type TokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
  }


  /**
   * Model Tests
   */

  export type AggregateTests = {
    _count: TestsCountAggregateOutputType | null
    _min: TestsMinAggregateOutputType | null
    _max: TestsMaxAggregateOutputType | null
  }

  export type TestsMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type TestsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type TestsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type TestsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    deletedAt?: true
  }

  export type TestsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    deletedAt?: true
  }

  export type TestsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to aggregate.
     */
    where?: TestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestsOrderByWithRelationInput | TestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestsMaxAggregateInputType
  }

  export type GetTestsAggregateType<T extends TestsAggregateArgs> = {
        [P in keyof T & keyof AggregateTests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTests[P]>
      : GetScalarType<T[P], AggregateTests[P]>
  }




  export type TestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestsWhereInput
    orderBy?: TestsOrderByWithAggregationInput | TestsOrderByWithAggregationInput[]
    by: TestsScalarFieldEnum[] | TestsScalarFieldEnum
    having?: TestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestsCountAggregateInputType | true
    _min?: TestsMinAggregateInputType
    _max?: TestsMaxAggregateInputType
  }

  export type TestsGroupByOutputType = {
    id: string
    title: string
    description: string
    imageUrl: string
    createdAt: Date
    deletedAt: Date | null
    _count: TestsCountAggregateOutputType | null
    _min: TestsMinAggregateOutputType | null
    _max: TestsMaxAggregateOutputType | null
  }

  type GetTestsGroupByPayload<T extends TestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestsGroupByOutputType[P]>
            : GetScalarType<T[P], TestsGroupByOutputType[P]>
        }
      >
    >


  export type TestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    activity?: boolean | Tests$activityArgs<ExtArgs>
    questions?: boolean | Tests$questionsArgs<ExtArgs>
    mark?: boolean | Tests$markArgs<ExtArgs>
    _count?: boolean | TestsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tests"]>

  export type TestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["tests"]>

  export type TestsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type TestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | Tests$activityArgs<ExtArgs>
    questions?: boolean | Tests$questionsArgs<ExtArgs>
    mark?: boolean | Tests$markArgs<ExtArgs>
    _count?: boolean | TestsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tests"
    objects: {
      activity: Prisma.$ActivitiesPayload<ExtArgs>[]
      questions: Prisma.$QuestionsPayload<ExtArgs>[]
      mark: Prisma.$MarksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      imageUrl: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["tests"]>
    composites: {}
  }

  type TestsGetPayload<S extends boolean | null | undefined | TestsDefaultArgs> = $Result.GetResult<Prisma.$TestsPayload, S>

  type TestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestsCountAggregateInputType | true
    }

  export interface TestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tests'], meta: { name: 'Tests' } }
    /**
     * Find zero or one Tests that matches the filter.
     * @param {TestsFindUniqueArgs} args - Arguments to find a Tests
     * @example
     * // Get one Tests
     * const tests = await prisma.tests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestsFindUniqueArgs>(args: SelectSubset<T, TestsFindUniqueArgs<ExtArgs>>): Prisma__TestsClient<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tests that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestsFindUniqueOrThrowArgs} args - Arguments to find a Tests
     * @example
     * // Get one Tests
     * const tests = await prisma.tests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestsFindUniqueOrThrowArgs>(args: SelectSubset<T, TestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestsClient<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsFindFirstArgs} args - Arguments to find a Tests
     * @example
     * // Get one Tests
     * const tests = await prisma.tests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestsFindFirstArgs>(args?: SelectSubset<T, TestsFindFirstArgs<ExtArgs>>): Prisma__TestsClient<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsFindFirstOrThrowArgs} args - Arguments to find a Tests
     * @example
     * // Get one Tests
     * const tests = await prisma.tests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestsFindFirstOrThrowArgs>(args?: SelectSubset<T, TestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestsClient<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.tests.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.tests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testsWithIdOnly = await prisma.tests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestsFindManyArgs>(args?: SelectSubset<T, TestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tests.
     * @param {TestsCreateArgs} args - Arguments to create a Tests.
     * @example
     * // Create one Tests
     * const Tests = await prisma.tests.create({
     *   data: {
     *     // ... data to create a Tests
     *   }
     * })
     * 
     */
    create<T extends TestsCreateArgs>(args: SelectSubset<T, TestsCreateArgs<ExtArgs>>): Prisma__TestsClient<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tests.
     * @param {TestsCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const tests = await prisma.tests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestsCreateManyArgs>(args?: SelectSubset<T, TestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestsCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const tests = await prisma.tests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testsWithIdOnly = await prisma.tests.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestsCreateManyAndReturnArgs>(args?: SelectSubset<T, TestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tests.
     * @param {TestsDeleteArgs} args - Arguments to delete one Tests.
     * @example
     * // Delete one Tests
     * const Tests = await prisma.tests.delete({
     *   where: {
     *     // ... filter to delete one Tests
     *   }
     * })
     * 
     */
    delete<T extends TestsDeleteArgs>(args: SelectSubset<T, TestsDeleteArgs<ExtArgs>>): Prisma__TestsClient<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tests.
     * @param {TestsUpdateArgs} args - Arguments to update one Tests.
     * @example
     * // Update one Tests
     * const tests = await prisma.tests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestsUpdateArgs>(args: SelectSubset<T, TestsUpdateArgs<ExtArgs>>): Prisma__TestsClient<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tests.
     * @param {TestsDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.tests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestsDeleteManyArgs>(args?: SelectSubset<T, TestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const tests = await prisma.tests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestsUpdateManyArgs>(args: SelectSubset<T, TestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tests.
     * @param {TestsUpsertArgs} args - Arguments to update or create a Tests.
     * @example
     * // Update or create a Tests
     * const tests = await prisma.tests.upsert({
     *   create: {
     *     // ... data to create a Tests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tests we want to update
     *   }
     * })
     */
    upsert<T extends TestsUpsertArgs>(args: SelectSubset<T, TestsUpsertArgs<ExtArgs>>): Prisma__TestsClient<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.tests.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestsCountArgs>(
      args?: Subset<T, TestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestsAggregateArgs>(args: Subset<T, TestsAggregateArgs>): Prisma.PrismaPromise<GetTestsAggregateType<T>>

    /**
     * Group by Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestsGroupByArgs['orderBy'] }
        : { orderBy?: TestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tests model
   */
  readonly fields: TestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends Tests$activityArgs<ExtArgs> = {}>(args?: Subset<T, Tests$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "findMany"> | Null>
    questions<T extends Tests$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Tests$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany"> | Null>
    mark<T extends Tests$markArgs<ExtArgs> = {}>(args?: Subset<T, Tests$markArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tests model
   */ 
  interface TestsFieldRefs {
    readonly id: FieldRef<"Tests", 'String'>
    readonly title: FieldRef<"Tests", 'String'>
    readonly description: FieldRef<"Tests", 'String'>
    readonly imageUrl: FieldRef<"Tests", 'String'>
    readonly createdAt: FieldRef<"Tests", 'DateTime'>
    readonly deletedAt: FieldRef<"Tests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tests findUnique
   */
  export type TestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where: TestsWhereUniqueInput
  }

  /**
   * Tests findUniqueOrThrow
   */
  export type TestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where: TestsWhereUniqueInput
  }

  /**
   * Tests findFirst
   */
  export type TestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestsOrderByWithRelationInput | TestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestsScalarFieldEnum | TestsScalarFieldEnum[]
  }

  /**
   * Tests findFirstOrThrow
   */
  export type TestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestsOrderByWithRelationInput | TestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestsScalarFieldEnum | TestsScalarFieldEnum[]
  }

  /**
   * Tests findMany
   */
  export type TestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestsOrderByWithRelationInput | TestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestsScalarFieldEnum | TestsScalarFieldEnum[]
  }

  /**
   * Tests create
   */
  export type TestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tests.
     */
    data: XOR<TestsCreateInput, TestsUncheckedCreateInput>
  }

  /**
   * Tests createMany
   */
  export type TestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestsCreateManyInput | TestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tests createManyAndReturn
   */
  export type TestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestsCreateManyInput | TestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tests update
   */
  export type TestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tests.
     */
    data: XOR<TestsUpdateInput, TestsUncheckedUpdateInput>
    /**
     * Choose, which Tests to update.
     */
    where: TestsWhereUniqueInput
  }

  /**
   * Tests updateMany
   */
  export type TestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestsUpdateManyMutationInput, TestsUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestsWhereInput
  }

  /**
   * Tests upsert
   */
  export type TestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tests to update in case it exists.
     */
    where: TestsWhereUniqueInput
    /**
     * In case the Tests found by the `where` argument doesn't exist, create a new Tests with this data.
     */
    create: XOR<TestsCreateInput, TestsUncheckedCreateInput>
    /**
     * In case the Tests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestsUpdateInput, TestsUncheckedUpdateInput>
  }

  /**
   * Tests delete
   */
  export type TestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    /**
     * Filter which Tests to delete.
     */
    where: TestsWhereUniqueInput
  }

  /**
   * Tests deleteMany
   */
  export type TestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestsWhereInput
  }

  /**
   * Tests.activity
   */
  export type Tests$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    where?: ActivitiesWhereInput
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    cursor?: ActivitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * Tests.questions
   */
  export type Tests$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    cursor?: QuestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Tests.mark
   */
  export type Tests$markArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    where?: MarksWhereInput
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    cursor?: MarksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Tests without action
   */
  export type TestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
  }


  /**
   * Model Quizzes
   */

  export type AggregateQuizzes = {
    _count: QuizzesCountAggregateOutputType | null
    _min: QuizzesMinAggregateOutputType | null
    _max: QuizzesMaxAggregateOutputType | null
  }

  export type QuizzesMinAggregateOutputType = {
    id: string | null
    materialId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type QuizzesMaxAggregateOutputType = {
    id: string | null
    materialId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type QuizzesCountAggregateOutputType = {
    id: number
    materialId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type QuizzesMinAggregateInputType = {
    id?: true
    materialId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type QuizzesMaxAggregateInputType = {
    id?: true
    materialId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type QuizzesCountAggregateInputType = {
    id?: true
    materialId?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type QuizzesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to aggregate.
     */
    where?: QuizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizzesOrderByWithRelationInput | QuizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizzesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizzesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizzesMaxAggregateInputType
  }

  export type GetQuizzesAggregateType<T extends QuizzesAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizzes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizzes[P]>
      : GetScalarType<T[P], AggregateQuizzes[P]>
  }




  export type QuizzesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizzesWhereInput
    orderBy?: QuizzesOrderByWithAggregationInput | QuizzesOrderByWithAggregationInput[]
    by: QuizzesScalarFieldEnum[] | QuizzesScalarFieldEnum
    having?: QuizzesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizzesCountAggregateInputType | true
    _min?: QuizzesMinAggregateInputType
    _max?: QuizzesMaxAggregateInputType
  }

  export type QuizzesGroupByOutputType = {
    id: string
    materialId: string
    createdAt: Date
    deletedAt: Date | null
    _count: QuizzesCountAggregateOutputType | null
    _min: QuizzesMinAggregateOutputType | null
    _max: QuizzesMaxAggregateOutputType | null
  }

  type GetQuizzesGroupByPayload<T extends QuizzesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizzesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizzesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizzesGroupByOutputType[P]>
            : GetScalarType<T[P], QuizzesGroupByOutputType[P]>
        }
      >
    >


  export type QuizzesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
    questions?: boolean | Quizzes$questionsArgs<ExtArgs>
    marks?: boolean | Quizzes$marksArgs<ExtArgs>
    activity?: boolean | Quizzes$activityArgs<ExtArgs>
    _count?: boolean | QuizzesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizzes"]>

  export type QuizzesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizzes"]>

  export type QuizzesSelectScalar = {
    id?: boolean
    materialId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type QuizzesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
    questions?: boolean | Quizzes$questionsArgs<ExtArgs>
    marks?: boolean | Quizzes$marksArgs<ExtArgs>
    activity?: boolean | Quizzes$activityArgs<ExtArgs>
    _count?: boolean | QuizzesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizzesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
  }

  export type $QuizzesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quizzes"
    objects: {
      material: Prisma.$MaterialsPayload<ExtArgs>
      questions: Prisma.$QuestionsPayload<ExtArgs>[]
      marks: Prisma.$MarksPayload<ExtArgs>[]
      activity: Prisma.$ActivitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materialId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["quizzes"]>
    composites: {}
  }

  type QuizzesGetPayload<S extends boolean | null | undefined | QuizzesDefaultArgs> = $Result.GetResult<Prisma.$QuizzesPayload, S>

  type QuizzesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuizzesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuizzesCountAggregateInputType | true
    }

  export interface QuizzesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quizzes'], meta: { name: 'Quizzes' } }
    /**
     * Find zero or one Quizzes that matches the filter.
     * @param {QuizzesFindUniqueArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizzesFindUniqueArgs>(args: SelectSubset<T, QuizzesFindUniqueArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Quizzes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuizzesFindUniqueOrThrowArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizzesFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizzesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzesFindFirstArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizzesFindFirstArgs>(args?: SelectSubset<T, QuizzesFindFirstArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Quizzes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzesFindFirstOrThrowArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizzesFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizzesFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quizzes.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quizzes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizzesWithIdOnly = await prisma.quizzes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizzesFindManyArgs>(args?: SelectSubset<T, QuizzesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Quizzes.
     * @param {QuizzesCreateArgs} args - Arguments to create a Quizzes.
     * @example
     * // Create one Quizzes
     * const Quizzes = await prisma.quizzes.create({
     *   data: {
     *     // ... data to create a Quizzes
     *   }
     * })
     * 
     */
    create<T extends QuizzesCreateArgs>(args: SelectSubset<T, QuizzesCreateArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Quizzes.
     * @param {QuizzesCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quizzes = await prisma.quizzes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizzesCreateManyArgs>(args?: SelectSubset<T, QuizzesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizzesCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quizzes = await prisma.quizzes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizzesWithIdOnly = await prisma.quizzes.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizzesCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizzesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Quizzes.
     * @param {QuizzesDeleteArgs} args - Arguments to delete one Quizzes.
     * @example
     * // Delete one Quizzes
     * const Quizzes = await prisma.quizzes.delete({
     *   where: {
     *     // ... filter to delete one Quizzes
     *   }
     * })
     * 
     */
    delete<T extends QuizzesDeleteArgs>(args: SelectSubset<T, QuizzesDeleteArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Quizzes.
     * @param {QuizzesUpdateArgs} args - Arguments to update one Quizzes.
     * @example
     * // Update one Quizzes
     * const quizzes = await prisma.quizzes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizzesUpdateArgs>(args: SelectSubset<T, QuizzesUpdateArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizzesDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quizzes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizzesDeleteManyArgs>(args?: SelectSubset<T, QuizzesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quizzes = await prisma.quizzes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizzesUpdateManyArgs>(args: SelectSubset<T, QuizzesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quizzes.
     * @param {QuizzesUpsertArgs} args - Arguments to update or create a Quizzes.
     * @example
     * // Update or create a Quizzes
     * const quizzes = await prisma.quizzes.upsert({
     *   create: {
     *     // ... data to create a Quizzes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quizzes we want to update
     *   }
     * })
     */
    upsert<T extends QuizzesUpsertArgs>(args: SelectSubset<T, QuizzesUpsertArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzesCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quizzes.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizzesCountArgs>(
      args?: Subset<T, QuizzesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizzesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizzesAggregateArgs>(args: Subset<T, QuizzesAggregateArgs>): Prisma.PrismaPromise<GetQuizzesAggregateType<T>>

    /**
     * Group by Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizzesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizzesGroupByArgs['orderBy'] }
        : { orderBy?: QuizzesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizzesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizzesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quizzes model
   */
  readonly fields: QuizzesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quizzes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizzesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialsDefaultArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    questions<T extends Quizzes$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quizzes$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany"> | Null>
    marks<T extends Quizzes$marksArgs<ExtArgs> = {}>(args?: Subset<T, Quizzes$marksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findMany"> | Null>
    activity<T extends Quizzes$activityArgs<ExtArgs> = {}>(args?: Subset<T, Quizzes$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quizzes model
   */ 
  interface QuizzesFieldRefs {
    readonly id: FieldRef<"Quizzes", 'String'>
    readonly materialId: FieldRef<"Quizzes", 'String'>
    readonly createdAt: FieldRef<"Quizzes", 'DateTime'>
    readonly deletedAt: FieldRef<"Quizzes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quizzes findUnique
   */
  export type QuizzesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where: QuizzesWhereUniqueInput
  }

  /**
   * Quizzes findUniqueOrThrow
   */
  export type QuizzesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where: QuizzesWhereUniqueInput
  }

  /**
   * Quizzes findFirst
   */
  export type QuizzesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizzesOrderByWithRelationInput | QuizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizzesScalarFieldEnum | QuizzesScalarFieldEnum[]
  }

  /**
   * Quizzes findFirstOrThrow
   */
  export type QuizzesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizzesOrderByWithRelationInput | QuizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizzesScalarFieldEnum | QuizzesScalarFieldEnum[]
  }

  /**
   * Quizzes findMany
   */
  export type QuizzesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizzesOrderByWithRelationInput | QuizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizzesScalarFieldEnum | QuizzesScalarFieldEnum[]
  }

  /**
   * Quizzes create
   */
  export type QuizzesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    /**
     * The data needed to create a Quizzes.
     */
    data: XOR<QuizzesCreateInput, QuizzesUncheckedCreateInput>
  }

  /**
   * Quizzes createMany
   */
  export type QuizzesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizzesCreateManyInput | QuizzesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quizzes createManyAndReturn
   */
  export type QuizzesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizzesCreateManyInput | QuizzesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quizzes update
   */
  export type QuizzesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    /**
     * The data needed to update a Quizzes.
     */
    data: XOR<QuizzesUpdateInput, QuizzesUncheckedUpdateInput>
    /**
     * Choose, which Quizzes to update.
     */
    where: QuizzesWhereUniqueInput
  }

  /**
   * Quizzes updateMany
   */
  export type QuizzesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizzesUpdateManyMutationInput, QuizzesUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizzesWhereInput
  }

  /**
   * Quizzes upsert
   */
  export type QuizzesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    /**
     * The filter to search for the Quizzes to update in case it exists.
     */
    where: QuizzesWhereUniqueInput
    /**
     * In case the Quizzes found by the `where` argument doesn't exist, create a new Quizzes with this data.
     */
    create: XOR<QuizzesCreateInput, QuizzesUncheckedCreateInput>
    /**
     * In case the Quizzes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizzesUpdateInput, QuizzesUncheckedUpdateInput>
  }

  /**
   * Quizzes delete
   */
  export type QuizzesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    /**
     * Filter which Quizzes to delete.
     */
    where: QuizzesWhereUniqueInput
  }

  /**
   * Quizzes deleteMany
   */
  export type QuizzesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizzesWhereInput
  }

  /**
   * Quizzes.questions
   */
  export type Quizzes$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    cursor?: QuestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Quizzes.marks
   */
  export type Quizzes$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    where?: MarksWhereInput
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    cursor?: MarksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Quizzes.activity
   */
  export type Quizzes$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    where?: ActivitiesWhereInput
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    cursor?: ActivitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * Quizzes without action
   */
  export type QuizzesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
  }


  /**
   * Model Questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: string | null
    testId: string | null
    quizId: string | null
    question: string | null
    imageUrl: string | null
    optionA: string | null
    optionB: string | null
    optionC: string | null
    optionD: string | null
    optionE: string | null
    correctOption: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: string | null
    testId: string | null
    quizId: string | null
    question: string | null
    imageUrl: string | null
    optionA: string | null
    optionB: string | null
    optionC: string | null
    optionD: string | null
    optionE: string | null
    correctOption: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    testId: number
    quizId: number
    question: number
    imageUrl: number
    optionA: number
    optionB: number
    optionC: number
    optionD: number
    optionE: number
    correctOption: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type QuestionsMinAggregateInputType = {
    id?: true
    testId?: true
    quizId?: true
    question?: true
    imageUrl?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    optionE?: true
    correctOption?: true
    createdAt?: true
    deletedAt?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    testId?: true
    quizId?: true
    question?: true
    imageUrl?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    optionE?: true
    correctOption?: true
    createdAt?: true
    deletedAt?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    testId?: true
    quizId?: true
    question?: true
    imageUrl?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    optionE?: true
    correctOption?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to aggregate.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type QuestionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithAggregationInput | QuestionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: QuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: string
    testId: string | null
    quizId: string | null
    question: string
    imageUrl: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD: string | null
    optionE: string | null
    correctOption: string
    createdAt: Date
    deletedAt: Date | null
    _count: QuestionsCountAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends QuestionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type QuestionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    quizId?: boolean
    question?: boolean
    imageUrl?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    optionE?: boolean
    correctOption?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    test?: boolean | Questions$testArgs<ExtArgs>
    quiz?: boolean | Questions$quizArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    quizId?: boolean
    question?: boolean
    imageUrl?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    optionE?: boolean
    correctOption?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    test?: boolean | Questions$testArgs<ExtArgs>
    quiz?: boolean | Questions$quizArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectScalar = {
    id?: boolean
    testId?: boolean
    quizId?: boolean
    question?: boolean
    imageUrl?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    optionE?: boolean
    correctOption?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type QuestionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | Questions$testArgs<ExtArgs>
    quiz?: boolean | Questions$quizArgs<ExtArgs>
  }
  export type QuestionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | Questions$testArgs<ExtArgs>
    quiz?: boolean | Questions$quizArgs<ExtArgs>
  }

  export type $QuestionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Questions"
    objects: {
      test: Prisma.$TestsPayload<ExtArgs> | null
      quiz: Prisma.$QuizzesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testId: string | null
      quizId: string | null
      question: string
      imageUrl: string | null
      optionA: string
      optionB: string
      optionC: string
      optionD: string | null
      optionE: string | null
      correctOption: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type QuestionsGetPayload<S extends boolean | null | undefined | QuestionsDefaultArgs> = $Result.GetResult<Prisma.$QuestionsPayload, S>

  type QuestionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface QuestionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questions'], meta: { name: 'Questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {QuestionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionsFindUniqueArgs>(args: SelectSubset<T, QuestionsFindUniqueArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionsFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionsFindFirstArgs>(args?: SelectSubset<T, QuestionsFindFirstArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionsFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionsFindManyArgs>(args?: SelectSubset<T, QuestionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Questions.
     * @param {QuestionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends QuestionsCreateArgs>(args: SelectSubset<T, QuestionsCreateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Questions.
     * @param {QuestionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionsCreateManyArgs>(args?: SelectSubset<T, QuestionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionsCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionsCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Questions.
     * @param {QuestionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends QuestionsDeleteArgs>(args: SelectSubset<T, QuestionsDeleteArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Questions.
     * @param {QuestionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionsUpdateArgs>(args: SelectSubset<T, QuestionsUpdateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionsDeleteManyArgs>(args?: SelectSubset<T, QuestionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionsUpdateManyArgs>(args: SelectSubset<T, QuestionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questions.
     * @param {QuestionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends QuestionsUpsertArgs>(args: SelectSubset<T, QuestionsUpsertArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionsCountArgs>(
      args?: Subset<T, QuestionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionsGroupByArgs['orderBy'] }
        : { orderBy?: QuestionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Questions model
   */
  readonly fields: QuestionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends Questions$testArgs<ExtArgs> = {}>(args?: Subset<T, Questions$testArgs<ExtArgs>>): Prisma__TestsClient<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    quiz<T extends Questions$quizArgs<ExtArgs> = {}>(args?: Subset<T, Questions$quizArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Questions model
   */ 
  interface QuestionsFieldRefs {
    readonly id: FieldRef<"Questions", 'String'>
    readonly testId: FieldRef<"Questions", 'String'>
    readonly quizId: FieldRef<"Questions", 'String'>
    readonly question: FieldRef<"Questions", 'String'>
    readonly imageUrl: FieldRef<"Questions", 'String'>
    readonly optionA: FieldRef<"Questions", 'String'>
    readonly optionB: FieldRef<"Questions", 'String'>
    readonly optionC: FieldRef<"Questions", 'String'>
    readonly optionD: FieldRef<"Questions", 'String'>
    readonly optionE: FieldRef<"Questions", 'String'>
    readonly correctOption: FieldRef<"Questions", 'String'>
    readonly createdAt: FieldRef<"Questions", 'DateTime'>
    readonly deletedAt: FieldRef<"Questions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Questions findUnique
   */
  export type QuestionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findUniqueOrThrow
   */
  export type QuestionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findFirst
   */
  export type QuestionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findFirstOrThrow
   */
  export type QuestionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findMany
   */
  export type QuestionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions create
   */
  export type QuestionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Questions.
     */
    data: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
  }

  /**
   * Questions createMany
   */
  export type QuestionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionsCreateManyInput | QuestionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Questions createManyAndReturn
   */
  export type QuestionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionsCreateManyInput | QuestionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Questions update
   */
  export type QuestionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Questions.
     */
    data: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
    /**
     * Choose, which Questions to update.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions updateMany
   */
  export type QuestionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionsWhereInput
  }

  /**
   * Questions upsert
   */
  export type QuestionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Questions to update in case it exists.
     */
    where: QuestionsWhereUniqueInput
    /**
     * In case the Questions found by the `where` argument doesn't exist, create a new Questions with this data.
     */
    create: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
    /**
     * In case the Questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
  }

  /**
   * Questions delete
   */
  export type QuestionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter which Questions to delete.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions deleteMany
   */
  export type QuestionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionsWhereInput
  }

  /**
   * Questions.test
   */
  export type Questions$testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    where?: TestsWhereInput
  }

  /**
   * Questions.quiz
   */
  export type Questions$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    where?: QuizzesWhereInput
  }

  /**
   * Questions without action
   */
  export type QuestionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
  }


  /**
   * Model Marks
   */

  export type AggregateMarks = {
    _count: MarksCountAggregateOutputType | null
    _avg: MarksAvgAggregateOutputType | null
    _sum: MarksSumAggregateOutputType | null
    _min: MarksMinAggregateOutputType | null
    _max: MarksMaxAggregateOutputType | null
  }

  export type MarksAvgAggregateOutputType = {
    mark: number | null
  }

  export type MarksSumAggregateOutputType = {
    mark: number | null
  }

  export type MarksMinAggregateOutputType = {
    id: string | null
    userId: string | null
    testId: string | null
    quizId: string | null
    mark: number | null
    markedAt: Date | null
  }

  export type MarksMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    testId: string | null
    quizId: string | null
    mark: number | null
    markedAt: Date | null
  }

  export type MarksCountAggregateOutputType = {
    id: number
    userId: number
    testId: number
    quizId: number
    mark: number
    markedAt: number
    _all: number
  }


  export type MarksAvgAggregateInputType = {
    mark?: true
  }

  export type MarksSumAggregateInputType = {
    mark?: true
  }

  export type MarksMinAggregateInputType = {
    id?: true
    userId?: true
    testId?: true
    quizId?: true
    mark?: true
    markedAt?: true
  }

  export type MarksMaxAggregateInputType = {
    id?: true
    userId?: true
    testId?: true
    quizId?: true
    mark?: true
    markedAt?: true
  }

  export type MarksCountAggregateInputType = {
    id?: true
    userId?: true
    testId?: true
    quizId?: true
    mark?: true
    markedAt?: true
    _all?: true
  }

  export type MarksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to aggregate.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marks
    **/
    _count?: true | MarksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarksMaxAggregateInputType
  }

  export type GetMarksAggregateType<T extends MarksAggregateArgs> = {
        [P in keyof T & keyof AggregateMarks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarks[P]>
      : GetScalarType<T[P], AggregateMarks[P]>
  }




  export type MarksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksWhereInput
    orderBy?: MarksOrderByWithAggregationInput | MarksOrderByWithAggregationInput[]
    by: MarksScalarFieldEnum[] | MarksScalarFieldEnum
    having?: MarksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarksCountAggregateInputType | true
    _avg?: MarksAvgAggregateInputType
    _sum?: MarksSumAggregateInputType
    _min?: MarksMinAggregateInputType
    _max?: MarksMaxAggregateInputType
  }

  export type MarksGroupByOutputType = {
    id: string
    userId: string
    testId: string | null
    quizId: string | null
    mark: number
    markedAt: Date
    _count: MarksCountAggregateOutputType | null
    _avg: MarksAvgAggregateOutputType | null
    _sum: MarksSumAggregateOutputType | null
    _min: MarksMinAggregateOutputType | null
    _max: MarksMaxAggregateOutputType | null
  }

  type GetMarksGroupByPayload<T extends MarksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarksGroupByOutputType[P]>
            : GetScalarType<T[P], MarksGroupByOutputType[P]>
        }
      >
    >


  export type MarksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    testId?: boolean
    quizId?: boolean
    mark?: boolean
    markedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    test?: boolean | Marks$testArgs<ExtArgs>
    quiz?: boolean | Marks$quizArgs<ExtArgs>
  }, ExtArgs["result"]["marks"]>

  export type MarksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    testId?: boolean
    quizId?: boolean
    mark?: boolean
    markedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    test?: boolean | Marks$testArgs<ExtArgs>
    quiz?: boolean | Marks$quizArgs<ExtArgs>
  }, ExtArgs["result"]["marks"]>

  export type MarksSelectScalar = {
    id?: boolean
    userId?: boolean
    testId?: boolean
    quizId?: boolean
    mark?: boolean
    markedAt?: boolean
  }

  export type MarksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    test?: boolean | Marks$testArgs<ExtArgs>
    quiz?: boolean | Marks$quizArgs<ExtArgs>
  }
  export type MarksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    test?: boolean | Marks$testArgs<ExtArgs>
    quiz?: boolean | Marks$quizArgs<ExtArgs>
  }

  export type $MarksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marks"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      test: Prisma.$TestsPayload<ExtArgs> | null
      quiz: Prisma.$QuizzesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      testId: string | null
      quizId: string | null
      mark: number
      markedAt: Date
    }, ExtArgs["result"]["marks"]>
    composites: {}
  }

  type MarksGetPayload<S extends boolean | null | undefined | MarksDefaultArgs> = $Result.GetResult<Prisma.$MarksPayload, S>

  type MarksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarksCountAggregateInputType | true
    }

  export interface MarksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marks'], meta: { name: 'Marks' } }
    /**
     * Find zero or one Marks that matches the filter.
     * @param {MarksFindUniqueArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarksFindUniqueArgs>(args: SelectSubset<T, MarksFindUniqueArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Marks that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MarksFindUniqueOrThrowArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarksFindUniqueOrThrowArgs>(args: SelectSubset<T, MarksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindFirstArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarksFindFirstArgs>(args?: SelectSubset<T, MarksFindFirstArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Marks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindFirstOrThrowArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarksFindFirstOrThrowArgs>(args?: SelectSubset<T, MarksFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marks
     * const marks = await prisma.marks.findMany()
     * 
     * // Get first 10 Marks
     * const marks = await prisma.marks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marksWithIdOnly = await prisma.marks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarksFindManyArgs>(args?: SelectSubset<T, MarksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Marks.
     * @param {MarksCreateArgs} args - Arguments to create a Marks.
     * @example
     * // Create one Marks
     * const Marks = await prisma.marks.create({
     *   data: {
     *     // ... data to create a Marks
     *   }
     * })
     * 
     */
    create<T extends MarksCreateArgs>(args: SelectSubset<T, MarksCreateArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Marks.
     * @param {MarksCreateManyArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const marks = await prisma.marks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarksCreateManyArgs>(args?: SelectSubset<T, MarksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marks and returns the data saved in the database.
     * @param {MarksCreateManyAndReturnArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const marks = await prisma.marks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marks and only return the `id`
     * const marksWithIdOnly = await prisma.marks.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarksCreateManyAndReturnArgs>(args?: SelectSubset<T, MarksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Marks.
     * @param {MarksDeleteArgs} args - Arguments to delete one Marks.
     * @example
     * // Delete one Marks
     * const Marks = await prisma.marks.delete({
     *   where: {
     *     // ... filter to delete one Marks
     *   }
     * })
     * 
     */
    delete<T extends MarksDeleteArgs>(args: SelectSubset<T, MarksDeleteArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Marks.
     * @param {MarksUpdateArgs} args - Arguments to update one Marks.
     * @example
     * // Update one Marks
     * const marks = await prisma.marks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarksUpdateArgs>(args: SelectSubset<T, MarksUpdateArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Marks.
     * @param {MarksDeleteManyArgs} args - Arguments to filter Marks to delete.
     * @example
     * // Delete a few Marks
     * const { count } = await prisma.marks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarksDeleteManyArgs>(args?: SelectSubset<T, MarksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marks
     * const marks = await prisma.marks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarksUpdateManyArgs>(args: SelectSubset<T, MarksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Marks.
     * @param {MarksUpsertArgs} args - Arguments to update or create a Marks.
     * @example
     * // Update or create a Marks
     * const marks = await prisma.marks.upsert({
     *   create: {
     *     // ... data to create a Marks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marks we want to update
     *   }
     * })
     */
    upsert<T extends MarksUpsertArgs>(args: SelectSubset<T, MarksUpsertArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksCountArgs} args - Arguments to filter Marks to count.
     * @example
     * // Count the number of Marks
     * const count = await prisma.marks.count({
     *   where: {
     *     // ... the filter for the Marks we want to count
     *   }
     * })
    **/
    count<T extends MarksCountArgs>(
      args?: Subset<T, MarksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarksAggregateArgs>(args: Subset<T, MarksAggregateArgs>): Prisma.PrismaPromise<GetMarksAggregateType<T>>

    /**
     * Group by Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarksGroupByArgs['orderBy'] }
        : { orderBy?: MarksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marks model
   */
  readonly fields: MarksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    test<T extends Marks$testArgs<ExtArgs> = {}>(args?: Subset<T, Marks$testArgs<ExtArgs>>): Prisma__TestsClient<$Result.GetResult<Prisma.$TestsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    quiz<T extends Marks$quizArgs<ExtArgs> = {}>(args?: Subset<T, Marks$quizArgs<ExtArgs>>): Prisma__QuizzesClient<$Result.GetResult<Prisma.$QuizzesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Marks model
   */ 
  interface MarksFieldRefs {
    readonly id: FieldRef<"Marks", 'String'>
    readonly userId: FieldRef<"Marks", 'String'>
    readonly testId: FieldRef<"Marks", 'String'>
    readonly quizId: FieldRef<"Marks", 'String'>
    readonly mark: FieldRef<"Marks", 'Int'>
    readonly markedAt: FieldRef<"Marks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Marks findUnique
   */
  export type MarksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks findUniqueOrThrow
   */
  export type MarksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks findFirst
   */
  export type MarksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks findFirstOrThrow
   */
  export type MarksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks findMany
   */
  export type MarksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks create
   */
  export type MarksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The data needed to create a Marks.
     */
    data: XOR<MarksCreateInput, MarksUncheckedCreateInput>
  }

  /**
   * Marks createMany
   */
  export type MarksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marks.
     */
    data: MarksCreateManyInput | MarksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marks createManyAndReturn
   */
  export type MarksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Marks.
     */
    data: MarksCreateManyInput | MarksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marks update
   */
  export type MarksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The data needed to update a Marks.
     */
    data: XOR<MarksUpdateInput, MarksUncheckedUpdateInput>
    /**
     * Choose, which Marks to update.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks updateMany
   */
  export type MarksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marks.
     */
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarksWhereInput
  }

  /**
   * Marks upsert
   */
  export type MarksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The filter to search for the Marks to update in case it exists.
     */
    where: MarksWhereUniqueInput
    /**
     * In case the Marks found by the `where` argument doesn't exist, create a new Marks with this data.
     */
    create: XOR<MarksCreateInput, MarksUncheckedCreateInput>
    /**
     * In case the Marks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarksUpdateInput, MarksUncheckedUpdateInput>
  }

  /**
   * Marks delete
   */
  export type MarksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter which Marks to delete.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks deleteMany
   */
  export type MarksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to delete
     */
    where?: MarksWhereInput
  }

  /**
   * Marks.test
   */
  export type Marks$testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestsInclude<ExtArgs> | null
    where?: TestsWhereInput
  }

  /**
   * Marks.quiz
   */
  export type Marks$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizzes
     */
    select?: QuizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzesInclude<ExtArgs> | null
    where?: QuizzesWhereInput
  }

  /**
   * Marks without action
   */
  export type MarksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BackupScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type BackupScalarFieldEnum = (typeof BackupScalarFieldEnum)[keyof typeof BackupScalarFieldEnum]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const MaterialsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    materialString: 'materialString',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type MaterialsScalarFieldEnum = (typeof MaterialsScalarFieldEnum)[keyof typeof MaterialsScalarFieldEnum]


  export const ActivitiesScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    testId: 'testId',
    quizId: 'quizId',
    activityType: 'activityType',
    message: 'message',
    userId: 'userId',
    doneAt: 'doneAt'
  };

  export type ActivitiesScalarFieldEnum = (typeof ActivitiesScalarFieldEnum)[keyof typeof ActivitiesScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    loggedInAt: 'loggedInAt',
    loggedOutAt: 'loggedOutAt',
    refreshToken: 'refreshToken'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const TestsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type TestsScalarFieldEnum = (typeof TestsScalarFieldEnum)[keyof typeof TestsScalarFieldEnum]


  export const QuizzesScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type QuizzesScalarFieldEnum = (typeof QuizzesScalarFieldEnum)[keyof typeof QuizzesScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
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

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const MarksScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    testId: 'testId',
    quizId: 'quizId',
    mark: 'mark',
    markedAt: 'markedAt'
  };

  export type MarksScalarFieldEnum = (typeof MarksScalarFieldEnum)[keyof typeof MarksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BackupWhereInput = {
    AND?: BackupWhereInput | BackupWhereInput[]
    OR?: BackupWhereInput[]
    NOT?: BackupWhereInput | BackupWhereInput[]
    id?: StringFilter<"Backup"> | string
    username?: StringFilter<"Backup"> | string
    password?: StringFilter<"Backup"> | string
  }

  export type BackupOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type BackupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BackupWhereInput | BackupWhereInput[]
    OR?: BackupWhereInput[]
    NOT?: BackupWhereInput | BackupWhereInput[]
    username?: StringFilter<"Backup"> | string
    password?: StringFilter<"Backup"> | string
  }, "id">

  export type BackupOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: BackupCountOrderByAggregateInput
    _max?: BackupMaxOrderByAggregateInput
    _min?: BackupMinOrderByAggregateInput
  }

  export type BackupScalarWhereWithAggregatesInput = {
    AND?: BackupScalarWhereWithAggregatesInput | BackupScalarWhereWithAggregatesInput[]
    OR?: BackupScalarWhereWithAggregatesInput[]
    NOT?: BackupScalarWhereWithAggregatesInput | BackupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Backup"> | string
    username?: StringWithAggregatesFilter<"Backup"> | string
    password?: StringWithAggregatesFilter<"Backup"> | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    fullName?: StringFilter<"Users"> | string
    gender?: EnumGenderFilter<"Users"> | $Enums.Gender
    avatarUrl?: StringFilter<"Users"> | string
    signedUpAt?: DateTimeFilter<"Users"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    tokens?: TokensListRelationFilter
    marks?: MarksListRelationFilter
    activities?: ActivitiesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    avatarUrl?: SortOrder
    signedUpAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    tokens?: TokensOrderByRelationAggregateInput
    marks?: MarksOrderByRelationAggregateInput
    activities?: ActivitiesOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    fullName?: StringFilter<"Users"> | string
    gender?: EnumGenderFilter<"Users"> | $Enums.Gender
    avatarUrl?: StringFilter<"Users"> | string
    signedUpAt?: DateTimeFilter<"Users"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    tokens?: TokensListRelationFilter
    marks?: MarksListRelationFilter
    activities?: ActivitiesListRelationFilter
  }, "id" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    avatarUrl?: SortOrder
    signedUpAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringWithAggregatesFilter<"Users"> | string
    gender?: EnumGenderWithAggregatesFilter<"Users"> | $Enums.Gender
    avatarUrl?: StringWithAggregatesFilter<"Users"> | string
    signedUpAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
  }

  export type MaterialsWhereInput = {
    AND?: MaterialsWhereInput | MaterialsWhereInput[]
    OR?: MaterialsWhereInput[]
    NOT?: MaterialsWhereInput | MaterialsWhereInput[]
    id?: StringFilter<"Materials"> | string
    title?: StringFilter<"Materials"> | string
    description?: StringFilter<"Materials"> | string
    imageUrl?: StringFilter<"Materials"> | string
    materialString?: StringFilter<"Materials"> | string
    createdAt?: DateTimeFilter<"Materials"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Materials"> | Date | string | null
    quiz?: XOR<QuizzesNullableScalarRelationFilter, QuizzesWhereInput> | null
    activity?: ActivitiesListRelationFilter
  }

  export type MaterialsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    materialString?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    quiz?: QuizzesOrderByWithRelationInput
    activity?: ActivitiesOrderByRelationAggregateInput
  }

  export type MaterialsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialsWhereInput | MaterialsWhereInput[]
    OR?: MaterialsWhereInput[]
    NOT?: MaterialsWhereInput | MaterialsWhereInput[]
    title?: StringFilter<"Materials"> | string
    description?: StringFilter<"Materials"> | string
    imageUrl?: StringFilter<"Materials"> | string
    materialString?: StringFilter<"Materials"> | string
    createdAt?: DateTimeFilter<"Materials"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Materials"> | Date | string | null
    quiz?: XOR<QuizzesNullableScalarRelationFilter, QuizzesWhereInput> | null
    activity?: ActivitiesListRelationFilter
  }, "id">

  export type MaterialsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    materialString?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: MaterialsCountOrderByAggregateInput
    _max?: MaterialsMaxOrderByAggregateInput
    _min?: MaterialsMinOrderByAggregateInput
  }

  export type MaterialsScalarWhereWithAggregatesInput = {
    AND?: MaterialsScalarWhereWithAggregatesInput | MaterialsScalarWhereWithAggregatesInput[]
    OR?: MaterialsScalarWhereWithAggregatesInput[]
    NOT?: MaterialsScalarWhereWithAggregatesInput | MaterialsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Materials"> | string
    title?: StringWithAggregatesFilter<"Materials"> | string
    description?: StringWithAggregatesFilter<"Materials"> | string
    imageUrl?: StringWithAggregatesFilter<"Materials"> | string
    materialString?: StringWithAggregatesFilter<"Materials"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Materials"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Materials"> | Date | string | null
  }

  export type ActivitiesWhereInput = {
    AND?: ActivitiesWhereInput | ActivitiesWhereInput[]
    OR?: ActivitiesWhereInput[]
    NOT?: ActivitiesWhereInput | ActivitiesWhereInput[]
    id?: StringFilter<"Activities"> | string
    materialId?: StringNullableFilter<"Activities"> | string | null
    testId?: StringNullableFilter<"Activities"> | string | null
    quizId?: StringNullableFilter<"Activities"> | string | null
    activityType?: EnumActivityTypeFilter<"Activities"> | $Enums.ActivityType
    message?: StringFilter<"Activities"> | string
    userId?: StringFilter<"Activities"> | string
    doneAt?: DateTimeFilter<"Activities"> | Date | string
    material?: XOR<MaterialsNullableScalarRelationFilter, MaterialsWhereInput> | null
    test?: XOR<TestsNullableScalarRelationFilter, TestsWhereInput> | null
    quiz?: XOR<QuizzesNullableScalarRelationFilter, QuizzesWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ActivitiesOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrderInput | SortOrder
    testId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    activityType?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    doneAt?: SortOrder
    material?: MaterialsOrderByWithRelationInput
    test?: TestsOrderByWithRelationInput
    quiz?: QuizzesOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type ActivitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivitiesWhereInput | ActivitiesWhereInput[]
    OR?: ActivitiesWhereInput[]
    NOT?: ActivitiesWhereInput | ActivitiesWhereInput[]
    materialId?: StringNullableFilter<"Activities"> | string | null
    testId?: StringNullableFilter<"Activities"> | string | null
    quizId?: StringNullableFilter<"Activities"> | string | null
    activityType?: EnumActivityTypeFilter<"Activities"> | $Enums.ActivityType
    message?: StringFilter<"Activities"> | string
    userId?: StringFilter<"Activities"> | string
    doneAt?: DateTimeFilter<"Activities"> | Date | string
    material?: XOR<MaterialsNullableScalarRelationFilter, MaterialsWhereInput> | null
    test?: XOR<TestsNullableScalarRelationFilter, TestsWhereInput> | null
    quiz?: XOR<QuizzesNullableScalarRelationFilter, QuizzesWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type ActivitiesOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrderInput | SortOrder
    testId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    activityType?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    doneAt?: SortOrder
    _count?: ActivitiesCountOrderByAggregateInput
    _max?: ActivitiesMaxOrderByAggregateInput
    _min?: ActivitiesMinOrderByAggregateInput
  }

  export type ActivitiesScalarWhereWithAggregatesInput = {
    AND?: ActivitiesScalarWhereWithAggregatesInput | ActivitiesScalarWhereWithAggregatesInput[]
    OR?: ActivitiesScalarWhereWithAggregatesInput[]
    NOT?: ActivitiesScalarWhereWithAggregatesInput | ActivitiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activities"> | string
    materialId?: StringNullableWithAggregatesFilter<"Activities"> | string | null
    testId?: StringNullableWithAggregatesFilter<"Activities"> | string | null
    quizId?: StringNullableWithAggregatesFilter<"Activities"> | string | null
    activityType?: EnumActivityTypeWithAggregatesFilter<"Activities"> | $Enums.ActivityType
    message?: StringWithAggregatesFilter<"Activities"> | string
    userId?: StringWithAggregatesFilter<"Activities"> | string
    doneAt?: DateTimeWithAggregatesFilter<"Activities"> | Date | string
  }

  export type TokensWhereInput = {
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    id?: StringFilter<"Tokens"> | string
    userId?: StringFilter<"Tokens"> | string
    loggedInAt?: DateTimeFilter<"Tokens"> | Date | string
    loggedOutAt?: DateTimeNullableFilter<"Tokens"> | Date | string | null
    refreshToken?: StringNullableFilter<"Tokens"> | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type TokensOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedInAt?: SortOrder
    loggedOutAt?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type TokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    userId?: StringFilter<"Tokens"> | string
    loggedInAt?: DateTimeFilter<"Tokens"> | Date | string
    loggedOutAt?: DateTimeNullableFilter<"Tokens"> | Date | string | null
    refreshToken?: StringNullableFilter<"Tokens"> | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type TokensOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedInAt?: SortOrder
    loggedOutAt?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    _count?: TokensCountOrderByAggregateInput
    _max?: TokensMaxOrderByAggregateInput
    _min?: TokensMinOrderByAggregateInput
  }

  export type TokensScalarWhereWithAggregatesInput = {
    AND?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    OR?: TokensScalarWhereWithAggregatesInput[]
    NOT?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tokens"> | string
    userId?: StringWithAggregatesFilter<"Tokens"> | string
    loggedInAt?: DateTimeWithAggregatesFilter<"Tokens"> | Date | string
    loggedOutAt?: DateTimeNullableWithAggregatesFilter<"Tokens"> | Date | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Tokens"> | string | null
  }

  export type TestsWhereInput = {
    AND?: TestsWhereInput | TestsWhereInput[]
    OR?: TestsWhereInput[]
    NOT?: TestsWhereInput | TestsWhereInput[]
    id?: StringFilter<"Tests"> | string
    title?: StringFilter<"Tests"> | string
    description?: StringFilter<"Tests"> | string
    imageUrl?: StringFilter<"Tests"> | string
    createdAt?: DateTimeFilter<"Tests"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Tests"> | Date | string | null
    activity?: ActivitiesListRelationFilter
    questions?: QuestionsListRelationFilter
    mark?: MarksListRelationFilter
  }

  export type TestsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    activity?: ActivitiesOrderByRelationAggregateInput
    questions?: QuestionsOrderByRelationAggregateInput
    mark?: MarksOrderByRelationAggregateInput
  }

  export type TestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestsWhereInput | TestsWhereInput[]
    OR?: TestsWhereInput[]
    NOT?: TestsWhereInput | TestsWhereInput[]
    title?: StringFilter<"Tests"> | string
    description?: StringFilter<"Tests"> | string
    imageUrl?: StringFilter<"Tests"> | string
    createdAt?: DateTimeFilter<"Tests"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Tests"> | Date | string | null
    activity?: ActivitiesListRelationFilter
    questions?: QuestionsListRelationFilter
    mark?: MarksListRelationFilter
  }, "id">

  export type TestsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TestsCountOrderByAggregateInput
    _max?: TestsMaxOrderByAggregateInput
    _min?: TestsMinOrderByAggregateInput
  }

  export type TestsScalarWhereWithAggregatesInput = {
    AND?: TestsScalarWhereWithAggregatesInput | TestsScalarWhereWithAggregatesInput[]
    OR?: TestsScalarWhereWithAggregatesInput[]
    NOT?: TestsScalarWhereWithAggregatesInput | TestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tests"> | string
    title?: StringWithAggregatesFilter<"Tests"> | string
    description?: StringWithAggregatesFilter<"Tests"> | string
    imageUrl?: StringWithAggregatesFilter<"Tests"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tests"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Tests"> | Date | string | null
  }

  export type QuizzesWhereInput = {
    AND?: QuizzesWhereInput | QuizzesWhereInput[]
    OR?: QuizzesWhereInput[]
    NOT?: QuizzesWhereInput | QuizzesWhereInput[]
    id?: StringFilter<"Quizzes"> | string
    materialId?: StringFilter<"Quizzes"> | string
    createdAt?: DateTimeFilter<"Quizzes"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Quizzes"> | Date | string | null
    material?: XOR<MaterialsScalarRelationFilter, MaterialsWhereInput>
    questions?: QuestionsListRelationFilter
    marks?: MarksListRelationFilter
    activity?: ActivitiesListRelationFilter
  }

  export type QuizzesOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    material?: MaterialsOrderByWithRelationInput
    questions?: QuestionsOrderByRelationAggregateInput
    marks?: MarksOrderByRelationAggregateInput
    activity?: ActivitiesOrderByRelationAggregateInput
  }

  export type QuizzesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    materialId?: string
    AND?: QuizzesWhereInput | QuizzesWhereInput[]
    OR?: QuizzesWhereInput[]
    NOT?: QuizzesWhereInput | QuizzesWhereInput[]
    createdAt?: DateTimeFilter<"Quizzes"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Quizzes"> | Date | string | null
    material?: XOR<MaterialsScalarRelationFilter, MaterialsWhereInput>
    questions?: QuestionsListRelationFilter
    marks?: MarksListRelationFilter
    activity?: ActivitiesListRelationFilter
  }, "id" | "materialId">

  export type QuizzesOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: QuizzesCountOrderByAggregateInput
    _max?: QuizzesMaxOrderByAggregateInput
    _min?: QuizzesMinOrderByAggregateInput
  }

  export type QuizzesScalarWhereWithAggregatesInput = {
    AND?: QuizzesScalarWhereWithAggregatesInput | QuizzesScalarWhereWithAggregatesInput[]
    OR?: QuizzesScalarWhereWithAggregatesInput[]
    NOT?: QuizzesScalarWhereWithAggregatesInput | QuizzesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quizzes"> | string
    materialId?: StringWithAggregatesFilter<"Quizzes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Quizzes"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Quizzes"> | Date | string | null
  }

  export type QuestionsWhereInput = {
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    id?: StringFilter<"Questions"> | string
    testId?: StringNullableFilter<"Questions"> | string | null
    quizId?: StringNullableFilter<"Questions"> | string | null
    question?: StringFilter<"Questions"> | string
    imageUrl?: StringNullableFilter<"Questions"> | string | null
    optionA?: StringFilter<"Questions"> | string
    optionB?: StringFilter<"Questions"> | string
    optionC?: StringFilter<"Questions"> | string
    optionD?: StringNullableFilter<"Questions"> | string | null
    optionE?: StringNullableFilter<"Questions"> | string | null
    correctOption?: StringFilter<"Questions"> | string
    createdAt?: DateTimeFilter<"Questions"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Questions"> | Date | string | null
    test?: XOR<TestsNullableScalarRelationFilter, TestsWhereInput> | null
    quiz?: XOR<QuizzesNullableScalarRelationFilter, QuizzesWhereInput> | null
  }

  export type QuestionsOrderByWithRelationInput = {
    id?: SortOrder
    testId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    question?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrderInput | SortOrder
    optionE?: SortOrderInput | SortOrder
    correctOption?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    test?: TestsOrderByWithRelationInput
    quiz?: QuizzesOrderByWithRelationInput
  }

  export type QuestionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    testId?: StringNullableFilter<"Questions"> | string | null
    quizId?: StringNullableFilter<"Questions"> | string | null
    question?: StringFilter<"Questions"> | string
    imageUrl?: StringNullableFilter<"Questions"> | string | null
    optionA?: StringFilter<"Questions"> | string
    optionB?: StringFilter<"Questions"> | string
    optionC?: StringFilter<"Questions"> | string
    optionD?: StringNullableFilter<"Questions"> | string | null
    optionE?: StringNullableFilter<"Questions"> | string | null
    correctOption?: StringFilter<"Questions"> | string
    createdAt?: DateTimeFilter<"Questions"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Questions"> | Date | string | null
    test?: XOR<TestsNullableScalarRelationFilter, TestsWhereInput> | null
    quiz?: XOR<QuizzesNullableScalarRelationFilter, QuizzesWhereInput> | null
  }, "id">

  export type QuestionsOrderByWithAggregationInput = {
    id?: SortOrder
    testId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    question?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrderInput | SortOrder
    optionE?: SortOrderInput | SortOrder
    correctOption?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: QuestionsCountOrderByAggregateInput
    _max?: QuestionsMaxOrderByAggregateInput
    _min?: QuestionsMinOrderByAggregateInput
  }

  export type QuestionsScalarWhereWithAggregatesInput = {
    AND?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    OR?: QuestionsScalarWhereWithAggregatesInput[]
    NOT?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Questions"> | string
    testId?: StringNullableWithAggregatesFilter<"Questions"> | string | null
    quizId?: StringNullableWithAggregatesFilter<"Questions"> | string | null
    question?: StringWithAggregatesFilter<"Questions"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Questions"> | string | null
    optionA?: StringWithAggregatesFilter<"Questions"> | string
    optionB?: StringWithAggregatesFilter<"Questions"> | string
    optionC?: StringWithAggregatesFilter<"Questions"> | string
    optionD?: StringNullableWithAggregatesFilter<"Questions"> | string | null
    optionE?: StringNullableWithAggregatesFilter<"Questions"> | string | null
    correctOption?: StringWithAggregatesFilter<"Questions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Questions"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Questions"> | Date | string | null
  }

  export type MarksWhereInput = {
    AND?: MarksWhereInput | MarksWhereInput[]
    OR?: MarksWhereInput[]
    NOT?: MarksWhereInput | MarksWhereInput[]
    id?: StringFilter<"Marks"> | string
    userId?: StringFilter<"Marks"> | string
    testId?: StringNullableFilter<"Marks"> | string | null
    quizId?: StringNullableFilter<"Marks"> | string | null
    mark?: IntFilter<"Marks"> | number
    markedAt?: DateTimeFilter<"Marks"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    test?: XOR<TestsNullableScalarRelationFilter, TestsWhereInput> | null
    quiz?: XOR<QuizzesNullableScalarRelationFilter, QuizzesWhereInput> | null
  }

  export type MarksOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    mark?: SortOrder
    markedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    test?: TestsOrderByWithRelationInput
    quiz?: QuizzesOrderByWithRelationInput
  }

  export type MarksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_testId?: MarksUserIdTestIdCompoundUniqueInput
    userId_quizId?: MarksUserIdQuizIdCompoundUniqueInput
    AND?: MarksWhereInput | MarksWhereInput[]
    OR?: MarksWhereInput[]
    NOT?: MarksWhereInput | MarksWhereInput[]
    userId?: StringFilter<"Marks"> | string
    testId?: StringNullableFilter<"Marks"> | string | null
    quizId?: StringNullableFilter<"Marks"> | string | null
    mark?: IntFilter<"Marks"> | number
    markedAt?: DateTimeFilter<"Marks"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    test?: XOR<TestsNullableScalarRelationFilter, TestsWhereInput> | null
    quiz?: XOR<QuizzesNullableScalarRelationFilter, QuizzesWhereInput> | null
  }, "id" | "userId_testId" | "userId_quizId">

  export type MarksOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    mark?: SortOrder
    markedAt?: SortOrder
    _count?: MarksCountOrderByAggregateInput
    _avg?: MarksAvgOrderByAggregateInput
    _max?: MarksMaxOrderByAggregateInput
    _min?: MarksMinOrderByAggregateInput
    _sum?: MarksSumOrderByAggregateInput
  }

  export type MarksScalarWhereWithAggregatesInput = {
    AND?: MarksScalarWhereWithAggregatesInput | MarksScalarWhereWithAggregatesInput[]
    OR?: MarksScalarWhereWithAggregatesInput[]
    NOT?: MarksScalarWhereWithAggregatesInput | MarksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Marks"> | string
    userId?: StringWithAggregatesFilter<"Marks"> | string
    testId?: StringNullableWithAggregatesFilter<"Marks"> | string | null
    quizId?: StringNullableWithAggregatesFilter<"Marks"> | string | null
    mark?: IntWithAggregatesFilter<"Marks"> | number
    markedAt?: DateTimeWithAggregatesFilter<"Marks"> | Date | string
  }

  export type BackupCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type BackupUncheckedCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type BackupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type BackupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type BackupCreateManyInput = {
    id?: string
    username: string
    password: string
  }

  export type BackupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type BackupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    password: string
    fullName: string
    gender: $Enums.Gender
    avatarUrl: string
    signedUpAt: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    tokens?: TokensCreateNestedManyWithoutUserInput
    marks?: MarksCreateNestedManyWithoutUserInput
    activities?: ActivitiesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    fullName: string
    gender: $Enums.Gender
    avatarUrl: string
    signedUpAt: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
    marks?: MarksUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivitiesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avatarUrl?: StringFieldUpdateOperationsInput | string
    signedUpAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokens?: TokensUpdateManyWithoutUserNestedInput
    marks?: MarksUpdateManyWithoutUserNestedInput
    activities?: ActivitiesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avatarUrl?: StringFieldUpdateOperationsInput | string
    signedUpAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
    marks?: MarksUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivitiesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    password: string
    fullName: string
    gender: $Enums.Gender
    avatarUrl: string
    signedUpAt: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avatarUrl?: StringFieldUpdateOperationsInput | string
    signedUpAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avatarUrl?: StringFieldUpdateOperationsInput | string
    signedUpAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type MaterialsCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    materialString: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    quiz?: QuizzesCreateNestedOneWithoutMaterialInput
    activity?: ActivitiesCreateNestedManyWithoutMaterialInput
  }

  export type MaterialsUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    materialString: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    quiz?: QuizzesUncheckedCreateNestedOneWithoutMaterialInput
    activity?: ActivitiesUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    materialString?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quiz?: QuizzesUpdateOneWithoutMaterialNestedInput
    activity?: ActivitiesUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    materialString?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quiz?: QuizzesUncheckedUpdateOneWithoutMaterialNestedInput
    activity?: ActivitiesUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialsCreateManyInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    materialString: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type MaterialsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    materialString?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaterialsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    materialString?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivitiesCreateInput = {
    id?: string
    activityType: $Enums.ActivityType
    message: string
    doneAt: Date | string
    material?: MaterialsCreateNestedOneWithoutActivityInput
    test?: TestsCreateNestedOneWithoutActivityInput
    quiz?: QuizzesCreateNestedOneWithoutActivityInput
    user: UsersCreateNestedOneWithoutActivitiesInput
  }

  export type ActivitiesUncheckedCreateInput = {
    id?: string
    materialId?: string | null
    testId?: string | null
    quizId?: string | null
    activityType: $Enums.ActivityType
    message: string
    userId: string
    doneAt: Date | string
  }

  export type ActivitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialsUpdateOneWithoutActivityNestedInput
    test?: TestsUpdateOneWithoutActivityNestedInput
    quiz?: QuizzesUpdateOneWithoutActivityNestedInput
    user?: UsersUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesCreateManyInput = {
    id?: string
    materialId?: string | null
    testId?: string | null
    quizId?: string | null
    activityType: $Enums.ActivityType
    message: string
    userId: string
    doneAt: Date | string
  }

  export type ActivitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensCreateInput = {
    id?: string
    loggedInAt: Date | string
    loggedOutAt?: Date | string | null
    refreshToken?: string | null
    user: UsersCreateNestedOneWithoutTokensInput
  }

  export type TokensUncheckedCreateInput = {
    id?: string
    userId: string
    loggedInAt: Date | string
    loggedOutAt?: Date | string | null
    refreshToken?: string | null
  }

  export type TokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokensCreateManyInput = {
    id?: string
    userId: string
    loggedInAt: Date | string
    loggedOutAt?: Date | string | null
    refreshToken?: string | null
  }

  export type TokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestsCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    activity?: ActivitiesCreateNestedManyWithoutTestInput
    questions?: QuestionsCreateNestedManyWithoutTestInput
    mark?: MarksCreateNestedManyWithoutTestInput
  }

  export type TestsUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    activity?: ActivitiesUncheckedCreateNestedManyWithoutTestInput
    questions?: QuestionsUncheckedCreateNestedManyWithoutTestInput
    mark?: MarksUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: ActivitiesUpdateManyWithoutTestNestedInput
    questions?: QuestionsUpdateManyWithoutTestNestedInput
    mark?: MarksUpdateManyWithoutTestNestedInput
  }

  export type TestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: ActivitiesUncheckedUpdateManyWithoutTestNestedInput
    questions?: QuestionsUncheckedUpdateManyWithoutTestNestedInput
    mark?: MarksUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestsCreateManyInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type TestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizzesCreateInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    material?: MaterialsCreateNestedOneWithoutQuizInput
    questions?: QuestionsCreateNestedManyWithoutQuizInput
    marks?: MarksCreateNestedManyWithoutQuizInput
    activity?: ActivitiesCreateNestedManyWithoutQuizInput
  }

  export type QuizzesUncheckedCreateInput = {
    id?: string
    materialId?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    questions?: QuestionsUncheckedCreateNestedManyWithoutQuizInput
    marks?: MarksUncheckedCreateNestedManyWithoutQuizInput
    activity?: ActivitiesUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizzesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    material?: MaterialsUpdateOneRequiredWithoutQuizNestedInput
    questions?: QuestionsUpdateManyWithoutQuizNestedInput
    marks?: MarksUpdateManyWithoutQuizNestedInput
    activity?: ActivitiesUpdateManyWithoutQuizNestedInput
  }

  export type QuizzesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionsUncheckedUpdateManyWithoutQuizNestedInput
    marks?: MarksUncheckedUpdateManyWithoutQuizNestedInput
    activity?: ActivitiesUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizzesCreateManyInput = {
    id?: string
    materialId?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type QuizzesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizzesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionsCreateInput = {
    id?: string
    question: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD?: string | null
    optionE?: string | null
    correctOption: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    test?: TestsCreateNestedOneWithoutQuestionsInput
    quiz?: QuizzesCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateInput = {
    id?: string
    testId?: string | null
    quizId?: string | null
    question: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD?: string | null
    optionE?: string | null
    correctOption: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type QuestionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: NullableStringFieldUpdateOperationsInput | string | null
    optionE?: NullableStringFieldUpdateOperationsInput | string | null
    correctOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    test?: TestsUpdateOneWithoutQuestionsNestedInput
    quiz?: QuizzesUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    question?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: NullableStringFieldUpdateOperationsInput | string | null
    optionE?: NullableStringFieldUpdateOperationsInput | string | null
    correctOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionsCreateManyInput = {
    id?: string
    testId?: string | null
    quizId?: string | null
    question: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD?: string | null
    optionE?: string | null
    correctOption: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type QuestionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: NullableStringFieldUpdateOperationsInput | string | null
    optionE?: NullableStringFieldUpdateOperationsInput | string | null
    correctOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    question?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: NullableStringFieldUpdateOperationsInput | string | null
    optionE?: NullableStringFieldUpdateOperationsInput | string | null
    correctOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarksCreateInput = {
    id?: string
    mark: number
    markedAt: Date | string
    user: UsersCreateNestedOneWithoutMarksInput
    test?: TestsCreateNestedOneWithoutMarkInput
    quiz?: QuizzesCreateNestedOneWithoutMarksInput
  }

  export type MarksUncheckedCreateInput = {
    id?: string
    userId: string
    testId?: string | null
    quizId?: string | null
    mark: number
    markedAt: Date | string
  }

  export type MarksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutMarksNestedInput
    test?: TestsUpdateOneWithoutMarkNestedInput
    quiz?: QuizzesUpdateOneWithoutMarksNestedInput
  }

  export type MarksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarksCreateManyInput = {
    id?: string
    userId: string
    testId?: string | null
    quizId?: string | null
    mark: number
    markedAt: Date | string
  }

  export type MarksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BackupCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type BackupMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type BackupMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type TokensListRelationFilter = {
    every?: TokensWhereInput
    some?: TokensWhereInput
    none?: TokensWhereInput
  }

  export type MarksListRelationFilter = {
    every?: MarksWhereInput
    some?: MarksWhereInput
    none?: MarksWhereInput
  }

  export type ActivitiesListRelationFilter = {
    every?: ActivitiesWhereInput
    some?: ActivitiesWhereInput
    none?: ActivitiesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    avatarUrl?: SortOrder
    signedUpAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    avatarUrl?: SortOrder
    signedUpAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    avatarUrl?: SortOrder
    signedUpAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type QuizzesNullableScalarRelationFilter = {
    is?: QuizzesWhereInput | null
    isNot?: QuizzesWhereInput | null
  }

  export type MaterialsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    materialString?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MaterialsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    materialString?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MaterialsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    materialString?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type MaterialsNullableScalarRelationFilter = {
    is?: MaterialsWhereInput | null
    isNot?: MaterialsWhereInput | null
  }

  export type TestsNullableScalarRelationFilter = {
    is?: TestsWhereInput | null
    isNot?: TestsWhereInput | null
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ActivitiesCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    testId?: SortOrder
    quizId?: SortOrder
    activityType?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    doneAt?: SortOrder
  }

  export type ActivitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    testId?: SortOrder
    quizId?: SortOrder
    activityType?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    doneAt?: SortOrder
  }

  export type ActivitiesMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    testId?: SortOrder
    quizId?: SortOrder
    activityType?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    doneAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type TokensCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedInAt?: SortOrder
    loggedOutAt?: SortOrder
    refreshToken?: SortOrder
  }

  export type TokensMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedInAt?: SortOrder
    loggedOutAt?: SortOrder
    refreshToken?: SortOrder
  }

  export type TokensMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedInAt?: SortOrder
    loggedOutAt?: SortOrder
    refreshToken?: SortOrder
  }

  export type QuestionsListRelationFilter = {
    every?: QuestionsWhereInput
    some?: QuestionsWhereInput
    none?: QuestionsWhereInput
  }

  export type QuestionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TestsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TestsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MaterialsScalarRelationFilter = {
    is?: MaterialsWhereInput
    isNot?: MaterialsWhereInput
  }

  export type QuizzesCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type QuizzesMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type QuizzesMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type QuestionsCountOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    quizId?: SortOrder
    question?: SortOrder
    imageUrl?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    optionE?: SortOrder
    correctOption?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type QuestionsMaxOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    quizId?: SortOrder
    question?: SortOrder
    imageUrl?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    optionE?: SortOrder
    correctOption?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type QuestionsMinOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    quizId?: SortOrder
    question?: SortOrder
    imageUrl?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    optionE?: SortOrder
    correctOption?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MarksUserIdTestIdCompoundUniqueInput = {
    userId: string
    testId: string
  }

  export type MarksUserIdQuizIdCompoundUniqueInput = {
    userId: string
    quizId: string
  }

  export type MarksCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrder
    quizId?: SortOrder
    mark?: SortOrder
    markedAt?: SortOrder
  }

  export type MarksAvgOrderByAggregateInput = {
    mark?: SortOrder
  }

  export type MarksMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrder
    quizId?: SortOrder
    mark?: SortOrder
    markedAt?: SortOrder
  }

  export type MarksMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrder
    quizId?: SortOrder
    mark?: SortOrder
    markedAt?: SortOrder
  }

  export type MarksSumOrderByAggregateInput = {
    mark?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TokensCreateNestedManyWithoutUserInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
  }

  export type MarksCreateNestedManyWithoutUserInput = {
    create?: XOR<MarksCreateWithoutUserInput, MarksUncheckedCreateWithoutUserInput> | MarksCreateWithoutUserInput[] | MarksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutUserInput | MarksCreateOrConnectWithoutUserInput[]
    createMany?: MarksCreateManyUserInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type ActivitiesCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivitiesCreateWithoutUserInput, ActivitiesUncheckedCreateWithoutUserInput> | ActivitiesCreateWithoutUserInput[] | ActivitiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutUserInput | ActivitiesCreateOrConnectWithoutUserInput[]
    createMany?: ActivitiesCreateManyUserInputEnvelope
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
  }

  export type TokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
  }

  export type MarksUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MarksCreateWithoutUserInput, MarksUncheckedCreateWithoutUserInput> | MarksCreateWithoutUserInput[] | MarksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutUserInput | MarksCreateOrConnectWithoutUserInput[]
    createMany?: MarksCreateManyUserInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type ActivitiesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivitiesCreateWithoutUserInput, ActivitiesUncheckedCreateWithoutUserInput> | ActivitiesCreateWithoutUserInput[] | ActivitiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutUserInput | ActivitiesCreateOrConnectWithoutUserInput[]
    createMany?: ActivitiesCreateManyUserInputEnvelope
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type TokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    upsert?: TokensUpsertWithWhereUniqueWithoutUserInput | TokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    set?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    disconnect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    delete?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    update?: TokensUpdateWithWhereUniqueWithoutUserInput | TokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokensUpdateManyWithWhereWithoutUserInput | TokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokensScalarWhereInput | TokensScalarWhereInput[]
  }

  export type MarksUpdateManyWithoutUserNestedInput = {
    create?: XOR<MarksCreateWithoutUserInput, MarksUncheckedCreateWithoutUserInput> | MarksCreateWithoutUserInput[] | MarksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutUserInput | MarksCreateOrConnectWithoutUserInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutUserInput | MarksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MarksCreateManyUserInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutUserInput | MarksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutUserInput | MarksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type ActivitiesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivitiesCreateWithoutUserInput, ActivitiesUncheckedCreateWithoutUserInput> | ActivitiesCreateWithoutUserInput[] | ActivitiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutUserInput | ActivitiesCreateOrConnectWithoutUserInput[]
    upsert?: ActivitiesUpsertWithWhereUniqueWithoutUserInput | ActivitiesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivitiesCreateManyUserInputEnvelope
    set?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    disconnect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    delete?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    update?: ActivitiesUpdateWithWhereUniqueWithoutUserInput | ActivitiesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivitiesUpdateManyWithWhereWithoutUserInput | ActivitiesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
  }

  export type TokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    upsert?: TokensUpsertWithWhereUniqueWithoutUserInput | TokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    set?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    disconnect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    delete?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    update?: TokensUpdateWithWhereUniqueWithoutUserInput | TokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokensUpdateManyWithWhereWithoutUserInput | TokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokensScalarWhereInput | TokensScalarWhereInput[]
  }

  export type MarksUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MarksCreateWithoutUserInput, MarksUncheckedCreateWithoutUserInput> | MarksCreateWithoutUserInput[] | MarksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutUserInput | MarksCreateOrConnectWithoutUserInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutUserInput | MarksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MarksCreateManyUserInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutUserInput | MarksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutUserInput | MarksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type ActivitiesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivitiesCreateWithoutUserInput, ActivitiesUncheckedCreateWithoutUserInput> | ActivitiesCreateWithoutUserInput[] | ActivitiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutUserInput | ActivitiesCreateOrConnectWithoutUserInput[]
    upsert?: ActivitiesUpsertWithWhereUniqueWithoutUserInput | ActivitiesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivitiesCreateManyUserInputEnvelope
    set?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    disconnect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    delete?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    update?: ActivitiesUpdateWithWhereUniqueWithoutUserInput | ActivitiesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivitiesUpdateManyWithWhereWithoutUserInput | ActivitiesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
  }

  export type QuizzesCreateNestedOneWithoutMaterialInput = {
    create?: XOR<QuizzesCreateWithoutMaterialInput, QuizzesUncheckedCreateWithoutMaterialInput>
    connectOrCreate?: QuizzesCreateOrConnectWithoutMaterialInput
    connect?: QuizzesWhereUniqueInput
  }

  export type ActivitiesCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ActivitiesCreateWithoutMaterialInput, ActivitiesUncheckedCreateWithoutMaterialInput> | ActivitiesCreateWithoutMaterialInput[] | ActivitiesUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutMaterialInput | ActivitiesCreateOrConnectWithoutMaterialInput[]
    createMany?: ActivitiesCreateManyMaterialInputEnvelope
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
  }

  export type QuizzesUncheckedCreateNestedOneWithoutMaterialInput = {
    create?: XOR<QuizzesCreateWithoutMaterialInput, QuizzesUncheckedCreateWithoutMaterialInput>
    connectOrCreate?: QuizzesCreateOrConnectWithoutMaterialInput
    connect?: QuizzesWhereUniqueInput
  }

  export type ActivitiesUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ActivitiesCreateWithoutMaterialInput, ActivitiesUncheckedCreateWithoutMaterialInput> | ActivitiesCreateWithoutMaterialInput[] | ActivitiesUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutMaterialInput | ActivitiesCreateOrConnectWithoutMaterialInput[]
    createMany?: ActivitiesCreateManyMaterialInputEnvelope
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
  }

  export type QuizzesUpdateOneWithoutMaterialNestedInput = {
    create?: XOR<QuizzesCreateWithoutMaterialInput, QuizzesUncheckedCreateWithoutMaterialInput>
    connectOrCreate?: QuizzesCreateOrConnectWithoutMaterialInput
    upsert?: QuizzesUpsertWithoutMaterialInput
    disconnect?: QuizzesWhereInput | boolean
    delete?: QuizzesWhereInput | boolean
    connect?: QuizzesWhereUniqueInput
    update?: XOR<XOR<QuizzesUpdateToOneWithWhereWithoutMaterialInput, QuizzesUpdateWithoutMaterialInput>, QuizzesUncheckedUpdateWithoutMaterialInput>
  }

  export type ActivitiesUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ActivitiesCreateWithoutMaterialInput, ActivitiesUncheckedCreateWithoutMaterialInput> | ActivitiesCreateWithoutMaterialInput[] | ActivitiesUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutMaterialInput | ActivitiesCreateOrConnectWithoutMaterialInput[]
    upsert?: ActivitiesUpsertWithWhereUniqueWithoutMaterialInput | ActivitiesUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ActivitiesCreateManyMaterialInputEnvelope
    set?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    disconnect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    delete?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    update?: ActivitiesUpdateWithWhereUniqueWithoutMaterialInput | ActivitiesUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ActivitiesUpdateManyWithWhereWithoutMaterialInput | ActivitiesUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
  }

  export type QuizzesUncheckedUpdateOneWithoutMaterialNestedInput = {
    create?: XOR<QuizzesCreateWithoutMaterialInput, QuizzesUncheckedCreateWithoutMaterialInput>
    connectOrCreate?: QuizzesCreateOrConnectWithoutMaterialInput
    upsert?: QuizzesUpsertWithoutMaterialInput
    disconnect?: QuizzesWhereInput | boolean
    delete?: QuizzesWhereInput | boolean
    connect?: QuizzesWhereUniqueInput
    update?: XOR<XOR<QuizzesUpdateToOneWithWhereWithoutMaterialInput, QuizzesUpdateWithoutMaterialInput>, QuizzesUncheckedUpdateWithoutMaterialInput>
  }

  export type ActivitiesUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ActivitiesCreateWithoutMaterialInput, ActivitiesUncheckedCreateWithoutMaterialInput> | ActivitiesCreateWithoutMaterialInput[] | ActivitiesUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutMaterialInput | ActivitiesCreateOrConnectWithoutMaterialInput[]
    upsert?: ActivitiesUpsertWithWhereUniqueWithoutMaterialInput | ActivitiesUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ActivitiesCreateManyMaterialInputEnvelope
    set?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    disconnect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    delete?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    update?: ActivitiesUpdateWithWhereUniqueWithoutMaterialInput | ActivitiesUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ActivitiesUpdateManyWithWhereWithoutMaterialInput | ActivitiesUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
  }

  export type MaterialsCreateNestedOneWithoutActivityInput = {
    create?: XOR<MaterialsCreateWithoutActivityInput, MaterialsUncheckedCreateWithoutActivityInput>
    connectOrCreate?: MaterialsCreateOrConnectWithoutActivityInput
    connect?: MaterialsWhereUniqueInput
  }

  export type TestsCreateNestedOneWithoutActivityInput = {
    create?: XOR<TestsCreateWithoutActivityInput, TestsUncheckedCreateWithoutActivityInput>
    connectOrCreate?: TestsCreateOrConnectWithoutActivityInput
    connect?: TestsWhereUniqueInput
  }

  export type QuizzesCreateNestedOneWithoutActivityInput = {
    create?: XOR<QuizzesCreateWithoutActivityInput, QuizzesUncheckedCreateWithoutActivityInput>
    connectOrCreate?: QuizzesCreateOrConnectWithoutActivityInput
    connect?: QuizzesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UsersCreateWithoutActivitiesInput, UsersUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutActivitiesInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type MaterialsUpdateOneWithoutActivityNestedInput = {
    create?: XOR<MaterialsCreateWithoutActivityInput, MaterialsUncheckedCreateWithoutActivityInput>
    connectOrCreate?: MaterialsCreateOrConnectWithoutActivityInput
    upsert?: MaterialsUpsertWithoutActivityInput
    disconnect?: MaterialsWhereInput | boolean
    delete?: MaterialsWhereInput | boolean
    connect?: MaterialsWhereUniqueInput
    update?: XOR<XOR<MaterialsUpdateToOneWithWhereWithoutActivityInput, MaterialsUpdateWithoutActivityInput>, MaterialsUncheckedUpdateWithoutActivityInput>
  }

  export type TestsUpdateOneWithoutActivityNestedInput = {
    create?: XOR<TestsCreateWithoutActivityInput, TestsUncheckedCreateWithoutActivityInput>
    connectOrCreate?: TestsCreateOrConnectWithoutActivityInput
    upsert?: TestsUpsertWithoutActivityInput
    disconnect?: TestsWhereInput | boolean
    delete?: TestsWhereInput | boolean
    connect?: TestsWhereUniqueInput
    update?: XOR<XOR<TestsUpdateToOneWithWhereWithoutActivityInput, TestsUpdateWithoutActivityInput>, TestsUncheckedUpdateWithoutActivityInput>
  }

  export type QuizzesUpdateOneWithoutActivityNestedInput = {
    create?: XOR<QuizzesCreateWithoutActivityInput, QuizzesUncheckedCreateWithoutActivityInput>
    connectOrCreate?: QuizzesCreateOrConnectWithoutActivityInput
    upsert?: QuizzesUpsertWithoutActivityInput
    disconnect?: QuizzesWhereInput | boolean
    delete?: QuizzesWhereInput | boolean
    connect?: QuizzesWhereUniqueInput
    update?: XOR<XOR<QuizzesUpdateToOneWithWhereWithoutActivityInput, QuizzesUpdateWithoutActivityInput>, QuizzesUncheckedUpdateWithoutActivityInput>
  }

  export type UsersUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UsersCreateWithoutActivitiesInput, UsersUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutActivitiesInput
    upsert?: UsersUpsertWithoutActivitiesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutActivitiesInput, UsersUpdateWithoutActivitiesInput>, UsersUncheckedUpdateWithoutActivitiesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsersCreateNestedOneWithoutTokensInput = {
    create?: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTokensInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTokensInput
    upsert?: UsersUpsertWithoutTokensInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTokensInput, UsersUpdateWithoutTokensInput>, UsersUncheckedUpdateWithoutTokensInput>
  }

  export type ActivitiesCreateNestedManyWithoutTestInput = {
    create?: XOR<ActivitiesCreateWithoutTestInput, ActivitiesUncheckedCreateWithoutTestInput> | ActivitiesCreateWithoutTestInput[] | ActivitiesUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutTestInput | ActivitiesCreateOrConnectWithoutTestInput[]
    createMany?: ActivitiesCreateManyTestInputEnvelope
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
  }

  export type QuestionsCreateNestedManyWithoutTestInput = {
    create?: XOR<QuestionsCreateWithoutTestInput, QuestionsUncheckedCreateWithoutTestInput> | QuestionsCreateWithoutTestInput[] | QuestionsUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTestInput | QuestionsCreateOrConnectWithoutTestInput[]
    createMany?: QuestionsCreateManyTestInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type MarksCreateNestedManyWithoutTestInput = {
    create?: XOR<MarksCreateWithoutTestInput, MarksUncheckedCreateWithoutTestInput> | MarksCreateWithoutTestInput[] | MarksUncheckedCreateWithoutTestInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutTestInput | MarksCreateOrConnectWithoutTestInput[]
    createMany?: MarksCreateManyTestInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type ActivitiesUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<ActivitiesCreateWithoutTestInput, ActivitiesUncheckedCreateWithoutTestInput> | ActivitiesCreateWithoutTestInput[] | ActivitiesUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutTestInput | ActivitiesCreateOrConnectWithoutTestInput[]
    createMany?: ActivitiesCreateManyTestInputEnvelope
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
  }

  export type QuestionsUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<QuestionsCreateWithoutTestInput, QuestionsUncheckedCreateWithoutTestInput> | QuestionsCreateWithoutTestInput[] | QuestionsUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTestInput | QuestionsCreateOrConnectWithoutTestInput[]
    createMany?: QuestionsCreateManyTestInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type MarksUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<MarksCreateWithoutTestInput, MarksUncheckedCreateWithoutTestInput> | MarksCreateWithoutTestInput[] | MarksUncheckedCreateWithoutTestInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutTestInput | MarksCreateOrConnectWithoutTestInput[]
    createMany?: MarksCreateManyTestInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type ActivitiesUpdateManyWithoutTestNestedInput = {
    create?: XOR<ActivitiesCreateWithoutTestInput, ActivitiesUncheckedCreateWithoutTestInput> | ActivitiesCreateWithoutTestInput[] | ActivitiesUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutTestInput | ActivitiesCreateOrConnectWithoutTestInput[]
    upsert?: ActivitiesUpsertWithWhereUniqueWithoutTestInput | ActivitiesUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: ActivitiesCreateManyTestInputEnvelope
    set?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    disconnect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    delete?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    update?: ActivitiesUpdateWithWhereUniqueWithoutTestInput | ActivitiesUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: ActivitiesUpdateManyWithWhereWithoutTestInput | ActivitiesUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
  }

  export type QuestionsUpdateManyWithoutTestNestedInput = {
    create?: XOR<QuestionsCreateWithoutTestInput, QuestionsUncheckedCreateWithoutTestInput> | QuestionsCreateWithoutTestInput[] | QuestionsUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTestInput | QuestionsCreateOrConnectWithoutTestInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutTestInput | QuestionsUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: QuestionsCreateManyTestInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutTestInput | QuestionsUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutTestInput | QuestionsUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type MarksUpdateManyWithoutTestNestedInput = {
    create?: XOR<MarksCreateWithoutTestInput, MarksUncheckedCreateWithoutTestInput> | MarksCreateWithoutTestInput[] | MarksUncheckedCreateWithoutTestInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutTestInput | MarksCreateOrConnectWithoutTestInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutTestInput | MarksUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: MarksCreateManyTestInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutTestInput | MarksUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutTestInput | MarksUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type ActivitiesUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<ActivitiesCreateWithoutTestInput, ActivitiesUncheckedCreateWithoutTestInput> | ActivitiesCreateWithoutTestInput[] | ActivitiesUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutTestInput | ActivitiesCreateOrConnectWithoutTestInput[]
    upsert?: ActivitiesUpsertWithWhereUniqueWithoutTestInput | ActivitiesUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: ActivitiesCreateManyTestInputEnvelope
    set?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    disconnect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    delete?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    update?: ActivitiesUpdateWithWhereUniqueWithoutTestInput | ActivitiesUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: ActivitiesUpdateManyWithWhereWithoutTestInput | ActivitiesUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
  }

  export type QuestionsUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<QuestionsCreateWithoutTestInput, QuestionsUncheckedCreateWithoutTestInput> | QuestionsCreateWithoutTestInput[] | QuestionsUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTestInput | QuestionsCreateOrConnectWithoutTestInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutTestInput | QuestionsUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: QuestionsCreateManyTestInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutTestInput | QuestionsUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutTestInput | QuestionsUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type MarksUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<MarksCreateWithoutTestInput, MarksUncheckedCreateWithoutTestInput> | MarksCreateWithoutTestInput[] | MarksUncheckedCreateWithoutTestInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutTestInput | MarksCreateOrConnectWithoutTestInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutTestInput | MarksUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: MarksCreateManyTestInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutTestInput | MarksUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutTestInput | MarksUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type MaterialsCreateNestedOneWithoutQuizInput = {
    create?: XOR<MaterialsCreateWithoutQuizInput, MaterialsUncheckedCreateWithoutQuizInput>
    connectOrCreate?: MaterialsCreateOrConnectWithoutQuizInput
    connect?: MaterialsWhereUniqueInput
  }

  export type QuestionsCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionsCreateWithoutQuizInput, QuestionsUncheckedCreateWithoutQuizInput> | QuestionsCreateWithoutQuizInput[] | QuestionsUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutQuizInput | QuestionsCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionsCreateManyQuizInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type MarksCreateNestedManyWithoutQuizInput = {
    create?: XOR<MarksCreateWithoutQuizInput, MarksUncheckedCreateWithoutQuizInput> | MarksCreateWithoutQuizInput[] | MarksUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutQuizInput | MarksCreateOrConnectWithoutQuizInput[]
    createMany?: MarksCreateManyQuizInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type ActivitiesCreateNestedManyWithoutQuizInput = {
    create?: XOR<ActivitiesCreateWithoutQuizInput, ActivitiesUncheckedCreateWithoutQuizInput> | ActivitiesCreateWithoutQuizInput[] | ActivitiesUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutQuizInput | ActivitiesCreateOrConnectWithoutQuizInput[]
    createMany?: ActivitiesCreateManyQuizInputEnvelope
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
  }

  export type QuestionsUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionsCreateWithoutQuizInput, QuestionsUncheckedCreateWithoutQuizInput> | QuestionsCreateWithoutQuizInput[] | QuestionsUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutQuizInput | QuestionsCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionsCreateManyQuizInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type MarksUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<MarksCreateWithoutQuizInput, MarksUncheckedCreateWithoutQuizInput> | MarksCreateWithoutQuizInput[] | MarksUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutQuizInput | MarksCreateOrConnectWithoutQuizInput[]
    createMany?: MarksCreateManyQuizInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type ActivitiesUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<ActivitiesCreateWithoutQuizInput, ActivitiesUncheckedCreateWithoutQuizInput> | ActivitiesCreateWithoutQuizInput[] | ActivitiesUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutQuizInput | ActivitiesCreateOrConnectWithoutQuizInput[]
    createMany?: ActivitiesCreateManyQuizInputEnvelope
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
  }

  export type MaterialsUpdateOneRequiredWithoutQuizNestedInput = {
    create?: XOR<MaterialsCreateWithoutQuizInput, MaterialsUncheckedCreateWithoutQuizInput>
    connectOrCreate?: MaterialsCreateOrConnectWithoutQuizInput
    upsert?: MaterialsUpsertWithoutQuizInput
    connect?: MaterialsWhereUniqueInput
    update?: XOR<XOR<MaterialsUpdateToOneWithWhereWithoutQuizInput, MaterialsUpdateWithoutQuizInput>, MaterialsUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionsUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionsCreateWithoutQuizInput, QuestionsUncheckedCreateWithoutQuizInput> | QuestionsCreateWithoutQuizInput[] | QuestionsUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutQuizInput | QuestionsCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutQuizInput | QuestionsUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionsCreateManyQuizInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutQuizInput | QuestionsUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutQuizInput | QuestionsUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type MarksUpdateManyWithoutQuizNestedInput = {
    create?: XOR<MarksCreateWithoutQuizInput, MarksUncheckedCreateWithoutQuizInput> | MarksCreateWithoutQuizInput[] | MarksUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutQuizInput | MarksCreateOrConnectWithoutQuizInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutQuizInput | MarksUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: MarksCreateManyQuizInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutQuizInput | MarksUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutQuizInput | MarksUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type ActivitiesUpdateManyWithoutQuizNestedInput = {
    create?: XOR<ActivitiesCreateWithoutQuizInput, ActivitiesUncheckedCreateWithoutQuizInput> | ActivitiesCreateWithoutQuizInput[] | ActivitiesUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutQuizInput | ActivitiesCreateOrConnectWithoutQuizInput[]
    upsert?: ActivitiesUpsertWithWhereUniqueWithoutQuizInput | ActivitiesUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: ActivitiesCreateManyQuizInputEnvelope
    set?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    disconnect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    delete?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    update?: ActivitiesUpdateWithWhereUniqueWithoutQuizInput | ActivitiesUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: ActivitiesUpdateManyWithWhereWithoutQuizInput | ActivitiesUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
  }

  export type QuestionsUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionsCreateWithoutQuizInput, QuestionsUncheckedCreateWithoutQuizInput> | QuestionsCreateWithoutQuizInput[] | QuestionsUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutQuizInput | QuestionsCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutQuizInput | QuestionsUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionsCreateManyQuizInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutQuizInput | QuestionsUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutQuizInput | QuestionsUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type MarksUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<MarksCreateWithoutQuizInput, MarksUncheckedCreateWithoutQuizInput> | MarksCreateWithoutQuizInput[] | MarksUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutQuizInput | MarksCreateOrConnectWithoutQuizInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutQuizInput | MarksUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: MarksCreateManyQuizInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutQuizInput | MarksUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutQuizInput | MarksUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type ActivitiesUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<ActivitiesCreateWithoutQuizInput, ActivitiesUncheckedCreateWithoutQuizInput> | ActivitiesCreateWithoutQuizInput[] | ActivitiesUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutQuizInput | ActivitiesCreateOrConnectWithoutQuizInput[]
    upsert?: ActivitiesUpsertWithWhereUniqueWithoutQuizInput | ActivitiesUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: ActivitiesCreateManyQuizInputEnvelope
    set?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    disconnect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    delete?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    update?: ActivitiesUpdateWithWhereUniqueWithoutQuizInput | ActivitiesUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: ActivitiesUpdateManyWithWhereWithoutQuizInput | ActivitiesUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
  }

  export type TestsCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TestsCreateWithoutQuestionsInput, TestsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TestsCreateOrConnectWithoutQuestionsInput
    connect?: TestsWhereUniqueInput
  }

  export type QuizzesCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizzesCreateWithoutQuestionsInput, QuizzesUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizzesCreateOrConnectWithoutQuestionsInput
    connect?: QuizzesWhereUniqueInput
  }

  export type TestsUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<TestsCreateWithoutQuestionsInput, TestsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TestsCreateOrConnectWithoutQuestionsInput
    upsert?: TestsUpsertWithoutQuestionsInput
    disconnect?: TestsWhereInput | boolean
    delete?: TestsWhereInput | boolean
    connect?: TestsWhereUniqueInput
    update?: XOR<XOR<TestsUpdateToOneWithWhereWithoutQuestionsInput, TestsUpdateWithoutQuestionsInput>, TestsUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizzesUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<QuizzesCreateWithoutQuestionsInput, QuizzesUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizzesCreateOrConnectWithoutQuestionsInput
    upsert?: QuizzesUpsertWithoutQuestionsInput
    disconnect?: QuizzesWhereInput | boolean
    delete?: QuizzesWhereInput | boolean
    connect?: QuizzesWhereUniqueInput
    update?: XOR<XOR<QuizzesUpdateToOneWithWhereWithoutQuestionsInput, QuizzesUpdateWithoutQuestionsInput>, QuizzesUncheckedUpdateWithoutQuestionsInput>
  }

  export type UsersCreateNestedOneWithoutMarksInput = {
    create?: XOR<UsersCreateWithoutMarksInput, UsersUncheckedCreateWithoutMarksInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMarksInput
    connect?: UsersWhereUniqueInput
  }

  export type TestsCreateNestedOneWithoutMarkInput = {
    create?: XOR<TestsCreateWithoutMarkInput, TestsUncheckedCreateWithoutMarkInput>
    connectOrCreate?: TestsCreateOrConnectWithoutMarkInput
    connect?: TestsWhereUniqueInput
  }

  export type QuizzesCreateNestedOneWithoutMarksInput = {
    create?: XOR<QuizzesCreateWithoutMarksInput, QuizzesUncheckedCreateWithoutMarksInput>
    connectOrCreate?: QuizzesCreateOrConnectWithoutMarksInput
    connect?: QuizzesWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutMarksNestedInput = {
    create?: XOR<UsersCreateWithoutMarksInput, UsersUncheckedCreateWithoutMarksInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMarksInput
    upsert?: UsersUpsertWithoutMarksInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMarksInput, UsersUpdateWithoutMarksInput>, UsersUncheckedUpdateWithoutMarksInput>
  }

  export type TestsUpdateOneWithoutMarkNestedInput = {
    create?: XOR<TestsCreateWithoutMarkInput, TestsUncheckedCreateWithoutMarkInput>
    connectOrCreate?: TestsCreateOrConnectWithoutMarkInput
    upsert?: TestsUpsertWithoutMarkInput
    disconnect?: TestsWhereInput | boolean
    delete?: TestsWhereInput | boolean
    connect?: TestsWhereUniqueInput
    update?: XOR<XOR<TestsUpdateToOneWithWhereWithoutMarkInput, TestsUpdateWithoutMarkInput>, TestsUncheckedUpdateWithoutMarkInput>
  }

  export type QuizzesUpdateOneWithoutMarksNestedInput = {
    create?: XOR<QuizzesCreateWithoutMarksInput, QuizzesUncheckedCreateWithoutMarksInput>
    connectOrCreate?: QuizzesCreateOrConnectWithoutMarksInput
    upsert?: QuizzesUpsertWithoutMarksInput
    disconnect?: QuizzesWhereInput | boolean
    delete?: QuizzesWhereInput | boolean
    connect?: QuizzesWhereUniqueInput
    update?: XOR<XOR<QuizzesUpdateToOneWithWhereWithoutMarksInput, QuizzesUpdateWithoutMarksInput>, QuizzesUncheckedUpdateWithoutMarksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TokensCreateWithoutUserInput = {
    id?: string
    loggedInAt: Date | string
    loggedOutAt?: Date | string | null
    refreshToken?: string | null
  }

  export type TokensUncheckedCreateWithoutUserInput = {
    id?: string
    loggedInAt: Date | string
    loggedOutAt?: Date | string | null
    refreshToken?: string | null
  }

  export type TokensCreateOrConnectWithoutUserInput = {
    where: TokensWhereUniqueInput
    create: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput>
  }

  export type TokensCreateManyUserInputEnvelope = {
    data: TokensCreateManyUserInput | TokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MarksCreateWithoutUserInput = {
    id?: string
    mark: number
    markedAt: Date | string
    test?: TestsCreateNestedOneWithoutMarkInput
    quiz?: QuizzesCreateNestedOneWithoutMarksInput
  }

  export type MarksUncheckedCreateWithoutUserInput = {
    id?: string
    testId?: string | null
    quizId?: string | null
    mark: number
    markedAt: Date | string
  }

  export type MarksCreateOrConnectWithoutUserInput = {
    where: MarksWhereUniqueInput
    create: XOR<MarksCreateWithoutUserInput, MarksUncheckedCreateWithoutUserInput>
  }

  export type MarksCreateManyUserInputEnvelope = {
    data: MarksCreateManyUserInput | MarksCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivitiesCreateWithoutUserInput = {
    id?: string
    activityType: $Enums.ActivityType
    message: string
    doneAt: Date | string
    material?: MaterialsCreateNestedOneWithoutActivityInput
    test?: TestsCreateNestedOneWithoutActivityInput
    quiz?: QuizzesCreateNestedOneWithoutActivityInput
  }

  export type ActivitiesUncheckedCreateWithoutUserInput = {
    id?: string
    materialId?: string | null
    testId?: string | null
    quizId?: string | null
    activityType: $Enums.ActivityType
    message: string
    doneAt: Date | string
  }

  export type ActivitiesCreateOrConnectWithoutUserInput = {
    where: ActivitiesWhereUniqueInput
    create: XOR<ActivitiesCreateWithoutUserInput, ActivitiesUncheckedCreateWithoutUserInput>
  }

  export type ActivitiesCreateManyUserInputEnvelope = {
    data: ActivitiesCreateManyUserInput | ActivitiesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokensUpsertWithWhereUniqueWithoutUserInput = {
    where: TokensWhereUniqueInput
    update: XOR<TokensUpdateWithoutUserInput, TokensUncheckedUpdateWithoutUserInput>
    create: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput>
  }

  export type TokensUpdateWithWhereUniqueWithoutUserInput = {
    where: TokensWhereUniqueInput
    data: XOR<TokensUpdateWithoutUserInput, TokensUncheckedUpdateWithoutUserInput>
  }

  export type TokensUpdateManyWithWhereWithoutUserInput = {
    where: TokensScalarWhereInput
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyWithoutUserInput>
  }

  export type TokensScalarWhereInput = {
    AND?: TokensScalarWhereInput | TokensScalarWhereInput[]
    OR?: TokensScalarWhereInput[]
    NOT?: TokensScalarWhereInput | TokensScalarWhereInput[]
    id?: StringFilter<"Tokens"> | string
    userId?: StringFilter<"Tokens"> | string
    loggedInAt?: DateTimeFilter<"Tokens"> | Date | string
    loggedOutAt?: DateTimeNullableFilter<"Tokens"> | Date | string | null
    refreshToken?: StringNullableFilter<"Tokens"> | string | null
  }

  export type MarksUpsertWithWhereUniqueWithoutUserInput = {
    where: MarksWhereUniqueInput
    update: XOR<MarksUpdateWithoutUserInput, MarksUncheckedUpdateWithoutUserInput>
    create: XOR<MarksCreateWithoutUserInput, MarksUncheckedCreateWithoutUserInput>
  }

  export type MarksUpdateWithWhereUniqueWithoutUserInput = {
    where: MarksWhereUniqueInput
    data: XOR<MarksUpdateWithoutUserInput, MarksUncheckedUpdateWithoutUserInput>
  }

  export type MarksUpdateManyWithWhereWithoutUserInput = {
    where: MarksScalarWhereInput
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyWithoutUserInput>
  }

  export type MarksScalarWhereInput = {
    AND?: MarksScalarWhereInput | MarksScalarWhereInput[]
    OR?: MarksScalarWhereInput[]
    NOT?: MarksScalarWhereInput | MarksScalarWhereInput[]
    id?: StringFilter<"Marks"> | string
    userId?: StringFilter<"Marks"> | string
    testId?: StringNullableFilter<"Marks"> | string | null
    quizId?: StringNullableFilter<"Marks"> | string | null
    mark?: IntFilter<"Marks"> | number
    markedAt?: DateTimeFilter<"Marks"> | Date | string
  }

  export type ActivitiesUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivitiesWhereUniqueInput
    update: XOR<ActivitiesUpdateWithoutUserInput, ActivitiesUncheckedUpdateWithoutUserInput>
    create: XOR<ActivitiesCreateWithoutUserInput, ActivitiesUncheckedCreateWithoutUserInput>
  }

  export type ActivitiesUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivitiesWhereUniqueInput
    data: XOR<ActivitiesUpdateWithoutUserInput, ActivitiesUncheckedUpdateWithoutUserInput>
  }

  export type ActivitiesUpdateManyWithWhereWithoutUserInput = {
    where: ActivitiesScalarWhereInput
    data: XOR<ActivitiesUpdateManyMutationInput, ActivitiesUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivitiesScalarWhereInput = {
    AND?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
    OR?: ActivitiesScalarWhereInput[]
    NOT?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
    id?: StringFilter<"Activities"> | string
    materialId?: StringNullableFilter<"Activities"> | string | null
    testId?: StringNullableFilter<"Activities"> | string | null
    quizId?: StringNullableFilter<"Activities"> | string | null
    activityType?: EnumActivityTypeFilter<"Activities"> | $Enums.ActivityType
    message?: StringFilter<"Activities"> | string
    userId?: StringFilter<"Activities"> | string
    doneAt?: DateTimeFilter<"Activities"> | Date | string
  }

  export type QuizzesCreateWithoutMaterialInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    questions?: QuestionsCreateNestedManyWithoutQuizInput
    marks?: MarksCreateNestedManyWithoutQuizInput
    activity?: ActivitiesCreateNestedManyWithoutQuizInput
  }

  export type QuizzesUncheckedCreateWithoutMaterialInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    questions?: QuestionsUncheckedCreateNestedManyWithoutQuizInput
    marks?: MarksUncheckedCreateNestedManyWithoutQuizInput
    activity?: ActivitiesUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizzesCreateOrConnectWithoutMaterialInput = {
    where: QuizzesWhereUniqueInput
    create: XOR<QuizzesCreateWithoutMaterialInput, QuizzesUncheckedCreateWithoutMaterialInput>
  }

  export type ActivitiesCreateWithoutMaterialInput = {
    id?: string
    activityType: $Enums.ActivityType
    message: string
    doneAt: Date | string
    test?: TestsCreateNestedOneWithoutActivityInput
    quiz?: QuizzesCreateNestedOneWithoutActivityInput
    user: UsersCreateNestedOneWithoutActivitiesInput
  }

  export type ActivitiesUncheckedCreateWithoutMaterialInput = {
    id?: string
    testId?: string | null
    quizId?: string | null
    activityType: $Enums.ActivityType
    message: string
    userId: string
    doneAt: Date | string
  }

  export type ActivitiesCreateOrConnectWithoutMaterialInput = {
    where: ActivitiesWhereUniqueInput
    create: XOR<ActivitiesCreateWithoutMaterialInput, ActivitiesUncheckedCreateWithoutMaterialInput>
  }

  export type ActivitiesCreateManyMaterialInputEnvelope = {
    data: ActivitiesCreateManyMaterialInput | ActivitiesCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type QuizzesUpsertWithoutMaterialInput = {
    update: XOR<QuizzesUpdateWithoutMaterialInput, QuizzesUncheckedUpdateWithoutMaterialInput>
    create: XOR<QuizzesCreateWithoutMaterialInput, QuizzesUncheckedCreateWithoutMaterialInput>
    where?: QuizzesWhereInput
  }

  export type QuizzesUpdateToOneWithWhereWithoutMaterialInput = {
    where?: QuizzesWhereInput
    data: XOR<QuizzesUpdateWithoutMaterialInput, QuizzesUncheckedUpdateWithoutMaterialInput>
  }

  export type QuizzesUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionsUpdateManyWithoutQuizNestedInput
    marks?: MarksUpdateManyWithoutQuizNestedInput
    activity?: ActivitiesUpdateManyWithoutQuizNestedInput
  }

  export type QuizzesUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionsUncheckedUpdateManyWithoutQuizNestedInput
    marks?: MarksUncheckedUpdateManyWithoutQuizNestedInput
    activity?: ActivitiesUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type ActivitiesUpsertWithWhereUniqueWithoutMaterialInput = {
    where: ActivitiesWhereUniqueInput
    update: XOR<ActivitiesUpdateWithoutMaterialInput, ActivitiesUncheckedUpdateWithoutMaterialInput>
    create: XOR<ActivitiesCreateWithoutMaterialInput, ActivitiesUncheckedCreateWithoutMaterialInput>
  }

  export type ActivitiesUpdateWithWhereUniqueWithoutMaterialInput = {
    where: ActivitiesWhereUniqueInput
    data: XOR<ActivitiesUpdateWithoutMaterialInput, ActivitiesUncheckedUpdateWithoutMaterialInput>
  }

  export type ActivitiesUpdateManyWithWhereWithoutMaterialInput = {
    where: ActivitiesScalarWhereInput
    data: XOR<ActivitiesUpdateManyMutationInput, ActivitiesUncheckedUpdateManyWithoutMaterialInput>
  }

  export type MaterialsCreateWithoutActivityInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    materialString: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    quiz?: QuizzesCreateNestedOneWithoutMaterialInput
  }

  export type MaterialsUncheckedCreateWithoutActivityInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    materialString: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    quiz?: QuizzesUncheckedCreateNestedOneWithoutMaterialInput
  }

  export type MaterialsCreateOrConnectWithoutActivityInput = {
    where: MaterialsWhereUniqueInput
    create: XOR<MaterialsCreateWithoutActivityInput, MaterialsUncheckedCreateWithoutActivityInput>
  }

  export type TestsCreateWithoutActivityInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    questions?: QuestionsCreateNestedManyWithoutTestInput
    mark?: MarksCreateNestedManyWithoutTestInput
  }

  export type TestsUncheckedCreateWithoutActivityInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    questions?: QuestionsUncheckedCreateNestedManyWithoutTestInput
    mark?: MarksUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestsCreateOrConnectWithoutActivityInput = {
    where: TestsWhereUniqueInput
    create: XOR<TestsCreateWithoutActivityInput, TestsUncheckedCreateWithoutActivityInput>
  }

  export type QuizzesCreateWithoutActivityInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    material?: MaterialsCreateNestedOneWithoutQuizInput
    questions?: QuestionsCreateNestedManyWithoutQuizInput
    marks?: MarksCreateNestedManyWithoutQuizInput
  }

  export type QuizzesUncheckedCreateWithoutActivityInput = {
    id?: string
    materialId?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    questions?: QuestionsUncheckedCreateNestedManyWithoutQuizInput
    marks?: MarksUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizzesCreateOrConnectWithoutActivityInput = {
    where: QuizzesWhereUniqueInput
    create: XOR<QuizzesCreateWithoutActivityInput, QuizzesUncheckedCreateWithoutActivityInput>
  }

  export type UsersCreateWithoutActivitiesInput = {
    id?: string
    username: string
    password: string
    fullName: string
    gender: $Enums.Gender
    avatarUrl: string
    signedUpAt: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    tokens?: TokensCreateNestedManyWithoutUserInput
    marks?: MarksCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutActivitiesInput = {
    id?: string
    username: string
    password: string
    fullName: string
    gender: $Enums.Gender
    avatarUrl: string
    signedUpAt: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
    marks?: MarksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutActivitiesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutActivitiesInput, UsersUncheckedCreateWithoutActivitiesInput>
  }

  export type MaterialsUpsertWithoutActivityInput = {
    update: XOR<MaterialsUpdateWithoutActivityInput, MaterialsUncheckedUpdateWithoutActivityInput>
    create: XOR<MaterialsCreateWithoutActivityInput, MaterialsUncheckedCreateWithoutActivityInput>
    where?: MaterialsWhereInput
  }

  export type MaterialsUpdateToOneWithWhereWithoutActivityInput = {
    where?: MaterialsWhereInput
    data: XOR<MaterialsUpdateWithoutActivityInput, MaterialsUncheckedUpdateWithoutActivityInput>
  }

  export type MaterialsUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    materialString?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quiz?: QuizzesUpdateOneWithoutMaterialNestedInput
  }

  export type MaterialsUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    materialString?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quiz?: QuizzesUncheckedUpdateOneWithoutMaterialNestedInput
  }

  export type TestsUpsertWithoutActivityInput = {
    update: XOR<TestsUpdateWithoutActivityInput, TestsUncheckedUpdateWithoutActivityInput>
    create: XOR<TestsCreateWithoutActivityInput, TestsUncheckedCreateWithoutActivityInput>
    where?: TestsWhereInput
  }

  export type TestsUpdateToOneWithWhereWithoutActivityInput = {
    where?: TestsWhereInput
    data: XOR<TestsUpdateWithoutActivityInput, TestsUncheckedUpdateWithoutActivityInput>
  }

  export type TestsUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionsUpdateManyWithoutTestNestedInput
    mark?: MarksUpdateManyWithoutTestNestedInput
  }

  export type TestsUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionsUncheckedUpdateManyWithoutTestNestedInput
    mark?: MarksUncheckedUpdateManyWithoutTestNestedInput
  }

  export type QuizzesUpsertWithoutActivityInput = {
    update: XOR<QuizzesUpdateWithoutActivityInput, QuizzesUncheckedUpdateWithoutActivityInput>
    create: XOR<QuizzesCreateWithoutActivityInput, QuizzesUncheckedCreateWithoutActivityInput>
    where?: QuizzesWhereInput
  }

  export type QuizzesUpdateToOneWithWhereWithoutActivityInput = {
    where?: QuizzesWhereInput
    data: XOR<QuizzesUpdateWithoutActivityInput, QuizzesUncheckedUpdateWithoutActivityInput>
  }

  export type QuizzesUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    material?: MaterialsUpdateOneRequiredWithoutQuizNestedInput
    questions?: QuestionsUpdateManyWithoutQuizNestedInput
    marks?: MarksUpdateManyWithoutQuizNestedInput
  }

  export type QuizzesUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionsUncheckedUpdateManyWithoutQuizNestedInput
    marks?: MarksUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UsersUpsertWithoutActivitiesInput = {
    update: XOR<UsersUpdateWithoutActivitiesInput, UsersUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UsersCreateWithoutActivitiesInput, UsersUncheckedCreateWithoutActivitiesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutActivitiesInput, UsersUncheckedUpdateWithoutActivitiesInput>
  }

  export type UsersUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avatarUrl?: StringFieldUpdateOperationsInput | string
    signedUpAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokens?: TokensUpdateManyWithoutUserNestedInput
    marks?: MarksUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avatarUrl?: StringFieldUpdateOperationsInput | string
    signedUpAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
    marks?: MarksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutTokensInput = {
    id?: string
    username: string
    password: string
    fullName: string
    gender: $Enums.Gender
    avatarUrl: string
    signedUpAt: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    marks?: MarksCreateNestedManyWithoutUserInput
    activities?: ActivitiesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTokensInput = {
    id?: string
    username: string
    password: string
    fullName: string
    gender: $Enums.Gender
    avatarUrl: string
    signedUpAt: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    marks?: MarksUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivitiesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTokensInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
  }

  export type UsersUpsertWithoutTokensInput = {
    update: XOR<UsersUpdateWithoutTokensInput, UsersUncheckedUpdateWithoutTokensInput>
    create: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTokensInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTokensInput, UsersUncheckedUpdateWithoutTokensInput>
  }

  export type UsersUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avatarUrl?: StringFieldUpdateOperationsInput | string
    signedUpAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    marks?: MarksUpdateManyWithoutUserNestedInput
    activities?: ActivitiesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avatarUrl?: StringFieldUpdateOperationsInput | string
    signedUpAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    marks?: MarksUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivitiesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ActivitiesCreateWithoutTestInput = {
    id?: string
    activityType: $Enums.ActivityType
    message: string
    doneAt: Date | string
    material?: MaterialsCreateNestedOneWithoutActivityInput
    quiz?: QuizzesCreateNestedOneWithoutActivityInput
    user: UsersCreateNestedOneWithoutActivitiesInput
  }

  export type ActivitiesUncheckedCreateWithoutTestInput = {
    id?: string
    materialId?: string | null
    quizId?: string | null
    activityType: $Enums.ActivityType
    message: string
    userId: string
    doneAt: Date | string
  }

  export type ActivitiesCreateOrConnectWithoutTestInput = {
    where: ActivitiesWhereUniqueInput
    create: XOR<ActivitiesCreateWithoutTestInput, ActivitiesUncheckedCreateWithoutTestInput>
  }

  export type ActivitiesCreateManyTestInputEnvelope = {
    data: ActivitiesCreateManyTestInput | ActivitiesCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type QuestionsCreateWithoutTestInput = {
    id?: string
    question: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD?: string | null
    optionE?: string | null
    correctOption: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    quiz?: QuizzesCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateWithoutTestInput = {
    id?: string
    quizId?: string | null
    question: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD?: string | null
    optionE?: string | null
    correctOption: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type QuestionsCreateOrConnectWithoutTestInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutTestInput, QuestionsUncheckedCreateWithoutTestInput>
  }

  export type QuestionsCreateManyTestInputEnvelope = {
    data: QuestionsCreateManyTestInput | QuestionsCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type MarksCreateWithoutTestInput = {
    id?: string
    mark: number
    markedAt: Date | string
    user: UsersCreateNestedOneWithoutMarksInput
    quiz?: QuizzesCreateNestedOneWithoutMarksInput
  }

  export type MarksUncheckedCreateWithoutTestInput = {
    id?: string
    userId: string
    quizId?: string | null
    mark: number
    markedAt: Date | string
  }

  export type MarksCreateOrConnectWithoutTestInput = {
    where: MarksWhereUniqueInput
    create: XOR<MarksCreateWithoutTestInput, MarksUncheckedCreateWithoutTestInput>
  }

  export type MarksCreateManyTestInputEnvelope = {
    data: MarksCreateManyTestInput | MarksCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type ActivitiesUpsertWithWhereUniqueWithoutTestInput = {
    where: ActivitiesWhereUniqueInput
    update: XOR<ActivitiesUpdateWithoutTestInput, ActivitiesUncheckedUpdateWithoutTestInput>
    create: XOR<ActivitiesCreateWithoutTestInput, ActivitiesUncheckedCreateWithoutTestInput>
  }

  export type ActivitiesUpdateWithWhereUniqueWithoutTestInput = {
    where: ActivitiesWhereUniqueInput
    data: XOR<ActivitiesUpdateWithoutTestInput, ActivitiesUncheckedUpdateWithoutTestInput>
  }

  export type ActivitiesUpdateManyWithWhereWithoutTestInput = {
    where: ActivitiesScalarWhereInput
    data: XOR<ActivitiesUpdateManyMutationInput, ActivitiesUncheckedUpdateManyWithoutTestInput>
  }

  export type QuestionsUpsertWithWhereUniqueWithoutTestInput = {
    where: QuestionsWhereUniqueInput
    update: XOR<QuestionsUpdateWithoutTestInput, QuestionsUncheckedUpdateWithoutTestInput>
    create: XOR<QuestionsCreateWithoutTestInput, QuestionsUncheckedCreateWithoutTestInput>
  }

  export type QuestionsUpdateWithWhereUniqueWithoutTestInput = {
    where: QuestionsWhereUniqueInput
    data: XOR<QuestionsUpdateWithoutTestInput, QuestionsUncheckedUpdateWithoutTestInput>
  }

  export type QuestionsUpdateManyWithWhereWithoutTestInput = {
    where: QuestionsScalarWhereInput
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyWithoutTestInput>
  }

  export type QuestionsScalarWhereInput = {
    AND?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
    OR?: QuestionsScalarWhereInput[]
    NOT?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
    id?: StringFilter<"Questions"> | string
    testId?: StringNullableFilter<"Questions"> | string | null
    quizId?: StringNullableFilter<"Questions"> | string | null
    question?: StringFilter<"Questions"> | string
    imageUrl?: StringNullableFilter<"Questions"> | string | null
    optionA?: StringFilter<"Questions"> | string
    optionB?: StringFilter<"Questions"> | string
    optionC?: StringFilter<"Questions"> | string
    optionD?: StringNullableFilter<"Questions"> | string | null
    optionE?: StringNullableFilter<"Questions"> | string | null
    correctOption?: StringFilter<"Questions"> | string
    createdAt?: DateTimeFilter<"Questions"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Questions"> | Date | string | null
  }

  export type MarksUpsertWithWhereUniqueWithoutTestInput = {
    where: MarksWhereUniqueInput
    update: XOR<MarksUpdateWithoutTestInput, MarksUncheckedUpdateWithoutTestInput>
    create: XOR<MarksCreateWithoutTestInput, MarksUncheckedCreateWithoutTestInput>
  }

  export type MarksUpdateWithWhereUniqueWithoutTestInput = {
    where: MarksWhereUniqueInput
    data: XOR<MarksUpdateWithoutTestInput, MarksUncheckedUpdateWithoutTestInput>
  }

  export type MarksUpdateManyWithWhereWithoutTestInput = {
    where: MarksScalarWhereInput
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyWithoutTestInput>
  }

  export type MaterialsCreateWithoutQuizInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    materialString: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    activity?: ActivitiesCreateNestedManyWithoutMaterialInput
  }

  export type MaterialsUncheckedCreateWithoutQuizInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    materialString: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    activity?: ActivitiesUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialsCreateOrConnectWithoutQuizInput = {
    where: MaterialsWhereUniqueInput
    create: XOR<MaterialsCreateWithoutQuizInput, MaterialsUncheckedCreateWithoutQuizInput>
  }

  export type QuestionsCreateWithoutQuizInput = {
    id?: string
    question: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD?: string | null
    optionE?: string | null
    correctOption: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    test?: TestsCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateWithoutQuizInput = {
    id?: string
    testId?: string | null
    question: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD?: string | null
    optionE?: string | null
    correctOption: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type QuestionsCreateOrConnectWithoutQuizInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutQuizInput, QuestionsUncheckedCreateWithoutQuizInput>
  }

  export type QuestionsCreateManyQuizInputEnvelope = {
    data: QuestionsCreateManyQuizInput | QuestionsCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type MarksCreateWithoutQuizInput = {
    id?: string
    mark: number
    markedAt: Date | string
    user: UsersCreateNestedOneWithoutMarksInput
    test?: TestsCreateNestedOneWithoutMarkInput
  }

  export type MarksUncheckedCreateWithoutQuizInput = {
    id?: string
    userId: string
    testId?: string | null
    mark: number
    markedAt: Date | string
  }

  export type MarksCreateOrConnectWithoutQuizInput = {
    where: MarksWhereUniqueInput
    create: XOR<MarksCreateWithoutQuizInput, MarksUncheckedCreateWithoutQuizInput>
  }

  export type MarksCreateManyQuizInputEnvelope = {
    data: MarksCreateManyQuizInput | MarksCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type ActivitiesCreateWithoutQuizInput = {
    id?: string
    activityType: $Enums.ActivityType
    message: string
    doneAt: Date | string
    material?: MaterialsCreateNestedOneWithoutActivityInput
    test?: TestsCreateNestedOneWithoutActivityInput
    user: UsersCreateNestedOneWithoutActivitiesInput
  }

  export type ActivitiesUncheckedCreateWithoutQuizInput = {
    id?: string
    materialId?: string | null
    testId?: string | null
    activityType: $Enums.ActivityType
    message: string
    userId: string
    doneAt: Date | string
  }

  export type ActivitiesCreateOrConnectWithoutQuizInput = {
    where: ActivitiesWhereUniqueInput
    create: XOR<ActivitiesCreateWithoutQuizInput, ActivitiesUncheckedCreateWithoutQuizInput>
  }

  export type ActivitiesCreateManyQuizInputEnvelope = {
    data: ActivitiesCreateManyQuizInput | ActivitiesCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type MaterialsUpsertWithoutQuizInput = {
    update: XOR<MaterialsUpdateWithoutQuizInput, MaterialsUncheckedUpdateWithoutQuizInput>
    create: XOR<MaterialsCreateWithoutQuizInput, MaterialsUncheckedCreateWithoutQuizInput>
    where?: MaterialsWhereInput
  }

  export type MaterialsUpdateToOneWithWhereWithoutQuizInput = {
    where?: MaterialsWhereInput
    data: XOR<MaterialsUpdateWithoutQuizInput, MaterialsUncheckedUpdateWithoutQuizInput>
  }

  export type MaterialsUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    materialString?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: ActivitiesUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialsUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    materialString?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: ActivitiesUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type QuestionsUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionsWhereUniqueInput
    update: XOR<QuestionsUpdateWithoutQuizInput, QuestionsUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionsCreateWithoutQuizInput, QuestionsUncheckedCreateWithoutQuizInput>
  }

  export type QuestionsUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionsWhereUniqueInput
    data: XOR<QuestionsUpdateWithoutQuizInput, QuestionsUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionsUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionsScalarWhereInput
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyWithoutQuizInput>
  }

  export type MarksUpsertWithWhereUniqueWithoutQuizInput = {
    where: MarksWhereUniqueInput
    update: XOR<MarksUpdateWithoutQuizInput, MarksUncheckedUpdateWithoutQuizInput>
    create: XOR<MarksCreateWithoutQuizInput, MarksUncheckedCreateWithoutQuizInput>
  }

  export type MarksUpdateWithWhereUniqueWithoutQuizInput = {
    where: MarksWhereUniqueInput
    data: XOR<MarksUpdateWithoutQuizInput, MarksUncheckedUpdateWithoutQuizInput>
  }

  export type MarksUpdateManyWithWhereWithoutQuizInput = {
    where: MarksScalarWhereInput
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyWithoutQuizInput>
  }

  export type ActivitiesUpsertWithWhereUniqueWithoutQuizInput = {
    where: ActivitiesWhereUniqueInput
    update: XOR<ActivitiesUpdateWithoutQuizInput, ActivitiesUncheckedUpdateWithoutQuizInput>
    create: XOR<ActivitiesCreateWithoutQuizInput, ActivitiesUncheckedCreateWithoutQuizInput>
  }

  export type ActivitiesUpdateWithWhereUniqueWithoutQuizInput = {
    where: ActivitiesWhereUniqueInput
    data: XOR<ActivitiesUpdateWithoutQuizInput, ActivitiesUncheckedUpdateWithoutQuizInput>
  }

  export type ActivitiesUpdateManyWithWhereWithoutQuizInput = {
    where: ActivitiesScalarWhereInput
    data: XOR<ActivitiesUpdateManyMutationInput, ActivitiesUncheckedUpdateManyWithoutQuizInput>
  }

  export type TestsCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    activity?: ActivitiesCreateNestedManyWithoutTestInput
    mark?: MarksCreateNestedManyWithoutTestInput
  }

  export type TestsUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    activity?: ActivitiesUncheckedCreateNestedManyWithoutTestInput
    mark?: MarksUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestsCreateOrConnectWithoutQuestionsInput = {
    where: TestsWhereUniqueInput
    create: XOR<TestsCreateWithoutQuestionsInput, TestsUncheckedCreateWithoutQuestionsInput>
  }

  export type QuizzesCreateWithoutQuestionsInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    material?: MaterialsCreateNestedOneWithoutQuizInput
    marks?: MarksCreateNestedManyWithoutQuizInput
    activity?: ActivitiesCreateNestedManyWithoutQuizInput
  }

  export type QuizzesUncheckedCreateWithoutQuestionsInput = {
    id?: string
    materialId?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    marks?: MarksUncheckedCreateNestedManyWithoutQuizInput
    activity?: ActivitiesUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizzesCreateOrConnectWithoutQuestionsInput = {
    where: QuizzesWhereUniqueInput
    create: XOR<QuizzesCreateWithoutQuestionsInput, QuizzesUncheckedCreateWithoutQuestionsInput>
  }

  export type TestsUpsertWithoutQuestionsInput = {
    update: XOR<TestsUpdateWithoutQuestionsInput, TestsUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TestsCreateWithoutQuestionsInput, TestsUncheckedCreateWithoutQuestionsInput>
    where?: TestsWhereInput
  }

  export type TestsUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: TestsWhereInput
    data: XOR<TestsUpdateWithoutQuestionsInput, TestsUncheckedUpdateWithoutQuestionsInput>
  }

  export type TestsUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: ActivitiesUpdateManyWithoutTestNestedInput
    mark?: MarksUpdateManyWithoutTestNestedInput
  }

  export type TestsUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: ActivitiesUncheckedUpdateManyWithoutTestNestedInput
    mark?: MarksUncheckedUpdateManyWithoutTestNestedInput
  }

  export type QuizzesUpsertWithoutQuestionsInput = {
    update: XOR<QuizzesUpdateWithoutQuestionsInput, QuizzesUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizzesCreateWithoutQuestionsInput, QuizzesUncheckedCreateWithoutQuestionsInput>
    where?: QuizzesWhereInput
  }

  export type QuizzesUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizzesWhereInput
    data: XOR<QuizzesUpdateWithoutQuestionsInput, QuizzesUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizzesUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    material?: MaterialsUpdateOneRequiredWithoutQuizNestedInput
    marks?: MarksUpdateManyWithoutQuizNestedInput
    activity?: ActivitiesUpdateManyWithoutQuizNestedInput
  }

  export type QuizzesUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marks?: MarksUncheckedUpdateManyWithoutQuizNestedInput
    activity?: ActivitiesUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UsersCreateWithoutMarksInput = {
    id?: string
    username: string
    password: string
    fullName: string
    gender: $Enums.Gender
    avatarUrl: string
    signedUpAt: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    tokens?: TokensCreateNestedManyWithoutUserInput
    activities?: ActivitiesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMarksInput = {
    id?: string
    username: string
    password: string
    fullName: string
    gender: $Enums.Gender
    avatarUrl: string
    signedUpAt: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivitiesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMarksInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMarksInput, UsersUncheckedCreateWithoutMarksInput>
  }

  export type TestsCreateWithoutMarkInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    activity?: ActivitiesCreateNestedManyWithoutTestInput
    questions?: QuestionsCreateNestedManyWithoutTestInput
  }

  export type TestsUncheckedCreateWithoutMarkInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    activity?: ActivitiesUncheckedCreateNestedManyWithoutTestInput
    questions?: QuestionsUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestsCreateOrConnectWithoutMarkInput = {
    where: TestsWhereUniqueInput
    create: XOR<TestsCreateWithoutMarkInput, TestsUncheckedCreateWithoutMarkInput>
  }

  export type QuizzesCreateWithoutMarksInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    material?: MaterialsCreateNestedOneWithoutQuizInput
    questions?: QuestionsCreateNestedManyWithoutQuizInput
    activity?: ActivitiesCreateNestedManyWithoutQuizInput
  }

  export type QuizzesUncheckedCreateWithoutMarksInput = {
    id?: string
    materialId?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    questions?: QuestionsUncheckedCreateNestedManyWithoutQuizInput
    activity?: ActivitiesUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizzesCreateOrConnectWithoutMarksInput = {
    where: QuizzesWhereUniqueInput
    create: XOR<QuizzesCreateWithoutMarksInput, QuizzesUncheckedCreateWithoutMarksInput>
  }

  export type UsersUpsertWithoutMarksInput = {
    update: XOR<UsersUpdateWithoutMarksInput, UsersUncheckedUpdateWithoutMarksInput>
    create: XOR<UsersCreateWithoutMarksInput, UsersUncheckedCreateWithoutMarksInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMarksInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMarksInput, UsersUncheckedUpdateWithoutMarksInput>
  }

  export type UsersUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avatarUrl?: StringFieldUpdateOperationsInput | string
    signedUpAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokens?: TokensUpdateManyWithoutUserNestedInput
    activities?: ActivitiesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avatarUrl?: StringFieldUpdateOperationsInput | string
    signedUpAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivitiesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TestsUpsertWithoutMarkInput = {
    update: XOR<TestsUpdateWithoutMarkInput, TestsUncheckedUpdateWithoutMarkInput>
    create: XOR<TestsCreateWithoutMarkInput, TestsUncheckedCreateWithoutMarkInput>
    where?: TestsWhereInput
  }

  export type TestsUpdateToOneWithWhereWithoutMarkInput = {
    where?: TestsWhereInput
    data: XOR<TestsUpdateWithoutMarkInput, TestsUncheckedUpdateWithoutMarkInput>
  }

  export type TestsUpdateWithoutMarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: ActivitiesUpdateManyWithoutTestNestedInput
    questions?: QuestionsUpdateManyWithoutTestNestedInput
  }

  export type TestsUncheckedUpdateWithoutMarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: ActivitiesUncheckedUpdateManyWithoutTestNestedInput
    questions?: QuestionsUncheckedUpdateManyWithoutTestNestedInput
  }

  export type QuizzesUpsertWithoutMarksInput = {
    update: XOR<QuizzesUpdateWithoutMarksInput, QuizzesUncheckedUpdateWithoutMarksInput>
    create: XOR<QuizzesCreateWithoutMarksInput, QuizzesUncheckedCreateWithoutMarksInput>
    where?: QuizzesWhereInput
  }

  export type QuizzesUpdateToOneWithWhereWithoutMarksInput = {
    where?: QuizzesWhereInput
    data: XOR<QuizzesUpdateWithoutMarksInput, QuizzesUncheckedUpdateWithoutMarksInput>
  }

  export type QuizzesUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    material?: MaterialsUpdateOneRequiredWithoutQuizNestedInput
    questions?: QuestionsUpdateManyWithoutQuizNestedInput
    activity?: ActivitiesUpdateManyWithoutQuizNestedInput
  }

  export type QuizzesUncheckedUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionsUncheckedUpdateManyWithoutQuizNestedInput
    activity?: ActivitiesUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TokensCreateManyUserInput = {
    id?: string
    loggedInAt: Date | string
    loggedOutAt?: Date | string | null
    refreshToken?: string | null
  }

  export type MarksCreateManyUserInput = {
    id?: string
    testId?: string | null
    quizId?: string | null
    mark: number
    markedAt: Date | string
  }

  export type ActivitiesCreateManyUserInput = {
    id?: string
    materialId?: string | null
    testId?: string | null
    quizId?: string | null
    activityType: $Enums.ActivityType
    message: string
    doneAt: Date | string
  }

  export type TokensUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokensUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokensUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarksUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestsUpdateOneWithoutMarkNestedInput
    quiz?: QuizzesUpdateOneWithoutMarksNestedInput
  }

  export type MarksUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarksUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialsUpdateOneWithoutActivityNestedInput
    test?: TestsUpdateOneWithoutActivityNestedInput
    quiz?: QuizzesUpdateOneWithoutActivityNestedInput
  }

  export type ActivitiesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesCreateManyMaterialInput = {
    id?: string
    testId?: string | null
    quizId?: string | null
    activityType: $Enums.ActivityType
    message: string
    userId: string
    doneAt: Date | string
  }

  export type ActivitiesUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestsUpdateOneWithoutActivityNestedInput
    quiz?: QuizzesUpdateOneWithoutActivityNestedInput
    user?: UsersUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivitiesUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesCreateManyTestInput = {
    id?: string
    materialId?: string | null
    quizId?: string | null
    activityType: $Enums.ActivityType
    message: string
    userId: string
    doneAt: Date | string
  }

  export type QuestionsCreateManyTestInput = {
    id?: string
    quizId?: string | null
    question: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD?: string | null
    optionE?: string | null
    correctOption: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type MarksCreateManyTestInput = {
    id?: string
    userId: string
    quizId?: string | null
    mark: number
    markedAt: Date | string
  }

  export type ActivitiesUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialsUpdateOneWithoutActivityNestedInput
    quiz?: QuizzesUpdateOneWithoutActivityNestedInput
    user?: UsersUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivitiesUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: NullableStringFieldUpdateOperationsInput | string | null
    optionE?: NullableStringFieldUpdateOperationsInput | string | null
    correctOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quiz?: QuizzesUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    question?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: NullableStringFieldUpdateOperationsInput | string | null
    optionE?: NullableStringFieldUpdateOperationsInput | string | null
    correctOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionsUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    question?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: NullableStringFieldUpdateOperationsInput | string | null
    optionE?: NullableStringFieldUpdateOperationsInput | string | null
    correctOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarksUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutMarksNestedInput
    quiz?: QuizzesUpdateOneWithoutMarksNestedInput
  }

  export type MarksUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarksUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsCreateManyQuizInput = {
    id?: string
    testId?: string | null
    question: string
    imageUrl?: string | null
    optionA: string
    optionB: string
    optionC: string
    optionD?: string | null
    optionE?: string | null
    correctOption: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type MarksCreateManyQuizInput = {
    id?: string
    userId: string
    testId?: string | null
    mark: number
    markedAt: Date | string
  }

  export type ActivitiesCreateManyQuizInput = {
    id?: string
    materialId?: string | null
    testId?: string | null
    activityType: $Enums.ActivityType
    message: string
    userId: string
    doneAt: Date | string
  }

  export type QuestionsUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: NullableStringFieldUpdateOperationsInput | string | null
    optionE?: NullableStringFieldUpdateOperationsInput | string | null
    correctOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    test?: TestsUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    question?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: NullableStringFieldUpdateOperationsInput | string | null
    optionE?: NullableStringFieldUpdateOperationsInput | string | null
    correctOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionsUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    question?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: NullableStringFieldUpdateOperationsInput | string | null
    optionE?: NullableStringFieldUpdateOperationsInput | string | null
    correctOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarksUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutMarksNestedInput
    test?: TestsUpdateOneWithoutMarkNestedInput
  }

  export type MarksUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarksUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: IntFieldUpdateOperationsInput | number
    markedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialsUpdateOneWithoutActivityNestedInput
    test?: TestsUpdateOneWithoutActivityNestedInput
    user?: UsersUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivitiesUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doneAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}