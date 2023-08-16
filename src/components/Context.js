import { createContext, useState } from 'react';

const RerenderContext = createContext();

function Provider({ children }) {

    const changeRerender = () => {
        setRerender(!reRender)
    }

    const [reRender, setRerender] = useState(true);

    const value = {
        reRender,
        changeRerender
    }

    return (
        <RerenderContext.Provider value={value}>
            {children}
        </RerenderContext.Provider>
    )
}

export { RerenderContext, Provider }