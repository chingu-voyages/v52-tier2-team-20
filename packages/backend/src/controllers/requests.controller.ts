import { Request, Response } from "express";
import prisma from "../../prisma/client";

// Creating a request
export async function createRequest(req: Request, res: Response) {  
  try {
    const request = await prisma.requests.create({
      data: req.body,
    });

    res.status(201).json({
      status: 201,
      message: "New request successfully submitted",
      data: request,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Server error'
    });
  }
}

export async function getRequests(req: Request, res: Response) {
  const requests = await prisma.requests.findMany();
  res.json({
    status: 200,
    message: "Requests successfully fetched",
    data: requests,
  });
}

export async function getRequestById(req: Request, res: Response) {
  const {requestId} = req.params
  const request = await prisma.requests.findFirst({
    where: {
      id: requestId,
    },
  });
  res.json({
    status: 200,
    message: "Request successfully fetched",
    data: request,
  });
}