export type Platform = "EMAIL" | "INSTAGRAM" | "PHONE";

export type Lead = {
    id: string;
    companyName: string;
    note?: string | null;

    primaryContactValue?: string | null;
    primaryPlatform?: Platform | null;

    secondaryContactValue?: string | null;
    secondaryPlatform?: Platform | null;

    website?: string | null;

    stage: string;
    status: string;
    verdict?: string | null;

    nextActionAt?:  Date | null;

    primaryContactAt?: Date | null;
    primaryFollowUpAt?: Date | null;
    secondaryContactAt?:  Date | null;
    secondaryFollowUpAt?: Date | null;

    createdAt: string | Date;
};