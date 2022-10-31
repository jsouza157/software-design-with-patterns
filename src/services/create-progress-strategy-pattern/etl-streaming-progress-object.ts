import EtlStreamingProgressInterface from "./etl-streaming-progress-interface";

export default class EtlStreamingProgressObject implements EtlStreamingProgressInterface {
    async start(data: object): Promise<void> {
        console.log('Start etl streamin object progress');
    }
}