export type DonationMatching = {
  "address": "3Q38U8VtXJkARsEZXAgbQHQoNmKvgs3Jr3ji6jbGULNN",
  "metadata": {
    "name": "donationMatching",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor",
   "address": "8H4EKufdvBc1J4QvhzXztmYzuC2J1f95pfuFnDtRF8uB",
    
  },
  "instructions": [
    {
      "name": "donate",
      "discriminator": [
        121,
        186,
        218,
        211,
        73,
        70,
        196,
        180
      ],
      "accounts": [
        {
          "name": "campaign",
          "writable": true
        },
        {
          "name": "donor",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "campaign",
          "writable": true,
          "signer": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "campaignName",
          "type": "string"
        }
      ]
    },
    {
      "name": "matchDonation",
      "discriminator": [
        150,
        71,
        129,
        240,
        42,
        227,
        0,
        110
      ],
      "accounts": [
        {
          "name": "campaign",
          "writable": true
        },
        {
          "name": "matcher",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "campaign",
      "discriminator": [
        50,
        40,
        49,
        11,
        157,
        220,
        229,
        192
      ]
    }
  ],
  "types": [
    {
      "name": "campaign",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "totalDonations",
            "type": "u64"
          },
          {
            "name": "matchedAmount",
            "type": "u64"
          }
        ]
      }
    }
  ],
   
};
export const IDL: DonationMatching = {
  "address": "3Q38U8VtXJkARsEZXAgbQHQoNmKvgs3Jr3ji6jbGULNN",
  "metadata": {
    "name": "donationMatching",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor",
   "address": "8H4EKufdvBc1J4QvhzXztmYzuC2J1f95pfuFnDtRF8uB",
    
  },
  "instructions": [
    {
      "name": "donate",
      "discriminator": [
        121,
        186,
        218,
        211,
        73,
        70,
        196,
        180
      ],
      "accounts": [
        {
          "name": "campaign",
          "writable": true
        },
        {
          "name": "donor",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "campaign",
          "writable": true,
          "signer": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "campaignName",
          "type": "string"
        }
      ]
    },
    {
      "name": "matchDonation",
      "discriminator": [
        150,
        71,
        129,
        240,
        42,
        227,
        0,
        110
      ],
      "accounts": [
        {
          "name": "campaign",
          "writable": true
        },
        {
          "name": "matcher",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "campaign",
      "discriminator": [
        50,
        40,
        49,
        11,
        157,
        220,
        229,
        192
      ]
    }
  ],
  "types": [
    {
      "name": "campaign",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "totalDonations",
            "type": "u64"
          },
          {
            "name": "matchedAmount",
            "type": "u64"
          }
        ]
      }
    }
  ],
   
};