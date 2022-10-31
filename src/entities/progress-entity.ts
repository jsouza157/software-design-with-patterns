export default class ProgressEntity {
    profileId!: number;
    timeOfProgress!: number;
    tenant!: string;
    contentType!: string;
    
    constructor(profileId: number, timeOfProgress: number, tenant: string, contentType: string) {
        this.profileId = profileId;
        this.timeOfProgress = timeOfProgress;
        this.tenant = tenant;
        this.contentType = contentType;
    }
}