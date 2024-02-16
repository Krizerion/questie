import { WritableSignal } from '@angular/core';

export function patchSignal<T>(signal: WritableSignal<T>, partialState: Partial<T>): void {
  signal.update((state) => ({
    ...state,
    ...partialState,
  }));
}

export function equal<T>(a: T, b: T): boolean {
  return a === b;
}
