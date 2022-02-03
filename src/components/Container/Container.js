import style from './style.module.css'

export function Container (props){
    return (
        <div className={style.container}>{props.children}</div>
    )
}