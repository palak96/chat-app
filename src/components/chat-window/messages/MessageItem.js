/* eslint-disable arrow-body-style */
import React from 'react';
import TimeAgo from 'timeago-react';
import ProfileAvatar from '../../ProfileAvatar';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';

const MessageItem = ({ message }) => {
  const { author, createdAt, text } = message;

  return (
    <li className="padded mb-1">
      <div className="d-flex align-items-center mb-1 font-bolder">
        <ProfileAvatar
          src={author.avatar}
          name={author.name}
          className="ml-1"
          size="xs"
        />

        <ProfileInfoBtnModal
          profile={author}
          appearance="link"
          className="ml-1 p-0 text-black"
        />
        <TimeAgo
          className="font-normal text-black-45 ml-2"
          datetime={createdAt}
        />
      </div>
      <div>
        <span className="word-break-all">{text}</span>
      </div>
    </li>
  );
};

export default MessageItem;
