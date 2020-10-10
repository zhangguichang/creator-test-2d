"use strict";
cc._RF.push(module, '006b4XizSZOGZ8MkTSBwAeM', 'JoyStick');
// Script/joystick/JoyStick.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JoyStick = /** @class */ (function (_super) {
    __extends(JoyStick, _super);
    function JoyStick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.joyStickNode = null;
        _this.stick = null;
        // 半径
        _this._r = 0;
        return _this;
        // update (dt) {}
    }
    JoyStick.prototype.onLoad = function () {
        this.addEventListener();
        this._r = this.joyStickNode.width / 2 - 50;
    };
    JoyStick.prototype.start = function () {
    };
    JoyStick.prototype.addEventListener = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    JoyStick.prototype.onTouchStart = function (event) {
        var touchPos = this.node.convertToNodeSpaceAR(cc.v3(event.getLocation()));
        this.joyStickNode.position = touchPos;
    };
    JoyStick.prototype.onTouchMove = function (event) {
        var touchPos = this.joyStickNode.convertToNodeSpaceAR(cc.v3(event.getLocation()));
        var distance = touchPos.mag();
        var p = touchPos.normalize();
        if (distance <= this._r) {
            this.stick.position = touchPos;
        }
        else {
            var ratio = this._r / distance;
            var pos = cc.v3(0, 0).lerp(touchPos, ratio);
            this.stick.position = pos;
        }
    };
    JoyStick.prototype.onTouchEnd = function (event) {
        this.stick.position = cc.v3(0, 0);
    };
    __decorate([
        property({ type: cc.Node, displayName: "摇杆节点" })
    ], JoyStick.prototype, "joyStickNode", void 0);
    __decorate([
        property({ type: cc.Node, displayName: "杆节点" })
    ], JoyStick.prototype, "stick", void 0);
    JoyStick = __decorate([
        ccclass
    ], JoyStick);
    return JoyStick;
}(cc.Component));
exports.default = JoyStick;

cc._RF.pop();