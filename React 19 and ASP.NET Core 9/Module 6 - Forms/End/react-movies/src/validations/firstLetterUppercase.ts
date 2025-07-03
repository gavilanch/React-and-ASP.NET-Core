export default function firstLetterUppercase(){
    return {
        name: 'first-letter-uppercase',
        message: 'The first letter should be uppercase',
        test: (value: string | undefined) => {
            if (value && value.length > 0){
                const firstLetter = value.substring(0, 1);
                return firstLetter === firstLetter.toUpperCase();
            }

            return true;
        }
    }
}