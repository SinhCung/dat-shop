function Home (){
    return (
        <div>
            <section className="hero">
            <div className="hero-content">
            <h1>Ở đây có quần áo xinh</h1>
            <p>Nơi nàng tìm thấy phong cách</p>
            </div>
        </section>

        <section className="products">

                <h2 className="section-title">Dress</h2>

                <div className="product-grid">

                <div className="card">
                    <img src="/dat-shop/asstes/img/img.png" alt="" />
                    <div className="card-content">
                    <h3>Summer Top</h3>
                    <p className="price">260.000VND</p>
                    </div>
                </div>

                <div className="card">
                    <img src="/dat-shop/asstes/img/img1.png" alt="" />
                    <div className="card-content">
                    <h3>Emma Top</h3>
                    <p className="price">205.000VND</p>
                    </div>
                </div>

                <div className="card">
                    <img src="/dat-shop/asstes/img/img2.png" alt="" />
                    <div className="card-content">
                    <h3>Navie Top</h3>
                    <p className="price">255.000VND</p>
                    </div>
                </div>
            </div>

        </section>

        </div>
    )
};
export default Home;