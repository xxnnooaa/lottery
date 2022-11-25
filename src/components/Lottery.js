import React, { useState } from "react";
import './Lottery.css'
import CountUp from 'react-countup'

//สร้างฟังก์ชัน random 
function randomNumber () {
    // Math.random เป็นฟังก์ชันใช้สุ่ม
    // เลข 0-1 ถ้าอยากสุ่มเลข 0-9 ต้องเอา 9 ไปคูณ
    // มันอาจจะมีทศนิยมได้ เลยปัดเศษขึ้นโดยใช้ celi
    return Math.ceil(Math.random() * 9)
}
// เอาทุกอย่างที่เหมือนกัน Group รวมกัน
// ไว้ในฟังก์ชัน LotteryRandomMachine
// ฟังก์ชันสามารถมีพารามิเตอร์รับค่าจาก probs ที่ส่งมาได้
// ถ้ารู้ว่าใน probs มีอะไรอยู่สามารถดึงออกมาใช้ได้เลย
function LotteryRandomMachine ({title, size}) {
    //ใน probs ที่รับมาจะเป็น object
    // สร้างตัวแปรเก็บ size แล้วกำหนดค่าทุกช่องให้เป็น 0
    const initialCounter = Array(size).fill(0)
    const [counter, setCounter] = useState(initialCounter)
    const random = () => {
    //ถ้าตัวแปรในฟังก์ชันไม่ได้ใช้สามารถกำหนดเป็น _ ได้
    const result = counter.map(_ => randomNumber())
      setCounter(result)
    }
    return (
        <>
        <h1 className="lottery-title">{title}</h1>
        <div className="lottery-container">
          {counter.map((item, index) => (
              <CountUp key={index} className="lottery-number" end={item}></CountUp>
            ))}
        </div>
        <button className="lottery-random-button" onClick={random}>Random</button>
        </>
    )
}
// 1.การจัดการ state และ event ใน React
// 2.Dynamic List (ตัวแปรชื่อ size)
// ถ้าเราเพิ่มค่าเข้าไปเป็น index แรกเราจะใช้ index วนลูปไม่ได้
// ต้องใช้ key
function Lottery () {
    // การส่ง probs ไปใน component
  return (
    <>
     <LotteryRandomMachine title="สามตัวงวดนี้คือ..." size={3}></LotteryRandomMachine>
     <LotteryRandomMachine title="สองตัวงวดนี้คือ..." size={2}></LotteryRandomMachine>
    </>
  )
}

export default Lottery