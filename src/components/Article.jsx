
export function Article(props) {
    return (
        <article className="about">
            <h2 className="about__title">{props.title}</h2>
            <p className="about__text">
                {props.text}
            </p>
        </article>
    );
}