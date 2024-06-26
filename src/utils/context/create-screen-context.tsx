"use client";
import type { FunctionComponent, ReactNode } from "react";
import { createContext } from "./create-context";
import { useContextSelector as useBaseContextSelector } from "./use-context-selector";

type ProviderName<Name extends string> = `${Name}Provider`

type UseContextSelectorName<Name extends string> = `use${Name}ContextSelector`

type ProviderComponent<Value> = FunctionComponent<{ value: Value; children: ReactNode }>

type UseContextSelectorHook<Value> = <Selected>(selector: (value: Value) => Selected) => Selected

type ResultProperties<Name extends string> = ProviderName<Name> | UseContextSelectorName<Name>

type CreateScreenContextResult<Name extends string, Value> = {
  [key in ResultProperties<Name>]: key extends ProviderName<Name>
    ? ProviderComponent<Value>
    : key extends UseContextSelectorName<Name>
    ? UseContextSelectorHook<Value>
    : never
}

export function createScreenContext<Name extends string>(contextName: Name) {
  return function <Value>() {
    const Context = createContext<Value>();
    const Provider: ProviderComponent<Value> = ({ value, children }: { value: Value, children: ReactNode }) => (
      <Context.Provider value={value}>{children}</Context.Provider>
    );
    const providerName = `${contextName}Provider`;
    Provider.displayName = providerName;
    const useContextSelector: UseContextSelectorHook<Value> = (selector) =>
      useBaseContextSelector(Context, selector);

    return {
      [providerName]: Provider,
      [`use${contextName}ContextSelector`]: useContextSelector,
    } as CreateScreenContextResult<Name, Value>;
  };
}
