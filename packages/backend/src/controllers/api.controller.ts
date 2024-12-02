import { Request, Response } from "express";
import endpoints from "../endpoints.json";

export async function getApi(req: Request, res: Response){
    try {
        res.status(200).send(endpoints)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'server error',
          });
    }
}