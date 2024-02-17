"use client"

import React, { useState,useEffect } from "react";
import styles from './PokemonList.module.css'
import PokemonCard from "./PokemonCard";

function PokemonList({number}){

    const [pokemons,setPokemons]=useState([]);
    const url="https://pokeapi.co/api/v2/pokemon?offset=0&limit="+number*5;

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setPokemons(data.results);
        })
    },[number])



    return(
        <div className={styles.maincontainer} >
            {pokemons.map((pokemon,index)=>{
                if((index+1)%5==0){
                    return(
                        <PokemonCard key={index} pokenumber={pokemon.name} />
                    )
                }
                else{
                    return null;
                }
            })}
        </div>
    )
}

export default PokemonList;