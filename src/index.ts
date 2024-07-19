import { BulkSMSPayload, SMSPayload } from './types/interfaces/PindoInterface.interface';

class PindoSMS {
    private apiUrl: string;
    private token: string;

    constructor(token: string) {
        this.apiUrl = 'https://api.pindo.io/v1/sms/';
        this.token = token;
    }

    async sendSMS(payload: SMSPayload): Promise<any> {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error sending SMS');
            }

            return await response.json();
        } catch (error) {
            throw new Error((error as Error).message || 'Error sending SMS');
        }
    }

    async sendBulkSMS(payload: BulkSMSPayload): Promise<any> {
        try {
            const response = await fetch(`${this.apiUrl}bulk`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error sending bulk SMS');
            }

            return await response.json();
        } catch (error) {
            throw new Error((error as Error).message || 'Error sending bulk SMS');
        }
    }
}

export { PindoSMS, SMSPayload, BulkSMSPayload };
