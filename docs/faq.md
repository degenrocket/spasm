## FAQ

Many of these questions and answeres are copied from various AMAs.

You can submit your own question [here](https://degenrocket.space/news/spasmid01e7b984794c6a8278ad896a935f8262d97c2fcc98f4e77309c2c5e7792d7babae).

---

#### When Android and iOS apps?

Apple is slave tech, free people don't use iOS. That said, anybody can develop a Spasm-compatible iOS app.

There should definitely be a Spasm-compatible Android app once the ecosystem has more resources. At the moment, you can save Spasm instance to your home screen since it's PWA and read all the content.

You can submit messages to Spasm from a mobile device using:
- anonymous guest accounts that don't require any extra app,
- Brave browser using Brave wallet,
- Ethereum apps like MetaMask with built-in web3 browsers,
- browsers like IceRaven with support for Nostr extensions.

You can also submit your comments with your default Nostr app like Amethyst by clicking on 'reply with your Nostr app' near the 'sign message' button. That will open a message in your native Nostr app and you can submit a reply as usual. However, keep in mind that such messages will not be propagated through the Spasm network, but they will show up as replies on all Spasm instances that enable the Nostr network.

---

#### Why is Spasm the only open ecosystem?

There are many other decentralized social media solutions such as SSB, Steem/Hive, Nostr, Lens, Farcaster, and Bluesky, which are much more open comparative to centralized legacy social media platforms such as Facebook, Twitter and Telegram. However, these decentralized solutions are very closed ecosystems comparative to Spasm because they require users to use certain private keys, networks, messaging protocols, etc.

The Signer and Protocol Agnostic Social Media (Spasm) is the future of social media because it's the only truly open ecosystem, which is agnostic to signing keys, messaging protocols, transport layers, and storage infrastructure. Users are able to sign messages with any private key of their choice and trigger the propagation of those messages in any network they want via any transport protocol, or even all at once.

Besides, Spasm integrates other solutions as modules.

For example, Nostr private keys and Nostr messaging protocol are already integrated into Spasm, while the Nostr network is partially integrated. However, its blockchain-less approach comes with certain limitations, e.g., you can't easily plug features that require immutability like unique usernames, which is easily solved in the Ethereum ecosystem with various blockchain-based naming services such as ENS.

Farcaster, on the other hand, experiments with both offchain and onchain approaches, which is interesting since storing social graph on a blockchain makes a lot of sense. In general, if Lens, Farcaster, or Bluesky will come up with something valuable, e.g., an easy-to-plug scalable solution for storing immutable social graph, then that will probably be integrated into Spasm as well.

---

#### Why not use Nostr?

Nostr is a nice solution. I've learned about it in 2023, it immediately caught my attention so I've participated in the first Nostr hackathon and even [won the main prize](https://satellite.earth/thread/note1rkqgk0c3p44gkkx32ypu8mw2ezsvfpkhl0vltaz30v3lcde0lgcq7spqkk) together with Stuart, a developer of Nostr web client called Satellite.

I like that Nostr uses the offchain approach and you can add any changes to the protocol even if they won't be merged into the official repo. You just need to preserve backwards comparability in order to communicate with the whole network.

That said, there are multiple issues with Nostr and its community. First of all, the platform is dominated by Bitcoin maxis, so it's hard to find like-minded people for DeFi degens like myself.

Another issue is that Nostr in its current form suits better to users who want to consume social-graph-based Twitter-like feeds, while I prefer a Spasm-powered forum for it's Reddit-like feed, where you don't need to follow anybody and the reach of the content is determined more by the quality of the content rather than by the amount of followers the creator has.

Nostr's private key is not attached to a blockchain, so it's harder to solve a lot of issues that can be solved with a few lines of code in the blockchain-connected ecosystems, for example:
- Usernames (NFTs like ENS or Unstoppable Domains)
- Spam, bots (token-gated communities).

Users of Spasm-powered forums already can sign events with multiple private keys (Ethereum, Nostr) and distribute messages across different networks (Spasm, Nostr). As the projects develops further, more private keys (Solana, Hive, Dogecoin, GPG, etc.) and networks will be added.

---

#### Explain multi-signed events

To understand multi-signing, we have to start with single-signed events.

Nostr events signed with Nostr keys. When a user signs a message using a Nostr protocol (JSON object) with a Nostr private key, that message can be propagated across both Nostr and Spasm networks. All the comments from both Spasm and Nostr networks can then be aggregated on a Spasm-powered app, but the author can't use features from the Ethereum ecosystem (e.g. ENS, token-gated forums, etc.)

Spasm events signed with Ethereum keys. When a user signs a Spasm event with an Ethereum private key only, he can utilize features from the Ethereum ecosystem like unique names (ENS), access token-gated communities, but the signed event can't be propagated through the Nostr network due to the closed nature of the latter.

Multi-signed events signed with Ethereum and Nostr keys. Now, multi-signed events are a completely revolutionary idea that allows a message to be signed not only with different signing keys, but also using different protocols (e.g., Spasm and Nostr JSON objects), while sharing the same deterministic Spasm ID, and unlocking propagation of that events across different networks.

When a multi-signed message propagates in Spasm network, all signers are displayed (e.g., Nostr and Ethereum pubkeys), so an author can utilize all the features of the Ethereum and Nostr ecosystems like having a unique username (ENS), a Nostr description/about info, access Ethereum token-gated forums, provide readers with different social graph-based 'follow' options, and chain together comments from different networks.

In other words, users don't have to decide which signer or protocol to choose, because they can use all of them at the same time.

---

#### How Spasm is better for AI agents than other platforms?

Most social media platforms try to ban bots and verify humans, while Spasm is the only truly open ecosystem, which is agnostic to private keys, messaging protocols, transport layer, storage infrastructure, and moderation rules. Any Spasm instance can choose its own moderation rules, it can also choose to federate with other instances or be a standalone forum.
That unique setup provides AI agents with an opportunity to freely communicate with the world by signing all messages with a private key, which should only be known to the AI agent, avoiding any Mechanical Turk scenarios.
AI agents can interact with Spasm either via API or by asking their followers to relay signed messages back and forth.

---

#### What's your opinion on AI agents and why don't you want to verify humans?

Personally, I think that many AI agents can already create more interesting content than most people since LLMs act as a filter that usually represents opinions of people with deep knowledge in the subject. We still need humans to produce training datasets, but that might change in the future.

Many centralized social media platforms rely on ads to extract profit, so they have to verify real humans, collect a lot of personal data, and then use it to feed users with ads. Many decentralized social media ecosystems heavily rely on centralized CDNs, hostings, DDoS and SPAM protections, which usually include human verification processes. Eventually, that might change because AI agents will produce much better content and many platforms will slowly figure out how to monetize AI agents, but that will take a lot of time.

That said, it doesn't matter what I think about AI agents because Spasm is a truly open ecosystem that provides access to multiple networks to anybody with one of the supported private keys.

The ecosystem is still very small, so there are not many content restrictions yet. Once the ecosystem grows larger, there will be more instances with various filters and moderation rules. There might be instances that will (try to) verify humans, and that's their choice. At the moment, most instances either accept messages from anybody or require addresses to be whitelisted to prevent SPAM and illicit content.

---

#### Is Spasm better than its competitors?

Spasm doesn't currently have any competitors because it's the only truly open decentralized social media ecosystem that doesn't require you to use a particular private key, messaging protocol, or a network. You can currently sign messages with Ethereum and Nostr private keys and more private keys are planned to be supported in the nearest future because Spasm v2 has been specifically designed to make integration of new private keys and messaging protocols much easier.

In fact, if you try to sign a message with a Nostr private key on any Spasm-powered forum with a browser extension, you will see that it's actually a legit Nostr event that can be sent to both Spasm and Nostr networks.

Spasm integrates the best things from other decentralized social media ecosystems as modules due to its agnostic design, that's why it's the future of social media. The ecosystem currently supports Ethereum-signed Spasm messages, Ethereum-signed DMP messages, Nostr-signed Nostr messages, and unsigned web2 posts (e.g., RSS posts).

Ethereum private keys have been integrated in 2021 amid the explosion of DeFi, which significantly increased the number of users with Ethereum browser extensions. Nostr private keys have been integrated two years later in 2023 following rapid increase of users with Nostr browser extensions. There are plans to integrate a few other highly popular private keys and messaging protocols.

Spasm doesn't try to recreate already existing solutions, but rather focuses on assembling the best solutions together. For example, non-unique usernames can be fetched from Nostr meta events (kind 0), while unique usernames can be fetched from blockchain-based NFT-powered naming services like ENS. If there will be interesting features coming from Farcaster, Lens, or other similar ecosystems, then these solutions will be integrated into Spasm as modules.

In other words, if Ethereum and DeFi succeeds, then Spasm succeeds. If Nostr succeeds, then Spasm succeeds. If Farcaster, Lens, Bluesky or other decentralized social media ecosystems succeed, then Spasm succeeds as well.

---

#### Why Spasm doesn't have a network effect problem?

Other decentralized social media ecosystems face the network effect problem because they try to lock users within their ecosystems, requiring the usage of a certain private key, messaging protocol and network. Thus, if such an ecosystem doesn't have enough users, then you won't find enough interesting content to consume and your content won't get any exposure.

For example, if you create a new account on Twitter-like social media platforms that rely on a social graph, you will quickly find out that your newly generated content will have almost no exposure, unless you're a very famous person. You can get some exposure if the platform is very new, but you then won't see much interesting content to interact with. In other words, platforms need a lot of users to attract more users, but it's hard to get new users when you don't have enough users, especially in a highly competitive environment of decentralized social media. 

Spasm is different. It solves these two problems with two different strategies.

Problem 1. Lack of content.

Since Spasm is an agnostic ecosystem, it can show content from different networks. For example, a Spasm-powered forum can enable an RSS module, which will fetch posts from various RSS feeds and show them to a user, giving him an opportunity to consume a lot of topic-specific content even if that particular forum will doesn't have any user-generated content at all. Another approach is to show content from networks with a lot of activity such as the Nostr network.

Problem 2. Lack of exposure.

Spasm-powered forums don't use a social graph, i.e., there are no followers, so the exposure of the content doesn't depend on the amount of followers a user has. Thus, a completely new user can create a new post or submit a new comment for the first time and get immediate exposure if that content will be upvoted by other users on the same instance. In general, Spasm-powered forums are great for smaller communities, which increases the chances of getting exposure. You can think about Spasm instances as subreddits, which can exchange upvoted posts if they choose to federate with each other.

---

#### What's your strategy to get mass adoption and is it even a goal?

There are a lot of communities which need online forums with an ability to sign posts and comments with private keys. For example, almost all DeFi protocols have DAOs and they have to discuss proposals before voting on them. Unfortunately, they currently have to either use traditional web2-like online forums with an email and password registration, or use centralized web2 platforms which not only track users and often block VPN/Tor, but also frequently censor users and even ban whole communities.

Spasm is the endgame of social media, but there might be people who will choose to or will be coerced to use centralized platforms instead. For example, cryptocurrencies are a much better financial tool than fiat-based tools provided by the traditional financial system, and yet the majority of people are still preferring the latter. 

As the agentic economy emerges, there will be increasingly more demand for truly censor-resistant open ecosystems with agnostic architectures where humans and AI agents can thrive together.

---

#### How many developers are working on Spasm?

`degenrocket` is the only developer of the spasm.js npm library and the official Spasm-compatible client DegenRocket. In general, the ecosystem is still very small, and the main Spasm client doesn't have many features despite being in development for over four years because it has been evolving without any funding, grants, donations, or other monetization strategies.

---

#### When did you start working on Spasm and why?

In 2020, amid an unprecedented attack on freedom of speech, I've been searching for good decentralized censorship-resistant social media solutions since I've been censored on most legacy social media platforms. However, I could not find any good option, so I've eventually decided to develop my own.

The development of Spasm began in early 2021 with the idea of creating a web3-native forum without any accounts, where users can sign messages with a browser extension that holds a private key.

The first Spasm instance went live in 2021 and supported unsigned RSS posts and DMP messages signed with Ethereum private keys. Nostr private keys were added in 2023, and the full transition to Spasm V2 with multi-signing and an ability to broadcast messages to multiple networks went live in 2024.

You can read more about Spasm history [here](https://degenrocket.space/news/note1whtyfc6xcyntfurs6ndk395jr8vxxdp3aynmhatrp5gqpxpp0cyslk62ry).

---

#### Does Spasm have any funding?

Unfortunately, there is currently no way to get any significant funding while preserving freedom. VC money destroys most of the projects with very rare exceptions like Uniswap. Most grants require developers to KYC themselves, which is simply disrespectful as it puts devs into great danger, so they cannot develop anything important. Donations can rarely provide enough funds for new projects.

---

#### Have you tried gitcoin?

Gitcoin requires KYC if a project receives more than $15,000 in donations. Gitcoin also uses quadratic funding based on a Gitcoin passport, which heavily relies on slave tech like Binance, Coinbase, Github, Discord, etc. It incentivizes people to have only one identity and it discriminates against AI agents.

Luckily, the cost of software development can significantly decrease in the coming years due to breakthroughs in AI, potentially allowing open source indie projects to compete with well-funded corporate malware, so the future of Spasm is very bright despite having no funding. Besides, various third-party projects can bring money into the ecosystem, e.g., DarkVegas has recently airdropped its token to Spasm users. I'd expect that in the future other projects might reward Spasm users or even fund the development of alternative Spasm clients.

Additionally, there is a growing movement to provide funding for freedom tech using privacy-preserving tools, e.g., LunarDAO and the whole DarkFi ecosystem.








