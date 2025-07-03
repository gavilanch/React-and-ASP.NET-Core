export default function formatDate(dateISO: string){
    // dateTtime => [date, time]
    return new Date(dateISO).toISOString().split('T')[0];
}