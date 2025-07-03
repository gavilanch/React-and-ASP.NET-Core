export default function dateMustNotBeInTheFuture(){
    return {
        name: 'date-is-not-in-the-future',
        message: 'The date must not be in the future',
        test: (value: string | undefined) => {
            if (!value) return true;
            const date = new Date(value);
            const today = new Date();
            return date <= today;
        }
    }
}