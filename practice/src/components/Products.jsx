import React, { useState } from 'react';

const productList = [
    {name:"Carrot", isFruit: false, id: 1},
    {name:"Tomato", isFruit: false, id: 2},
    {name:"Apple", isFruit: true, id: 3},
    {name:"Banana", isFruit: true, id: 4},
]

function MyButton({count, onClick}){
   
    return (
        <button onClick={onClick}>You Clicked {count} times</button>
    )
}
function Toolbar({onPlayMovie, onUploadImage}){
    return (
        <>
        <CustomButton onClick={onPlayMovie}>Play Movie</CustomButton>
        <button onClick={onUploadImage}>Upload Image</button>
        </>
    )
}

function CustomButton({onClick, children}){
    return(
        <button onClick={onClick}>{children}</button>
    )
}

export const Products = () => {
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
    }
    const productMapping = productList.map(product => 
        <li key={product.id} style={{color: product.isFruit ? "green" : "red"}}>
            {product.name}
        </li>
    );
  return (
    <>
        <ul>{productMapping}</ul>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
        <br/>
        <Toolbar
            onPlayMovie = {() => alert("Playing Movie")}
            onUploadImage = {() => alert("Uploading Image")}
        />
    </>
  )
}
