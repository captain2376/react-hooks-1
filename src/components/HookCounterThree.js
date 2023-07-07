import React, { useState } from 'react'

export const HookCounterThree = () => {
    const[name,setName]=useState({
        firstName:'',
        lastName:''
    })
    return (
        <div>
            <form>
              <input type='text' value={name.firstName}
              onChange={e=>setName({...name,firstName:e.target.value})}/>
              <input type='text' value={name.lastName}
              onChange={e=>setName({...name,lastName:e.target.value})}/>
              <h2>Your first name is :{name.firstName}</h2>
              <h2>Your last name is :{name.lastName}</h2>
              <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

//useState does not automatically merge and update the object
//this is the key difference to setState which you come accross in class components
//setState() will merge the state whereas useState() hook setter function will not
//merget the state .You have to do it manually
//use spread operator to handle manual merge
//copy every property in the name object and then just override firstanem fiels
//with a different value

