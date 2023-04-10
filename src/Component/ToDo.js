
import React, { useState } from 'react'

function ToDo() {

    //This state captures text from input field
    const [data, setData] = useState();

    //This state stores all captured input in array 
    const [data_arr, setData_arr] = useState([]);


    //This function adds captured input data in array
    const add_data = () => {

        if (document.getElementById("input").value == "") {
            alert("Enter task name");
            return;
        }
        setData_arr([...data_arr, data]);
        document.getElementById("input").value = "";

    }

    //This function fires when user clicks on delete button and deletes data from array with the help of element index
    const remove_data = (event) => {

        //'event' is same as index number of element
        event = parseInt(event);

        //this function filter out the index that we clicked delete button
        function del(val, i) {
            if (i === event)
                return false;

            else
                return true;
        }

        //filter main array(data_arr) to remove the element
        let arr = data_arr.filter(del);
        setData_arr(arr);
    }



    //this function fires when clicked on update and it updates list item
    const update_data = (event) => {

        //'event' is same as index number of element
        event = parseInt(event);
        let newInput = document.getElementById("input").value;

        //if input field is empty
        if (newInput == "") {
            alert("Enter task name");
            return;
        }

        //this function adds data to the index that we clicked update button
        let arr = data_arr.map((val, i) => {
            if (i === event)
                val = newInput;

            return val;
        })
        setData_arr(arr);
        document.getElementById("input").value = "";
    }

    

    return (
        <div id="main1">
            <h2>---- To-do List ----</h2>
            <div id="main-div">
                <input id="input" type="text" placeholder="Enter task name" onChange={(e) => setData(e.target.value)} />
                <button id="add-btn" onClick={add_data}>Add</button><hr />
                {
                    data_arr.map((cval, i) => {
                        return (
                            <>
                                <div className="list-item">
                                    <p>{cval}</p>

                                    {/* Below button creates id same as index value of element */}
                                    <button className="del-btn" id={i} onClick={(e) => remove_data(e.target.id)}>Delete</button>
                                    <button className="updt-btn" id={i} onClick={(e) => update_data(e.target.id)}>Update</button>

                                </div>
                            </>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ToDo;