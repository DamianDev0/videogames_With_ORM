import { injectable } from "tsyringe";
import { Developer } from "../models/developers";

@injectable()
export default class DeveloperRepository{
    async findAll(){
        return await Developer.findAll()
    }

    async findById(id: number){
        return await Developer.findByPk(id)
    }
    
    async create(developer: Partial<Developer>){
        return await Developer.create(developer)
    }

    async update(id: number, developer: Partial<Developer>){
        const developerToUpdate = await Developer.findByPk(id)
        if(!developerToUpdate){
            throw new Error('Developer not found')
        }
        return await developerToUpdate.update(developer)
    }

    async delete(id:number){
        const developerToDelete = await Developer.findByPk(id)
        if(!developerToDelete){
            throw new Error('Developer not found')
        }
        return await developerToDelete.destroy()
    }
}