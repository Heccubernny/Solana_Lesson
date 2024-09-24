import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { CounterData, counterPDA, program } from "../anchor/setup";

export default function CounterState() {
    const { connection } = useConnection();
    const [counterData, setCounterData] = useState<CounterData | null>(null);

    useEffect(() => {

        const fetchCounterData = async () => {
            try {
                // Fetch initial account data
                const data = await program.account.counter.fetch(counterPDA);
                setCounterData(data);
            } catch (error) {
                console.error("Error fetching counter data: ", error);
            };

            fetchCounterData();

            // subscribe to account change

            const subscriptionId = connection.onAccountChange(
                counterPDA,

                accountInfo => {
                    try {
                        const decodedData = program.coder.accounts.decode("counter", accountInfo.data,);

                        setCounterData(decodedData);

                    } catch (error) {
                        console.error("Error decoding account data: ", error);
                    }
                }
            );

            return () => {
                // Unsubscribe from account change
                connection.removeAccountChangeListener(subscriptionId);
            }
        }

    }, [program, counterPDA, connection])

    return <p className="text-lg"> Count: {counterData?.count?.toString()}</p>
}