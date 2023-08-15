import { Trichomes } from './Trichomes'
import { Prickles } from './Prickles'
import { Sources } from "./Sources"

export class Stipule extends Sources {
    /**
     * Stipule can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false

    /**
     * Stipule length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: {
        value?: number | null
        min?: number | null
        max?: number | null
    } | null

    /**
     * Shape of Stipule.
     */
    shape: 'linear-subulate' | 'lanceolate' | 'deltate' | 'ovate' | 'spinniform'

    /**
     * Nervation of Stipule.
     */
    nervation: '1-nerved' | 'plurinerved'

    /**
     * Persistance of Stipule.
     */
    persistance: 'persistent' | 'caducous'

    /**
     * Prickles.
    */
    prickles: Prickles

    /**
     * Trichomes.
     */
    trichomes: Trichomes
    
    /**
     * Creates an instance of Stipule.
     */
    constructor() {
        super()
    }

    /**
     * Sets the length values, considering the value of `present`.
     *
     * @param min - The minimum length value in milimeters (mm).
     * @param max - The maximum length value in milimeters (mm).
     * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
     * @throws Error if `min` is greater than or equal to `max`.
     */
    setLengthMinMax(min: number, max: number): void {
        if (this.present === false && (min !== null || max !== null)) {
            throw new Error("Cannot set length when present is false")
        }

        if (min >= max) {
            throw new Error("Minimum length must be less than maximum length")
        }

        this.length = { ...this.length, min, max }
    }

    /**
     * Sets a single value for length.
     *
     * @param value - The length value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    setLength(value: number | null): void {
        if (this.present === false && value !== null) {
            throw new Error("Cannot set length when present is false")
        }

        this.length = { ...this.length, value }
    }
}