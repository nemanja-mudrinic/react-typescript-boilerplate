import React, { FC, useEffect, useState } from 'react';

import UserCard from '../../../components/user-card/user-card';
import { getQuoteOfDayRequest } from '../../../services/api/quote/quote-service';

const AboutProject: FC = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    (async () => {
      const { data } = await getQuoteOfDayRequest();
      setQuote(data.contents.quotes[0].quote);
    })();
  }, []);

  return (
    <UserCard
      email="mudrinic-nemanja-nucleus@gmail.com"
      name="Nemanja Mudrinic"
      text={quote}
      imageUrl="https://res.cloudinary.com/ddbtfcrrw/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1605218463/IMG_7023_it5vfk.jpg"
    />
  );
};

export default AboutProject;
