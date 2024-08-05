import { inject,injectable } from "tsyringe";
import DeveloperRepository  from "../repositories/developersRepository";
import { Developer } from "../models/developers";


@injectable()
export default class DeveloperServices{
    constructor(@inject(DeveloperRepository) private developerRepository:DeveloperRepository){}

    async getAllDevelopers(){
        return await this.developerRepository.findAll()
    }

    async getDeveloperById(id:number){
        return await this.developerRepository.findById(id)
    }

    async createDeveloper(developer: Partial<Developer>){
        return await this.developerRepository.create(developer)
    }

    async updateDeveloper(id:number, updates:Partial<Developer>){
        return await this.developerRepository.update(id,updates)
    }
    async deleteDeveloper(id:number){
        return await this.developerRepository.delete(id)
    }
    
}