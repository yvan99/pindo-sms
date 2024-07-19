import { BulkSMSPayload, SMSPayload } from './types/interfaces/PindoInterface.interface';
declare class PindoSMS {
    private apiUrl;
    private token;
    constructor(token: string);
    sendSMS(payload: SMSPayload): Promise<any>;
    sendBulkSMS(payload: BulkSMSPayload): Promise<any>;
}
export { PindoSMS, SMSPayload, BulkSMSPayload };
