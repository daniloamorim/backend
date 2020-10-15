//importa o express com parametro
import { Request, Response } from 'express';

//Partner Repository
import { getRepository} from 'typeorm';

//import da minha classe criada no models
import Orphanage from '../models/Orphanages';

export default {
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find();

        return response.json(orphanages);
    },

    async show(request: Request, response: Response) {
        const  { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail( id );

        return response.json(orphanage);
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;
    
        const orphanagesRepository = getRepository(Orphanage);
    
        const orphanage = orphanagesRepository.create ({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,     
        } as any);
    
        //para usar o await preciso que a função seja async
        await orphanagesRepository.save(orphanage);
    
        return response.status(201).json({orphanage });
        
    }
};