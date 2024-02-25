import React, { useEffect } from "react";
import "./ReadPage.css";
import { useParams } from "react-router-dom";
import { newsData } from "../../data";

const ReadPage = () => {
  const { id } = useParams();
  const product = newsData.find((p) => p.id === +id);
  const { img, title } = product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="readpage">
      <div className="readpage-title">
        <h4>{title}</h4>
        <p>Home / News / {title}</p>
      </div>
      <div className="readpage-body">
        <img src={img} alt="readpage-img" />
        <div className="readpage-body-text">
          <h3>{title}</h3>
          <p>
            Pris sed aliquam nisi quis porttitor congue, elit erat euismod orci,
            ac placerat dolor lectus quis orci. Phasellus consectetuer
            vestibulum elit. Aenean tellus metus, bibendum sed posuere ac mattis
            non nunc.{" "}
          </p>
          <p className="diff-text">
            “Ridiculus mus mauris vitae ultricies leo. Non enim praesent
            elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar
            sapien et ligula ullamcorper malesuada.”
          </p>
          <p>
            Sapien faucibus et molestie ac feugiat sed lectus. Sit amet
            consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu
            felis. A scelerisque purus semper eget duis at tellus at urna. Vitae
            congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie
            ac feugiat.{" "}
          </p>
          <p>
            Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed
            lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus
            eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam
            phasellus vestibulum lorem sed risus. Amet venenatis urna cursus
            eget nunc.
          </p>
          <p>
            Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim
            ut tellus elementum sagittis vitae. Massa sapien faucibus et
            molestie ac feugiat. Tincidunt ornare massa eget egestas purus
            viverra accumsan. Metus aliquam eleifend mi in nulla posuere.{" "}
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ReadPage;
