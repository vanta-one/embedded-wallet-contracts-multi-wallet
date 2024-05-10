/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export type AuthenticatorResponseStruct = {
  authenticatorData: BytesLike;
  clientDataTokens: MakeJSON.KeyValueStruct[];
  sigR: BigNumberish;
  sigS: BigNumberish;
};

export type AuthenticatorResponseStructOutput = [
  authenticatorData: string,
  clientDataTokens: MakeJSON.KeyValueStructOutput[],
  sigR: bigint,
  sigS: bigint
] & {
  authenticatorData: string;
  clientDataTokens: MakeJSON.KeyValueStructOutput[];
  sigR: bigint;
  sigS: bigint;
};

export type CosePublicKeyStruct = {
  kty: BigNumberish;
  alg: BigNumberish;
  crv: BigNumberish;
  x: BigNumberish;
  y: BigNumberish;
};

export type CosePublicKeyStructOutput = [
  kty: bigint,
  alg: bigint,
  crv: bigint,
  x: bigint,
  y: bigint
] & { kty: bigint; alg: bigint; crv: bigint; x: bigint; y: bigint };

export declare namespace MakeJSON {
  export type KeyValueStruct = { t: BigNumberish; k: string; v: string };

  export type KeyValueStructOutput = [t: bigint, k: string, v: string] & {
    t: bigint;
    k: string;
    v: string;
  };
}

export declare namespace AccountManager {
  export type RegisterCredStruct = {
    credentialIdHashed: BytesLike;
    resp: AuthenticatorResponseStruct;
    data: BytesLike;
  };

  export type RegisterCredStructOutput = [
    credentialIdHashed: string,
    resp: AuthenticatorResponseStructOutput,
    data: string
  ] & {
    credentialIdHashed: string;
    resp: AuthenticatorResponseStructOutput;
    data: string;
  };

  export type RegisterCredPassStruct = { digest: BytesLike; data: BytesLike };

  export type RegisterCredPassStructOutput = [digest: string, data: string] & {
    digest: string;
    data: string;
  };

  export type NewAccountStruct = {
    hashedUsername: BytesLike;
    credentialId: BytesLike;
    pubkey: CosePublicKeyStruct;
    optionalPassword: BytesLike;
  };

  export type NewAccountStructOutput = [
    hashedUsername: string,
    credentialId: string,
    pubkey: CosePublicKeyStructOutput,
    optionalPassword: string
  ] & {
    hashedUsername: string;
    credentialId: string;
    pubkey: CosePublicKeyStructOutput;
    optionalPassword: string;
  };
}

export interface AccountManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addCredential"
      | "addCredentialPassword"
      | "createAccount"
      | "credentialIdsByUsername"
      | "encryptedTx"
      | "gaspayingAddress"
      | "generateGaslessTx"
      | "getAccount"
      | "personalization"
      | "proxyViewECES256P256"
      | "proxyViewPassword"
      | "salt"
      | "userExists"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addCredential",
    values: [AccountManager.RegisterCredStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "addCredentialPassword",
    values: [AccountManager.RegisterCredPassStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [AccountManager.NewAccountStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "credentialIdsByUsername",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "encryptedTx",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "gaspayingAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "generateGaslessTx",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "personalization",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxyViewECES256P256",
    values: [BytesLike, AuthenticatorResponseStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyViewPassword",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "salt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "userExists",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCredential",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCredentialPassword",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "credentialIdsByUsername",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encryptedTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gaspayingAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateGaslessTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAccount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "personalization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyViewECES256P256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyViewPassword",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "salt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userExists", data: BytesLike): Result;
}

export interface AccountManager extends BaseContract {
  connect(runner?: ContractRunner | null): AccountManager;
  waitForDeployment(): Promise<this>;

  interface: AccountManagerInterface;

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

  addCredential: TypedContractMethod<
    [args: AccountManager.RegisterCredStruct],
    [void],
    "nonpayable"
  >;

  addCredentialPassword: TypedContractMethod<
    [args: AccountManager.RegisterCredPassStruct],
    [void],
    "nonpayable"
  >;

  createAccount: TypedContractMethod<
    [args: AccountManager.NewAccountStruct],
    [void],
    "nonpayable"
  >;

  credentialIdsByUsername: TypedContractMethod<
    [in_hashedUsername: BytesLike],
    [string[]],
    "view"
  >;

  encryptedTx: TypedContractMethod<
    [nonce: BytesLike, ciphertext: BytesLike],
    [void],
    "nonpayable"
  >;

  gaspayingAddress: TypedContractMethod<[], [string], "view">;

  generateGaslessTx: TypedContractMethod<
    [in_data: BytesLike, nonce: BigNumberish, gasPrice: BigNumberish],
    [string],
    "view"
  >;

  getAccount: TypedContractMethod<
    [in_username: BytesLike],
    [[string, string] & { account: string; keypairAddress: string }],
    "view"
  >;

  personalization: TypedContractMethod<[], [string], "view">;

  proxyViewECES256P256: TypedContractMethod<
    [
      in_credentialIdHashed: BytesLike,
      in_resp: AuthenticatorResponseStruct,
      in_data: BytesLike
    ],
    [string],
    "view"
  >;

  proxyViewPassword: TypedContractMethod<
    [in_hashedUsername: BytesLike, in_digest: BytesLike, in_data: BytesLike],
    [string],
    "view"
  >;

  salt: TypedContractMethod<[], [string], "view">;

  userExists: TypedContractMethod<[in_username: BytesLike], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addCredential"
  ): TypedContractMethod<
    [args: AccountManager.RegisterCredStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addCredentialPassword"
  ): TypedContractMethod<
    [args: AccountManager.RegisterCredPassStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createAccount"
  ): TypedContractMethod<
    [args: AccountManager.NewAccountStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "credentialIdsByUsername"
  ): TypedContractMethod<[in_hashedUsername: BytesLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "encryptedTx"
  ): TypedContractMethod<
    [nonce: BytesLike, ciphertext: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "gaspayingAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "generateGaslessTx"
  ): TypedContractMethod<
    [in_data: BytesLike, nonce: BigNumberish, gasPrice: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAccount"
  ): TypedContractMethod<
    [in_username: BytesLike],
    [[string, string] & { account: string; keypairAddress: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "personalization"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxyViewECES256P256"
  ): TypedContractMethod<
    [
      in_credentialIdHashed: BytesLike,
      in_resp: AuthenticatorResponseStruct,
      in_data: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "proxyViewPassword"
  ): TypedContractMethod<
    [in_hashedUsername: BytesLike, in_digest: BytesLike, in_data: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "salt"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "userExists"
  ): TypedContractMethod<[in_username: BytesLike], [boolean], "view">;

  filters: {};
}