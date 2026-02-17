import profilePic from "./assets/images/AR.jpg";

function Card(){
    return(
        <div className="card">
            <img  src={profilePic} alt="PFP" ></img>
            <h1>Aditya Daksh</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto nobis doloremque in ea culpa reprehenderit, dicta porro assumenda minus voluptatem blanditiis tempore rem sapiente officiis! Assumenda neque atque laboriosam. Adipisci!</p>
        </div>
    );
}

export default Card;