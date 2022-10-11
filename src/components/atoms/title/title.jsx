import './title.styles.css';

const Title = ({ level, children }) => {
    return (
        <>
            {level === 'h1' && <h1>{children}</h1>}
            {level === 'h2' && <h2>{children}</h2>}
            {level === 'h3' && <h3>{children}</h3>}
        </>
    )
}

export default Title