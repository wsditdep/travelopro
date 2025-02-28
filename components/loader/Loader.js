import Image from 'next/image'
import React from 'react';
import costar_loading from "@/public/costar_assets/logos/logo.png";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <Image
        src={costar_loading}
        alt="logo"
        height={100}
        width={100}
        unoptimized
      />
    </div>
  )
}

export default Loader