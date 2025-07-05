## Features

#### Support for different keys and protocols

Spasm currently supports the following private keys and messaging protocols:
- Ethereum-signed Spasm events
- Ethereum-signed DMP events
- Nostr-signed Nostr events
- Unsigned web2 posts (e.g., RSS items)

#### Supported networks

Spasm-powered forum DegenRocket supports the following networks:
- Spasm network
- Nostr network

#### Multi-signing

In 2024, Spasm V2 went live, enabling groundbreaking multi-signing, which allowed users to simultaneously sign the same message with multiple private keys using different protocols and broadcast the message to different networks.

A multi-signed message has multiple authors (public keys), which enables integration of features from different ecosystems. For example, non-unique usernames can be fetched from Nostr meta events (kind 0), while unique usernames can be fetched from blockchain-based NFT-powered naming services like ENS. Different social graph solutions can be plugged from various ecosystem.

#### Federation

Spasm instances are not syncing all the messages from all other instances. Instead, the system is very flexible so an admin of each instance can specify which messages should be synced from which instances at which time intervals. This approach helps preserve the freedom of association and solve scalability issues. It also helps against SPAM.

Think about Spasm-powered forums as subreddits. Some of them might share a lot of similar content, while others might have completely different content.
