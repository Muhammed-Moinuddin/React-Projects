import React from 'react';
import { useState, useEffect } from 'react';
import "./todo.css";

// get the localStorage Data back
const getLocalData = () => {
    const list = localStorage.getItem("myTodoList");
    if (list){
        return JSON.parse(list);
    } else {
        return [];
    }
}


export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [edittedItem, setEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

//   add the function
    const addItems = () => {
        if (!inputData){
            alert("Plz fill the Data")
        } else if(inputData && toggleButton){
            setItems(
                items.map((currentElement) => {
                    if(currentElement.id === edittedItem){
                        return {...currentElement, name: inputData};
                    }
                    return currentElement;
                })
            );
            setInputData([]);
            setEditItem(null);
            setToggleButton(false);
        }
        else{
            const myNewItemData = {
                id: new Date().getTime().toString(),
                name: inputData
            };
            setItems([...items, myNewItemData]);
            setInputData("");
        }
    };

// edit items

    const editItem = (index) => {
        const item_todo_edited = items.find((currentElement) => {
            return currentElement.id === index;
        });
        setInputData(item_todo_edited.name);
        setEditItem(index);
        setToggleButton(true);
    }

// how to delete item
    const deleteItem = (index) => {
        const updatedItems = items.filter((currentElement) => {
            return currentElement.id !== index;
        });
        setItems(updatedItems);
    }
// to remove all items
    const removeAll = () => {
        setItems([]);
    }

// adding to LocalStorage
    useEffect(() => {
        localStorage.setItem("myTodoList", JSON.stringify(items))
    }, [items]);

  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="https://img.icons8.com/external-vectorslab-flat-vectorslab/512/external-Todo-List-delivery-and-logistic-vectorslab-flat-vectorslab.png" alt="todo logo" />
                    <figcaption>Add your List here ✌</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text"  placeholder='✍ Add Items' className='form-control' value={inputData} onChange={(e) => setInputData(e.target.value)}/>    
                    {toggleButton ? (<i className='fa fa-edit add-btn' onClick={addItems}></i>):(<i className='fa fa-plus add-btn' onClick={addItems}></i>)}
                    
                </div>
                {/* remove all button */}
                <div className="showItems">
                    {items.map((currentElement) => {
                        return(
                            <div className="eachItem" key={currentElement.id}>
                                <h3>{currentElement.name}</h3>
                                <div className="todo-btn">
                                    <i className='far fa-edit add-btn' onClick={() => editItem(currentElement.id)}></i>
                                    <i className='far fa-trash-alt add-btn' onClick={() => deleteItem(currentElement.id)}></i>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                        <span>CHECK LIST</span></button></div>
            </div>
        </div>
    </>
 )
 
}
