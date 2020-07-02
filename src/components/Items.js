import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Form,
    Input,
    Button,
    Label,
    FormGroup,
    Table, ButtonGroup
} from 'reactstrap'
class Items extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            objUpdate: {
                id: 0,
                name: ""
            },
            textSearch: ""

        }
    }
    render() {
        let listData = []
        if (this.props.items) {
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th><button onClick={() => { this.setState({ objUpdate: item }) }}>Sửa</button></th>
                        <th><button onClick={() => { this.props.deleteDispatch({ data: item.id, textSearch: this.props.textSearch }) }}>Xóa</button></th>
                    </tr>

                )
            })
        }
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type='text' placeholder="Enter Name" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })}
                            onKeyPress={e => {
                                if (e.keyCode === 13) {
                                    this.props.addDispatch(this.state.name)

                                }
                            }
                            } />
                    </FormGroup>
                    <Button onClick={() => this.props.addDispatch(this.state.name)}>ADD</Button>
                </Form>
                <Form>
                    <FormGroup>
                        <p>id đang sửa : {this.state.objUpdate.id}</p>
                        <Input type='text' value={this.state.objUpdate.name} onChange={(event) => this.setState({ objUpdate: { ...this.state.objUpdate, name: event.target.value } })}
                            onKeyPress={e => {
                                if (e.keyCode === 13) {
                                    this.props.updateDispatch(this.state.objUpdate)

                                }
                            }
                            }
                        />
                    </FormGroup>
                    <Button onClick={() => this.props.updateDispatch({ data: this.state.objUpdate, textSearch: this.props.textSearch })}>Sửa</Button>
                    <FormGroup>
                        <p>Search</p>
                        <Input value={this.state.textSearch} onChange={(event) => { this.setState({ textSearch: event.target.value }) }} ></Input>
                        <Button onClick={() => this.props.searchDispatch(this.state.textSearch)}>Search</Button>
                    </FormGroup>
                </Form>
                <Table>
                    <tbody>
                        <tr>
                            <th>ID của dữ liệu </th>
                            <th>Tên của dữ liệu</th>
                            <th>Hành động</th>
                        </tr>
                        {listData}
                        <ButtonGroup className="btn btn-group-sm" aria-label="First group">
                            <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
                        </ButtonGroup>
                    </tbody>
                </Table>
            </div >
        )
    }
}
export default Items;