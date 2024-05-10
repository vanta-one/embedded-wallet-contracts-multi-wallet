/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface TestAccountInterface extends Interface {
  getFunction(nameOrSignature: "testClone"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "CloneCreated"): EventFragment;

  encodeFunctionData(functionFragment: "testClone", values?: undefined): string;

  decodeFunctionResult(functionFragment: "testClone", data: BytesLike): Result;
}

export namespace CloneCreatedEvent {
  export type InputTuple = [addr: AddressLike];
  export type OutputTuple = [addr: string];
  export interface OutputObject {
    addr: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TestAccount extends BaseContract {
  connect(runner?: ContractRunner | null): TestAccount;
  waitForDeployment(): Promise<this>;

  interface: TestAccountInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  testClone: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "testClone"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "CloneCreated"
  ): TypedContractEvent<
    CloneCreatedEvent.InputTuple,
    CloneCreatedEvent.OutputTuple,
    CloneCreatedEvent.OutputObject
  >;

  filters: {
    "CloneCreated(address)": TypedContractEvent<
      CloneCreatedEvent.InputTuple,
      CloneCreatedEvent.OutputTuple,
      CloneCreatedEvent.OutputObject
    >;
    CloneCreated: TypedContractEvent<
      CloneCreatedEvent.InputTuple,
      CloneCreatedEvent.OutputTuple,
      CloneCreatedEvent.OutputObject
    >;
  };
}