import EtlStreamingProgressInterface from "./etl-streaming-progress-interface";

export default class EtlStreamingProgressContext {
    constructor(readonly etlStreamingProgress : EtlStreamingProgressInterface) {}

    async handle() : Promise<void> {
        await this.etlStreamingProgress.start({});
    }
}