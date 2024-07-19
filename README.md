# Pindo SMS

A lightweight npm package to easily send SMS messages using the Pindo API. This package supports JavaScript and TypeScript frameworks such as Node.js, NestJS, Next.js, React, and more.

## Installation

Install the package using npm:

``npm install pindo-sms``

## Usage

### Node.js

```
import { PindoSMS, SMSPayload } from 'pindo-sms';

const pindoSMS = new PindoSMS('your-api-token');

const payload = {
  to: '+250781234567',
  text: 'Hello from Pindo',
  sender: 'Pindo',
};

pindoSMS.sendSMS(payload)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### Reactjs

```
import React, { useState } from 'react';

const SendSMS: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = async () => {
    try {
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to: phone, text: message }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('SMS sent successfully');
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <button onClick={handleSend}>Send SMS</button>
      <p>{status}</p>
    </div>
  );
};

export default SendSMS;
```

### Next.js

```
import { PindoSMS, SMSPayload } from 'pindo-sms';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const pindoSMS = new PindoSMS('your-api-token');

  const payload: SMSPayload = {
    to: '+250781234567',
    text: 'Hello from Pindo',
    sender: 'Pindo',
  };

  try {
    const response = await pindoSMS.sendSMS(payload);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

### NestJS

```
import { Injectable } from '@nestjs/common';
import { PindoSMS, SMSPayload } from 'pindo-sms';

@Injectable()
export class SmsService {
  private pindoSMS: PindoSMS;

  constructor() {
    this.pindoSMS = new PindoSMS('your-api-token');
  }

  async sendSMS(to: string, text: string) {
    const payload: SMSPayload = {
      to,
      text,
      sender: 'Pindo',
    };

    return this.pindoSMS.sendSMS(payload);
  }
}
```

## API Reference

### `new PindoSMS(apiKey: string)`

Creates a new instance of the PindoSMS client.

### `sendSMS(options: SendSMSOptions): Promise<SendSMSResponse>`

Sends an SMS message.

#### Options

- `to: string` - The recipient's phone number (including country code)
- `text: string` - The content of the SMS message

#### Response

Returns a promise that resolves with the API response.

## Error Handling

The package throws errors for invalid inputs or API failures. Always wrap your API calls in try-catch blocks or use `.catch()` for proper error handling.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
