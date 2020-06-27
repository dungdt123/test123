import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Form,
    Input,
    Button,
    Label,
    FormGroup
} from 'reactstrap'
class Items extends Component {
    constructor() {
        super()
        this.state = { name: "" }
    }
    render() {
        let listData = []
        if (this.props.items) {
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                    </tr>
                )
            })
        }
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type='text' placeholder="Enter Name" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} onKeyPress={e => {
                            if (e.key == 'Enter') {
                                this.props.addDispatch(this.state.name)

                            }
                        }
                        } />
                    </FormGroup>
                    <Button onClick={() => this.props.addDispatch(this.state.name)}>ADD</Button>
                </Form>
                <table>
                    <tbody>
                        <tr>
                            <th>ID của dữ liệu </th>
                            <th>Tên của dữ liệu</th>
                        </tr>
                        {listData}
                    </tbody>
                </table>
            </div >
        )
    }
}
export default Items;