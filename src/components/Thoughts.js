import React from "react";
import Thought from './Thought'


export default function Thoughts(props) {
  return (
    <div>
        {props.thinks.map((thought) =>
          <div key={thought.text}>
            <Thought text={thought.text} date="" />
          </div>
        )}
      );
    </div>
  )
}