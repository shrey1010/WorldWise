import { createContext } from "react";
import { useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({children}) {

    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
    async function fetchCities() {
        try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:9000/cities`);
        const data = await res.json();
        setCities(data);
        } catch {
        alert("Error fetching cities");
        } finally {
        setIsLoading(false);
        }
    }
    fetchCities();
    }, []);

    return (
        <CitiesContext.Provider value={{cities, isLoading}}>
            {children}
        </CitiesContext.Provider>
    );
}

function useCities(){
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error("CitiesContext was used outside of its Provider");
    return context;
}

export {CitiesProvider, useCities};