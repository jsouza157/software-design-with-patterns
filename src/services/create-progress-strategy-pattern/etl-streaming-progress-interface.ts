export default interface EtlStreamingProgressInterface {
    start(data: object) : Promise<void>
}