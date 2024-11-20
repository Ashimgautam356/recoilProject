import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { productsAtom } from "../store/recoilStore";



export  function useFetch(url,key){
    const setData = useSetRecoilState(productsAtom(key))
    async function fetchData() {
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data); // Debugging
          setData(data);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
    useEffect(()=>{
        fetchData()
    },[url,key])
}