import style from '../../styles/Buttons.module.css'

type Props = {
    text: string,
    onClick?: () => void,
    children?: React.ReactNode,
    className?: string
}

function ButtonDanger({text,onClick,className}: Props): JSX.Element {
  return (
    <>
        <button className={`${style.danger} ${className}`} onClick={onClick}>{ text }</button>
    </>
  )
}

export default ButtonDanger