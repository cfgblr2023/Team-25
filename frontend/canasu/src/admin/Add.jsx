import { InboxOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Table, Tag, Upload } from 'antd';
import axios from 'axios';
import Papa from 'papaparse';
import { useMemo, useState, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { servicePost } from "../utils/api";


const { Dragger } = Upload;


const Students = ({ students }) => {

    const [page, setPage] = useState(1);


    const columns = [
        {
            title: 'S No:',
            dataIndex: 's',
            key: 'sno',
            render: (value, item, index) => {
                return (page - 1) * 10 + index + 1
            }
        },
       
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Language',
            dataIndex: 'language',
            key: 'language',
        },
       
    ];

    

    return useMemo(() => <Table pagination={{
        onChange(current) {
            setPage(current);
        }
    }} rows dataSource={students} columns={columns} />, [page,students])
}


const AddAllStudents = () => {
    const [students, setStudents] = useState(null);
    const [singleStudent, setsingleStudent] = useState({
        name: "",
       
        email: "",
        language:""
    });
    const navigate = useNavigate();
   
    const addStudents = async () => {
       
        let studentsArray = []
        if(singleStudent.name!="" && singleStudent.email!="" && singleStudent.language!=""){
           
           
            studentsArray.push(singleStudent);
        }
        else{
            studentsArray = students
        }
        setStudents(studentsArray);
        try {
           
            const res = await servicePost("/admin/add/mentee", {
                students : studentsArray
            }, axios.defaults.headers.common);
            const { success, message } = res

            if (success) {
                toast.success(message);
                navigate("/admin");
            }
            else{
                toast.error(message);
            } 
        } catch (error) {

            console.log(error)
        } 
    }


    const customRequest = async option => { option.onSuccess() }



    const props = {
        name: 'file',
        accept: 'text/csv',
        customRequest: customRequest,
        async onChange(info) {
            try {
                Papa.parse(info.file.originFileObj, {
                    skipEmptyLines: true,
                    complete: function ({ data }) {
                        const st = [];
                        console.log(data);
                        data.forEach(s => {
                            const [ email, name, language] = s;
                            // console.log(s);
                          
                            if (email.toLowerCase().trim().match(
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) 
                                
                                
                                ) {
                                st.push({
                                   name, 
                                    email: email.toLowerCase().trim(),
                                    language
                                })

                            } else {
                                toast.error(`email invalid ${email}` )
                            }
                        })
                        setStudents(prev => [...st])
                    },
                    error: error => {
                        console.log(error)
                    },
                })

                return true

            } catch (error) {
                console.log(error)
            }

        },
        multiple: false,
        maxCount: 1,
    };

    return (
        <div>
            <h2>Add Mentees</h2>
            <h1>Rules:</h1>
            <br />
                create a csv with columns:
                <br />
                    email.
                    <br />
                    Name.
                    <br />
                   Language
                    <br />
                    
                
                upload the csv here.
                Click on add.
                Or use the form on the right for adding a single student.
           
            <br />
            <Button 
            onClick={addStudents} 
            type='primary' size={'large'}>Add</Button>
            <br />
            <br />
            <br />
         
            <Row justify="space-between" align="middle" >
                <Col span={10}>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </Dragger>
                </Col>
                <Col span={2}>
                    Or
                </Col>
                <Col span={8}>
                    <form >
                    <Input placeholder="Enter Student's First Name" onChange={(e)=>{setsingleStudent({...singleStudent,name:e.target.value})}} />
                       <br />
                        <br />
                       
                        <Input placeholder="Enter Student's Email" onChange={(e)=>{setsingleStudent({...singleStudent,email:e.target.value})}} />
                        <br />
                        <br />
                        <Input placeholder="Enter preferred language" onChange={(e)=>{setsingleStudent({...singleStudent,language:e.target.value})}} />
                       
                    </form>
                </Col>
            </Row>

            {/* </div> */}
            <br />

            <div>
                {students && <Students students={students} />}
            </div>
        </div>
    );
}

export default AddAllStudents;