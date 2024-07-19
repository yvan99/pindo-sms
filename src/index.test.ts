import { PindoSMS, SMSPayload, BulkSMSPayload } from './index';

describe('PindoSMS', () => {
    let pindoSMS: PindoSMS;

    beforeAll(() => {
        pindoSMS = new PindoSMS('test-token');
    });

    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should send a single SMS', async () => {
        const payload: SMSPayload = { to: '+250781234567', text: 'Hello from Pindo', sender: 'Pindo' };
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ message: 'SMS sent successfully' }),
        });

        const response = await pindoSMS.sendSMS(payload);
        expect(response.message).toBe('SMS sent successfully');
        expect(global.fetch).toHaveBeenCalledWith('https://api.pindo.io/v1/sms/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer test-token`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
    });

    it('should send bulk SMS', async () => {
        const payload: BulkSMSPayload = {
            recipients: [{ phonenumber: '+250781234567', name: 'Remy Muhire' }],
            text: 'Hello @contact.name, Welcome to Pindo',
            sender: 'Pindo',
        };
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ message: 'Bulk SMS sent successfully' }),
        });

        const response = await pindoSMS.sendBulkSMS(payload);
        expect(response.message).toBe('Bulk SMS sent successfully');
        expect(global.fetch).toHaveBeenCalledWith('https://api.pindo.io/v1/sms/bulk', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer test-token`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
    });
});
