import type { AxiosError } from "axios";

export default function extractErrors(obj: AxiosError): string[]{
    const data = obj.response?.data as ErrorResponse;
    const err = data.errors;
    let messagesWithErrors: string[] = [];

    for (const field in err){
        // Name: [error1, error2] => [Name: error1, Name: error2]
        const messagesWithFields = err[field].map(errorMessage => `${field}: ${errorMessage}`);
        messagesWithErrors = [...messagesWithErrors, ...messagesWithFields];
    }

    return messagesWithErrors;
}

interface ErrorResponse {
    errors: {
        [field: string]: string[]
    }
}