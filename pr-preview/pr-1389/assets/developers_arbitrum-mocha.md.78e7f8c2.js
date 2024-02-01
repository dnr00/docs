import{c as a}from"./chunks/constants.6b678d01.js";import{o as t,c as p,k as s,a as o,t as l,l as e,Q as n}from"./chunks/framework.168963ab.js";const c="/pr-preview/pr-1389/img/nitro-vroom.png",_=n('<h1 id="deploy-an-arbitrum-rollup-to-mocha-testnet" tabindex="-1">Deploy an Arbitrum rollup to Mocha testnet <a class="header-anchor" href="#deploy-an-arbitrum-rollup-to-mocha-testnet" aria-label="Permalink to &quot;Deploy an Arbitrum rollup to Mocha testnet&quot;">​</a></h1><p><img src="'+c+'" alt="nitro-vroom"></p><p>This guide covers deploying an Arbitrum Nitro rollup to <a href="./../nodes/mocha-testnet">Mocha testnet</a> using Celestia as DA.</p><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h2><ul><li><a href="./arbitrum-integration">Introduction to Arbitrum rollups with Celestia as DA</a></li><li><a href="./arbitrum-deploy">Deploy an Arbitrum rollup devnet</a></li><li>A fully synced and funded Mocha testnet <a href="./../nodes/light-node">light node</a><ul><li><a href="./../nodes/mocha-testnet#mocha-testnet-faucet">Mocha testnet faucet</a></li></ul></li></ul><h2 id="setting-up-your-light-node" tabindex="-1">Setting up your light node <a class="header-anchor" href="#setting-up-your-light-node" aria-label="Permalink to &quot;Setting up your light node&quot;">​</a></h2>',6),r=s("p",null,[o("Change the following in "),s("a",{href:"https://github.com/celestiaorg/nitro-testnode/blob/e4e5acd36890e650c581188ef746a7b02202583a/docker-compose.yaml#L3-L15",target:"_blank",rel:"noreferrer"},[s("code",null,"nitro-testnode/docker-compose.yaml")]),o(":")],-1),i={class:"language-bash vp-adaptive-theme"},E=s("button",{title:"Copy Code",class:"copy"},null,-1),d=s("span",{class:"lang"},"bash",-1),y={class:"shiki github-dark has-diff vp-code-dark"},h=s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"da:")],-1),T=n('<span class="line diff add"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">container_name:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;celestia-da&#39;</span><span style="color:#E1E4E8;"> </span></span>',1),u=n('<span class="line diff add"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">user:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root</span><span style="color:#E1E4E8;"> </span></span>',1),C=n('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">platform:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">linux/x86_64</span></span>',1),F=n('<span class="line diff remove"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">image:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;ghcr.io/rollkit/local-celestia-devnet:v0.12.1&quot;</span><span style="color:#E1E4E8;"> </span></span>',1),A=n('<span class="line diff add"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">image:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;ghcr.io/celestiaorg/celestia-node:v0.12.1&quot;</span><span style="color:#E1E4E8;"> </span></span>',1),f=n('<span class="line diff add"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span></span>',1),S=n('<span class="line diff add"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span></span>',1),m=n('<span class="line diff add"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rpc-mocha.pops.one</span><span style="color:#E1E4E8;"> </span></span>',1),g=n('<span class="line diff add"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span><span style="color:#E1E4E8;"> </span></span>',1),P=n('<span class="line diff add"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">--log.level</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">debug</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--gateway</span><span style="color:#E1E4E8;"> </span></span>',1),I=s("span",{class:"line diff add"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"environment:"),s("span",{style:{color:"#E1E4E8"}}," ")],-1),b=n('<span class="line diff add"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NODE_TYPE=light</span><span style="color:#E1E4E8;"> </span></span>',1),V=n('<span class="line diff add"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">P2P_NETWORK=mocha</span><span style="color:#E1E4E8;"> </span></span>',1),D=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"ports:")],-1),B=n('<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;26657:26657&quot;</span></span>',1),q=n('<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;26658:26658&quot;</span></span>',1),N=n('<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;26659:26659&quot;</span></span>',1),v=s("span",{class:"line diff add"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"volumes:"),s("span",{style:{color:"#E1E4E8"}}," ")],-1),k={class:"line diff add"},R=s("span",{style:{color:"#E1E4E8"}},"      ",-1),O=s("span",{style:{color:"#B392F0"}},"-",-1),x=s("span",{style:{color:"#E1E4E8"}}," $HOME",-1),w={style:{color:"#9ECBFF"}},M=s("span",{style:{color:"#E1E4E8"}}," ",-1),H=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"healthcheck:")],-1),L=n('<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">test</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;CMD&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;curl&quot;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;-f&quot;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;http://localhost:26659/header/1&quot;]</span></span>',1),$=n('<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">interval:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">s</span></span>',1),K=n('<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">timeout:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#9ECBFF;">s</span></span>',1),U=n('<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">retries:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span>',1),W=n('<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">start_period:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30</span><span style="color:#9ECBFF;">s</span></span>',1),Y={class:"shiki github-light has-diff vp-code-light"},j=s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"da:")],-1),G=n('<span class="line diff add"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">container_name:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;celestia-da&#39;</span><span style="color:#24292E;"> </span></span>',1),J=n('<span class="line diff add"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">user:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root</span><span style="color:#24292E;"> </span></span>',1),Q=n('<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">platform:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">linux/x86_64</span></span>',1),z=n('<span class="line diff remove"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">image:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ghcr.io/rollkit/local-celestia-devnet:v0.12.1&quot;</span><span style="color:#24292E;"> </span></span>',1),X=n('<span class="line diff add"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">image:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ghcr.io/celestiaorg/celestia-node:v0.12.1&quot;</span><span style="color:#24292E;"> </span></span>',1),Z=n('<span class="line diff add"><span style="color:#24292E;">    </span><span style="color:#005CC5;">command</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span></span>',1),ss=n('<span class="line diff add"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span></span>',1),os=n('<span class="line diff add"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rpc-mocha.pops.one</span><span style="color:#24292E;"> </span></span>',1),ns=n('<span class="line diff add"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span><span style="color:#24292E;"> </span></span>',1),as=n('<span class="line diff add"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">--log.level</span><span style="color:#24292E;"> </span><span style="color:#032F62;">debug</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--gateway</span><span style="color:#24292E;"> </span></span>',1),ls=s("span",{class:"line diff add"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"environment:"),s("span",{style:{color:"#24292E"}}," ")],-1),es=n('<span class="line diff add"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NODE_TYPE=light</span><span style="color:#24292E;"> </span></span>',1),ts=n('<span class="line diff add"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">P2P_NETWORK=mocha</span><span style="color:#24292E;"> </span></span>',1),ps=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"ports:")],-1),cs=n('<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;26657:26657&quot;</span></span>',1),_s=n('<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;26658:26658&quot;</span></span>',1),rs=n('<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;26659:26659&quot;</span></span>',1),is=s("span",{class:"line diff add"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"volumes:"),s("span",{style:{color:"#24292E"}}," ")],-1),Es={class:"line diff add"},ds=s("span",{style:{color:"#24292E"}},"      ",-1),ys=s("span",{style:{color:"#6F42C1"}},"-",-1),hs=s("span",{style:{color:"#24292E"}}," $HOME",-1),Ts={style:{color:"#032F62"}},us=s("span",{style:{color:"#24292E"}}," ",-1),Cs=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"healthcheck:")],-1),Fs=n('<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">test</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;CMD&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;curl&quot;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;-f&quot;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;http://localhost:26659/header/1&quot;]</span></span>',1),As=n('<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">interval:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">s</span></span>',1),fs=n('<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">timeout:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#032F62;">s</span></span>',1),Ss=n('<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">retries:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>',1),ms=n('<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">start_period:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#032F62;">s</span></span>',1),gs=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[o("It is not advised to run with "),s("code",null,"user: root"),o(" permissions in production.")])],-1),Ps=s("p",null,[o("In "),s("a",{href:"https://github.com/celestiaorg/nitro-testnode/blob/e4e5acd36890e650c581188ef746a7b02202583a/test-node.bash#L7-L287",target:"_blank",rel:"noreferrer"},[s("code",null,"nitro-testnode/test-node.bash")]),o(" make the following changes:")],-1),Is={class:"language-bash vp-adaptive-theme"},bs=s("button",{title:"Copy Code",class:"copy"},null,-1),Vs=s("span",{class:"lang"},"bash",-1),Ds={class:"shiki github-dark has-diff vp-code-dark"},Bs=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# Line 7")],-1),qs=n('<span class="line diff remove"><span style="color:#E1E4E8;">NODE_PATH</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/home/celestia/bridge/&quot;</span><span style="color:#E1E4E8;"> </span></span>',1),Ns={class:"line diff add"},vs=s("span",{style:{color:"#E1E4E8"}},"NODE_PATH",-1),ks=s("span",{style:{color:"#F97583"}},"=",-1),Rs={style:{color:"#9ECBFF"}},Os=s("span",{style:{color:"#E1E4E8"}}," ",-1),xs=s("span",{class:"line"},null,-1),ws=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# Line 287")],-1),Ms=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# NOTE: depending on the version you're using, you may have a different")],-1),Hs=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# container name to start. Change yours accordingly to `celestia-da`.")],-1),Ls=n('<span class="line diff remove"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> CELESTIA_NODE_AUTH_TOKEN</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">docker</span><span style="color:#9ECBFF;"> exec nitro-testnode-da-1 celestia bridge auth admin </span><span style="color:#79B8FF;">--node.store</span><span style="color:#9ECBFF;">  ${</span><span style="color:#E1E4E8;">NODE_PATH</span><span style="color:#9ECBFF;">})&quot;</span><span style="color:#E1E4E8;"> </span></span>',1),$s=n('<span class="line diff add"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> CELESTIA_NODE_AUTH_TOKEN</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">docker</span><span style="color:#9ECBFF;"> exec celestia-da celestia light auth admin </span><span style="color:#79B8FF;">--node.store</span><span style="color:#9ECBFF;">  ${</span><span style="color:#E1E4E8;">NODE_PATH</span><span style="color:#9ECBFF;">})&quot;</span><span style="color:#E1E4E8;"> </span></span>',1),Ks={class:"shiki github-light has-diff vp-code-light"},Us=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# Line 7")],-1),Ws=n('<span class="line diff remove"><span style="color:#24292E;">NODE_PATH</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/home/celestia/bridge/&quot;</span><span style="color:#24292E;"> </span></span>',1),Ys={class:"line diff add"},js=s("span",{style:{color:"#24292E"}},"NODE_PATH",-1),Gs=s("span",{style:{color:"#D73A49"}},"=",-1),Js={style:{color:"#032F62"}},Qs=s("span",{style:{color:"#24292E"}}," ",-1),zs=s("span",{class:"line"},null,-1),Xs=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# Line 287")],-1),Zs=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# NOTE: depending on the version you're using, you may have a different")],-1),so=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# container name to start. Change yours accordingly to `celestia-da`.")],-1),oo=n('<span class="line diff remove"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> CELESTIA_NODE_AUTH_TOKEN</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">docker</span><span style="color:#032F62;"> exec nitro-testnode-da-1 celestia bridge auth admin </span><span style="color:#005CC5;">--node.store</span><span style="color:#032F62;">  ${</span><span style="color:#24292E;">NODE_PATH</span><span style="color:#032F62;">})&quot;</span><span style="color:#24292E;"> </span></span>',1),no=n('<span class="line diff add"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> CELESTIA_NODE_AUTH_TOKEN</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">docker</span><span style="color:#032F62;"> exec celestia-da celestia light auth admin </span><span style="color:#005CC5;">--node.store</span><span style="color:#032F62;">  ${</span><span style="color:#24292E;">NODE_PATH</span><span style="color:#032F62;">})&quot;</span><span style="color:#24292E;"> </span></span>',1),ao=n(`<li><p>Pick a namespace, <code>&lt;your-10bytenamespace&gt;</code> that is 10 bytes in hexadecimal. In <a href="https://github.com/celestiaorg/nitro-testnode/blob/e4e5acd36890e650c581188ef746a7b02202583a/scripts/config.ts#L223-L224" target="_blank" rel="noreferrer"><code>nitro-testnode/scripts/config.ts</code></a> make the following changes:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line diff remove"><span style="color:#B392F0;">&quot;tendermint-rpc&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;http://da:26657&quot;,</span><span style="color:#E1E4E8;"> </span></span>
<span class="line diff add"><span style="color:#B392F0;">&quot;tendermint-rpc&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;http://rpc-mocha.pops.one:26657&quot;,</span><span style="color:#E1E4E8;"> </span></span>
<span class="line diff remove"><span style="color:#B392F0;">&quot;namespace-id&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;000008e5f679bf7116cb&quot;,</span><span style="color:#E1E4E8;"> </span></span>
<span class="line diff add"><span style="color:#B392F0;">&quot;namespace-id&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&lt;your-10bytenamespace&gt;&quot;,</span><span style="color:#E1E4E8;"> </span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line diff remove"><span style="color:#6F42C1;">&quot;tendermint-rpc&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;http://da:26657&quot;,</span><span style="color:#24292E;"> </span></span>
<span class="line diff add"><span style="color:#6F42C1;">&quot;tendermint-rpc&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;http://rpc-mocha.pops.one:26657&quot;,</span><span style="color:#24292E;"> </span></span>
<span class="line diff remove"><span style="color:#6F42C1;">&quot;namespace-id&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;000008e5f679bf7116cb&quot;,</span><span style="color:#24292E;"> </span></span>
<span class="line diff add"><span style="color:#6F42C1;">&quot;namespace-id&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&lt;your-10bytenamespace&gt;&quot;,</span><span style="color:#24292E;"> </span></span></code></pre></div></li>`,1),lo=n('<p><a href="https://github.com/celestiaorg/nitro/pull/4/files" target="_blank" rel="noreferrer">See an example diff of the setup</a>, specifically <a href="https://github.com/celestiaorg/nitro-testnode/pull/6/files" target="_blank" rel="noreferrer">the updates to nitro-testnode</a>.</p><h2 id="run-your-nitro-rollup-on-mocha" tabindex="-1">Run your Nitro rollup on Mocha <a class="header-anchor" href="#run-your-nitro-rollup-on-mocha" aria-label="Permalink to &quot;Run your Nitro rollup on Mocha&quot;">​</a></h2><ol><li><p>Start your rollup:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./test-node.bash</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./test-node.bash</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dev</span></span></code></pre></div></li><li><p>Send a transaction:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./test-node.bash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">send-l2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">address_0x1111222233334444555566667777888899990000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./test-node.bash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">script</span><span style="color:#24292E;"> </span><span style="color:#032F62;">send-l2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">address_0x1111222233334444555566667777888899990000</span></span></code></pre></div></li><li><p>Find <a href="https://mocha.celenium.io/tx/ab5a97ddcf310417cabd57915d0f15f1071b941b902989e974f4025391c71512" target="_blank" rel="noreferrer">the batch transaction on mocha</a> in the namespace you used. In this demonstration, I used <a href="https://mocha.celenium.io/namespace/0000000000000000000000000000000000006e6974726f76726f6f6d" target="_blank" rel="noreferrer">the <code>nitrovroom</code> namespace</a>.</p></li></ol><p>Congratulations! Your Arbitrum Nitro rollup testnet is now posting to Mocha testnet for data availability. 🏎️</p>',4),io=JSON.parse('{"title":"Deploy an Arbitrum rollup to Mocha testnet","description":"An overview of the deploying Arbitrum Nitro and Celestia rollup to Mocha testnet.","frontmatter":{"description":"An overview of the deploying Arbitrum Nitro and Celestia rollup to Mocha testnet.","head":[["meta",{"name":"og:title","content":"Deploy an Arbitrum rollup to Mocha testnet | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/arbitrum-mocha.md","filePath":"developers/arbitrum-mocha.md","lastUpdated":1706747512000}'),eo={name:"developers/arbitrum-mocha.md"},Eo=Object.assign(eo,{setup(to){return(po,co)=>(t(),p("div",null,[_,s("ol",null,[s("li",null,[s("p",null,[o("Fully sync and fund a light node on Mocha testnet using the binary. This will use default node store of "),s("code",null,"$HOME/.celestia-light-"+l(e(a).mochaChainId),1),o(". This is what the docker-compose setup for the testnode will pick up as a node store. If you choose to use another node store, you will need to make changes yourself to reflect this.")])]),s("li",null,[r,s("div",i,[E,d,s("pre",y,[s("code",null,[h,o(`
`),T,o(`
`),u,o(`
`),C,o(`
`),F,o(`
`),A,o(`
`),f,o(`
`),S,o(`
`),m,o(`
`),g,o(`
`),P,o(`
`),I,o(`
`),b,o(`
`),V,o(`
`),D,o(`
`),B,o(`
`),q,o(`
`),N,o(`
`),v,o(`
`),s("span",k,[R,O,x,s("span",w,"/.celestia-light-"+l(e(a).mochaChainId)+"/:/home/celestia/.celestia-light-"+l(e(a).mochaChainId)+"/",1),M]),o(`
`),H,o(`
`),L,o(`
`),$,o(`
`),K,o(`
`),U,o(`
`),W])]),s("pre",Y,[s("code",null,[j,o(`
`),G,o(`
`),J,o(`
`),Q,o(`
`),z,o(`
`),X,o(`
`),Z,o(`
`),ss,o(`
`),os,o(`
`),ns,o(`
`),as,o(`
`),ls,o(`
`),es,o(`
`),ts,o(`
`),ps,o(`
`),cs,o(`
`),_s,o(`
`),rs,o(`
`),is,o(`
`),s("span",Es,[ds,ys,hs,s("span",Ts,"/.celestia-light-"+l(e(a).mochaChainId)+"/:/home/celestia/.celestia-light-"+l(e(a).mochaChainId)+"/",1),us]),o(`
`),Cs,o(`
`),Fs,o(`
`),As,o(`
`),fs,o(`
`),Ss,o(`
`),ms])])]),gs]),s("li",null,[Ps,s("div",Is,[bs,Vs,s("pre",Ds,[s("code",null,[Bs,o(`
`),qs,o(`
`),s("span",Ns,[vs,ks,s("span",Rs,'"/home/celestia/.celestia-light-'+l(e(a).mochaChainId)+'/"',1),Os]),o(`
`),xs,o(`
`),ws,o(`
`),Ms,o(`
`),Hs,o(`
`),Ls,o(`
`),$s])]),s("pre",Ks,[s("code",null,[Us,o(`
`),Ws,o(`
`),s("span",Ys,[js,Gs,s("span",Js,'"/home/celestia/.celestia-light-'+l(e(a).mochaChainId)+'/"',1),Qs]),o(`
`),zs,o(`
`),Xs,o(`
`),Zs,o(`
`),so,o(`
`),oo,o(`
`),no])])])]),ao]),lo]))}});export{io as __pageData,Eo as default};
