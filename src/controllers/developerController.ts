import { container } from "tsyringe";
import { Request, Response } from "express";
import DeveloperServices from "../services/developerServices";

export default class DeveloperController {
  static async getAllDeveloper(_: Request, res: Response) {
    const developerService = container.resolve(DeveloperServices);
    const developers = await developerService.getAllDevelopers();
    res.status(200).json({
      status: 200,
      message: "All developers were successfully retrieved",
      data: developers,
    });
  }

  static async getDeveloperById(req: Request, res: Response) {
    const developersServices = container.resolve(DeveloperServices);
    const id = parseInt(req.params.id);
    const developer = await developersServices.getDeveloperById(id);
    if (developer) {
      res.status(200).json({
        status: 200,
        message: "Developer was successfully retrieve",
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Developer not found",
      });
    }
  }

  static async createDeveloper(req:Request, res:Response){
    const developerService = container.resolve(DeveloperServices);
    const developer = await developerService.createDeveloper(req.body);
    res.status(201).json({
      status: 201,
      message: "Developer was successfully created",
      data: developer,
    });
  }



}
