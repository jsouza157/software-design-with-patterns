import CreateProgressUseCaseInterface from "../interfaces/create-progress-use-case-interface";
import ProgressRepository from "../repository/progress-repository";
import { CreateProgressRequest } from "../requests/create-progress-request";
import EtlStreamingProgressContext from "../services/create-progress-strategy-pattern/etl-streaming-progress-context";
import EtlStreamingProgressCourse from "../services/create-progress-strategy-pattern/etl-streaming-progress-course";
import EtlStreamingProgressObject from "../services/create-progress-strategy-pattern/etl-streaming-progress-object";
import EtlStreamingProgressTrail from "../services/create-progress-strategy-pattern/etl-streaming-progress-trail";

export default class CreateProgressUseCase implements CreateProgressUseCaseInterface {
    constructor(readonly progressRepository : ProgressRepository) {}

    async handle(progress : CreateProgressRequest): Promise<void> {
        await this.progressRepository.create(progress.profileId, progress.timeOfProgress, progress.tenant, progress.contentType);

        if(progress.contentType === 'trail') {
            const etlStramingProgress = new EtlStreamingProgressContext(new EtlStreamingProgressTrail());
            await etlStramingProgress.handle();
        }

        if(progress.contentType === 'course') {
            const etlStramingProgress = new EtlStreamingProgressContext(new EtlStreamingProgressCourse());
            await etlStramingProgress.handle();
        }

        if(progress.contentType === 'object') {
            const etlStramingProgress = new EtlStreamingProgressContext(new EtlStreamingProgressObject());
            await etlStramingProgress.handle();
        }
    }
}