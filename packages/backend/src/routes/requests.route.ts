import { Router } from 'express';
import {
  createRequest,
  getRequests,
  getRequestById
} from '../controllers/requests.controller';

// Requests layout Route
const requestsRoute = Router();

requestsRoute.post('', createRequest);
requestsRoute.get('', getRequests)
requestsRoute.get('/:requestId', getRequestById)


export default requestsRoute;