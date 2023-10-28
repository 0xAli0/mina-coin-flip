import { Field, SmartContract, state, State, method } from 'o1js';

/**
 * Basic Example
 * See https://docs.minaprotocol.com/zkapps for more info.
 *
 * The CoinFlip contract initializes the state variable 'num' to be a Field(1) value by default when deployed.
 * When the 'update' method is called, the CoinFlip contract generates a random number between 1 and 10.
 * If the number is odd, it sets the 'num' state to 0; if even, sets it to 1.
 *
 * This file is safe to delete and replace with your own contract.
 */
export class CoinFlip extends SmartContract {
  @state(Field) num = State<Field>();

  init() {
    super.init();
    this.num.set(Field(1));
  }

  @method flip() {
    const randomValue = Math.floor(Math.random() * 10) + 1; // 1 ile 10 arasında rastgele bir değer üretir
    const result = randomValue % 2 === 0 ? Field(1) : Field(0); // Tekse 0, çiftse 1 yazdırır
    this.num.set(result);
  }
}
