import PassingJsx from "./components/PassingJsx";

function Profilecard(){
    return(
        <div>
            <PassingJsx
            name = 'hassan'
            age = {18}
            greeting ={
                <div>
                    <strong>Hi Hassan , have a wounderful day</strong>
                </div>
            }
            >
                <div>
                    <p>hobbies : coding , gamming</p>
                    <button>contact now</button>
                </div>
            </PassingJsx>
            <PassingJsx
            name = 'ali'
            age = {20}
            greeting ={
                <div>
                    <strong>Hi Ali , have a wounderful day</strong>
                </div>
                }
            >
                <div>
                    <p>hobbies : coding , dancing</p>
                    <button>contact now</button>
                </div>
            </PassingJsx>
        </div>
    )
}

export default Profilecard;