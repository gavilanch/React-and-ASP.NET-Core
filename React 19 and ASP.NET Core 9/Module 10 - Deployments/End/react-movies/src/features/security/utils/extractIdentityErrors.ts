import type { AxiosError } from "axios";

export default function extractIdentityErrors(obj: AxiosError): string[]{
    const data = obj.response?.data as ErrorResponse[];
    const errorMessages: string[] = data.map(error => error.description);
    return errorMessages;
}

interface ErrorResponse {
    code: string;
    description: string;
}