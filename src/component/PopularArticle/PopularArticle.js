import React from "react";
import img1 from "../../assets/blog-img/news-1.jpg";

const PopularArticle = () => {
  return (
    <div className="mid-container mt-10">
      <h1 className="text-3xl font-bold"> Popular Article</h1>
      <p>
        <small>
          Popular articles are selected based on the number of readers .
        </small>
      </p>

      <div className="mt-10">
        <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2  border border-info">
          <figure className="w-full">
            <img className="w-full" src={img1} alt="Album" />
          </figure>
          <div className="p-5 flex items-center">
            <div>
              <p className="text-sm">Jan 24, 2022</p>
              <h1 className="text-2xl font-bold my-2">
                Stimulation Child's Sensory and Motor Development
              </h1>
              <p className="text-sm">
                The objective of this study is to assess the findings of
                selected articles regarding the therapeutic...
              </p>
              <div className="flex gap-5 items-center mt-5">
                <div className="avatar">
                  <div className="lg:w-20 md:w-10 sm:w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold ">Bithika Abhedancada</h2>
                  <p className="text-sm">Study Power CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularArticle;
