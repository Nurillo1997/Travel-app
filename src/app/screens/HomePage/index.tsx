import React, { useState } from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../css/homePage.css';
//Import Components
import TopAgencies from "./topAgencies";
import RecommendedDestinations from "./recommendedDestinations";
import PopularTours from "./popularTours";
import Reviews from "./reviews";


export default function HomePage() {
  return (
    <div className="homePage">
      <TopAgencies/>
      <RecommendedDestinations/>
      <PopularTours/>
      {/* <Reviews/> */}
    </div>
  );
}