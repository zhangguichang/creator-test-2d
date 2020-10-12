// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

export interface IJoyStickData {
    vector: cc.Vec3,
}

@ccclass
export default class JoyStick extends cc.Component {

    @property({ type: cc.Node, displayName: "摇杆节点" })
    joyStickNode: cc.Node = null;
    @property({ type: cc.Node, displayName: "杆节点" })
    stick: cc.Node = null;

    // 半径
    private _r: number = 0;
    onLoad() {
        this.addEventListener();
        this._r = this.joyStickNode.width / 2 - 50;
    }
    start() {
        console.log("caonima -JoyStick");
    }

    addEventListener() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    onTouchStart(event: cc.Touch) {
        let touchPos = this.node.convertToNodeSpaceAR<cc.Vec3>(cc.v3(event.getLocation()));
        this.joyStickNode.position = touchPos;
    }
    onTouchMove(event: cc.Touch) {
        let touchPos = this.joyStickNode.convertToNodeSpaceAR<cc.Vec3>(cc.v3(event.getLocation()));
        let distance = touchPos.mag();
        let p = touchPos.normalize();
        if (distance <= this._r) {
            this.stick.position = touchPos;
        } else {
            let ratio = this._r / distance;
            let pos = cc.v3(0, 0).lerp(touchPos, ratio);
            this.stick.position = pos;
        }
    }
    onTouchEnd(event: cc.Touch) {
        this.stick.position = cc.v3(0, 0);
    }
    // update (dt) {}
}
