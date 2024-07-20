
# PindoSMS SDK

## Introduction
The PindoSMS SDK allows you to easily integrate the Pindo SMS API into your JavaScript applications. This SDK provides methods to send SMS messages, manage sender IDs, retrieve user details, and get analytics data.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Installation

### NPM
To install the PindoSMS SDK using npm, run the following command:
```bash
npm install pindo-sms
```

### Yarn
To install the PindoSMS SDK using yarn, run the following command:
```bash
yarn add pindo-sms
```

## Usage

### Setting Up

#### Node.js
```javascript
const { PindoSMS } = require('pindo-sms');

const token = 'YOUR_API_TOKEN';
const pindoSMS = new PindoSMS(token);
```

#### ES6 Modules
```javascript
import { PindoSMS } from 'pindo-sms';

const token = 'YOUR_API_TOKEN';
const pindoSMS = new PindoSMS(token);
```

#### React
In a React project, you can set up PindoSMS in a similar way to Node.js or ES6 Modules.

```javascript
import React from 'react';
import { PindoSMS } from 'pindo-sms';

const App = () => {
    const token = 'YOUR_API_TOKEN';
    const pindoSMS = new PindoSMS(token);

    // Use pindoSMS methods as needed

    return <div>My React App</div>;
};

export default App;
```

#### Angular
In an Angular project, you can set up PindoSMS in a service.

```typescript
import { Injectable } from '@angular/core';
import { PindoSMS } from 'pindo-sms';

@Injectable({
  providedIn: 'root',
})
export class PindoSMSService {
  private pindoSMS: PindoSMS;

  constructor() {
    const token = 'YOUR_API_TOKEN';
    this.pindoSMS = new PindoSMS(token);
  }

  // Use pindoSMS methods as needed
}
```

#### Vue
In a Vue project, you can set up PindoSMS in a component or a service.

```javascript
import { PindoSMS } from 'pindo-sms';

export default {
  name: 'App',
  data() {
    return {
      pindoSMS: new PindoSMS('YOUR_API_TOKEN'),
    };
  },
};
```

### Methods

#### Node.js
- **send sms method**
```javascript
const payload = {
    to: 'recipient_phone_number',
    text: 'Your message here',
    sender: 'YourSenderID',
};

pindoSMS.sendSMS(payload)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

- **send bulk sms**
```javascript
const bulkPayload = {
    messages: [
        { to: 'recipient_phone_number1', text: 'Message 1', sender: 'YourSenderID' },
        { to: 'recipient_phone_number2', text: 'Message 2', sender: 'YourSenderID' },
        // Add more messages as needed
    ],
};

pindoSMS.sendBulkSMS(bulkPayload)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

- **create senderId**
```javascript
const senderID = 'YourSenderID';
const countries = ['Country1', 'Country2'];

pindoSMS.createSenderID(senderID, countries)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

#### VueJS
- **send sms method**
```javascript
const payload = {
    to: 'recipient_phone_number',
    text: 'Your message here',
    sender: 'YourSenderID',
};

this.pindoSMS.sendSMS(payload)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

- **send bulk sms**
```javascript
const bulkPayload = {
    messages: [
        { to: 'recipient_phone_number1', text: 'Message 1', sender: 'YourSenderID' },
        { to: 'recipient_phone_number2', text: 'Message 2', sender: 'YourSenderID' },
        // Add more messages as needed
    ],
};

this.pindoSMS.sendBulkSMS(bulkPayload)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

- **create senderId**
```javascript
const senderID = 'YourSenderID';
const countries = ['Country1', 'Country2'];

this.pindoSMS.createSenderID(senderID, countries)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

## Features
- Send SMS
- Send Bulk SMS
- Create and manage sender IDs
- Retrieve user details
- Retrieve SMS analytics

## Dependencies
- `node-fetch`: Used for making HTTP requests

## Configuration
You need an API token from Pindo to use this SDK. You can set the token and base URL during the initialization of the `PindoSMS` class.

## Documentation
For more detailed documentation, visit the [Pindo API documentation](https://api.pindo.io).

## Examples
See the [Usage](#usage) section for examples of how to use the PindoSMS SDK.

## Troubleshooting
If you encounter any issues, check the following:
- Ensure your API token is correct.
- Verify the payload structure matches the Pindo API requirements.
- Check network connectivity.

## Contributors
- [Your Name](https://github.com/yourusername) - Initial work

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
