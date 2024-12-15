import { Transactions } from "./transactions";

export interface Users{
_id: string;
name:string;
balance: number;
userTransactionId: Transactions[]
}
