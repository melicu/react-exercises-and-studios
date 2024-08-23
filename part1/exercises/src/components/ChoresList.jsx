import React from 'react';
import classes from './ChoresList.module.css';


export default function ChoresList () {
   const chores = ["Vacuum", "Run dishwasher", "Mow lawn"];
   return (
      <div>
         <h3 className = {classes.choresHeading}>Chores to Complete</h3>
         <ul>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
         </ul>
      </div>
      );
}