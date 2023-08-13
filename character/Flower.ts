import { Corolla } from "./Flower/Corolla";
import { Calyx } from "./Flower/Calyx";

import { Source } from "../character/Source";

export class Flower {
    /**
     * Calyx.
     */
    calyx: Calyx | null;

    /**
     * Corolla.
     */
    corolla: Corolla | null;

    /**
     * Source
     */
    sources: Source[];

    /**
     * Describe Flower.
     */
    constructor() {
        this.calyx = null;
        this.corolla = null;
        this.sources = [];
    }
}