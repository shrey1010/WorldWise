import { createContext } from "react";
import { useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({children}) {

    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

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

    async function getCity(id){
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:9000/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
      } catch {
        alert("Error fetching cities");
      } finally {
        setIsLoading(false);
      }
    }

    async function createCity(newCity) {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:9000/cities`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCity)
        });
       const data =await res.json();
       setCities(cities=>[...cities, data]);
      } catch {
        alert("Error creating cities");
      } finally {
        setIsLoading(false);
      }
    }

    async function deleteCity(id) {
      try {
        setIsLoading(true);
        await fetch(`http://localhost:9000/cities/${id}`, {
          method: "DELETE",
        });
        setCities((cities) => cities.filter((city) => city.id !== id));
      } catch {
        alert("Error deleting cities");
      } finally {
        setIsLoading(false);
      }
    }

    return (
        <CitiesContext.Provider value={{cities, isLoading,currentCity, getCity, createCity, deleteCity}}>
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