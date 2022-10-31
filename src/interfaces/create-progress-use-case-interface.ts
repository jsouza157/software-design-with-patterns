import { CreateProgressRequest } from "../requests/create-progress-request";

export default interface CreateProgressUseCaseInterface {
    handle(progress: CreateProgressRequest) : Promise<void>;
}