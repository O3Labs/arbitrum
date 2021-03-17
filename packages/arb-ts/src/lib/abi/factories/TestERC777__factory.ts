/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { TestERC777 } from '../TestERC777'

export class TestERC777__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<TestERC777> {
    return super.deploy(overrides || {}) as Promise<TestERC777>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): TestERC777 {
    return super.attach(address) as TestERC777
  }
  connect(signer: Signer): TestERC777__factory {
    return super.connect(signer) as TestERC777__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC777 {
    return new Contract(address, _abi, signerOrProvider) as TestERC777
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenHolder',
        type: 'address',
      },
    ],
    name: 'AuthorizedOperator',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'operatorData',
        type: 'bytes',
      },
    ],
    name: 'Burned',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'operatorData',
        type: 'bytes',
      },
    ],
    name: 'Minted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenHolder',
        type: 'address',
      },
    ],
    name: 'RevokedOperator',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'operatorData',
        type: 'bytes',
      },
    ],
    name: 'Sent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'holder',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenHolder',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultOperators',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'granularity',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenHolder',
        type: 'address',
      },
    ],
    name: 'isOperatorFor',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'operatorData',
        type: 'bytes',
      },
    ],
    name: 'operatorBurn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'operatorData',
        type: 'bytes',
      },
    ],
    name: 'operatorSend',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'send',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'holder',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405260016004553480156200001657600080fd5b506200004d336302faf08060405180602001604052806000815250604051806020016040528060008152506200005360201b60201c565b620005e4565b6001600160a01b038416620000af576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b33620000c881600087876001600160e01b03620002b916565b620000e484600154620002bf60201b62000f171790919060201c565b6001556001600160a01b038516600090815260208181526040909120546200011791869062000f17620002bf821b17901c565b6001600160a01b0386166000908152602081905260408120919091556200014f9082908787878760016001600160e01b036200032116565b846001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015620001d0578181015183820152602001620001b6565b50505050905090810190601f168015620001fe5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156200023357818101518382015260200162000219565b50505050905090810190601f168015620002615780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516001600160a01b038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b50505050565b6000828201838110156200031a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6040805163555ddc6560e11b81526001600160a01b03871660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b158015620003a657600080fd5b505afa158015620003bb573d6000803e3d6000fd5b505050506040513d6020811015620003d257600080fd5b505190506001600160a01b038116156200057057806001600160a01b03166223de298989898989896040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156200049a57818101518382015260200162000480565b50505050905090810190601f168015620004c85780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015620004fd578181015183820152602001620004e3565b50505050905090810190601f1680156200052b5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b1580156200055157600080fd5b505af115801562000566573d6000803e3d6000fd5b50505050620005d4565b8115620005d45762000596866001600160a01b0316620005de60201b62000f711760201c565b15620005d45760405162461bcd60e51b815260040180806020018281038252604d8152602001806200239c604d913960600191505060405180910390fd5b5050505050505050565b3b151590565b611da880620005f46000396000f3fe608060405234801561001057600080fd5b50600436106100f65760003560e01c8063959b8c3f11610092578063959b8c3f146103f757806395d89b411461041d5780639bd9bbc614610425578063a9059cbb146104de578063d95b63711461050a578063dd62ed3e14610538578063fad8b32a14610566578063fc673c4f1461058c578063fe9d9303146106ca576100f6565b806306e48538146100fb57806306fdde0314610153578063095ea7b3146101d057806318160ddd1461021057806323b872dd1461022a578063313ce56714610260578063556f0dc71461027e57806362ad1b831461028657806370a08231146103d1575b600080fd5b610103610775565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561013f578181015183820152602001610127565b505050509050019250505060405180910390f35b61015b6107d7565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561019557818101518382015260200161017d565b50505050905090810190601f1680156101c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101fc600480360360408110156101e657600080fd5b506001600160a01b038135169060200135610861565b604080519115158252519081900360200190f35b610218610879565b60408051918252519081900360200190f35b6101fc6004803603606081101561024057600080fd5b506001600160a01b0381358116916020810135909116906040013561087f565b6102686109fb565b6040805160ff9092168252519081900360200190f35b610218610a00565b6103cf600480360360a081101561029c57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156102d657600080fd5b8201836020820111156102e857600080fd5b803590602001918460018302840111600160201b8311171561030957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561035b57600080fd5b82018360208201111561036d57600080fd5b803590602001918460018302840111600160201b8311171561038e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a06945050505050565b005b610218600480360360208110156103e757600080fd5b50356001600160a01b0316610a61565b6103cf6004803603602081101561040d57600080fd5b50356001600160a01b0316610a7c565b61015b610b7d565b6103cf6004803603606081101561043b57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561046a57600080fd5b82018360208201111561047c57600080fd5b803590602001918460018302840111600160201b8311171561049d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610bde945050505050565b6101fc600480360360408110156104f457600080fd5b506001600160a01b038135169060200135610c01565b6101fc6004803603604081101561052057600080fd5b506001600160a01b0381358116916020013516610cd3565b6102186004803603604081101561054e57600080fd5b506001600160a01b0381358116916020013516610d75565b6103cf6004803603602081101561057c57600080fd5b50356001600160a01b0316610da0565b6103cf600480360360808110156105a257600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156105d157600080fd5b8201836020820111156105e357600080fd5b803590602001918460018302840111600160201b8311171561060457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561065657600080fd5b82018360208201111561066857600080fd5b803590602001918460018302840111600160201b8311171561068957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610ea1945050505050565b6103cf600480360360408110156106e057600080fd5b81359190810190604081016020820135600160201b81111561070157600080fd5b82018360208201111561071357600080fd5b803590602001918460018302840111600160201b8311171561073457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610ef8945050505050565b606060058054806020026020016040519081016040528092919081815260200182805480156107cd57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116107af575b5050505050905090565b60028054604080516020601f60001961010060018716150201909416859004938401819004810282018101909252828152606093909290918301828280156107cd5780601f10610835576101008083540402835291602001916107cd565b820191906000526020600020905b81548152906001019060200180831161084357509395945050505050565b60003361086f818585610f77565b5060019392505050565b60015490565b60006001600160a01b0383166108c65760405162461bcd60e51b8152600401808060200182810382526024815260200180611c8e6024913960400191505060405180910390fd5b6001600160a01b03841661090b5760405162461bcd60e51b8152600401808060200182810382526026815260200180611d076026913960400191505060405180910390fd5b600033905061093c818686866040518060200160405280600081525060405180602001604052806000815250611063565b6109688186868660405180602001604052806000815250604051806020016040528060008152506112ab565b6109c285826109bd86604051806060016040528060298152602001611cde602991396001600160a01b03808c166000908152600960209081526040808320938b1683529290522054919063ffffffff6114d016565b610f77565b6109f08186868660405180602001604052806000815250604051806020016040528060008152506000611567565b506001949350505050565b601290565b60045490565b610a103386610cd3565b610a4b5760405162461bcd60e51b815260040180806020018281038252602c815260200180611cb2602c913960400191505060405180910390fd5b610a5a85858585856001611807565b5050505050565b6001600160a01b031660009081526020819052604090205490565b336001600160a01b0382161415610ac45760405162461bcd60e51b8152600401808060200182810382526024815260200180611bfc6024913960400191505060405180910390fd5b6001600160a01b03811660009081526006602052604090205460ff1615610b15573360009081526008602090815260408083206001600160a01b03851684529091529020805460ff19169055610b44565b3360009081526007602090815260408083206001600160a01b03851684529091529020805460ff191660011790555b60405133906001600160a01b038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107cd5780601f10610835576101008083540402835291602001916107cd565b610bfc33848484604051806020016040528060008152506001611807565b505050565b60006001600160a01b038316610c485760405162461bcd60e51b8152600401808060200182810382526024815260200180611c8e6024913960400191505060405180910390fd5b6000339050610c79818286866040518060200160405280600081525060405180602001604052806000815250611063565b610ca58182868660405180602001604052806000815250604051806020016040528060008152506112ab565b61086f8182868660405180602001604052806000815250604051806020016040528060008152506000611567565b6000816001600160a01b0316836001600160a01b03161480610d3e57506001600160a01b03831660009081526006602052604090205460ff168015610d3e57506001600160a01b0380831660009081526008602090815260408083209387168352929052205460ff16155b80610d6e57506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff165b9392505050565b6001600160a01b03918216600090815260096020908152604080832093909416825291909152205490565b6001600160a01b038116331415610de85760405162461bcd60e51b8152600401808060200182810382526021815260200180611c206021913960400191505060405180910390fd5b6001600160a01b03811660009081526006602052604090205460ff1615610e3c573360009081526008602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610e68565b3360009081526007602090815260408083206001600160a01b03851684529091529020805460ff191690555b60405133906001600160a01b038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b610eab3385610cd3565b610ee65760405162461bcd60e51b815260040180806020018281038252602c815260200180611cb2602c913960400191505060405180910390fd5b610ef2848484846118d3565b50505050565b610f13338383604051806020016040528060008152506118d3565b5050565b600082820183811015610d6e576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3b151590565b6001600160a01b038316610fbc5760405162461bcd60e51b8152600401808060200182810382526025815260200180611b6c6025913960400191505060405180910390fd5b6001600160a01b0382166110015760405162461bcd60e51b8152600401808060200182810382526023815260200180611d506023913960400191505060405180910390fd5b6001600160a01b03808416600081815260096020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6040805163555ddc6560e11b81526001600160a01b03871660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b1580156110e757600080fd5b505afa1580156110fb573d6000803e3d6000fd5b505050506040513d602081101561111157600080fd5b505190506001600160a01b038116156112a257806001600160a01b03166375ab97828888888888886040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156111d75781810151838201526020016111bf565b50505050905090810190601f1680156112045780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561123757818101518382015260200161121f565b50505050905090810190601f1680156112645780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b15801561128957600080fd5b505af115801561129d573d6000803e3d6000fd5b505050505b50505050505050565b6112b786868686610ef2565b6112fa83604051806060016040528060278152602001611bb3602791396001600160a01b038816600090815260208190526040902054919063ffffffff6114d016565b6001600160a01b03808716600090815260208190526040808220939093559086168152205461132f908463ffffffff610f1716565b600080866001600160a01b03166001600160a01b0316815260200190815260200160002081905550836001600160a01b0316856001600160a01b0316876001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156113e05781810151838201526020016113c8565b50505050905090810190601f16801561140d5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611440578181015183820152602001611428565b50505050905090810190601f16801561146d5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a4836001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3505050505050565b6000818484111561155f5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561152457818101518382015260200161150c565b50505050905090810190601f1680156115515780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6040805163555ddc6560e11b81526001600160a01b03871660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b1580156115eb57600080fd5b505afa1580156115ff573d6000803e3d6000fd5b505050506040513d602081101561161557600080fd5b505190506001600160a01b038116156117a957806001600160a01b03166223de298989898989896040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156116da5781810151838201526020016116c2565b50505050905090810190601f1680156117075780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561173a578181015183820152602001611722565b50505050905090810190601f1680156117675780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b15801561178c57600080fd5b505af11580156117a0573d6000803e3d6000fd5b505050506117fd565b81156117fd576117c1866001600160a01b0316610f71565b156117fd5760405162461bcd60e51b815260040180806020018281038252604d815260200180611c41604d913960600191505060405180910390fd5b5050505050505050565b6001600160a01b03861661184c5760405162461bcd60e51b8152600401808060200182810382526022815260200180611b916022913960400191505060405180910390fd5b6001600160a01b0385166118a7576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b336118b6818888888888611063565b6118c48188888888886112ab565b6112a281888888888888611567565b6001600160a01b0384166119185760405162461bcd60e51b8152600401808060200182810382526022815260200180611bda6022913960400191505060405180910390fd5b3361192881866000878787611063565b6119358186600087610ef2565b61197884604051806060016040528060238152602001611d2d602391396001600160a01b038816600090815260208190526040902054919063ffffffff6114d016565b6001600160a01b0386166000908152602081905260409020556001546119a4908563ffffffff611b0e16565b600181905550846001600160a01b0316816001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611a29578181015183820152602001611a11565b50505050905090810190601f168015611a565780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611a89578181015183820152602001611a71565b50505050905090810190601f168015611ab65780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516000916001600160a01b038816917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b600082821115611b65576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe4552433737373a20617070726f76652066726f6d20746865207a65726f20616464726573734552433737373a2073656e642066726f6d20746865207a65726f20616464726573734552433737373a207472616e7366657220616d6f756e7420657863656564732062616c616e63654552433737373a206275726e2066726f6d20746865207a65726f20616464726573734552433737373a20617574686f72697a696e672073656c66206173206f70657261746f724552433737373a207265766f6b696e672073656c66206173206f70657261746f724552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e744552433737373a207472616e7366657220746f20746865207a65726f20616464726573734552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f7220666f7220686f6c6465724552433737373a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654552433737373a207472616e736665722066726f6d20746865207a65726f20616464726573734552433737373a206275726e20616d6f756e7420657863656564732062616c616e63654552433737373a20617070726f766520746f20746865207a65726f2061646472657373a2646970667358221220032bed26dbc9bb3e8e1ec6c528b59371cd0f07ff7636935a44a90c1625e217a664736f6c634300060b00334552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e74'
