import { useState } from "react"
import { createCampaign, donate, matchDonation } from "../anchor/solanaInteractions";

const DonationComponent = () => {

    const [campaignName, setCampaignName] = useState<string>("");
    const [campaignAddress, setCampaignAddress] = useState<string>("");
    const [donationAmount, setDonationAmount] = useState<string>("");

    const handleCrateCampaign = async () => {
        const address = await createCampaign(campaignName);
        setCampaignAddress(address.toString());
    }

    const handleDonate = async () => {
        await donate(campaignAddress, donationAmount);
    }

    const handleMatchDonation = async () => {
        await matchDonation(campaignAddress, donationAmount);
    }

    return (
        <div>   
            <h1>Donation Matching Platform</h1>
            <input type="text" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} placeholder="Campaign Name" />
            <button onClick={handleCrateCampaign}>Create Campaign</button>
        
            <h2> Campaign Address: {campaignAddress} </h2>

            <div>
                <input type="text" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} placeholder="Donation Amount" />
                <button onClick={handleDonate}>Donate</button>
                <button onClick={handleMatchDonation}>Match Donation</button>
            </div>
        </div>

    )
}
export default DonationComponent;