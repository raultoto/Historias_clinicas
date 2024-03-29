"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello(request) {
        const parseIp = (req) => {
            var _a, _b, _c, _d;
            return (typeof req.headers['x-forwarded-for'] === 'string'
                && req.headers['x-forwarded-for'].split(',').shift())
                || ((_a = req.connection) === null || _a === void 0 ? void 0 : _a.remoteAddress)
                || ((_b = req.socket) === null || _b === void 0 ? void 0 : _b.remoteAddress)
                || ((_d = (_c = req.connection) === null || _c === void 0 ? void 0 : _c.socket) === null || _d === void 0 ? void 0 : _d.remoteAddress);
        };
        console.log("ip del cliente ,", parseIp(request));
        return this.appService.getHello();
    }
};
__decorate([
    common_1.Get('/hello'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map