# README.md
![Alt text](https://github.com/NatX223/MAIL-AUTH/blob/main/Screenshot%202023-07-02%20at%2009.30.44.jpeg)
# Mail-Auth

  

## Project Description

The Mail-Auth System is an innovative application designed to revolutionize the user authentication and account creation process within the NEAR blockchain ecosystem. Built with a focus on user experience, security, and streamlined integration, it offers a seamless sign-in process for users using Google Authentication and eliminates the need for wallet creation to access web3 applications.

The primary goal of the Mail-Auth System is to provide a secure, efficient, and user-friendly solution for users to authenticate and interact with smart contracts on the NEAR blockchain. By integrating with Google Auth API and leveraging the NEAR blockchain, the Mail-Auth API simplifies the onboarding process, enhances security, and offers a range of benefits to users and developers alike.

For users, the Mail-Auth System offers a simplified sign-in process through Google Authentication. Users can seamlessly log in using their Google credentials, eliminating the need for separate account creation and password management. The system verifies authentication tokens, creates accounts if needed, and grants users access keys for seamless interaction with smart contracts on the NEAR blockchain.

The Mail-Auth API ensures a secure environment by leveraging Google's OAuth 2.0 authentication system, adding an extra layer of protection to user accounts. Two-factor authentication options further enhance security, ensuring the integrity and safety of user information within the NEAR ecosystem.

Additionally, the Mail-Auth System simplifies the transaction process by handling gas fee coverage through the implementation of NEP-366, a meta-transaction standard. Users can cover gas fees using tokens or stablecoins, eliminating the need for dedicated NEAR tokens and providing a more seamless user experience.

From a developer's perspective, the Mail-Auth API offers straightforward integration options for web browsers or server-based applications. It leverages Vite-React and Twinlind CSS, providing a modern and developer-friendly frontend framework. Developers can easily integrate the Mail-Auth System into their applications, leveraging its features to enhance user onboarding, security, and interaction with smart contracts.

The Mail-Auth System's architecture and tech stack ensure scalability and performance optimization. Load balancing, high availability, caching, optimized database queries, horizontal scaling, and auto-scaling capabilities are implemented to handle increased traffic and ensure a smooth user experience even during peak usage.

Looking ahead, the Mail-Auth System has a roadmap for continuous improvement. The project envisions multiple phases and milestones, including enhancing user experience and security, optimizing scalability and performance, and introducing advanced features and integrations such as social media integration and multi-platform support.

By providing a secure, efficient, and user-friendly authentication and account creation process, the Mail-Auth System contributes to the growth and adoption of the NEAR blockchain ecosystem. It encourages user participation, simplifies developer integration, and promotes the usage of NEAR-based applications and smart contracts, fostering an ecosystem that is accessible, inclusive, and secure for all users.

## Deployed App


Public URL: [MAIL-AUTH](https://boisterous-alfajores-5fbe88.netlify.app/)




  
---
The following is a sequence diagram outlining the contract interactions:

```

sequenceDiagram

User          Application          Mail-Auth API         NEAR Blockchain
  |                 |                        |                          |
  |    Sign-in      |                        |                          |
  |--------------->|                        |                          |
  |                 |                        |                          |
  |                 |  Authenticate User    |                          |
  |                 |---------------------->|                          |
  |                 |                        |                          |
  |                 |    Verify Tokens       |                          |
  |                 |---------------------->|                          |
  |                 |                        |                          |
  |                 |    Check Account       |                          |
  |                 |---------------------->|                          |
  |                 |                        |                          |
  |                 |                        |       Create Account     |
  |                 |                        |----------------------->|
  |                 |                        |                          |
  |                 |                        |      Generate Access Keys |
  |                 |                        |----------------------->|
  |                 |                        |                          |
  |                 |     Access Granted     |                          |
  |                 |<-----------------------|                          |
  |                 |                        |                          |
  |   Interact      |                        |                          |
  |   with Smart    |                        |                          |
  |   Contracts     |                        |                          |
  |--------------->|                        |                          |
  |                 |                        |                          |
  |                 |   Verify Tokens        |                          |
  |                 |---------------------->|                          |
  |                 |                        |                          |
  |                 |   Execute Function     |                          |
  |                 |---------------------->|                          |
  |                 |                        |                          |
  |                 |                        |   Process Transaction   |
  |                 |                        |----------------------->|
  |                 |                        |                          |
  |                 |                        |    Gas Fee Coverage     |
  |                 |                        |----------------------->|
  |                 |                        |                          |
  |                 |                        |    Function Executed    |
  |                 |                        |<-----------------------|
  |                 |                        |                          |
  |                 |                        |                          |



```
---
    



## Project Structure
#### Frontend:
```
├── frontend
│ ├── node_modules
│ ├── package-lock.json
│ ├── package.json
│ ├── postcss.config.js
│ ├── public
│ ├── src
│ ├── tailwind.config.js
│ └── tsconfig.json
├── hardhat.config.ts
|── node_modules
├── package-lock.json
├── package.json
```
## Local Setup
Project was built and tested against:
* Node v19.7.0
* Npm v9.5.0

	
#### **Frontend:**
 - Cd to the **frontend** directory.
 - Run ``npm install``
 - Once install is complete:
	 * To start, run: 
	 ``npm run start``
- App will be accessible via http://localhost:3000/

## Team:

Built for the [Web3 BUILD Hackathon Hosted in Partnership With NEAR Horizon](https://web3-build-hackathon.devpost.com/) by: [Sinachi](https://twitter.com/NatRonin) and [Mercy Boma Nap-Nkari](https://twitter.com/naps_thelma) 


