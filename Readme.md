**ENSnap, an ENS toolbox withing metamask**

*What is ENSnap?*

ENSnap is a toolbox that will contain everything needed to interact with ENS, from name resolution and lookup to domain registration and configuration.

*Who is the snap for?*

This snap is for dapp developper that want to include a deeper ENS integration. Address lookup will allow dapps to get rid of hex addresses and domain registration and configuration will help integrate ENS registration into their workflow.

While ENS management tools already exist, interfacing them with a web3 provider can be painfull, particularly when the app lives on multiple blockchains.

I believe most, if not all, ethereum addresses should be names (and reverse registered) through ENS. While ENSnapis is not a breakthrough by any standard, it might contribute, in some way, to facilitate the integration of ENS in dapps, and more particularly wallets.

*What is the minimal permission needed?*

For ENSnap to work, the snap must have the hability to read smart contracts. This is a minimal permission that is today preventing real tests of ENSnap. Additionnaly, setting up domains will require sending transaction on behalf of the user. This can be seen as an extra, that user could enable or not.

*ENSnap is an EthDenver 2020 hack*
