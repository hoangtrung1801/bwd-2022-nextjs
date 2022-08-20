import React from "react";

export type CounterContextType = {
    count: number;
    increase: () => void;
    decrease: () => void;
};

const CounterContext = React.createContext<CounterContextType>({
    count: 0,
    increase: () => {},
    decrease: () => {},
});

export default CounterContext;
