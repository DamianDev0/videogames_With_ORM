import { injectable } from "tsyringe";
import { User } from "../models/user";

@injectable()
export default class UserRepository{
    async findAll(){
        return await User.findAll()
    }
    
    async findById(id: number){
        return await User.findByPk(id)
    }

    async create(user: Partial<User>){
        return await User.create(user)
    }

    async update(id:number, updates: Partial<User>){
        return await User.update(updates, {where: {id}})
    }

    async findByEmail(email: string) {
        return await User.findOne({ where: { email } });
    }
}