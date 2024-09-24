import { AnchorProvider, BN, Idl, Program, web3 } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import idl from "./donation_matching.json";

const programId = new PublicKey('8H4EKufdvBc1J4QvhzXztmYzuC2J1f95pfuFnDtRF8uB');
const provider = AnchorProvider.env();
const program = new Program(idl as Idl, provider);

export const createCampaign = async (campaignName: unknown) => {
    const campaign = web3.Keypair.generate();
    const tx = await program.methods.initialize(campaignName, {
        accounts: {
            campaign: campaign.publicKey,
            user: provider.wallet.publicKey,
            systemProgram: web3.SystemProgram.programId,
        },
        signers: [campaign],
    });
    console.log("Campaign Created with TX:", tx);
    return campaign.publicKey;
}

export const donate = async (campaignAddress: any, amount: string | number | number[] | BN | Uint8Array | Buffer) => {
    const tx = await program.methods.donate(new BN(amount), {
        accounts: {
            campaign: campaignAddress,
            donor: provider.wallet.publicKey,
        },
    });

    console.log("Donation made with TX:", tx);
};

export const matchDonation = async (campaignAddress: any, amount: string | number | number[] | BN | Uint8Array | Buffer) => {
    const tx = await program.methods.matchDonation(new BN(amount), {
        accounts: {
            campaign: campaignAddress,
            matcher: provider.wallet.publicKey,
        },
    });

    console.log("Donation matched with TX:", tx);
};