# Eko Messenger
- [GitHub](https://github.com/eko-network/eko-messenger)

### Overview

Eko-messenger is a federated, decentralized, end-to-end encrypted messaging protocol built on top of ActivityPub. It enables interpolation between ActivityPub servers while ensuring message encryption using the Signal Protocol.

I wrote a specification document, which you can find [here](https://github.com/eko-network/eko-messenger/blob/main/SPECIFICATION.md) to read more about the technical details. The server will be written in Rust and the client application will be a Flutter app. This project is in its early stages and would love to hear feedback. The following describes the purpose and goals for our protocol.

### Purpose

E2E encrypted apps typically use a centralized server for storing and/or forwarding encrypted messages, like Signal and WhatsApp. We want to extend the standard protocol for federated applications (ActivityPub) to support end-to-end encryption.

eko-messenger is designed to:
- Reuse existing ActivityPub infrastructure for federation.
- Treat devices as first-class cryptographic endpoints.
- Avoid server-side message storage beyond transient delivery.
- Remain extensible to different server and client implementations.

### Goals
- Federation
    - Open protocol: any server implementing this specification may participate.
    - Uses ActivityPub for both C2S and S2S communication.
    - Compatible with existing ActivityPub federation semantics.
- Decentralization
    - Achieves decentralization through federation.
- End-to-End Encrypted
    - All message content is encrypted on device using the Signal Protocol.
