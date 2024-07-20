import { BulkSMSPayload, SMSPayload } from './types/interfaces/PindoInterface.interface';

class PindoSMS {
    private apiUrl: string;
    private token: string;

    constructor(token: string, baseUrl: string = 'https://api.pindo.io', version: string = 'v1') {
        this.apiUrl = `${baseUrl}/${version}/sms/`;
        this.token = token;
    }

    private async request(endpoint: string, method: string, body?: any): Promise<any> {
        const response = await fetch(endpoint, {
            method,
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'API request error');
        }

        return await response.json();
    }

    async sendSMS(payload: SMSPayload): Promise<any> {
        return this.request(this.apiUrl, 'POST', payload);
    }

    async sendBulkSMS(payload: BulkSMSPayload): Promise<any> {
        return this.request(`${this.apiUrl}bulk`, 'POST', payload);
    }

    async createSenderID(senderID: string, countries: string[]): Promise<any> {
        const payload = { sender_id: senderID, countries };
        return this.request('https://api.pindo.io/sender_ids', 'POST', payload);
    }

    async getSenderIDs(name: string = ''): Promise<any> {
        const url = `https://api.pindo.io/sender_ids/?name=${name}`;
        return this.request(url, 'GET');
    }

    async getUserDetails(): Promise<any> {
        const url = 'https://api.pindo.io/orgs/self/';
        return this.request(url, 'GET');
    }

    async getAnalytics(timezoneOffset: number, start: string, timeframe: string): Promise<any> {
        const url = `https://api.pindo.io/v2/sms/analytics?timezone_offset=${timezoneOffset}&start=${start}&timeframe=${timeframe}`;
        return this.request(url, 'GET');
    }
}

export { PindoSMS, SMSPayload, BulkSMSPayload };
