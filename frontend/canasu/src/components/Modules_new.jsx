import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "../styles/Modules_new.css";
import AddModule from "./AddModule";
import AddSession from "./AddSession";
export default function Modules_new(props) {
    const[toggleModal,setToggleModal]= useState(false);
    const[toggleSession,setToggleSession]= useState(false);
  const module_data = [
    {
      id: 0,
      name: "abc",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptate doloremque voluptatum obcaecati perspiciatis placeat accusantium nihil aut maxime ea assumenda labore aperiam dolor aspernatur voluptatem voluptas sapiente asperiores eius porro voluptates, dignissimos ad fugit. Similique eligendi nesciunt ipsum aperiam provident repudiandae vero adipisci autem fugit ea, corporis atque, tempora est dicta voluptatum vel laboriosam! Deserunt nostrum eos voluptas ducimus? Nemo ratione unde ipsam quisquam distinctio, neque deleniti recusandae quidem iure voluptate ipsum facere magnam iusto, aspernatur aperiam veniam! Repudiandae, exercitationem nihil sit earum repellendus recusandae ab architecto, asperiores expedita quibusdam voluptatem aliquam excepturi quae sapiente nemo quisquam dolorem sed.",
      startDate: "hindi",
      endDate: "hindi",
      link: "link",
    },
    {
      id: 1,
      name: "abc",
      description: "lmn",
      startDate: "hindi",
      endDate: "hindi",
      link: "link",
    },
    {
      id: 2,
      name: "abc",
      description: "lmn",
      startDate: "hindi",
      endDate: "hindi",
      link: "link",
    },
    {
      id: 3,
      name: "abc",
      description: "lmn",
      startDate: "hindi",
      endDate: "hindi",
      link: "link",
    },
  ];

  const handleAddModule = () =>{
    setToggleModal(!toggleModal)

  }
  const handleAddSession = () =>{
    setToggleSession(!toggleSession)

  }
  return (
    <>
    {toggleModal? <AddModule handleAddModule={handleAddModule}/> : 
    <>
        <div className=" d-flex  justify-content-center mt-5 ">
      <Accordion className="w-50" defaultActiveKey="0">
        {module_data.map((module) => {
          return (
            <>
                
                    <Accordion.Item eventKey={module.id}>
                    <Accordion.Header>{module.name}</Accordion.Header>
                    <Accordion.Body>
                      <div className="moduleFields ">
                        
                        <div className="Module-field desc mt-2 "><span>Description</span> :{module.description} </div>
                        <div className="Module-field desc mt-2"><span>Start Date :</span>{module.startDate} </div>
                        <div className="Module-field desc mt-2"><span>End Date :</span> {module.endDate}</div>
                        <div className="Module-field desc mt-2"><span>Link:</span>{module.link} </div>
                        
                        {props.branch !== "mentee" && 
                            <div className="d-flex justify-content-between">
                            <button className="Module-deleteModule" onClick={handleAddSession}>Add Session</button>
                            <button className="Module-deleteModule">Delete</button>
                            </div>
                        }
                        
                        
                      </div>
                      <div>
                        {toggleSession && <AddSession handleAddSession={handleAddSession}/>}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                
                
            </>
          );
        })}
      </Accordion>
      
    </div>
    {props.branch !== "mentee" &&
        <button className="Module-addModule mt-5" onClick={handleAddModule}>Add Module</button>
    }
    
    </>
    
    }
        
    </>
    
  );
}
