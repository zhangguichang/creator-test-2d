// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property, executionOrder, executeInEditMode, menu,help,inspector } = cc._decorator;
@ccclass
@executeInEditMode
@executionOrder(-1)
@menu("自定义/CustomComponent")
export default class CustomComponent extends cc.Component {
    @property
    radius: number = 100

    @property({ displayName: "dddd" })
    private _ddd: number = 100;

    @property()
    public get ddd(): number {
        return this._ddd;
    }


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    }

    start() {
    }

    // update (dt) {}
}
