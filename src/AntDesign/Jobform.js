import { useState } from 'react';
import './antdesign.css'
import data from './db.json'
import { Form, Button, Modal, Input, Select, Space } from "antd"
import { DatePicker } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInr } from '@fortawesome/free-solid-svg-icons';
import FormItem from 'antd/es/form/FormItem';
import CustomCloseIcon from './CloseIcon';


function Antdesign() {
    const { Option } = Select;
    const [ismodal, setIsmodal] = useState(false)
    const [val, setVal] = useState("")
    const onInput = (e) => setVal(e.target.value);
    const [page, setPage] = useState(2)
    const [selectState, setSelectState] = useState(null);
    const [selectDistrict, setSelectDistrict] = useState(null);

    const stateChange = value => {
        setSelectState(value);
        setSelectDistrict(null)
    };

    const disrictChange = value => {
        setSelectDistrict(value)
    };

    const selectStatedata = data.states.find(option => option.state === selectState);
    const selectDistrictdata = selectStatedata ? selectStatedata.districts : [];


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
                width={780}
                title={<h3 className="pagetitle">{page === 2 ? 'New Job Post(1/2)' : 'New Job Post(2/2)'}</h3>}
                centered
                style={{ maxHeight: "100vh", overflow: "auto" }}
                 open={ismodal}
                onCancel={onCancel}
                footer={null}
                closeIcon={<CustomCloseIcon />}

            >
                <Form

                    layout='vertical'
                    form={form}
                    onFinish={onFinish}
                    style={{ height: "100vh" }}
                >
                    <div style={{ position: 'relative' }}>
                        <div className='page1' style={{ position: "absolute", top: 0, zIndex: page == 1 ? -1 : 0 }}>
                            {/* <h5 className='pageheader'>New Job Post(1/2)</h5> */}
                            <div className='section1'>
                                <div>
                                    <Form.Item
                                        label="Designation"
                                        name="designation"
                                        hasFeedback
                                        rules={[{
                                            required: true,
                                            message: 'Please enter your Job Title'

                                        }
                                        ]}
                                    >
                                        <Input className='jobinput' placeholder='Enter Job Title' name="designation" allowClear />
                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item className='empname' label="Primary Employee" name="primaryemp"
                                        hasFeedback
                                        rules={[{
                                            required: true,
                                            message: 'Please enter your Primary Employee'
                                        }]}
                                    >
                                        <Select className='select' placeholder="SELECT"
                                            name="primaryemp"
                                            allowClear
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
                                    hasFeedback
                                    rules={[{
                                        required: true,
                                        message: 'Please enter your Description'

                                    }
                                    ]}
                                >
                                    <Input style={{ borderRadius: "0" }} placeholder="Max 15 words" name="description" allowClear
                                    />
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item name="qualification" label="Qualification"
                                    hasFeedback

                                    rules={[{
                                        required: true,
                                        message: 'Please enter your Qualification'
                                    }]}
                                >
                                    <Select
                                        className='select'
                                        mode="multiple"
                                        placeholder="Select Qualification"
                                        allowClear
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
                                                            message: 'Enter a valid Number'
                                                        }
                                                    ]}>
                                                    <Input placeholder="0.." className='box1'
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div>
                                                <label style={{ marginLeft: "8px" }}>to</label>
                                            </div>
                                            <div>
                                                <Form.Item name="Experiance to"

                                                    rules={[
                                                        {
                                                            pattern: /^(?:[1-9]|[1-3][0-9]|40)$/,
                                                            message: 'Enter a valid Number'
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
                                                        message: 'Enter the Field'
                                                    }]}
                                                >
                                                    <Select className='select' style={{ width: "90px", marginLeft: "10px" }} placeholder="month"

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

                                    <Form.Item style={{ marginLeft: "10px" }} name="expirence start date" label="Start Date" placeholder="Date"

                                        rules={[{
                                            required: true,
                                            message: 'Enter your Start Date'
                                        }]}
                                    >
                                        <DatePicker disabledDate={disabledDate} style={{ fontPalette: "14", width: "120px", borderRadius: '0' }} picker="date" />
                                    </Form.Item>
                                </div>

                                <div className='salary'>

                                    <Form.Item label="Salary"

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
                                                            message: 'Enter a valid Number'
                                                        }
                                                    ]} >
                                                    <Input className='salarybox1 '
                                                    />

                                                    {/* <Input addonBefore={<FontAwesomeIcon icon={faInr} style={{ fontSize: "14px", color: "grey", borderRadius: "0" }} />} style={{ borderRadius: '0px' }} className='salarybox1 '
                                                    /> */}

                                                    {/* <Input
                                                        className="square-input"
                                                        addonBefore={<Space className="square-addon">&#8377;</Space>}
                                                        placeholder="Enter amount"
                                                    /> */}
                                                </Form.Item>
                                            </div>
                                            <div>
                                                <label style={{ marginLeft: "8px" }}>to</label>
                                            </div>
                                            <div>
                                                <Form.Item name="salary to"
                                                    rules={[
                                                        {
                                                            pattern: /^(?:[1-9]\d{1,5})$/,
                                                            message: 'Enter a valid Number'
                                                        }
                                                    ]}

                                                >
                                                    <Input className='salarybox2' />
                                                    {/* <Input addonBefore={<FontAwesomeIcon icon={faInr} style={{ fontSize: "14px", color: "grey" }} />} className='salarybox2' /> */}
                                                </Form.Item>
                                            </div>
                                            <div>

                                                <FormItem className="perday" name="per day/per month /per annum"
                                                    rules={[{
                                                        required: true,
                                                        message: 'Enter the field'
                                                    }]}
                                                >
                                                    <Select className='select' style={{ width: "100px", marginLeft: "9px" }} placeholder="month"
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
                                        hasFeedback
                                        rules={[{
                                            required: true,
                                            message: 'Please enter your state'
                                        }]}
                                    >
                                        <Select placeholder="Select State" className='select' value={selectState} onChange={stateChange} allowClear>
                                            {data.states.map(option => (
                                                <Option key={option.state} value={option.state}>
                                                    {option.state}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item className="empname" name="district" label="District"
                                        hasFeedback
                                        rules={[{
                                            required: true,
                                            message: 'Please enter your district'
                                        }]}
                                    >

                                        <Select
                                            className='select'
                                            placeholder="Select District" value={selectDistrict} onChange={disrictChange} disabled={!selectState} allowClear
                                        >

                                            {selectDistrictdata.map(district => (
                                                <Option key={district} value={district}>
                                                    {district}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </div>


                            </div>
                            <div>
                                <Form.Item label="Joining Formalities">
                                    <ol>
                                        <Form.List name={'joining formalities'} initialValue={[""]}
                                        >
                                            {(fields, { add }) => (
                                                <>
                                                    {fields.map((field) => {
                                                        return (

                                                            <li>
                                                                <Form.Item key={field.key} name={[field.name, 0]} hasFeedback
                                                                    rules={[{
                                                                        required: true,
                                                                        message: 'Please enter your Joining Details'
                                                                    }]}>


                                                                    <Input className="mapinput" placeholder="Enter Details" value={val} onInput={onInput} allowClear />

                                                                </Form.Item>
                                                            </li>




                                                        )
                                                    })
                                                    }
                                                    <Form.Item>
                                                        <Button className="plusbutton" onClick={() => { add() }} disabled={!val}>+</Button>
                                                    </Form.Item>
                                                </>
                                            )}
                                        </Form.List>
                                    </ol>
                                </Form.Item>


                            </div>

                            <div className='footer'>
                                <Button className="cancel" onClick={onCancel}>Cancel</Button>
                                <Button className="continue" onClick={() => setPage(page == 1 ? 2 : 1)} >Continue</Button>
                            </div>
                        </div>
                        <div className='page2' style={{ position: "absolute", top: 0, zIndex: page == 2 ? -1 : 0 }}>

                            <div>
                                <Form.Item >
                                    <Form.List name={'Questions'} initialValue={[""]} >

                                        {(ques, { add }) => (
                                            <>
                                                {
                                                    ques.map((ques, index) => {
                                                        return (
                                                            <div>
                                                                <div>
                                                                    <Form.Item key={ques.key} name={[ques.name, 'questions']} label="Questions"
                                                                        hasFeedback
                                                                        rules={[{
                                                                            required: true,
                                                                            message: 'Please enter your question'

                                                                        }]}
                                                                    >
                                                                        <Input className='quesinput' placeholder="Enter Details" value={val} onInput={onInput} allowClear />
                                                                    </Form.Item>
                                                                </div>
                                                                <div>
                                                                    <Form.Item key={ques.key} name={[ques.name, 'ans']} label="Answer Type" hasFeedback
                                                                        rules={[{
                                                                            required: true,
                                                                            message: 'Please enter your answer'

                                                                        }]}>
                                                                        <Select className='select' placeholder="Answer Type" value={val} onInput={onInput} allowClear
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
                                                    <Button className='plusbutton' onClick={() => { add() }} disabled={!val}>+</Button>
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


