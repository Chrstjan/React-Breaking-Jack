import style from "./Button.module.scss"

export const Button = ({action}) => {
    return (
        <>
            <button onClick={() => action()} className={style.buttonStyling}>Roll</button>
        </>
    )
}