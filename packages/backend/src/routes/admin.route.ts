import { Router } from 'express';
import {
  deleteRequestById,
  patchRequestStatusByID
} from '../controllers/admin.controller';

// Requests layout Route
const adminRoute = Router();

adminRoute.delete('/:requestId', deleteRequestById)

adminRoute.patch('/:requestId', patchRequestStatusByID)

export default adminRoute;