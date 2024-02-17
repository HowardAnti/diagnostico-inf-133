"use client"
import React from "react";
import styles from './PokemonCard.module.css';
import { useState, useEffect } from "react";

function PokemonCard({pokenumber}){

    const url="https://pokeapi.co/api/v2/pokemon/"+pokenumber;

    const [pokemon,setPokemon]=useState({});
    const [pokeabouts,setPokeabouts]=useState([]);
    const [pokestats,setPokestats]=useState([]);
    const [poketypes,setPoketypes]=useState([]);
    const [pokeabilities,setPokeabilities]=useState([]);

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            
            setPokemon(
                {id: String(data.id).padStart(3,'0'), name:data.name, image:data.sprites.front_default}
            ),
            setPokeabouts([
                {parameter: "height", value: data.height/10+" m"},
                {parameter: "weight", value: data.weight/10+" kg"},
            ]),
            setPokestats(data.stats),
            setPoketypes(data.types),
            setPokeabilities(data.abilities)
        })
    },[pokenumber]);



    return(
        <div className={styles.maincontainer} >
            <div className={styles.titles} >
                <span className={styles.subtitle} >My Pokemon</span>
                <span className={styles.maintitle} >{pokemon.name}</span>
            </div>
            <div className={styles.pokeimage} >
                <span className={styles.id} >{"#"+pokemon.id}</span>
                <figure>
                    <img src={pokemon.image} />
                </figure>
            </div>
            <div className={styles.pokeinfo} >
                <span className={styles.stat} >About</span>
                <div className={styles.horizontal} ></div>
                <div className={styles.linecontainer} >
                    <div className={styles.infoline} >
                        <span className={styles.parameter} >Types</span>
                        <div className={styles.items} >
                        {poketypes.map((poketype,index)=>{
                            return(
                                <span key={index} className={styles.valuet} >{poketype.type.name}</span>
                            )
                        })}
                        </div>
                    </div>
                    {pokeabouts.map(pokeabout=>{
                        return(
                            <div key={pokeabout.id} className={styles.infoline} >
                                <span className={styles.parameter} >{pokeabout.parameter}</span>
                                <span className={styles.value} style={{textTransform: 'lowercase'}} >{pokeabout.value}</span>
                            </div>
                        )
                    })}
                    <div className={styles.infoline} >
                        <span className={styles.parameter} >Abilities</span>
                        <div className={styles.items} >
                        {pokeabilities.map((pokeability,index)=>{
                            return(
                                <span key={index} className={styles.valuet} >{pokeability.ability.name}</span>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <span className={styles.stat} >Stats</span>
                <div className={styles.linecontainer} >
                    {pokestats.map((pokestat,index)=>{
                        if(pokestat.stat.name!=="special-attack"&&pokestat.stat.name!=="special-defense"){
                            return(
                                <div key={index} className={styles.infoline} >
                                    <span className={styles.parameter} >{pokestat.stat.name}</span>
                                    <span className={styles.value} >{pokestat.base_stat}</span>
                                </div>
                                
                            )
                        }
                        else{
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;