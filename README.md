# Signer and Protocol Agnostic Social Media (SPASM)

## Overview

Essentially, all `events` on all decentralized social media protocols are data chunks structured in a JSON object that has to be signed with a private key, which might or might not be associated with an existent blockchain.

The JSON object structure varies in different protocols, but all events contain very similar information on whether the events are a type of `reply`, `post`, `metadata`, what is the `id`, `target`, `parent`, etc.

In the ideal world different communities would have came up with a capsulated universal messaging format, i.e. agreed on how the JSON object should look like. Unfortunately, achieving consensus between developers of different protocols in the real world is very unlikely, so it makes sense to discuss other ways to increase interoperability between protocols.
