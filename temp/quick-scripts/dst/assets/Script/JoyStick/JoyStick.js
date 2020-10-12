
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/joystick/JoyStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        console.log("caonima -JoyStick");
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvam95c3RpY2svSm95U3RpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0YsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFPNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyQ0M7UUF4Q0csa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixLQUFLO1FBQ0csUUFBRSxHQUFXLENBQUMsQ0FBQzs7UUFrQ3ZCLGlCQUFpQjtJQUNyQixDQUFDO0lBbENHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDRCwrQkFBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUNELDhCQUFXLEdBQVgsVUFBWSxLQUFlO1FBQ3ZCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0IsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDbEM7YUFBTTtZQUNILElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO1lBQy9CLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUNELDZCQUFVLEdBQVYsVUFBVyxLQUFlO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7a0RBQ3BCO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDOzJDQUMxQjtJQUxMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyQzVCO0lBQUQsZUFBQztDQTNDRCxBQTJDQyxDQTNDcUMsRUFBRSxDQUFDLFNBQVMsR0EyQ2pEO2tCQTNDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUpveVN0aWNrRGF0YSB7XG4gICAgdmVjdG9yOiBjYy5WZWMzLFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm95U3RpY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgZGlzcGxheU5hbWU6IFwi5pGH5p2G6IqC54K5XCIgfSlcbiAgICBqb3lTdGlja05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIGRpc3BsYXlOYW1lOiBcIuadhuiKgueCuVwiIH0pXG4gICAgc3RpY2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8g5Y2K5b6EXG4gICAgcHJpdmF0ZSBfcjogbnVtYmVyID0gMDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLl9yID0gdGhpcy5qb3lTdGlja05vZGUud2lkdGggLyAyIC0gNTA7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNhb25pbWEgLUpveVN0aWNrXCIpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuVG91Y2gpIHtcbiAgICAgICAgbGV0IHRvdWNoUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSPGNjLlZlYzM+KGNjLnYzKGV2ZW50LmdldExvY2F0aW9uKCkpKTtcbiAgICAgICAgdGhpcy5qb3lTdGlja05vZGUucG9zaXRpb24gPSB0b3VjaFBvcztcbiAgICB9XG4gICAgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIGxldCB0b3VjaFBvcyA9IHRoaXMuam95U3RpY2tOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSPGNjLlZlYzM+KGNjLnYzKGV2ZW50LmdldExvY2F0aW9uKCkpKTtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gdG91Y2hQb3MubWFnKCk7XG4gICAgICAgIGxldCBwID0gdG91Y2hQb3Mubm9ybWFsaXplKCk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8PSB0aGlzLl9yKSB7XG4gICAgICAgICAgICB0aGlzLnN0aWNrLnBvc2l0aW9uID0gdG91Y2hQb3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcmF0aW8gPSB0aGlzLl9yIC8gZGlzdGFuY2U7XG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjMoMCwgMCkubGVycCh0b3VjaFBvcywgcmF0aW8pO1xuICAgICAgICAgICAgdGhpcy5zdGljay5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5Ub3VjaCkge1xuICAgICAgICB0aGlzLnN0aWNrLnBvc2l0aW9uID0gY2MudjMoMCwgMCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=