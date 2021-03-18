/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface L2DeployerInterface extends ethers.utils.Interface {
  functions: {
    'executeBuddyDeploy(bytes)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'executeBuddyDeploy',
    values: [BytesLike]
  ): string

  decodeFunctionResult(
    functionFragment: 'executeBuddyDeploy',
    data: BytesLike
  ): Result

  events: {
    'Deployed(address,bool)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Deployed'): EventFragment
}

export class L2Deployer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: L2DeployerInterface

  functions: {
    executeBuddyDeploy(
      deployCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'executeBuddyDeploy(bytes)'(
      deployCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>
  }

  executeBuddyDeploy(
    deployCode: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'executeBuddyDeploy(bytes)'(
    deployCode: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  callStatic: {
    executeBuddyDeploy(
      deployCode: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'executeBuddyDeploy(bytes)'(
      deployCode: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    Deployed(_sender: null, _success: null): EventFilter
  }

  estimateGas: {
    executeBuddyDeploy(
      deployCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'executeBuddyDeploy(bytes)'(
      deployCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    executeBuddyDeploy(
      deployCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'executeBuddyDeploy(bytes)'(
      deployCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>
  }
}