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

    it('should create sender ID', async () => {
        const senderID = 'ematerw';
        const countries = ['RW'];
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ message: 'Sender ID created successfully' }),
        });

        const response = await pindoSMS.createSenderID(senderID, countries);
        expect(response.message).toBe('Sender ID created successfully');
        expect(global.fetch).toHaveBeenCalledWith('https://api.pindo.io/sender_ids', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer test-token`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sender_id: senderID, countries }),
        });
    });

    it('should get sender IDs', async () => {
        const name = 'ematerw';
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ data: { sender_ids: [{ name }] } }),
        });

        const response = await pindoSMS.getSenderIDs(name);
        expect(response.data.sender_ids[0].name).toBe(name);
        expect(global.fetch).toHaveBeenCalledWith('https://api.pindo.io/sender_ids/?name=ematerw', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer test-token`,
                'Content-Type': 'application/json',
            },
        });
    });

    it('should get user details', async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ data: { orgs: [{ name: 'ishimweyvan90@gmail.com' }] } }),
        });

        const response = await pindoSMS.getUserDetails();
        expect(response.data.orgs[0].name).toBe('ishimweyvan90@gmail.com');
        expect(global.fetch).toHaveBeenCalledWith('https://api.pindo.io/orgs/self/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer test-token`,
                'Content-Type': 'application/json',
            },
        });
    });

    it('should get analytics', async () => {
        const timezoneOffset = -120;
        const start = '2024-07-20';
        const timeframe = 'all';
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ data: { '00:00': { sms_count: 0 } } }),
        });

        const response = await pindoSMS.getAnalytics(timezoneOffset, start, timeframe);
        expect(response.data['00:00'].sms_count).toBe(0);
        expect(global.fetch).toHaveBeenCalledWith(
            `https://api.pindo.io/v2/sms/analytics?timezone_offset=${timezoneOffset}&start=${start}&timeframe=${timeframe}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer test-token`,
                    'Content-Type': 'application/json',
                },
            }
        );
    });
});
