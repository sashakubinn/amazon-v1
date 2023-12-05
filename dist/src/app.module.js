"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const serve_static_1 = require("@nestjs/serve-static");
const app_root_path_1 = require("app-root-path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const category_module_1 = require("./category/category.module");
const order_module_1 = require("./order/order.module");
const pagination_module_1 = require("./pagination/pagination.module");
const prisma_service_1 = require("./prisma.service");
const product_module_1 = require("./product/product.module");
const review_module_1 = require("./review/review.module");
const statistics_module_1 = require("./statistics/statistics.module");
const user_controller_1 = require("./user/user.controller");
const user_module_1 = require("./user/user.module");
const user_service_1 = require("./user/user.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: `${app_root_path_1.path}/uploads`,
                serveRoot: '/uploads',
            }),
            config_1.ConfigModule.forRoot(),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            jwt_1.JwtModule,
            config_1.ConfigModule,
            product_module_1.ProductModule,
            review_module_1.ReviewModule,
            category_module_1.CategoryModule,
            order_module_1.OrderModule,
            statistics_module_1.StatisticsModule,
            pagination_module_1.PaginationModule,
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, user_service_1.UserService, config_1.ConfigService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map