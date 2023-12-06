import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className='flex '>
      <Button name='All' />
      <Button name='Gaming' />
      <Button name='Songs' />
      <Button name='Live' />
      <Button name='Soccer' />
      <Button name='Cricket' />
      <Button name='Cooking' />
      <Button name='Chess' />
      <Button name='Physics' />
      <Button name='Chemistry' />
      <Button name='Maths' />
      <Button name='Zoology' />
    </div>
  );
};

export default ButtonList;
