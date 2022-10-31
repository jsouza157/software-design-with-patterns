import ProgressEntity from "../entities/progress-entity";

export default class ProgressRepository {
    async create(profileId: number, timeOfProgress: number, tenant: string, contentType: string) {
        return new ProgressEntity(profileId, timeOfProgress, tenant, contentType);
    }
}