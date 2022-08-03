import { DECREMENT, INCREMENT } from "./counterConstents"

export function counterIncrementAction() {
  return ({
    type: INCREMENT
  })
}

export function counterDecrementAction(){
    return({
        type: DECREMENT
    })
}

