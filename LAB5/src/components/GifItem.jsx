export const GifItem = ({title,url,id}) => {
    return (
        <div className='card'>
            <img src={ url } alt={title} />
            <p> {id} - { title}</p>
        </div>
    )
}