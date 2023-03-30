# Signer and Protocol Agnostic Social Media (SPASM)

# Table of Contents
1. [Terminology](#terminology)
1. [Overview](#overview)
1. [Examples](#examples)
1. [Necessary fields](#necessary-fields)
    * [MIT license](#mit-license)
    * [Protocol version](#protocol-version)
    * [Metadata](#metadata)
1. [Signer-agnostic solution](#signer-agnostic-solution)
1. [Protocol-agnostic solution](#protocol-agnostic-solution)
1. [SPASM library](#spasm-library)
1. [Feedback](#feedback)

## Terminology

an `event` - a message, action, or an event that has to be signed with a private key before being propagated over the network.

## Overview

Essentially, all `events` on all decentralized social media protocols are data chunks structured in a JSON object that has to be signed with a private key, which might or might not be associated with an existent blockchain.

The JSON object structure varies in different protocols, but all events contain very similar information on whether the events are a type of `reply`, `post`, `metadata`, what is the `id`, `target`, `parent`, etc.

In the ideal world different communities would have came up with a capsulated universal messaging format, i.e. agreed on how the JSON object should look like. Unfortunately, achieving consensus between developers of different protocols in the real world is very unlikely, so it makes sense to discuss other ways to increase interoperability between protocols.

[<- back to table of contents](#table-of-contents)

---

## Examples

DMP - Degen Messaging Protocol:
[degenrocket.space](https://degenrocket.space)

```
{
    "version":"dmp_v0.1.0",
    "time":"2023-03-28T18:27:28.318Z",
    "action":"react",
    "target":"https://thedefiant.io/crypto-takedown-explained/",
    "text":"important",
    "license":"MIT"
}
```

Nostr - Notes and Other Stuff Transmitted by Relays:
[satellite.earth](https://satellite.earth), [iris.to](https://iris.to/), [coracle.social](https://coracle.social)

```
{
    "id":"faea2a5dbe12c877c1201e91ec909e3161a1ba8714fdca4d3077f6d4b0780191",
    "content":"https://media.satellite.earth/a19a70552cc801415a6071993c04b3ab21572438\n\nMy video captions, whatever",
    "created_at":1679552101,
    "kind":1,
    "pubkey":"fbd992dbccdd4186f4ef25b7d72ea47387a59227493f8569b17963afae4e4d33",
    "sig":"10c0d634ea0b9ae085205c3951367da784268a0cdf4a18b969aba7c06b1a59abf96b7f5f4e2d3791389dff71ff5527c33e3405e8decad9b3e4419406124dc46a",
    "tags":[
        [
            "e", "cb657467b824fe8b0f4a7d7db6380e30340b18c03ab14e56849d59c85435628a"
        ]
    ]
}
```

SSB - Secure Scuttlebutt:
[scuttlebot.io](https://scuttlebot.io/)

```
{
  "previous": "%26AC+gU0t74jRGVeDY013cVghlZRc0nfUAnMnutGGHM=.sha256",
  "author": "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519",
  "sequence": 216,
  "timestamp": 1442590513298,
  "hash": "sha256",
  "content": {
    "type": "vote",
    "vote": {
      "link": "%WbQ4dq0m/zu5jxll9zUbe0iGmDOajCx1ZkLKjZ80JvI=.sha256",
      "value": 1
    }
  },
  "signature": "Sjq1C3yiKdmi1TWvNqxIk1ZQBf4pPJYl0HHRDVf/xjm5tWJHBaW4kXo6mHPcUMbJYUtc03IvPwVqB+BMnBgmAQ==.sig.ed25519"
}

{
  "key": "%vhP8tyeB+7cVLbIHd6wEd36AVEcUsZgwTYigpcx6Qn0=.sha256",
  "value": {
    "previous": "%NA/4By9K3L0OmVS2eD8le05uUW94ukDNbX16V3ZApi8=.sha256",
    "author": "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519",
    "sequence": 2,
    "timestamp": 1439158769923,
    "hash": "sha256",
    "content": {
      "type": "post",
      "text": "Hello, world!"
    },
    "signature": "EQngCchOejwfWAcZ2Xgr5QR6iquBQVlF++1/ZOLlRJQfyj4TxHk6MHRUKV/o7L35h2zfL1K+Il991JxrxCT+BA==.sig.ed25519"
  }
}
```

[<- back to table of contents](#table-of-contents)

---

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

[<- back to table of contents](#table-of-contents)

---

## Signer-agnostic solution

The next step towards signer-agnostic protocol-agnostic social media commons would be giving users an opportunity to sign messages from different protocols using the private key of their choice. For example, signing DMP and Zkitter events with Nostr or PGP private keys, and vice versa, signing Nostr events with an Ethereum or PGP private keys.

[<- back to table of contents](#table-of-contents)

---

## Protocol-agnostic solution

Users should be able to choose which messaging protocols they wish to use in order to propagate events over the Internet. Ideally, users should be able to select many supported messaging protocols when submitting an event via UI. Under the hood, the client can sign different events in different formats with different signing keys, but all those events will hold the same information, e.g. a "Hello World" message.

Clients, relays, and nodes can choose which signing private keys and messaging protocols they wish to support.

[<- back to table of contents](#table-of-contents)

---

## SPASM library

Since achieving a full consensus on the format of a JSON object is unrealistic, there should be a library that help developers assemble an event into proper JSON objects for each protocol and deconstruct events from different protocols into one universally agreed format. Thus, different communities can use different messaging protocols with different JSON object structures, but client developers won't have to change a frontend implementation for each protocol. 

Here is an example of a SPASM object:

```
{
    "protocol": <protocol_name>,
    "version": <protocol_version> (optional),
    "id": <event_id>,
    "root": <event_root> (optional),
    "parent": <event_parent> (optional),
    "signature": <event_signature>,
    "title": <event_title> (optional),
    "content": <event_content>,
    "timestamp": <unix timestamp in seconds>,
    "author": <public key>,
    "category": <event_category> (optional),
    "tags": <array> (optional),
    "license": <event_license>,
    "extra": <object> (optional),
    "metadata": <object> (optional),
    "original_event": <original JSON object of an event>
}
```

[<- back to table of contents](#table-of-contents)

---

## FAQ

[<- back to table of contents](#table-of-contents)

---

## Feedback

This documentation is work in progress, so feel free to provide your feedback by opening an issue. Any ideas are welcome.
