import { Request, Response } from "express";
import prisma from "../../prisma/client";

export async function deleteRequestById(req:Request, res:Response){
    const { requestId } = req.params;
    try {
      const request = await prisma.requests.findFirst({
        where: {
          id: requestId,
        },
      });
  
      if (!request) {
        return res.status(401).json({
          status: 401,
          message: 'Request not found',
        });
      }
  
      await prisma.requests.delete({
        where: {
          id: requestId,
        },
      })
      return res.status(201).json({
        status: 201,
        message: 'Request successfully deleted',
      });
    } catch {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
      });
    }
  }

  export async function patchRequestStatusByID(req: Request, res: Response) {
    const { requestId } = req.params;
    try {
      const request = await prisma.requests.findFirst({
        where: {
          id: requestId,
        },
      });
      if (!request) {
        return res.status(401).json({
          status: 401,
          message: 'Request not found',
        });
      }
      const updatedRequest = await prisma.requests.update({
        where: {
          id: requestId,
        },
        data: req.body,
      });
      res.status(200).json({
        status: 200,
        message: 'Request status successfully updated',
        data: updatedRequest,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 500,
        message: 'Server error',
      });
    }
  }