import style from "./Dice.module.scss"

export const Dice = ({diceSide}) => {
    return (
        <>
            <span className={style.diceStyling}>
                <p>{diceSide}</p>
            </span>
        </>
    )
}