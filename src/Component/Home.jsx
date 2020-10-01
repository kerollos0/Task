import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import loadedData from "../redux/reducers/actions/loadedData";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = ({ loadedData, Data }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadedData();
    setData(Data);
  });
  //test
  return (
    <>
      <Navbar />
      <div className="content">
        <h4>الجمعيات الخيريه</h4>
        <div className="container">
          <div className="row">
            {data
              ? data.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="col-lg-4 col-md-4 col-sm-4 col-xm-4"
                    >
                      <div className="card text-center">
                        <img
                          className="card-img-top"
                          src={item.ImageUrl}
                          alt={item.ImageUrl ? "" : ""}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.Name}</h5>
                          <a href="#" className="btn">
                            تبرع الان
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  Data: state.Data,
});

export default connect(mapStateToProps, { loadedData })(Home);
