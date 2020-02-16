const ethers        = require('ethers');
const provider      = new ethers.providers.Web3Provider(wallet);
provider.ensAddress = provider.ensAddress || '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e';

wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  switch (requestObject.method) {
    case 'resolve':
      try
      {
        return provider.resolveName(requestObject.params);
      }
      catch (e)
      {
        throw new Error(e);
      }

    case 'lookup':
      try
      {
        return provider.lookupAddress(requestObject.params);
      }
      catch (e)
      {
        throw new Error(e);
      }

    default:
      throw new Error('Method not found.')
  }
})
