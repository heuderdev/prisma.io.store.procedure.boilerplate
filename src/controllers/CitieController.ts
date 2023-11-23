import { Request, Response } from "express";
import { CitiesService } from "../services/CitiesService";

export class CitieController {
  static async ListOfAllCities(request: Request, response: Response) {
    const cities = await CitiesService.ListOfAllCities();
    return response.status(200).json(cities);
  }
}
