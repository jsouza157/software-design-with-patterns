import { Request, Response } from "express";
import ProgressRepository from "../repository/progress-repository";
import { CreateProgressRequest } from "../requests/create-progress-request";
import CreateProgressUseCase from "../use-cases/create-progress-use-case";

export default class ProgressController {
    async create(req: Request, res: Response) {
        if(!req.body?.contentType || !req.body?.profileId) {
            throw new Error('É obrigatório o envio do id do profile e do tipo de conteúdo.');
        }
        
        const progress = {
            profileId: req.body.profileId, 
            timeOfProgress: req.body?.timeOfProgress, 
            tenant: req.body?.tenant, 
            contentType: req.body.contentType
        } as CreateProgressRequest;

        const createProgressUseCase = new CreateProgressUseCase(new ProgressRepository());
        await createProgressUseCase.handle(progress);

        return res.json("Progresso criado.")
    }
}