type PropType = {
    color1: string,
    color2: string,
}

function Transition(props: PropType) {
    const { color1, color2 } = props;

    return (
        <div
            style={{
                height: '10rem',
                background: `linear-gradient(180deg, ${color1} 0%, ${color2} 100%)`,
            }}
        />
    )
}

export default Transition;