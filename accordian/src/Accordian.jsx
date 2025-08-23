import React, { useState } from 'react'
import Item from './Item';

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

const Accordian = () => {
  const [openIndex,setOpenIndex] = useState([]);
  const handleToggle = (index) => {
    if(openIndex.includes(index)){
        setOpenIndex(openIndex.filter((i) =>  i !== index));
    }else{
        setOpenIndex([...openIndex, index])
    }
  }
  return (
    <div className="accordion">
       {
        faqs.map((item, index) => {
            return(
                <>
                 <Item 
                    index={index} 
                    title={item.title} 
                    text={item.text} 
                    open ={openIndex.includes(index)} 
                    onOpen={() => handleToggle(index)}/>
                </>
            )
        })
       }
    </div>
  )
}

export default Accordian