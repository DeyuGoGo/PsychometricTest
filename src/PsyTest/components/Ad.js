import React, { useEffect } from 'react';

function Ad() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-9829418644772076"
      data-ad-slot="7723762876"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default Ad;
