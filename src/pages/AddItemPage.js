import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Form,
    Input,
    Button,
    Label,
    FormGroup
} from 'reactstrap'
class AddItemPage extends Component {
    render() {
        return (
            <div>
                <h1>Add Item</h1>
                <Form>
                    <FormGroup onChange=''>
                        <Label>ID</Label>
                        <Input type='text' placeholder="Enter ID"></Input>
                        <Label>Name</Label>
                        <Input type='text' placeholder="Enter Name"></Input>
                    </FormGroup>
                    <Button type='submit'>ADD</Button>
                    
                    <Link to="/" className='btn btn-danger' >Cancel</Link>
                </Form>
            </div>
        )
    }
}
export default AddItemPage;