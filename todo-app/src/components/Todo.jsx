import React from 'react';
import "./todo.css";

export const Todo = () => {
  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="https://img.icons8.com/external-vectorslab-flat-vectorslab/512/external-Todo-List-delivery-and-logistic-vectorslab-flat-vectorslab.png" alt="todo logo" />
                    <figcaption>Add your List here ✌</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text"  placeholder='✍ Add Items' className='form-control'/>    
                    <i className='fa fa-plus add-btn'></i>
                </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All">
                        <span>CHECK LIST</span></button></div>
            </div>
        </div>
    </>
 )
}
