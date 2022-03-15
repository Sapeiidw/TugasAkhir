export default interface IButton {
    text: string,
    onClick?: () => void,
    children?: React.ReactNode,
    className?: string
}

