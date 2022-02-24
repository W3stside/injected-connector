interface Ethereum {
  send: unknown
  enable: () => Promise<string[]>
  on?: (method: string, listener: (...args: any[]) => void) => void
  removeListener?: (method: string, listener: (...args: any[]) => void) => void
}

interface Provider {
  identifierKey?: string
}

interface AugmentedEthereum extends Ethereum {
  providers?: Provider[]
}

declare interface Window {
  ethereum?: AugmentedEthereum
}

declare const __DEV__: boolean
