/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L2GatewayRouter,
  L2GatewayRouterInterface,
} from '../L2GatewayRouter'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newDefaultGateway',
        type: 'address',
      },
    ],
    name: 'DefaultGatewayUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'GatewaySet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userFrom',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userTo',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'TransferRouted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'getGateway',
    outputs: [
      {
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_counterpartGateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_defaultGateway',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1TokenToGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newL2DefaultGateway',
        type: 'address',
      },
    ],
    name: 'setDefaultGateway',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_l1Token',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_gateway',
        type: 'address[]',
      },
    ],
    name: 'setGateway',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50611161806100206000396000f3fe6080604052600436106100bd5760003560e01c8063a0c76a961161006f578063a0c76a9614610423578063a7e28d48146104fc578063bda009fe1461052f578063d2ce7d6514610562578063ed08fdc6146105fc578063f7c9362f1461062f578063f887ea4014610662576100bd565b806303295802146100c25780632db09c1c146100f35780632e567b36146101085780634201f985146101a0578063485cc955146102d05780637b3a3c8b1461030b57806395fcea781461040e575b600080fd5b3480156100ce57600080fd5b506100d7610677565b604080516001600160a01b039092168252519081900360200190f35b3480156100ff57600080fd5b506100d7610686565b61019e600480360360a081101561011e57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561016057600080fd5b82018360208201111561017257600080fd5b803590602001918460018302840111600160201b8311171561019357600080fd5b509092509050610695565b005b3480156101ac57600080fd5b5061019e600480360360408110156101c357600080fd5b810190602081018135600160201b8111156101dd57600080fd5b8201836020820111156101ef57600080fd5b803590602001918460208302840111600160201b8311171561021057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561025f57600080fd5b82018360208201111561027157600080fd5b803590602001918460208302840111600160201b8311171561029257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506106d9945050505050565b3480156102dc57600080fd5b5061019e600480360360408110156102f357600080fd5b506001600160a01b0381358116916020013516610853565b6103996004803603608081101561032157600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561035b57600080fd5b82018360208201111561036d57600080fd5b803590602001918460018302840111600160201b8311171561038e57600080fd5b509092509050610863565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103d35781810151838201526020016103bb565b50505050905090810190601f1680156104005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561041a57600080fd5b5061019e61087f565b34801561042f57600080fd5b50610399600480360360a081101561044657600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561048857600080fd5b82018360208201111561049a57600080fd5b803590602001918460018302840111600160201b831117156104bb57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108dc945050505050565b34801561050857600080fd5b506100d76004803603602081101561051f57600080fd5b50356001600160a01b0316610ade565b34801561053b57600080fd5b506100d76004803603602081101561055257600080fd5b50356001600160a01b0316610b8f565b610399600480360360c081101561057857600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156105be57600080fd5b8201836020820111156105d057600080fd5b803590602001918460018302840111600160201b831117156105f157600080fd5b509092509050610bf1565b34801561060857600080fd5b506100d76004803603602081101561061f57600080fd5b50356001600160a01b0316610e46565b34801561063b57600080fd5b5061019e6004803603602081101561065257600080fd5b50356001600160a01b0316610e61565b34801561066e57600080fd5b506100d7610f35565b6003546001600160a01b031681565b6000546001600160a01b031681565b6040805162461bcd60e51b815260206004820152601460248201527327a7262cafa7aaaa2127aaa7222fa927aaaa22a960611b604482015290519081900360640190fd5b6000546001600160a01b031633148061070d57506000546001600160a01b031661070233610f44565b6001600160a01b0316145b610759576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b805182511461076457fe5b60005b825181101561084e5781818151811061077c57fe5b60200260200101516002600085848151811061079457fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508181815181106107ec57fe5b60200260200101516001600160a01b031683828151811061080957fe5b60200260200101516001600160a01b03167f812ca95fe4492a9e2d1f2723c2c40c03a60a27b059581ae20ac4e4d73bfba35460405160405180910390a3600101610767565b505050565b61085f82600083610f53565b5050565b60606108758686866000808888610bf1565b9695505050505050565b6000610889610fca565b9050336001600160a01b038216146108d9576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b606060006108e987610b8f565b9050806001600160a01b031663a0c76a9688888888886040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610999578181015183820152602001610981565b50505050905090810190601f1680156109c65780820380516001836020036101000a031916815260200191505b50965050505050505060006040518083038186803b1580156109e757600080fd5b505afa1580156109fb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610a2457600080fd5b8101908080516040519392919084600160201b821115610a4357600080fd5b908301906020820185811115610a5857600080fd5b8251600160201b811182820188101715610a7157600080fd5b82525081516020918201929091019080838360005b83811015610a9e578181015183820152602001610a86565b50505050905090810190601f168015610acb5780820380516001836020036101000a031916815260200191505b5060405250505091505095945050505050565b600080610aea83610b8f565b90506001600160a01b038116610b04576000915050610b8a565b806001600160a01b031663a7e28d48846040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610b5a57600080fd5b505afa158015610b6e573d6000803e3d6000fd5b505050506040513d6020811015610b8457600080fd5b50519150505b919050565b6001600160a01b038082166000908152600260205260409020541680610bbd57506003546001600160a01b03165b6001600160a01b03811660011480610be45750610be2816001600160a01b0316610fef565b155b15610b8a57506000610b8a565b60606000610bfe89610b8f565b90506060610c0d338686610ff5565b604080516001600160a01b0385811682529151929350818c169233928e16917f85291dff2161a93c2f12c819d31889c96c63042116f5bc5a205aa701c2c429f5919081900360200190a4816001600160a01b031663d2ce7d65348c8c8c8c8c886040518863ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b0316815260200185815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610cfb578181015183820152602001610ce3565b50505050905090810190601f168015610d285780820380516001836020036101000a031916815260200191505b509750505050505050506000604051808303818588803b158015610d4b57600080fd5b505af1158015610d5f573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f191682016040526020811015610d8957600080fd5b8101908080516040519392919084600160201b821115610da857600080fd5b908301906020820185811115610dbd57600080fd5b8251600160201b811182820188101715610dd657600080fd5b82525081516020918201929091019080838360005b83811015610e03578181015183820152602001610deb565b50505050905090810190601f168015610e305780820380516001836020036101000a031916815260200191505b5060405250505092505050979650505050505050565b6002602052600090815260409020546001600160a01b031681565b6000546001600160a01b0316331480610e9557506000546001600160a01b0316610e8a33610f44565b6001600160a01b0316145b610ee1576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b600380546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f3a8f8eb961383a94d41d193e16a3af73eaddfd5764a4c640257323a1603ac3319181900360200190a150565b6001546001600160a01b031681565b61111061111160901b01190190565b6001600160a01b03821615610f9c576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b610fa6838361105f565b600380546001600160a01b0319166001600160a01b03929092169190911790555050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b3b151590565b606083838360405160200180846001600160a01b03166001600160a01b0316815260200180602001828103825284848281815260200192508082843760008184015260408051601f19601f9093018316909401848103909201845252509998505050505050505050565b6001600160a01b0382166110b0576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b0316156110fd576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905556fea264697066735822122092dd151f6f6a3a2a6f8e043062a6e6b19d2007b565dbdfdc527f39b7ee54c4b164736f6c634300060b0033'

export class L2GatewayRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2GatewayRouter> {
    return super.deploy(overrides || {}) as Promise<L2GatewayRouter>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2GatewayRouter {
    return super.attach(address) as L2GatewayRouter
  }
  connect(signer: Signer): L2GatewayRouter__factory {
    return super.connect(signer) as L2GatewayRouter__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L2GatewayRouterInterface {
    return new utils.Interface(_abi) as L2GatewayRouterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2GatewayRouter {
    return new Contract(address, _abi, signerOrProvider) as L2GatewayRouter
  }
}
