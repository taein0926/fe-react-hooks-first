import React, { useState } from 'react'

const Name = () => {
  let [name, setName] = useState('')
  let [nickname, setNickname] = useState('')


  const handleName = event => {
    setName(event.target.value)
  }

  const handleNickname = event => {
    setNickname(event.target.value)
  }

  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input name="myName" placeholder="이름을 입력해주세요" value={name} onChange={handleName}/>
      <input name="nickName" placeholder="닉네임을 입력해주세요" value={nickname} onChange={handleNickname}/>
      <p>이름: {name === '' ? '아직 이름이 없습니다' : name}</p>
      <p>닉네임: {nickname === '' ? '아직 닉네임이 없습니다' : nickname}</p>
    </div>
  )
}

export default Name
