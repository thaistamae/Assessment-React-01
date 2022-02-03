export function IdCard (props){
    return (
        <div>
        <section>
            <p><b>Full Name: </b>{props.fullName}</p>
            <p><b>Gender: </b>{props.gender}</p>
            <p><b>Birthdate: </b>{props.birthday}</p>
        </section>
        <section>
            <img src={props.picture} alt="" />
        </section>    
        </div>
    )
}