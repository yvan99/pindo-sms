export interface SMSPayload {
    to: string;
    text: string;
    sender: string;
}

export interface BulkSMSPayload {
    recipients: { phonenumber: string; name: string }[];
    text: string;
    sender: string;
}
