export interface Card{
    status: string;
    patient_name: string;
    id: number;
    created_date: string;
    arrhythmias: Array<string>;
}