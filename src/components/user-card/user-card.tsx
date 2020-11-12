import React, { FC } from 'react';

interface Props {
  text: string;
  name: string;
  imageUrl: string;
  email: string;
}

const UserCard: FC<Props> = ({ name, email, imageUrl, text }: Props) => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
        style={{ maxWidth: '500px' }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img src={imageUrl} alt="" />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 text-center px-5">{text}</p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
            {name}
          </p>
          <p className="text-xs text-gray-500 text-center">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
