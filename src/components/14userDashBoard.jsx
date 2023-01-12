import '../styles/userDashBoard.css'

const UserDashBoard = () => {
    return (
        <div className="userDashBoard">

            <div className="container1">
                <div className="image1">
                    <img src="/images/img2.webp" alt="" />
                </div>

                <div className="info1">
                    <h1 >Welcome to User Dashboard</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at nostrum consequuntur adipisci perferendis deleniti nemo dolorum quibusdam libero veniam.</p>
                </div>
            </div>

            <div className="container2">
                {/* <div className="image1">
                    <img src="/images/img2.webp" alt="" />
                </div> */}

                <div className="info2">
                    <h1 >Welcome to User Dashboard</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at nostrum consequuntur adipisci perferendis deleniti nemo dolorum quibusdam libero veniam.</p>
                </div>
            </div>

            <div className="container3">
                <div className="image3">
                    <img src="/images/img2.webp" alt="" />
                </div>

                <div className="info3">
                    <h1 >Welcome to User Dashboard</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at nostrum consequuntur adipisci perferendis deleniti nemo dolorum quibusdam libero veniam.</p>
                </div>
            </div>

            <div className="container4" >
                <h1>Get into the world of library and learn something new....</h1>
                <p> Explore! Explore! Explore the book collections....!</p>
            </div>

        </div>


    );
}

export default UserDashBoard;