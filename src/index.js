(function () {
    var defines = {};
    var entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies: dependencies, factory: factory };
        entry[0] = name;
    }
    define("require", ["exports"], function (exports) {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: function (name) { return resolve(name); } });
    });
    define("configs/env.config", ["require", "exports", "dotenv/config"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var ENV = {
            PORT: process.env.PORT,
            CLIENT_URL: process.env.CLIENT_URL,
            DATABASE_URL: process.env.DATABASE_URL,
            DIRECT_URL: process.env.DIRECT_URL,
            DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
            REFRESH_TOKEN_SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY,
            ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY
        };
        exports.default = ENV;
    });
    define("utils/logger.util", ["require", "exports", "pino", "pino-pretty", "moment"], function (require, exports, pino_1, pino_pretty_1, moment_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var logger = (0, pino_1.default)({
            base: {
                pid: false
            },
            timestamp: function () { return ",\"time\":\"".concat((0, moment_1.default)().format(), "\""); }
        }, (0, pino_pretty_1.default)());
        exports.default = logger;
    });
    define("index", ["require", "exports", "express", "./routes", "configs/env.config", "cookie-parser", "cors", "utils/logger.util", "qs"], function (require, exports, express_1, routes_1, env_config_1, cookie_parser_1, cors_1, logger_util_1, qs_1) {
        "use strict";
        var _a;
        Object.defineProperty(exports, "__esModule", { value: true });
        var app = (0, express_1.default)();
        var port = (_a = env_config_1.default.PORT) !== null && _a !== void 0 ? _a : "3000";
        app.set("trust proxy", true);
        app.set("query parser", function (str) { return qs_1.default.parse(str); });
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: false }));
        app.use((0, cookie_parser_1.default)());
        app.use((0, cors_1.default)({
            credentials: true,
            origin: env_config_1.default.CLIENT_URL
        }));
        (0, routes_1.default)(app);
        app.use("/v1/coba", function (req, res) {
            res.send(req.headers.authorization);
        });
        app.listen(port, function () {
            logger_util_1.default.info("Server running in port ".concat(port));
        });
    });
    
    'marker:resolver';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            var dependencies = ['exports'];
            var factory = function (exports) {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch (_a) {
                    throw Error(['module "', name, '" not found.'].join(''));
                }
            };
            return { dependencies: dependencies, factory: factory };
        }
    }
    var instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        var define = get_define(name);
        if (typeof define.factory !== 'function') {
            return define.factory;
        }
        instances[name] = {};
        var dependencies = define.dependencies.map(function (name) { return resolve(name); });
        define.factory.apply(define, dependencies);
        var exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports["default"] : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();