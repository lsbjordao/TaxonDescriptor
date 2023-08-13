import { Trichomes } from '../Trichomes';

import { Source } from "../../character/Source";

export class Epicarp {
    /**
     * Shape.
     */
    shape: 'straight' | 'undulate' | null;

    /**
     * Shape.
     */
    trichomes: Trichomes | null;

    /**
     * Prickles.
     */
    prickles: true | false | null;

    /**
     * Source
     */
    sources: Source[];

    /**
     * Creates an instance of Epicarp.
     */
    constructor() {
        this.shape = null;
        this.trichomes = null;
        this.prickles = null;
        this.sources = [];
    }
}
