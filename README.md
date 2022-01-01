# Signer and Protocol Agnostic Social Media (SPASM)

## Terminology

an `event` - a message, action, or an event that has to be signed with a private key before being propagated over the network.

## Overview

Essentially, all `events` on all decentralized social media protocols are data chunks structured in a JSON object that has to be signed with a private key, which might or might not be associated with an existent blockchain.

The JSON object structure varies in different protocols, but all events contain very similar information on whether the events are a type of `reply`, `post`, `metadata`, what is the `id`, `target`, `parent`, etc.

In the ideal world different communities would have came up with a capsulated universal messaging format, i.e. agreed on how the JSON object should look like. Unfortunately, achieving consensus between developers of different protocols in the real world is very unlikely, so it makes sense to discuss other ways to increase interoperability between protocols.

## Necessary fields

The community can agree on the most necessary fields that must be added to all JSON objects that wish to achieve interoperability.

This documentation is work in progress, so the necessary fields might change.

### MIT license

At the moment of writing, the vast majority of messaging protocols don't add a license field to events, which can make relays, clients, and nodes liable for distributing the copyright-protected content once the regulatory environment will change from friendly to hostile.

The easiest solution for this problem is to add a `"license":"MIT"` field to each signed event.

Example:

```
"license":"MIT"
```

### Protocol version

Another proposed necessary field is a protocol version to make sure that clients, nodes, and relays can easily handle events in case if there will be a necessity to implement changes that don't provide backward compatibility.

Example:

```
"version":"dmp_v0.1.0"
```

### Metadata

Adding an optional `metadata` field to the signed JSON object will give developers an opportunity to add any custom data that the community didn't think about when achieving consensus on the structure of a JSON object.
