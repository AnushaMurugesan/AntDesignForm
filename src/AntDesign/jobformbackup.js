import { useState } from 'react';
import './antdesign.css'
import { Form, Button, Modal, Input, Select } from "antd"
import { DatePicker } from 'antd';
import FormItem from 'antd/es/form/FormItem';


function Antdesign() {

    const [ismodal, setIsmodal] = useState(false)
    const [val, setVal] = useState("")
    const onInput = (e) => setVal(e.target.value);
    const [page, setPage] = useState(2)
    const onCancel = () => {

        setIsmodal(false)
    }

    const onFinish = (values) => {
        console.log(values);
    };

    const addmodal = () => {
        setIsmodal(true)
    }

    const prepage = () => {
        setPage(2)
    }
    const disabledDate = (current) => {
        return current && current < new Date();
    };

    const [form] = Form.useForm();
    return (
        <div className='bothpages'>

            <Button onClick={addmodal} className="addbtn">New Job Post</Button>


            <Modal
                width={850}
                open={ismodal}
                className='modal'
                onCancel={onCancel}
                footer={null}
                style={{ height: "100vh" }}
            >
                <Form

                    layout='vertical'
                    form={form}
                    onFinish={onFinish}
                    style={{ fontSize: "50px", color: "blue", height: "100vh", overflowY: "scroll" }}
                >
                    <div style={{ position: 'relative' }}>
                        <div className='page1' style={{ position: "absolute", height: "70vh", top: 0, zIndex: page == 1 ? -1 : 0 }}>
                            <h5 className='page2header'>New Job Post(1/2)</h5>
                            <div className='section1'>
                                <div>
                                    <Form.Item
                                        label="Designation"
                                        name="designation"
                                        rules={[{
                                            required: true,
                                            message: 'Please enter your Job Title'
                                        }
                                        ]}
                                    >
                                        <Input className='jobinput' placeholder='Enter Job Title' name="designation" />


                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item className='empname' label="Primary Employee" name="primaryemp"
                                        rules={[{
                                            required: true
                                        }]}
                                    >
                                        <Select placeholder="SELECT"
                                            name="primaryemp"
                                            options={[
                                                {
                                                    value: 'Name1',
                                                    label: 'Name1'
                                                },
                                                {
                                                    value: 'Name2',
                                                    label: 'Name2'
                                                },
                                                {
                                                    value: 'Name3',
                                                    label: 'Name3'
                                                },
                                            ]}
                                        >
                                        </Select>
                                    </Form.Item>
                                </div>
                            </div>
                            <div>
                                <Form.Item label="Description" name="description"
                                    rules={[{
                                        required: true,

                                    },
                                    {
                                        max: 15
                                    }]}
                                >
                                    <Input placeholder="Max 15 words" name="description"
                                    />
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item name="qualification" label="Qualification"

                                    rules={[{
                                        required: true,
                                        message: 'Please enter your Qualification'
                                    }]}
                                >
                                    <Select
                                        mode="multiple"
                                        placeholder="Select Qualification"
                                        options={[
                                            {
                                                value: 'bsc',
                                                label: 'BSC'
                                            },
                                            {
                                                value: 'btech',
                                                label: 'BTECH'
                                            },
                                            {
                                                value: 'msc',
                                                label: 'MSC'
                                            },
                                        ]}
                                    >
                                    </Select>
                                </Form.Item>
                            </div>



                            <div className='exp-section'>
                                <div className='expdate'>

                                    <Form.Item label="Experiance Required">
                                        <div className="experiance">
                                            <div>
                                                <Form.Item name="Experiance from"
                                                    rules={[
                                                        {
                                                            pattern: /^(?:[0-9]|[1-3][0-9]|40)$/,
                                                            message: 'Please enter a valid number between 1 and 40.'
                                                        }
                                                    ]}>
                                                    <Input placeholder="0.." className='box1'
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div>
                                                <label style={{ marginLeft: "13px" }}>to</label>
                                            </div>
                                            <div>
                                                <Form.Item name="Experiance to"
                                                    rules={[
                                                        {
                                                            pattern: /^(?:[1-9]|[1-3][0-9]|40)$/,
                                                            message: 'Please enter a valid number between 1 and 40.'
                                                        }
                                                    ]}>
                                                    <Input placeholder="0.." name="Experiance to" className='box2'

                                                    />
                                                </Form.Item>
                                            </div>
                                            <div>
                                                <Form.Item name="month"
                                                    rules={[{
                                                        required: true,
                                                        message: 'Please enter your exp month'
                                                    }]}
                                                >
                                                    <Select style={{ width: "110px", marginLeft: "10px" }} placeholder="month"
                                                        name="month"
                                                        options={[
                                                            {
                                                                value: 'per month',
                                                                label: 'per month'
                                                            },
                                                            {
                                                                value: 'per year',
                                                                label: 'per year'
                                                            },

                                                        ]}
                                                    >
                                                    </Select>
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </Form.Item>

                                    <Form.Item style={{ marginLeft: "15px" }} name="expirence start date" label="Start Date"
                                        rules={[{
                                            required: true,
                                            message: 'Please enter your Start Date'
                                        }]}
                                    >
                                        <DatePicker disabledDate={disabledDate} style={{ width: "120px" }} picker="date" />
                                    </Form.Item>
                                </div>

                                <div className='salary'>

                                    <Form.Item name="salary" label="Salary"
                                        rules={[{
                                            required: true,
                                            message: 'Please enter your exp month'
                                        }]} >
                                        <div className='sal'>
                                            <div>
                                                <Form.Item name="salary from:"
                                                    rules={[
                                                        {
                                                            pattern: /^(?:[1-9]\d{1,5})$/,
                                                            message: 'Please enter a valid number between 1 and 40.'
                                                        }
                                                    ]} >
                                                    <Input className='salarybox1'
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div>
                                                <label style={{ marginLeft: "13px" }}>to</label>
                                            </div>
                                            <div>
                                                <Form.Item name="salary to"
                                                    rules={[
                                                        {
                                                            pattern: /^(?:[1-9]\d{1,5})$/,
                                                            message: 'Please enter a valid number between 1 and 40.'
                                                        }
                                                    ]}

                                                >
                                                    <Input className='salarybox2' />
                                                </Form.Item>
                                            </div>
                                            <div>

                                                <FormItem className="perday" name="per day/per month /per annum"
                                                    rules={[{
                                                        required: true,
                                                        message: 'Salary for per annum'
                                                    }]}
                                                >
                                                    <Select style={{ width: "110px", marginLeft: "13px" }} placeholder="month"
                                                        options={[
                                                            {
                                                                value: 'per month',
                                                                label: 'per month'
                                                            },
                                                            {
                                                                value: 'per year',
                                                                label: 'per year'
                                                            },

                                                        ]}
                                                    >
                                                    </Select>
                                                </FormItem>
                                            </div>

                                        </div>
                                    </Form.Item>
                                </div>

                            </div>

                            <div className="section2">
                                <div>
                                    <Form.Item className="jobinput" name="state" label="State"
                                        rules={[{
                                            required: true,
                                            message: 'Please enter your state'
                                        }]}
                                    >
                                        <Select
                                            placeholder="Select State"
                                            options={[
                                                {
                                                    value: 'tamilnadu',
                                                    label: 'TamilNadu'
                                                },
                                                {
                                                    value: 'kerala',
                                                    label: 'Kerala'
                                                },
                                                {
                                                    value: 'bangalore',
                                                    label: 'Bangalore'
                                                },
                                            ]}
                                        >
                                        </Select>
                                    </Form.Item>
                                </div>
                                <div>

                                    <Form.Item className="empname" name="district" label="District"
                                        rules={[{
                                            required: true,
                                            message: 'Please enter your district'
                                        }]}
                                    >

                                        <Select
                                            placeholder="Select District"
                                            options={[
                                                {
                                                    value: 'madurai',
                                                    label: 'Madurai'
                                                },
                                                {
                                                    value: 'chennai',
                                                    label: 'Chennai'
                                                },
                                                {
                                                    value: 'coimbatore',
                                                    label: 'Coimbatore'
                                                },
                                            ]}
                                        >
                                        </Select>
                                    </Form.Item>
                                </div>


                            </div>
                            <div>
                                <Form.Item label="Joining Formalities"> 
                                    <Form.List name={'joining formalities'} initialValue={[""]}  >
                                        {(fields, { add }) => (
                                            <>



                                                {fields.map((field, index) => {
                                                    return (
                                                        <div>
                                                            <Form.Item key={field.key} name={[field.name]}>

                                                                {index + 1}<Input className="mapinput" placeholder="Enter Details" />
                                                            </Form.Item>
                                                        </div>

                                                    )
                                                })
                                                }
                                                <Form.Item>
                                                    <Button className="plusbutton" onClick={() => { add() }} >+</Button>
                                                </Form.Item>
                                            </>
                                        )}
                                    </Form.List>
                                </Form.Item>

                            </div>

                            <div className='footer'>
                                <Button className="cancel" onClick={onCancel}>Cancel</Button>
                                <Button className="continue" onClick={() => setPage(page == 1 ? 2 : 1)} >Continue</Button>
                            </div>
                        </div>
                        <div className='page2' style={{ position: "absolute", top: 0, zIndex: page == 2 ? -1 : 0 }}>
                            <div>
                                <h5 className='page2header'>New Job Post(2/2)</h5>
                            </div>

                            <div>
                                <Form.Item className='mapinput' >
                                    <Form.List name={'Questions'} initialValue={[""]}>

                                        {(ques, { add }) => (
                                            <>
                                                {
                                                    ques.map((ques, index) => {
                                                        return (
                                                            <div>
                                                                <div>
                                                                    <Form.Item style={{ width: "780px" }} key={ques.key} name={[ques.name, 'questions']} label="Questions"
                                                                        rules={[{
                                                                            required: true,
                                                                            message: 'Please enter your district'

                                                                        }]}
                                                                    >
                                                                        <Input className='mapinput' placeholder="Enter Details" />
                                                                    </Form.Item>
                                                                </div>
                                                                <div>
                                                                    <Form.Item key={ques.key} name={[ques.name, 'ans']} label="Answer Type"
                                                                        rules={[{
                                                                            required: true,
                                                                            message: 'Please enter your district'

                                                                        }]}>
                                                                        <Select placeholder="Answer Type"
                                                                            options={[
                                                                                {
                                                                                    value: 'Name1',
                                                                                    label: 'Name1'
                                                                                },
                                                                                {
                                                                                    value: 'Name2',
                                                                                    label: 'Name2'
                                                                                },
                                                                                {
                                                                                    value: 'Name3',
                                                                                    label: 'Name3'
                                                                                },
                                                                            ]}
                                                                        >
                                                                        </Select>
                                                                    </Form.Item>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <Form.Item>
                                                    <Button className='plusbutton' onClick={() => { add() }} >+</Button>
                                                </Form.Item>
                                            </>
                                        )}
                                    </Form.List>
                                </Form.Item>

                            </div>

                            <div className='footer'>
                                <Button className="cancel" onClick={prepage}>Cancel</Button>
                                <Button className="post" htmlType='submit' onFinish={onFinish}>Post</Button>
                            </div>
                        </div>
                    </div>

                </Form >
            </Modal >

        </div >
    )
}



export default Antdesign;


