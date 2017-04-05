// Auto-generated from simulator. Do not edit.
declare namespace turtle {
    /**
     * Moves the sprite forward
     * @param steps number of steps to move, eg: 1
     */
    //% weight=90
    //% blockId=sampleForward block="forward %steps"
    //% shim=turtle::forwardAsync promise
    function forward(steps: number): void;

    /**
     * Moves the sprite backward
     * @param steps number of steps to move, eg: 1
     */
    //% weight=90
    //% blockId=sampleBackward block="backward %steps"
    //% shim=turtle::backward
    function backward(steps: number): void;

    /**
     * Moves the sprite forward
     * @param direction the direction to turn, eg: Direction.Left
     * @param angle degrees to turn, eg:90
     */
    //% weight=85
    //% blockId=sampleTurn block="turn %direction|by %angle degrees"
    //% shim=turtle::turnAsync promise
    function turn(direction: Direction, angle: number): void;

}
declare namespace react {
    /**
     * Do something when a button (``A``, ``B`` or both ``A+B``) is pressed
     * @param button the button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% help=input/on-button-pressed weight=85 blockGap=8
    //% blockId=device_button_event block="on button|%NAME|pressed" icon="\uf192"
    //% shim=react::onButtonPressed
    function onButtonPressed(button: number, body: () => void): void;

    /**
     * Show a div
     * @param properties of the div
     * @param children of the div
     */
    //% help=react/div weight=85 blockGap=8
    //% blockId=div block="div|props %properties=PropertySet|children %children=ComponentSet"
    //% shim=react::div
    function div(properties: PropertySet, children: ComponentSet): void;

    /**
     * Show a span
     * @param properties of the span
     * @param body of the span
     */
    //% help=react/span weight=85 blockGap=8
    //% blockId=span block="span|props %properties=PropertySet"
    //% shim=react::span
    function span(properties: PropertySet): void;

    /**
     * create a properties object
     * @param body code to run to create new object
     */
    //% help=react/createProperties weight=85 blockGap=8
    //% blockId=create_properties block="properties" icon="\uf192"
    //% shim=react::createProperties
    function createProperties(body: () => void): PropertySet;

    //% blockId=create_elements block="elements" icon="\uf192"
    //% shim=react::createElements
    function createElements(body: () => void): ComponentSet;

}
declare namespace control {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body TODO
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" icon="\uf01e"
    //% shim=control::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause icon="\uf110"
    //% shim=control::pauseAsync promise
    function pause(ms: number): void;

}
declare namespace console {
    /**
     * Print out message
     */
    //%
    //% shim=console::log
    function log(msg: string): void;

}
    /**
     * A ghost on the screen.
     */
    //%
    declare class Sprite {
        /**
         * The X-coordiante
         */
        //%
        //% shim=.x
        public x: number;

        /**
         * The Y-coordiante
         */
        //%
        //% shim=.y
        public y: number;

        /** 
         * Make new sprite
         */
        //%
        //% shim="new Sprite"
        constructor();

        /**
         * Move the thing forward
         */
        //%
        //% shim=.forwardAsync promise
        public forward(steps: number): void;

    }

// Auto-generated. Do not edit. Really.
