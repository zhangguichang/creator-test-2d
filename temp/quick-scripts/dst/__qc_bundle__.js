
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/CustomComponent');
require('./assets/Script/Helloworld');
require('./assets/Script/event/EventMrg');
require('./assets/Script/i18n/i18nLabel');
require('./assets/Script/i18n/i18nMgr');
require('./assets/Script/i18n/i18nSprite');
require('./assets/Script/joystick/JoyStick');
require('./assets/tempAssets/test');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/i18n/i18nLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41ebaVoPpRA4Kp67XEdHfZn', 'i18nLabel');
// Script/i18n/i18nLabel.ts

"use strict";
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
exports.i18nLabel = void 0;
var i18nMgr_1 = require("./i18nMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, disallowMultiple = _a.disallowMultiple, requireComponent = _a.requireComponent, menu = _a.menu;
var i18nLabel = /** @class */ (function (_super) {
    __extends(i18nLabel, _super);
    function i18nLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.i18n_string = "";
        _this.i18n_params = [];
        return _this;
    }
    i18nLabel.prototype.start = function () {
        i18nMgr_1.i18nMgr._addOrDelLabel(this, true);
        this._resetValue();
    };
    Object.defineProperty(i18nLabel.prototype, "string", {
        get: function () {
            return this.i18n_string;
        },
        set: function (value) {
            this.i18n_string = value;
            var label = this.getComponent(cc.Label);
            if (cc.isValid(label)) {
                label.string = i18nMgr_1.i18nMgr._getLabel(this.i18n_string, this.i18n_params);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(i18nLabel.prototype, "params", {
        get: function () {
            return this.i18n_params;
        },
        set: function (value) {
            this.i18n_params = value;
            var label = this.getComponent(cc.Label);
            if (cc.isValid(label)) {
                label.string = i18nMgr_1.i18nMgr._getLabel(this.i18n_string, this.i18n_params);
            }
        },
        enumerable: false,
        configurable: true
    });
    i18nLabel.prototype.init = function (string, params) {
        this.i18n_string = string;
        this.i18n_params = params;
        var label = this.getComponent(cc.Label);
        if (cc.isValid(label)) {
            label.string = i18nMgr_1.i18nMgr._getLabel(this.i18n_string, this.i18n_params);
        }
    };
    i18nLabel.prototype._resetValue = function () {
        this.string = this.i18n_string;
    };
    i18nLabel.prototype.onDestroy = function () {
        i18nMgr_1.i18nMgr._addOrDelLabel(this, false);
    };
    __decorate([
        property({ visible: false })
    ], i18nLabel.prototype, "i18n_string", void 0);
    __decorate([
        property({ visible: false })
    ], i18nLabel.prototype, "i18n_params", void 0);
    __decorate([
        property({ type: cc.String })
    ], i18nLabel.prototype, "string", null);
    __decorate([
        property({ type: [cc.String] })
    ], i18nLabel.prototype, "params", null);
    i18nLabel = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Label),
        disallowMultiple,
        menu("多语言/i18nLabel")
    ], i18nLabel);
    return i18nLabel;
}(cc.Component));
exports.i18nLabel = i18nLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvaTE4bi9pMThuTGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvQztBQUM5QixJQUFBLEtBQXFGLEVBQUUsQ0FBQyxVQUFVLEVBQWhHLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQU96RztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQTBEQztRQXZEVyxpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd6QixpQkFBVyxHQUFhLEVBQUUsQ0FBQzs7SUFvRHZDLENBQUM7SUFsREcseUJBQUssR0FBTDtRQUNJLGlCQUFPLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdELHNCQUFJLDZCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQVcsS0FBYTtZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUV6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEtBQUssQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEU7UUFDTCxDQUFDOzs7T0FUQTtJQVlELHNCQUFJLDZCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQVcsS0FBZTtZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUV6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEtBQUssQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEU7UUFDTCxDQUFDOzs7T0FUQTtJQVdELHdCQUFJLEdBQUosVUFBSyxNQUFjLEVBQUUsTUFBZ0I7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFFMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLEtBQUssQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDeEU7SUFDTCxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLGlCQUFPLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO2tEQUNJO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO2tEQUNNO0lBUW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzsyQ0FHN0I7SUFZRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOzJDQUcvQjtJQTlCUSxTQUFTO1FBTHJCLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQztPQUNULFNBQVMsQ0EwRHJCO0lBQUQsZ0JBQUM7Q0ExREQsQUEwREMsQ0ExRDhCLEVBQUUsQ0FBQyxTQUFTLEdBMEQxQztBQTFEWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGkxOG5NZ3IgfSBmcm9tIFwiLi9pMThuTWdyXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSwgZGlzYWxsb3dNdWx0aXBsZSwgcmVxdWlyZUNvbXBvbmVudCwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQHJlcXVpcmVDb21wb25lbnQoY2MuTGFiZWwpXG5AZGlzYWxsb3dNdWx0aXBsZVxuQG1lbnUoXCLlpJror63oqIAvaTE4bkxhYmVsXCIpXG5leHBvcnQgY2xhc3MgaTE4bkxhYmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGU6IGZhbHNlIH0pXG4gICAgcHJpdmF0ZSBpMThuX3N0cmluZzogc3RyaW5nID0gXCJcIjtcblxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGU6IGZhbHNlIH0pXG4gICAgcHJpdmF0ZSBpMThuX3BhcmFtczogc3RyaW5nW10gPSBbXTtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpMThuTWdyLl9hZGRPckRlbExhYmVsKHRoaXMsIHRydWUpO1xuICAgICAgICB0aGlzLl9yZXNldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3RyaW5nIH0pXG4gICAgZ2V0IHN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaTE4bl9zdHJpbmc7XG4gICAgfVxuXG4gICAgc2V0IHN0cmluZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaTE4bl9zdHJpbmcgPSB2YWx1ZTtcblxuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGxhYmVsKSkge1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gaTE4bk1nci5fZ2V0TGFiZWwodGhpcy5pMThuX3N0cmluZywgdGhpcy5pMThuX3BhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuU3RyaW5nXSB9KVxuICAgIGdldCBwYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmkxOG5fcGFyYW1zO1xuICAgIH1cblxuICAgIHNldCBwYXJhbXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuaTE4bl9wYXJhbXMgPSB2YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobGFiZWwpKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBpMThuTWdyLl9nZXRMYWJlbCh0aGlzLmkxOG5fc3RyaW5nLCB0aGlzLmkxOG5fcGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoc3RyaW5nOiBzdHJpbmcsIHBhcmFtczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5pMThuX3N0cmluZyA9IHN0cmluZztcbiAgICAgICAgdGhpcy5pMThuX3BhcmFtcyA9IHBhcmFtcztcblxuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGxhYmVsKSkge1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gaTE4bk1nci5fZ2V0TGFiZWwodGhpcy5pMThuX3N0cmluZywgdGhpcy5pMThuX3BhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVzZXRWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5zdHJpbmcgPSB0aGlzLmkxOG5fc3RyaW5nO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgaTE4bk1nci5fYWRkT3JEZWxMYWJlbCh0aGlzLCBmYWxzZSk7XG4gICAgfVxufVxuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/event/EventMrg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4226aMXn1JJriBzc51rxZX', 'EventMrg');
// Script/event/EventMrg.ts

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMrg = void 0;
var EventMrg = /** @class */ (function (_super) {
    __extends(EventMrg, _super);
    function EventMrg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventMrg;
}(cc.EventTarget));
exports.EventMrg = EventMrg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZXZlbnQvRXZlbnRNcmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQThCLDRCQUFjO0lBQTVDOztJQUVBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FGQSxBQUVDLENBRjZCLEVBQUUsQ0FBQyxXQUFXLEdBRTNDO0FBRlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRXZlbnRNcmcgZXh0ZW5kcyBjYy5FdmVudFRhcmdldHtcbiAgICBcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CustomComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa347BAf2NKXZLIx9AhTKA0', 'CustomComponent');
// Script/CustomComponent.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executionOrder = _a.executionOrder, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help, inspector = _a.inspector;
var CustomComponent = /** @class */ (function (_super) {
    __extends(CustomComponent, _super);
    function CustomComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = 100;
        _this._ddd = 100;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(CustomComponent.prototype, "ddd", {
        get: function () {
            return this._ddd;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    CustomComponent.prototype.onLoad = function () {
    };
    CustomComponent.prototype.start = function () {
    };
    __decorate([
        property
    ], CustomComponent.prototype, "radius", void 0);
    __decorate([
        property({ displayName: "dddd" })
    ], CustomComponent.prototype, "_ddd", void 0);
    __decorate([
        property()
    ], CustomComponent.prototype, "ddd", null);
    CustomComponent = __decorate([
        ccclass,
        executeInEditMode,
        executionOrder(-1),
        menu("自定义/CustomComponent")
    ], CustomComponent);
    return CustomComponent;
}(cc.Component));
exports.default = CustomComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ3VzdG9tQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBZ0YsRUFBRSxDQUFDLFVBQVUsRUFBM0YsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsY0FBYyxvQkFBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLElBQUksVUFBQSxFQUFDLElBQUksVUFBQSxFQUFDLFNBQVMsZUFBa0IsQ0FBQztBQUtwRztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXNCQztRQXBCRyxZQUFNLEdBQVcsR0FBRyxDQUFBO1FBR1osVUFBSSxHQUFXLEdBQUcsQ0FBQzs7UUFnQjNCLGlCQUFpQjtJQUNyQixDQUFDO0lBZEcsc0JBQVcsZ0NBQUc7YUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHdCQUF3QjtJQUV4QixnQ0FBTSxHQUFOO0lBQ0EsQ0FBQztJQUVELCtCQUFLLEdBQUw7SUFDQSxDQUFDO0lBakJEO1FBREMsUUFBUTttREFDVztJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztpREFDUDtJQUczQjtRQURDLFFBQVEsRUFBRTs4Q0FHVjtJQVZnQixlQUFlO1FBSm5DLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztPQUNQLGVBQWUsQ0FzQm5DO0lBQUQsc0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QjRDLEVBQUUsQ0FBQyxTQUFTLEdBc0J4RDtrQkF0Qm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0aW9uT3JkZXIsIGV4ZWN1dGVJbkVkaXRNb2RlLCBtZW51LGhlbHAsaW5zcGVjdG9yIH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQGV4ZWN1dGlvbk9yZGVyKC0xKVxuQG1lbnUoXCLoh6rlrprkuYkvQ3VzdG9tQ29tcG9uZW50XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21Db21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eVxuICAgIHJhZGl1czogbnVtYmVyID0gMTAwXG5cbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCJkZGRkXCIgfSlcbiAgICBwcml2YXRlIF9kZGQ6IG51bWJlciA9IDEwMDtcblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgcHVibGljIGdldCBkZGQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RkZDtcbiAgICB9XG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helloworld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'Helloworld');
// Script/Helloworld.ts

"use strict";
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
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    Helloworld.prototype.start = function () {
        // init logic
        this.label.string = this.text;
    };
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "label", void 0);
    __decorate([
        property
    ], Helloworld.prototype, "text", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG93b3JsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQVlDO1FBVEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztJQU0zQixDQUFDO0lBSkcsMEJBQUssR0FBTDtRQUNJLGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFSRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNJO0lBR3ZCO1FBREMsUUFBUTs0Q0FDYztJQU5OLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FZOUI7SUFBRCxpQkFBQztDQVpELEFBWUMsQ0FadUMsRUFBRSxDQUFDLFNBQVMsR0FZbkQ7a0JBWm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvd29ybGQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBpbml0IGxvZ2ljXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50ZXh0O1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/i18n/i18nMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e36aJmHntDxqZis49hy52h', 'i18nMgr');
// Script/i18n/i18nMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18nMgr = void 0;
var i18nMgr = /** @class */ (function () {
    function i18nMgr() {
    }
    i18nMgr.checkInit = function () {
        if (!this.language) {
            this.setLanguage("zh");
        }
    };
    /**
     * 设置语言
     */
    i18nMgr.setLanguage = function (language) {
        if (this.language === language) {
            return;
        }
        this.language = language;
        this.reloadLabel();
        this.reloadSprite();
    };
    /**
     * 添加或移除 i18nLabel
     */
    i18nMgr._addOrDelLabel = function (label, isAdd) {
        if (isAdd) {
            this.labelArr.push(label);
        }
        else {
            var index = this.labelArr.indexOf(label);
            if (index !== -1) {
                this.labelArr.splice(index, 1);
            }
        }
    };
    i18nMgr._getLabel = function (opt, params) {
        this.checkInit();
        if (params.length === 0) {
            return this.labelData[opt] || opt;
        }
        var str = this.labelData[opt] || opt;
        for (var i = 0; i < params.length; i++) {
            var reg = new RegExp("#" + i, "g");
            str = str.replace(reg, params[i]);
        }
        return str;
    };
    /**
     * 添加或移除 i18nSprite
     */
    i18nMgr._addOrDelSprite = function (sprite, isAdd) {
        if (isAdd) {
            this.spriteArr.push(sprite);
        }
        else {
            var index = this.spriteArr.indexOf(sprite);
            if (index !== -1) {
                this.spriteArr.splice(index, 1);
            }
        }
    };
    i18nMgr._getSprite = function (path, cb) {
        this.checkInit();
        cc.loader.loadRes("i18n/sprite/" + this.language + "/" + path, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                return cb(null);
            }
            cb(spriteFrame);
        });
    };
    i18nMgr.reloadLabel = function () {
        var _this = this;
        var url = "i18n/label/" + this.language;
        cc.loader.loadRes(url, function (err, data) {
            if (err) {
                console.error(err);
                _this.labelData = {};
            }
            else {
                _this.labelData = data.json;
            }
            for (var _i = 0, _a = _this.labelArr; _i < _a.length; _i++) {
                var one = _a[_i];
                one._resetValue();
            }
        });
    };
    i18nMgr.reloadSprite = function () {
        for (var _i = 0, _a = this.spriteArr; _i < _a.length; _i++) {
            var one = _a[_i];
            one._resetValue();
        }
    };
    i18nMgr.language = "en"; // 当前语言
    i18nMgr.labelArr = []; // i18nLabel 列表
    i18nMgr.labelData = {}; // 文字配置
    i18nMgr.spriteArr = []; // i18nSprite 列表
    return i18nMgr;
}());
exports.i18nMgr = i18nMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvaTE4bi9pMThuTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQUE7SUFrR0EsQ0FBQztJQTVGa0IsaUJBQVMsR0FBeEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ1csbUJBQVcsR0FBekIsVUFBMEIsUUFBZ0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM1QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNXLHNCQUFjLEdBQTVCLFVBQTZCLEtBQTBCLEVBQUUsS0FBYztRQUNuRSxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDSCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbEM7U0FDSjtJQUNMLENBQUM7SUFFYSxpQkFBUyxHQUF2QixVQUF3QixHQUFXLEVBQUUsTUFBZ0I7UUFDakQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FB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OiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGkxOG5MYWJlbCBmcm9tIFwiLi9pMThuTGFiZWxcIjtcbmltcG9ydCAqIGFzIGkxOG5TcHJpdGUgZnJvbSBcIi4vaTE4blNwcml0ZVwiO1xuXG5leHBvcnQgY2xhc3MgaTE4bk1nciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgbGFuZ3VhZ2UgPSBcImVuXCI7ICAgICAvLyDlvZPliY3or63oqIBcbiAgICBwcml2YXRlIHN0YXRpYyBsYWJlbEFycjogaTE4bkxhYmVsLmkxOG5MYWJlbFtdID0gW107ICAgICAgICAvLyBpMThuTGFiZWwg5YiX6KGoXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGFiZWxEYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307ICAgLy8g5paH5a2X6YWN572uXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3ByaXRlQXJyOiBpMThuU3ByaXRlLmkxOG5TcHJpdGVbXSA9IFtdOyAgICAgICAvLyBpMThuU3ByaXRlIOWIl+ihqFxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tJbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UoXCJ6aFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruivreiogFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMucmVsb2FkTGFiZWwoKTtcbiAgICAgICAgdGhpcy5yZWxvYWRTcHJpdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDmiJbnp7vpmaQgaTE4bkxhYmVsXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBfYWRkT3JEZWxMYWJlbChsYWJlbDogaTE4bkxhYmVsLmkxOG5MYWJlbCwgaXNBZGQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzQWRkKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsQXJyLnB1c2gobGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5sYWJlbEFyci5pbmRleE9mKGxhYmVsKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsQXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIF9nZXRMYWJlbChvcHQ6IHN0cmluZywgcGFyYW1zOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMuY2hlY2tJbml0KCk7XG4gICAgICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYWJlbERhdGFbb3B0XSB8fCBvcHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0ciA9IHRoaXMubGFiZWxEYXRhW29wdF0gfHwgb3B0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoXCIjXCIgKyBpLCBcImdcIilcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHJlZywgcGFyYW1zW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog5re75Yqg5oiW56e76ZmkIGkxOG5TcHJpdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIF9hZGRPckRlbFNwcml0ZShzcHJpdGU6IGkxOG5TcHJpdGUuaTE4blNwcml0ZSwgaXNBZGQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzQWRkKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFyci5wdXNoKHNwcml0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnNwcml0ZUFyci5pbmRleE9mKHNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgX2dldFNwcml0ZShwYXRoOiBzdHJpbmcsIGNiOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tJbml0KCk7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaTE4bi9zcHJpdGUvXCIgKyB0aGlzLmxhbmd1YWdlICsgXCIvXCIgKyBwYXRoLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2IobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYihzcHJpdGVGcmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVsb2FkTGFiZWwoKSB7XG4gICAgICAgIGxldCB1cmwgPSBcImkxOG4vbGFiZWwvXCIgKyB0aGlzLmxhbmd1YWdlO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbERhdGEgPSB7fTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbERhdGEgPSBkYXRhLmpzb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBvbmUgb2YgdGhpcy5sYWJlbEFycikge1xuICAgICAgICAgICAgICAgIG9uZS5fcmVzZXRWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyByZWxvYWRTcHJpdGUoKSB7XG4gICAgICAgIGZvciAobGV0IG9uZSBvZiB0aGlzLnNwcml0ZUFycikge1xuICAgICAgICAgICAgb25lLl9yZXNldFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/i18n/i18nSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ffbcbl89xEj5yYYH4SQgf+', 'i18nSprite');
// Script/i18n/i18nSprite.ts

"use strict";
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
exports.i18nSprite = void 0;
var i18nMgr_1 = require("./i18nMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, disallowMultiple = _a.disallowMultiple, requireComponent = _a.requireComponent, menu = _a.menu;
var i18nSprite = /** @class */ (function (_super) {
    __extends(i18nSprite, _super);
    function i18nSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.i18n_string = "";
        return _this;
    }
    i18nSprite.prototype.start = function () {
        i18nMgr_1.i18nMgr._addOrDelSprite(this, true);
        this._resetValue();
    };
    Object.defineProperty(i18nSprite.prototype, "string", {
        get: function () {
            return this.i18n_string;
        },
        set: function (value) {
            this.i18n_string = value;
            var sprite = this.getComponent(cc.Sprite);
            if (cc.isValid(sprite)) {
                i18nMgr_1.i18nMgr._getSprite(value, function (spriteFrame) {
                    if (cc.isValid(sprite)) {
                        sprite.spriteFrame = spriteFrame;
                    }
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    i18nSprite.prototype._resetValue = function () {
        this.string = this.i18n_string;
    };
    i18nSprite.prototype.onDestroy = function () {
        i18nMgr_1.i18nMgr._addOrDelSprite(this, false);
    };
    __decorate([
        property({ visible: false })
    ], i18nSprite.prototype, "i18n_string", void 0);
    __decorate([
        property({ type: cc.String })
    ], i18nSprite.prototype, "string", null);
    i18nSprite = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Sprite),
        disallowMultiple,
        menu("多语言/i18nSprite")
    ], i18nSprite);
    return i18nSprite;
}(cc.Component));
exports.i18nSprite = i18nSprite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvaTE4bi9pMThuU3ByaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0M7QUFDOUIsSUFBQSxLQUFxRixFQUFFLENBQUMsVUFBVSxFQUFoRyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFPekc7SUFBZ0MsOEJBQVk7SUFBNUM7UUFBQSxxRUFtQ0M7UUFoQ1csaUJBQVcsR0FBVyxFQUFFLENBQUM7O0lBZ0NyQyxDQUFDO0lBOUJHLDBCQUFLLEdBQUw7UUFDSSxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxzQkFBSSw4QkFBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFXLEtBQWE7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFFekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNwQixpQkFBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBQyxXQUFXO29CQUNsQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQ3BCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO3FCQUNwQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQzs7O09BYkE7SUFlRCxnQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0ksaUJBQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUEvQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7bURBQ0k7SUFRakM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDOzRDQUc3QjtJQWJRLFVBQVU7UUFMdEIsT0FBTztRQUNQLGlCQUFpQjtRQUNqQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzNCLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUM7T0FDVixVQUFVLENBbUN0QjtJQUFELGlCQUFDO0NBbkNELEFBbUNDLENBbkMrQixFQUFFLENBQUMsU0FBUyxHQW1DM0M7QUFuQ1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpMThuTWdyIH0gZnJvbSBcIi4vaTE4bk1nclwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUsIGRpc2FsbG93TXVsdGlwbGUsIHJlcXVpcmVDb21wb25lbnQsIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkByZXF1aXJlQ29tcG9uZW50KGNjLlNwcml0ZSlcbkBkaXNhbGxvd011bHRpcGxlXG5AbWVudShcIuWkmuivreiogC9pMThuU3ByaXRlXCIpXG5leHBvcnQgY2xhc3MgaTE4blNwcml0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgIHByaXZhdGUgaTE4bl9zdHJpbmc6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaTE4bk1nci5fYWRkT3JEZWxTcHJpdGUodGhpcywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3Jlc2V0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TdHJpbmcgfSlcbiAgICBnZXQgc3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pMThuX3N0cmluZztcbiAgICB9XG5cbiAgICBzZXQgc3RyaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pMThuX3N0cmluZyA9IHZhbHVlO1xuXG4gICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChzcHJpdGUpKSB7XG4gICAgICAgICAgICBpMThuTWdyLl9nZXRTcHJpdGUodmFsdWUsIChzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHNwcml0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVzZXRWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5zdHJpbmcgPSB0aGlzLmkxOG5fc3RyaW5nO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgaTE4bk1nci5fYWRkT3JEZWxTcHJpdGUodGhpcywgZmFsc2UpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/tempAssets/test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6dac3oGVq5H46ufEOH+Fhwd', 'test');
// tempAssets/test.ts

console.log("caonima");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy90ZW1wQXNzZXRzL3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiY2FvbmltYVwiKTsiXX0=
//------QC-SOURCE-SPLIT------
