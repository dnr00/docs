import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.7e48ea92.js";const r="/pr-preview/pr-1379/img/blobstream/blobstream_logo.png",i="/pr-preview/pr-1379/img/blobstream/blobstream_x_draft_diagram.png",s="/pr-preview/pr-1379/img/blobstream/blobstream_x_overview_diagram_draft.png",y=JSON.parse('{"title":"Blobstream: Streaming modular DA to Ethereum","description":"Learn how to integrate your L2 with Blobstream","frontmatter":{"description":"Learn how to integrate your L2 with Blobstream","head":[["meta",{"name":"og:title","content":"Blobstream: Streaming modular DA to Ethereum | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/blobstream.md","filePath":"developers/blobstream.md","lastUpdated":1706839860000}'),l={name:"developers/blobstream.md"},n=o('<h1 id="blobstream-streaming-modular-da-to-ethereum" tabindex="-1">Blobstream: Streaming modular DA to Ethereum <a class="header-anchor" href="#blobstream-streaming-modular-da-to-ethereum" aria-label="Permalink to &quot;Blobstream: Streaming modular DA to Ethereum&quot;">​</a></h1><p><img src="'+r+'" alt="Blobstream logo"></p><p><a href="https://blog.celestia.org/introducing-blobstream/" target="_blank" rel="noreferrer">Blobstream</a> is the first data availability solution for Ethereum that securely scales with the number of users. Formerly known as the <a href="https://blog.celestia.org/celestiums/" target="_blank" rel="noreferrer">Quantum Gravity Bridge (QGB)</a>, Blobstream relays commitments to Celestia&#39;s data root to an onchain light client on Ethereum, for integration by developers into L2 contracts. This enables Ethereum developers to build high-throughput L2s using Celestia&#39;s optimised DA layer, the first with Data Availability Sampling (DAS).</p><p>A new and improved version of Blobstream, Blobstream X, is out and will replace Blobstream. This latter proves Celestia block headers on the target EVM chain using zk-proofs which allows inheriting all the security guarantees of Celestia.</p><h2 id="what-is-blobstream-x" tabindex="-1">What is Blobstream X? <a class="header-anchor" href="#what-is-blobstream-x" aria-label="Permalink to &quot;What is Blobstream X?&quot;">​</a></h2><p>Blobstream X is an implementation of Blobstream with a ZK light client that bridges Celestia’s modular DA layer to Ethereum to allow high-throughput rollups to use Celestia’s DA while settling on Ethereum.</p><p>Optimistic or ZK rollups that settle on Ethereum but wish to use Celestia for DA require a mechanism for <em>bridging</em> Celestia’s data root to Ethereum as part of the settlement process. This data root is used during validity proofs to prove that particular rollup transactions were included and made available in the Celestia network.</p><p>Bridging Celestia’s data root to Ethereum requires running a Celestia <em>light client</em> as a smart contract on Ethereum, to make the latest state of the Celestia chain known on Ethereum and available to rollups. Blobstream X utilizes the latest advances in zero-knowledge proofs to generate a <em>succinct proof</em> that enough Celestia validators have come to consensus (according to the Tendermint consensus protocol) on a block header, and verifies this proof in the Blobstream X Ethereum smart contract to update it with the latest Celestia header.</p><p>The Blobstream X zero-knowledge proof not only verifies the consensus of Celestia validators, but it also merkelizes and hashes all the data roots in the block range from the previous update to the current update, making accessible all Celestia data roots (verifiable with a Merkle inclusion proof against the stored Merkle root) to rollups.</p><p>Blobstream X is built and deployed with <a href="https://succinct.xyz/" target="_blank" rel="noreferrer">Succinct’s unified proving stack</a>.</p><p><img src="'+i+'" alt="blobstream x draft diagram"></p><h2 id="integrate-with-blobstream-x" tabindex="-1">Integrate with Blobstream X <a class="header-anchor" href="#integrate-with-blobstream-x" aria-label="Permalink to &quot;Integrate with Blobstream X&quot;">​</a></h2><p>The following docs go over how developers can integrate Blobstream X.</p><p>You can <a href="https://github.com/succinctlabs/blobstreamx" target="_blank" rel="noreferrer">find the repository for Blobstream X</a> along with code for:</p><ul><li>The Blobstream X smart contract - <a href="https://github.com/succinctlabs/blobstreamx/blob/main/contracts/src/BlobstreamX.sol" target="_blank" rel="noreferrer"><code>BlobstreamX.sol</code></a></li><li><a href="https://alpha.succinct.xyz/celestia/blobstreamx" target="_blank" rel="noreferrer">The Blobstream X circuits</a></li></ul><p>Canonical deployments of Blobstream X will be maintained on the following chains: Arbitrum One, Base and Ethereum Mainnet. Every 4 hours, Succinct will post an update to the Blobstream X contract that will include a new data commitment range that covers a 4-hour block range from the <code>latestBlock</code> in the Blobstream X contract.</p><h3 id="how-blobstream-x-works" tabindex="-1">How Blobstream X works <a class="header-anchor" href="#how-blobstream-x-works" aria-label="Permalink to &quot;How Blobstream X works&quot;">​</a></h3><p>As shown in the diagram below, the entrypoint for updates to the Blobstream X contract is through the <code>SuccinctGateway</code> smart contract, which is a simple entrypoint contract that verifies proofs (against a deployed onchain verifier for the Blobstream X circuit) and then calls the <code>BlobstreamX.sol</code> contract to update it. More information about the <code>SuccinctGateway</code> can be found here: [TODO].</p><p><img src="'+s+'" alt="blobstream x overview diagram draft"></p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If the contract is still not deployed, then it needs to be deployed before it is used by the prover/relayer. See the <a href="./">deployment documentation (TBD)</a> for more details.</p></div><h3 id="how-to-integrate-with-blobstream-x" tabindex="-1">How to integrate with Blobstream X <a class="header-anchor" href="#how-to-integrate-with-blobstream-x" aria-label="Permalink to &quot;How to integrate with Blobstream X&quot;">​</a></h3><p>Integrating your L2 with Blobstream X requires two components: your onchain smart contract logic, and your offchain client logic. The next three sections cover these topics:</p><ul><li><a href="./blobstreamx-contracts">Integrate with Blobstream X contracts</a></li><li><a href="./blobstreamx-offchain">Integrate with Blobstream X client</a></li><li><a href="./blobstreamx-proof-queries">Querying the Blobstream X proofs</a></li></ul><h3 id="deployed-contracts" tabindex="-1">Deployed contracts <a class="header-anchor" href="#deployed-contracts" aria-label="Permalink to &quot;Deployed contracts&quot;">​</a></h3><p>You can interact with the Blobstream X contracts today on testnet. The Blobstream X Solidity smart contracts are currently deployed on the following Ethereum testnets:</p><table><thead><tr><th>Contract</th><th>EVM network</th><th>Contract address</th><th>Attested data</th></tr></thead><tbody><tr><td>Blobstream</td><td>Sepolia</td><td><a href="https://sepolia.etherscan.io/address/0x3a5cbB6EF4756DA0b3f6DAE7aB6430fD8c46d247" target="_blank" rel="noreferrer"><code>0x3a5cbB6EF4756DA0b3f6DAE7aB6430fD8c46d247</code></a></td><td>Mocha testnet</td></tr><tr><td>Blobstream</td><td>Arbitrum Sepolia</td><td><a href="https://sepolia.arbiscan.io/address/0x040769edbca5218e616c8eb16e4faea49ced5e33" target="_blank" rel="noreferrer"><code>0x040769edbca5218e616c8eb16e4faea49ced5e33</code></a></td><td>Mocha testnet</td></tr><tr><td>Blobstream X</td><td>Goerli</td><td><a href="https://goerli.etherscan.io/address/0x67ea962864cdad3f2202118dc6f65ff510f7bb4d" target="_blank" rel="noreferrer"><code>0x67ea962864cdad3f2202118dc6f65ff510f7bb4d</code></a></td><td>Mocha testnet</td></tr></tbody></table><p>TBD (Add: Sepolia, Arbitrum Sepolia, and eventually the others).</p><h2 id="blobstream-x-vs-data-availability-committees-dacs" tabindex="-1">Blobstream X vs. data availability committees (DACs) <a class="header-anchor" href="#blobstream-x-vs-data-availability-committees-dacs" aria-label="Permalink to &quot;Blobstream X vs. data availability committees (DACs)&quot;">​</a></h2><h3 id="decentralization-and-security" tabindex="-1">Decentralization and security <a class="header-anchor" href="#decentralization-and-security" aria-label="Permalink to &quot;Decentralization and security&quot;">​</a></h3><p>BlobstreamX is built on Celestia, which uses a CometBFT-based proof-of-stake system. Blobstream X shares the same security assumptions as Celestia. In contrast, data availability committees (DACs), are typically centralized or semi-centralized, relying on a specific set of entities or individuals to vouch for data availability.</p><h3 id="mechanism-of-verification" tabindex="-1">Mechanism of verification <a class="header-anchor" href="#mechanism-of-verification" aria-label="Permalink to &quot;Mechanism of verification&quot;">​</a></h3><p>Blobstream X uses data availability attestations, which are Merkle roots of the batched L2 data, to confirm that the necessary data is present on Celestia. The L2 contract on Ethereum can check directly with Blobstream X if the data is published on Celestia. Similarly, a DAC would rely on attestations or confirmations from its permissioned members.</p><h3 id="flexibility-and-scalability" tabindex="-1">Flexibility and scalability <a class="header-anchor" href="#flexibility-and-scalability" aria-label="Permalink to &quot;Flexibility and scalability&quot;">​</a></h3><p>Blobstream X is designed to offer high-throughput data availability for Ethereum L2s, aiming to strike a balance between scalability and security. It operates independently of Ethereum&#39;s gas costs, as Celestia&#39;s resource pricing is more byte-focused rather than computation-centric. On the other hand, the scalability and flexibility of a DAC would depend on its specific design and implementation.</p><p>In summary, both Blobstream X and DACs aim to ensure offchain data availability, but Blobstream X offers a more decentralized, secure, and scalable solution compared to the potential centralized nature of DACs.</p>',35),c=[n];function h(d,m,b,u,p,f){return t(),a("div",null,c)}const w=e(l,[["render",h]]);export{y as __pageData,w as default};
