import { Idl, IdlAccounts, Program } from "@coral-xyz/anchor";
// import { IDL } from "@coral-xyz/anchor/dist/cjs/native/system";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { Counter } from "./idl";
import idl from './counter.json';
const programId = new PublicKey("B2Sj5CsvGJvYEVUgF1ZBnWsBzWuHRQLrgMSJDjBU5hWA");
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
 
// Initialize the program interface with the IDL, program ID, and connection.
// This setup allows us to interact with the on-chain program using the defined interface.
export const program = new Program(idl as Idl, programId, {
  connection,
}) as Program<Counter>;
 
export const [counterPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from("counter")],
  program.programId,
);
 
// This is just a TypeScript type for the Counter data structure based on the IDL
// We need this so TypeScript doesn't yell at us
export type CounterData = IdlAccounts<Counter>["counter"];