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

    npm install pindo-sms


    ### Yarn
    To install the PindoSMS SDK using yarn, run the following command:

    yarn add pindo-sms


    ## Usage

    ### Node.js / NestJS

    #### Setting Up

    const { PindoSMS } = require('pindo-sms');

    const token = process.env.PINDO_API_TOKEN;
    const pindoSMS = new PindoSMS(token);


    #### Methods and Examples

    ##### Sending an SMS

    const payload = {
        to: 'recipient_phone_number',
        text: 'Your message here',
        sender: 'YourSenderID',
    };

    pindoSMS.sendSMS(payload)
        .then(response => console.log(response))
        .catch(error => console.error(error));


    ##### Sending Bulk SMS

    const bulkPayload = {
        messages: [
            { to: 'recipient_phone_number1', text: 'Message 1', sender: 'YourSenderID' },
            { to: 'recipient_phone_number2', text: 'Message 2', sender: 'YourSenderID' },
        ],
    };

    pindoSMS.sendBulkSMS(bulkPayload)
        .then(response => console.log(response))
        .catch(error => console.error(error));


    ##### Creating a Sender ID

    const senderID = 'YourSenderID';
    const countries = ['Country1', 'Country2'];

    pindoSMS.createSenderID(senderID, countries)
        .then(response => console.log(response))
        .catch(error => console.error(error));


    ##### Getting Sender IDs

    pindoSMS.getSenderIDs()
        .then(response => console.log(response))
        .catch(error => console.error(error));


    ##### Getting User Details

    pindoSMS.getUserDetails()
        .then(response => console.log(response))
        .catch(error => console.error(error));


    ##### Getting Analytics

    const timezoneOffset = -120;
    const start = '2023-01-01';
    const timeframe = '30d';

    pindoSMS.getAnalytics(timezoneOffset, start, timeframe)
        .then(response => console.log(response))
        .catch(error => console.error(error));


    ### React / Next.js

    #### Setting Up

    import React, { useState, useEffect } from 'react';
    import { PindoSMS } from 'pindo-sms';

    const App = () => {
        const [pindoSMS, setPindoSMS] = useState(null);

        useEffect(() => {
            const token = process.env.REACT_APP_PINDO_API_TOKEN;
            setPindoSMS(new PindoSMS(token));
        }, []);

        // ... rest of your component
    };

    export default App;


    #### Methods and Examples

    ##### Sending an SMS

    const sendSMS = async () => {
        if (!pindoSMS) return;

        const payload = {
            to: 'recipient_phone_number',
            text: 'Your message here',
            sender: 'YourSenderID',
        };

        try {
            const response = await pindoSMS.sendSMS(payload);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };


    ##### Sending Bulk SMS

    const sendBulkSMS = async () => {
        if (!pindoSMS) return;

        const bulkPayload = {
            messages: [
                { to: 'recipient_phone_number1', text: 'Message 1', sender: 'YourSenderID' },
                { to: 'recipient_phone_number2', text: 'Message 2', sender: 'YourSenderID' },
            ],
        };

        try {
            const response = await pindoSMS.sendBulkSMS(bulkPayload);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };


    ##### Creating a Sender ID

    const createSenderID = async () => {
        if (!pindoSMS) return;

        const senderID = 'YourSenderID';
        const countries = ['Country1', 'Country2'];

        try {
            const response = await pindoSMS.createSenderID(senderID, countries);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };


    ##### Getting Sender IDs

    const getSenderIDs = async () => {
        if (!pindoSMS) return;

        try {
            const response = await pindoSMS.getSenderIDs();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };


    ##### Getting User Details

    const getUserDetails = async () => {
        if (!pindoSMS) return;

        try {
            const response = await pindoSMS.getUserDetails();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };


    ##### Getting Analytics

    const getAnalytics = async () => {
        if (!pindoSMS) return;

        const timezoneOffset = -120;
        const start = '2023-01-01';
        const timeframe = '30d';

        try {
            const response = await pindoSMS.getAnalytics(timezoneOffset, start, timeframe);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };


    ### Angular

    #### Setting Up

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

      // Methods will be implemented here
    }


    #### Methods and Examples

    ##### Sending an SMS

    sendSMS(to: string, text: string, sender: string) {
      const payload = { to, text, sender };
      return this.pindoSMS.sendSMS(payload).toPromise();
    }


    ##### Sending Bulk SMS

    sendBulkSMS(messages: Array<{ to: string; text: string; sender: string }>) {
      const bulkPayload = { messages };
      return this.pindoSMS.sendBulkSMS(bulkPayload).toPromise();
    }


    ##### Creating a Sender ID

    createSenderID(senderID: string, countries: string[]) {
      return this.pindoSMS.createSenderID(senderID, countries).toPromise();
    }


    ##### Getting Sender IDs

    getSenderIDs() {
      return this.pindoSMS.getSenderIDs().toPromise();
    }


    ##### Getting User Details

    getUserDetails() {
      return this.pindoSMS.getUserDetails().toPromise();
    }


    ##### Getting Analytics

    getAnalytics(timezoneOffset: number, start: string, timeframe: string) {
      return this.pindoSMS.getAnalytics(timezoneOffset, start, timeframe).toPromise();
    }


    ### Vue

    #### Setting Up

    // src/services/pindoSMS.js
    import { PindoSMS } from 'pindo-sms';

    const token = process.env.VUE_APP_PINDO_API_TOKEN;
    const pindoSMS = new PindoSMS(token);

    export default pindoSMS;

    // In your Vue component
    import pindoSMS from '@/services/pindoSMS';

    export default {
      name: 'YourComponent',
      data() {
        return {
          pindoSMS,
        };
      },
      // ... rest of your component
    };


    #### Methods and Examples

    ##### Sending an SMS

    methods: {
      async sendSMS() {
        const payload = {
          to: 'recipient_phone_number',
          text: 'Your message here',
          sender: 'YourSenderID',
        };

        try {
          const response = await this.pindoSMS.sendSMS(payload);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
    }


    ##### Sending Bulk SMS

    methods: {
      async sendBulkSMS() {
        const bulkPayload = {
          messages: [
            { to: 'recipient_phone_number1', text: 'Message 1', sender: 'YourSenderID' },
            { to: 'recipient_phone_number2', text: 'Message 2', sender: 'YourSenderID' },
          ],
        };

        try {
          const response = await this.pindoSMS.sendBulkSMS(bulkPayload);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
    }


    ##### Creating a Sender ID

    methods: {
      async createSenderID() {
        const senderID = 'YourSenderID';
        const countries = ['Country1', 'Country2'];

        try {
          const response = await this.pindoSMS.createSenderID(senderID, countries);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
    }


    ##### Getting Sender IDs

    methods: {
      async getSenderIDs() {
        try {
          const response = await this.pindoSMS.getSenderIDs();
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
    }


    ##### Getting User Details

    methods: {
      async getUserDetails() {
        try {
          const response = await this.pindoSMS.getUserDetails();
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
    }


    ##### Getting Analytics

    methods: {
      async getAnalytics() {
        const timezoneOffset = -120;
        const start = '2023-01-01';
        const timeframe = '30d';

        try {
          const response = await this.pindoSMS.getAnalytics(timezoneOffset, start, timeframe);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
    }


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

    To get an API token:
    1. Sign up at [Pindo](https://app.pindo.io/login)
    2. Retrieve your token from [Pindo Security Settings](https://app.pindo.io/account?tab=security)
    3. Store the token in your `.env` file as follows:

    PINDO_API_TOKEN=your_api_token


    ## Documentation
    For more detailed documentation, visit the [Pindo API documentation](https://api.pindo.io).

    ## Examples
    See the Usage section for examples of how to use the PindoSMS SDK in different frameworks.

    ## Troubleshooting
    If you encounter any issues, check the following:
    - Ensure your API token is correct.
    - Verify the payload structure matches the Pindo API requirements.
    - Check network connectivity.

    ## Contributors
    - [Your Name](https://github.com/yourusername) - Initial work

    ## License
    This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
