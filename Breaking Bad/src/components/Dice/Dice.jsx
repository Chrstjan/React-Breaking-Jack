import style from "./Dice.module.scss"

export const Dice = ({diceSide, type}) => {
    return (
        <>
            <span className={`${style.diceStyling} ${style[type]}`}>
                <p>{diceSide}</p>
            </span>
        </>
    )
}