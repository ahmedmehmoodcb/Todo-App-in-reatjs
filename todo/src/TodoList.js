import React, { useState } from 'react'

const TodoList = () => {
    const [activity, setActivity]= useState('');
    const [listData, setlistData]= useState ([]);
    function addActivity () {
        // setlistData ([...listData, activity]);
        // console.log(listData);

        setlistData((listData)=> {
          const updateList =[...listData, activity]
          console.log (updateList)
          setActivity('')
          return updateList
        })
    }
    function removeActivity (i){
      const updateListData = listData.filter ((elem, id)=> {
        return i!=id;
      })
      setlistData(updateListData);
    }
    // function removeAll(){
    //   setlistData([])
    // }
    function removeAll(){
      setlistData([])
    }
  return (
    <>
    <div className='container'>
        <div className='header'>Todo List</div>
        <input type="text" placeholder="add activity" value={activity} 
        onChange={(e) =>setActivity(e.target.value)} />
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'> here is your list</p>
        {listData!=[] && listData.map ((data, i)=>{
          return (
            <>
              <p key={i}> 
                <div className='listData'>{data}</div>
                <div><button onClick={()=> removeActivity (i)}>remove (-)</button></div>
              </p>
            </>
          )
        })}

        {/* {listData.lenght>=1 && 
        <button onClick={removeAll}>Remove all</button>} */}
        
        {listData.length>=1 && 
        <button onClick={removeAll}>Remove all</button>}

    </div>
    </>
  )
}

export default TodoList