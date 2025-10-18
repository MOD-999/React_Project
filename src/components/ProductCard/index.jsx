import './style.css'

function ProductCard(props) {
    return (
        <div className='product'>
            <img
                src={props.image}
                alt={props.title}
            />
            <h2 className="product-title">{props.title}</h2>
            <p className="product-description">{props.description}</p>
            <button className="read-more">Read More</button>
        </div>
    )
}
export default ProductCard