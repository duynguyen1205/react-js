// props a properties --> trong react được hiểu là 1 object 
// --> mục đích là lưu trữ các giá trị attribute(thuộc tính của 1 thẻ tag)
// Hỗ trợ trong việc nhận các giá trị của thuộc tính truyền vào từ cách thức liên lạc, trao
// đổi dữ liệu giữa các component(thành phần giao diện)
import React from "react";
// Nguyên class được coi là component(Được kết thành từ element)
class Greeting extends React.Component {
    // xây dựng phương thức để trả về JSX của component 
    render() {
        const myStyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };

        return(
            <div style={myStyle}>
                <h3>Hello: {this.props.fullName}</h3>
            </div>
        );
    }
}
Greeting.defaultProps = {fullName: "Hi you!"}
export default Greeting;