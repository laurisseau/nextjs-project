import { useState } from 'react';
import { usePathnam, useRouter } from 'next/navigation';
import Image from 'next/image';

const PromptCard = ({ post, handleTagClick }) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src="/assets/images/logo.svg"
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              Laurisseau Joseph
            </h3>
            <p className="font-inter text-sm text-gray-500">
              Reso0208@gmail.com
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={() => {}}></div>
      </div>
    </div>
  );
};

export default PromptCard;
