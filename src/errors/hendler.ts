import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
    [key: string]: string[ ];
}

const errorHandler: ErrorRequestHandler = ( error, request, response, next) => {
    if (error instanceof ValidationError) {
        let errors: ValidationErrors = { };

        error.inner.forEach( err => {
            errors[err.path] = err.errors;
        });

        return response.status(400).json({ message: 'Validation fails', errors});
    }
    console.error(error);
//assim meu cliente nao fica com uma msg que nao entende na tela
    return response.status(500).json( { message: 'Internal server error' } );

};

export default errorHandler;