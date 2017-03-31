/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/@types/react/index.d.ts" />
/// <reference path="../node_modules/@types/react-dom/index.d.ts" />


namespace pxsim {
    initCurrentRuntime = () => {
        runtime.board = new Board();
    };

    export function board(): Board {
        return runtime.board as Board;
    }

    const e = React.createElement;
    export class Board extends pxsim.BaseBoard {
        public element: SVGSVGElement;
        public spriteElement: SVGCircleElement;
        public sprite: Sprite;

        constructor() {
            super();
            // this.element = <SVGSVGElement><any>document.getElementById('svgcanvas');
            // this.spriteElement = <SVGCircleElement>this.element.getElementById('svgsprite');
            this.sprite = new Sprite()
        }

        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            console.log('setting simulator')

            // document.body.innerHTML = ''; // clear children
            // document.body.appendChild(this.element);
            this.updateView();
            return Promise.resolve();
        }


        updateView() {
            ReactDOM.render(e('h2', null, e('p',null,'asdfasdf'), e('p',null,'asdfasdf'), e('p',null,'asdfasdf')), document.getElementById('root'));
            // this.spriteElement.cx.baseVal.value = this.sprite.x;
            // this.spriteElement.cy.baseVal.value = this.sprite.y;
        }
    }
}