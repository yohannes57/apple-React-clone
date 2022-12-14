import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7777/iphones")
      .then((res) => res.json())
      .then((data) => {
        let val = data.product;
        setValues(val);
      });
  }, []);
  console.log(values);
  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {values?.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let productPage = "/iphone/" + id;

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="p">{Brief}</div>
                  <div className="stng-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>

    // <div className="page">
    //   <div className="allVideosWrapper">
    //     <div className="container">
    //       <div className="row h-100 align-items-center justify-content-center text-center">
    //         <div className="col-12">
    //           <div className="title-wraper bold video-title-wrapper">
    //             <h3>iphone 14:</h3>
    //           </div>
    //         </div>

    //         {/* {values.map((value) => {
    //           let url = value.products.product_url;
    //           let img = value.productts.product_img;
    //           let link = value.products.product_link;
    //           let name = value.products.product_name;
    //           let desc_brf = value.products.product_brief_description;
    //           let starting_prc = value.products.starting_price;
    //           let price_rg = value.products.price_range;
    //           let prd_desc = value.products.product_description;
    //           let prod = (
    //             <div className="container">
    //               <div className="row">
    //                 <div className="col-sm-12 col-md-6" key>
    //                   <a href={url}>{img}</a>
    //                 </div>
    //                 <div className="col-sm-12 col-md-6">
    //                   <div>{name}</div>
    //                   <div>{link}</div>
    //                   <h3>{desc_brf}</h3>
    //                   <div>{starting_prc}</div>
    //                   <div>{price_rg}</div>
    //                   <div>{prd_desc}</div>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //           return prod;
    //         })} */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Iphone;
