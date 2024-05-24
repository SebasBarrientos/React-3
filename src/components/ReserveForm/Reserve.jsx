import { useState } from "react";

const Reserve = () => {
  const [name, setName] = useState("")
  const [time, setTime] = useState("")
  const [groupSize, setGroupSize] = useState("")


  const showReserve = (e) => {
    e.preventDefault()
    const newReserve = {
      name,
      time,
      groupSize
    }
    localStorage.setItem('reserve', JSON.stringify(newReserve))

    console.log(name, time, groupSize);
    setName("")
    setTime("")
    setGroupSize("")
  }

  return (
    <div>
      <h1>Haz tu reserva</h1>
      <input type="text" name="name" id="name" placeholder="Insert your name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="time" name="time" id="time" placeholder="Insert the hs " value={time} onChange={(e) => setTime(e.target.value)} />
      <input type="number" name="groupSize" id="groupSize" placeholder="Group size" value={groupSize} onChange={(e) => setGroupSize(e.target.value)} />
      <button onClick={showReserve}>Send</button>
    </div>
  )
}

export default Reserve