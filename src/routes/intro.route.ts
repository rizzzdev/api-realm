import { Request, Response, Router } from "express";

const introRouter: Router = Router();

introRouter.get("", (request: Request, response: Response) => {
  const apiReponse = {
    title: "API Realm",
    description: "A REST API for the Realm Application",
    author: "Rizqon Maulana (Rizzz.Dev)",
    github: "https://github.com/rizzz-dev"
  };
  response.status(200).send(apiReponse);
});

export default introRouter;
