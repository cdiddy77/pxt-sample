/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim.turtle {
    /**
     * Moves the sprite forward
     * @param steps number of steps to move, eg: 1
     */
    //% weight=90
    //% blockId=sampleForward block="forward %steps"
    export function forwardAsync(steps: number) {
        return board().sprite.forwardAsync(steps)
    }

    /**
     * Moves the sprite backward
     * @param steps number of steps to move, eg: 1
     */
    //% weight=90
    //% blockId=sampleBackward block="backward %steps"
    export function backward(steps: number) {
        // return board().sprite.forwardAsync(steps)
    }

    /**
     * Moves the sprite forward
     * @param direction the direction to turn, eg: Direction.Left
     * @param angle degrees to turn, eg:90
     */
    //% weight=85
    //% blockId=sampleTurn block="turn %direction|by %angle degrees"
    export function turnAsync(direction: Direction, angle: number) {
        let b = board();

        if (direction == Direction.Left)
            b.sprite.angle -= angle;
        else
            b.sprite.angle += angle;
        return Promise.delay(100)
    }

}

namespace pxsim.react {
    /**
     * Do something when a button (``A``, ``B`` or both ``A+B``) is pressed
     * @param button the button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% help=input/on-button-pressed weight=85 blockGap=8
    //% blockId=device_button_event block="on button|%NAME|pressed" icon="\uf192"
    export function onButtonPressed(button: number, body: () => void): void {
        pxsim.console.log('onButtonPressed');
    }

    /**
     * Show a div
     * @param properties of the div
     * @param children of the div
     */
    //% help=react/div weight=85 blockGap=8
    //% blockId=div block="div|props %properties=PropertySet|children %children=ComponentSet"
    export function div(properties: PropertySet, children:ComponentSet) {
        pxsim.console.log('div');
    }
    /**
     * Show a span
     * @param properties of the span
     * @param body of the span
     */
    //% help=react/span weight=85 blockGap=8
    //% blockId=span block="span|props %properties=PropertySet"
    export function span(properties: PropertySet) {
        pxsim.console.log('span');
    }
    /**
     * create a properties object
     * @param body code to run to create new object
     */
    //% help=react/createProperties weight=85 blockGap=8
    //% blockId=create_properties block="properties" icon="\uf192"
    export function createProperties(body: () => void): PropertySet {
        pxsim.console.log('create properties');
        return { p: [{ name: 'p', value: 'v' }] };

    }   //% help=react/createElements weight=85 blockGap=8
    //% blockId=create_elements block="elements" icon="\uf192"
    export function createElements(body: () => void): ComponentSet {
        pxsim.console.log('create properties');
        return { e:[] };
    }
}

namespace pxsim.control {

    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body TODO
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" icon="\uf01e" 
    export function forever(body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause icon="\uf110"
    export function pauseAsync(ms: number) {
        return Promise.delay(ms)
    }
}

function logMsg(m: string) { console.log(m) }

namespace pxsim.console {
    /**
     * Print out message
     */
    //% 
    export function log(msg: string) {
        logMsg("CONSOLE: " + msg)
        // why doesn't that work?
        board().writeSerial(msg + "\n")
    }
}

namespace pxsim {
    /**
     * A ghost on the screen.
     */
    //%
    export class Sprite {
        /**
         * The X-coordiante
         */
        //%
        public x = 100;
        /**
        * The Y-coordiante
        */
        //%
        public y = 100;
        public angle = 90;

        /** 
         * Make new sprite
         */
        //%
        constructor() {
        }

        private foobar() { }

        /**
         * Move the thing forward
         */
        //%
        public forwardAsync(steps: number) {
            let deg = this.angle / 180 * Math.PI;
            this.x += Math.cos(deg) * steps * 10;
            this.y += Math.sin(deg) * steps * 10;
            board().updateView();
            return Promise.delay(100)
        }
    }
}
