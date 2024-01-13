import { Request, Response, NextFunction } from 'express';
import HttpExeption from '../exeptions/http-exeption';
import { HttpStatuses } from '../enums/http-statuses.enum';

const exeptionsFilter = (
    error: HttpExeption,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = error.status || HttpStatuses.INTERNAL_SERVER_ERROR;
    const message = error.message || 'Something went wrong';
    res.status(status).send({ status, message });
};

export default exeptionsFilter;
