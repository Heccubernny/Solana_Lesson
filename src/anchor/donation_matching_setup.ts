import * as anchor from "@coral-xyz/anchor";
import idl from './donation_matching.json';
const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const programId = new anchor.web3.PublicKey('8H4EKufdvBc1J4QvhzXztmYzuC2J1f95pfuFnDtRF8uB')
// const idl = await anchor.Program.fetchIdl(programId, provider);
const program = new anchor.Program(idl, provider);

async function createCampaign(campaignName: unknown) {
    const campaign = anchor.web3.Keypair.generate();
    await program.methods.initialize(campaignName, {
        accounts: {
            campaign: campaign.publicKey,
            user: provider.wallet.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
            // rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        },
        signers: [campaign],
    });
}

async function donate(campaignAddress: any, amount: string | number | anchor.BN | Uint8Array | number[] | Buffer) {
    await program.methods.donate(new anchor.BN(amount), {
        accounts: {
            campaign: campaignAddress,
            donor: provider.wallet.publicKey,
        },
    });
}

async function matchDonation(campaignAdress: any, amount: string | number | anchor.BN | Uint8Array | number[] | Buffer) {
    await program.methods.matchDonation(new anchor.BN(amount), {
        accounts: {
            campaign: campaignAdress,
            matcher: provider.wallet.publicKey,
        },
    });
}