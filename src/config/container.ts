import { container } from "tsyringe";
import GameRepository from "../repositories/gameRepository";
import DeveloperRepository from "../repositories/developersRepository";
import UserRepository from "../repositories/userRepository";
import GameService from "../services/gameServices";
import DeveloperServices from "../services/developerServices";
import UserService from "../services/userServices";

//repositories
container.registerSingleton<GameRepository>(GameRepository)
container.registerSingleton<DeveloperRepository>(DeveloperRepository)
container.registerSingleton<UserRepository>(UserRepository)


//services
container.registerSingleton<GameService>(GameService)
container.registerSingleton<DeveloperServices>(DeveloperServices)
container.registerSingleton<UserService>(UserService)
