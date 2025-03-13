"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Welcome from "@/components/Welcome";
import { useState, useRef } from "react";

function Square({prop,click}:any){
 
  return(
    <button className={styles.square} onClick={click}>{prop||null}</button>
  )
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [circle, setCircle] = useState(false);
  const [winner,setWinner]=useState("none");

  function handleClick(index: number) {
    if (squares[index] || winner !== "none") return; 
  
    const newSquares = squares.slice();
    newSquares[index] = circle ? "O" : "X";
  
    const gameWinner = calculateWinner(newSquares); 
    if (gameWinner) {
      setWinner(gameWinner);
    }
  
    setSquares(newSquares);
    setCircle(!circle);
  }
  

  function calculateWinner(squares: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; 
      }
    }
    if (squares.every((el: string) => el)) return "Draw"; 
    return null;
  }
  

  
  let status = "";
  if (winner !== "none") {
    status = winner === "Draw" ? "Draw!" : `Winner: ${winner}`;
  } else {
    status = `Next player: ${circle ? "O" : "X"}`;
  }
  
  return <main className={styles.main}>
                <h1 className={styles.title}>TIC-TAC-TOE</h1>
               <div className={styles.cont}>
                <div className={styles.status} >{status}</div>
                <div className={styles.board}>
                  <Square prop={squares[0]} click={()=>handleClick(0)}/>
                  <Square prop={squares[1]} click={()=>handleClick(1)}/>
                  <Square prop={squares[2]} click={()=>handleClick(2)}/>

         </div>
         <div className={styles.boardM}>
           <div className={styles.board}>
           <Square prop={squares[3]} click={()=>handleClick(3)}/>
           <Square prop={squares[4]} click={()=>handleClick(4)}/>
           <Square prop={squares[5]} click={()=>handleClick(5)}/>

           </div>
           <div className={styles.board}>
           <Square prop={squares[6]} click={()=>handleClick(6)}/>
           <Square prop={squares[7]} click={()=>handleClick(7)}/>
           <Square prop={squares[8]} click={()=>handleClick(8)}/>

           </div></div>
           <button 
  className={styles.button} 
  onClick={() => {
    setSquares(Array(9).fill(null));
    setWinner("none");
  }}
>
  RESTART
</button>
</div>
   </main>;
}
