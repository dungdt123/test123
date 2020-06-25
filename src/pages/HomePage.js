import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Trang Chủ</h1>
               <ul><a href = '/additem'>Thêm Item</a></ul>
                <a href = '/items'>Chuyển trang test</a>
                
            </div>
        )
    }
}
export default HomePage;
