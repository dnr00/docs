import{_ as e,o as s,c as a,Q as t}from"./chunks/framework.4a9cd030.js";const b=JSON.parse('{"title":"Blobstream Relayer","description":"Learn about the Blobstream Relayer.","frontmatter":{"sidebar_label":"Blobstream Relayer","description":"Learn about the Blobstream Relayer.","head":[["meta",{"name":"og:title","content":"Blobstream Relayer | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/blobstream-relayer.md","filePath":"nodes/blobstream-relayer.md","lastUpdated":1706745173000}'),o={name:"nodes/blobstream-relayer.md"},n=t(`<h1 id="blobstream-relayer" tabindex="-1">Blobstream Relayer <a class="header-anchor" href="#blobstream-relayer" aria-label="Permalink to &quot;Blobstream Relayer&quot;">​</a></h1><p>The role of the relayer is to gather attestations&#39; signatures from the orchestrators, and submit them to a target EVM chain. The attestations are generated within the Blobstream module of the Celestia-app state machine. To learn more about what attestations are, you can refer to <a href="https://github.com/celestiaorg/celestia-app/tree/main/x/blobstream" target="_blank" rel="noreferrer">the Blobstream overview</a>.</p><p>Also, while every validator in the Celestia validator set needs to run an orchestrator, we only need one entity to run the relayer, and it can be anyone. Thus, if you&#39;re a validator, most likely you want to read <a href="https://docs.celestia.org/nodes/blobstream-orchestrator/" target="_blank" rel="noreferrer">the orchestrator documentation</a>.</p><p>Every relayer needs to target a Blobstream smart contract. This contract can be deployed, if not already, using the <code>blobstream deploy</code> command. More details in the <a href="https://docs.celestia.org/nodes/blobstream-deploy/" target="_blank" rel="noreferrer">Deploy the Blobstream contract guide</a>.</p><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><p>The relayer works as follows:</p><ol><li>Connect to a Celestia-app full node or validator node via RPC and gRPC and wait for attestations.</li><li>Once an attestation is created inside the Blobstream state machine, the relayer queries it.</li><li>After getting the attestation, the relayer checks if the target Blobstream smart contract&#39;s nonce is lower than the attestation.</li><li>If so, the relayer queries the P2P network for signatures from the orchestrators.</li><li>Once the relayer finds more than 2/3s signatures, it submits them to the target Blobstream smart contract where they get validated.</li><li>Listen for new attestations and go back to step 2.</li></ol><p>The relayer connects to a separate P2P network from the consensus or the data availability one. So, we will provide bootstrappers for that one.</p><p>This means that even if the consensus node is already connected to the consensus network, if the relayer doesn&#39;t start with a list of bootstrapper to its specific network, then, it will not work and will output the following logs:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">I[2023-04-26|00:04:08.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-26|00:04:18.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-26|00:04:28.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">I[2023-04-26|00:04:08.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-26|00:04:18.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-26|00:04:28.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span></code></pre></div><h2 id="how-to-run" tabindex="-1">How to run <a class="header-anchor" href="#how-to-run" aria-label="Permalink to &quot;How to run&quot;">​</a></h2><h3 id="install-the-blobstream-binary" tabindex="-1">Install the Blobstream binary <a class="header-anchor" href="#install-the-blobstream-binary" aria-label="Permalink to &quot;Install the Blobstream binary&quot;">​</a></h3><p>Make sure to have the Blobstream binary installed. Check out the <a href="https://docs.celestia.org/nodes/blobstream-binary" target="_blank" rel="noreferrer">Install the Blobstream binary page</a> for more details.</p><h3 id="init-the-store" tabindex="-1">Init the store <a class="header-anchor" href="#init-the-store" aria-label="Permalink to &quot;Init the store&quot;">​</a></h3><p>Before starting the relayer, we will need to init the store:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">relayer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">relayer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><p>By default, the store will be created un <code>~/.relayer</code>. However, if you want to specify a custom location, you can use the <code>--home</code> flag. Or, you can use the following environment variable:</p><table><thead><tr><th>Variable</th><th>Explanation</th><th>Default value</th><th>Required</th></tr></thead><tbody><tr><td><code>RELAYER_HOME</code></td><td>Home directory for the relayer</td><td><code>~/.relayer</code></td><td>Optional</td></tr></tbody></table><h3 id="add-keys" tabindex="-1">Add keys <a class="header-anchor" href="#add-keys" aria-label="Permalink to &quot;Add keys&quot;">​</a></h3><p>In order for the relayer to start, it will need two private keys:</p><ul><li>EVM private key</li><li>P2P private key</li></ul><p>The EVM private key is the most important since it needs to be funded, so it is able to send transactions in the target EVM chain.</p><p>The P2P private key is optional, and a new one will be generated automatically on the start if none is provided.</p><p>The <code>keys</code> command will help you set up these keys:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">relayer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">relayer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">--help</span></span></code></pre></div><p>To add an EVM private key, check the next section.</p><h4 id="evm-key" tabindex="-1">EVM key <a class="header-anchor" href="#evm-key" aria-label="Permalink to &quot;EVM key&quot;">​</a></h4><p>Because EVM keys are important, we provide a keystore that will help manage them. The keystore uses a file system keystore protected by a passphrase to store and open private keys.</p><p>To import your EVM private key, there is the <code>import</code> subcommand to assist you with that:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">relayer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">evm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">relayer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">evm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span></code></pre></div><p>This subcommand allows you to either import a raw ECDSA private key provided as plaintext, or import it from a file. The files are JSON keystore files encrypted using a passphrase like <a href="https://geth.ethereum.org/docs/developers/dapp-developer/native-accounts" target="_blank" rel="noreferrer">in this example</a>.</p><p>After adding the key, you can check that it&#39;s added via running:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">relayer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">evm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">relayer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">evm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span></code></pre></div><p>For more information about the <code>keys</code> command, check <a href="https://docs.celestia.org/nodes/blobstream-keys" target="_blank" rel="noreferrer">the <code>keys</code> documentation</a>.</p><h3 id="start-the-relayer" tabindex="-1">Start the relayer <a class="header-anchor" href="#start-the-relayer" aria-label="Permalink to &quot;Start the relayer&quot;">​</a></h3><p>Now that we have the store initialized, and we have a target Blobstream smart contract address, we can start the relayer. Make sure you have your Celestia-app node RPC and gRPC accessible, and able to connect to the P2P network bootstrappers.</p><p>The relayer accepts the following flags:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">relayer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Runs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">relayer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">submit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">attestations</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">EVM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">chain</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Usage:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">relayer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">flag</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [flags]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">relayer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Runs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">relayer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">submit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">attestations</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">target</span><span style="color:#24292E;"> </span><span style="color:#032F62;">EVM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">chain</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Usage:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">relayer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">flag</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [flags]</span></span></code></pre></div><p>Also, you can set the necessary configuration in the relayers&#39;s TOML config file. You can find the orchestrator&#39;s TOML config file in the relayer&#39;s home directory under <code>config/config.toml</code>.</p><blockquote><p><strong><em>NOTE:</em></strong> The CLI flags take precedence over the config files for the same parameters.</p></blockquote><p>To start the relayer using the default home directory, run the following:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">/bin/blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">relayer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--evm.account=0x35a1F8CE94187E4b043f4D57548EF2348Ed556c8</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">/bin/blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">relayer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--evm.account=0x35a1F8CE94187E4b043f4D57548EF2348Ed556c8</span></span></code></pre></div><blockquote><p><strong><em>NOTE:</em></strong> The above command assumes that the necessary configuration is specified in the <code>&lt;relayer_home&gt;/config/config.toml</code> file.</p></blockquote><p>Then, you will be prompted to enter your EVM key passphrase for the EVM address passed using the <code>--evm.account</code> flag, so that the relayer can use it to send transactions to the target Blobstream smart contract. Make sure that it&#39;s funded.</p>`,44),l=[n];function r(p,c,i,y,h,d){return s(),a("div",null,l)}const u=e(o,[["render",r]]);export{b as __pageData,u as default};
