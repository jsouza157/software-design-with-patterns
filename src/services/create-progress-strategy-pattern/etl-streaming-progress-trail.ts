import EtlStreamingProgressInterface from "./etl-streaming-progress-interface";

export default class EtlStreamingProgressTrail implements EtlStreamingProgressInterface {
    async start(data: object): Promise<void> {
        console.log('Start etl streamin trail progress');
    }
}